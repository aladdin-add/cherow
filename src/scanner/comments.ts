import { Chars } from '../chars';
import { Token } from '../token';
import { Context, Flags } from '../common';
import { ParserState } from '../common';
import { report, Errors } from '../errors';
import { consumeOpt, advanceNewline, consumeLineFeed, consumeAny, Type } from './common';

export const enum CommentType {
  Single,
  Multi,
  HTMLOpen,
  HTMLClose,
  HashBang
}

export const CommentTypes = ['SingleLine', 'MultiLine', 'HTMLOpen', 'HTMLClose', 'HashbangComment'];

// https://tc39.github.io/proposal-hashbang/out.html
export function skipHashBang(state: ParserState, context: Context) {
  let index = state.index;
  if (index === state.source.length) return;
  if (state.source.charCodeAt(index) === Chars.ByteOrderMark) {
    index++;
    state.index = index;
  }

  if (context & Context.OptionsNext && index < state.source.length && state.source.charCodeAt(index) === Chars.Hash) {
    index++;
    if (index < state.source.length && state.source.charCodeAt(index) === Chars.Exclamation) {
      state.index = index + 1;
      skipSingleLineComment(state, CommentType.HashBang);
    } else {
      report(state, Errors.Unexpected);
    }
  }
}

/**
 * Skips SingleLineComment, SingleLineHTMLCloseComment and SingleLineHTMLOpenComment
 *
 *  @see [Link](https://tc39.github.io/ecma262/#prod-SingleLineComment)
 *  @see [Link](https://tc39.github.io/ecma262/#prod-annexB-SingleLineHTMLOpenComment)
 *  @see [Link](https://tc39.github.io/ecma262/#prod-annexB-SingleLineHTMLCloseComment)
 *
 * @param state Parser object
 * @param returnToken Token to be returned
 */
export function skipSingleLineComment(state: ParserState, type: CommentType): Token {
  const { index: start } = state;
  loop: while (state.index < state.length) {
    switch (state.source.charCodeAt(state.index)) {
      case Chars.CarriageReturn:
        advanceNewline(state);
        if (state.index < state.length && state.source.charCodeAt(state.index) === Chars.LineFeed) state.index++;
        state.flags | Flags.NewLine;
        break loop;
      case Chars.LineFeed:
      case Chars.LineSeparator:
      case Chars.ParagraphSeparator:
        advanceNewline(state);
        state.flags | Flags.NewLine;
        break loop;

      default:
        consumeAny(state);
    }
  }
  if (state.onComment)
    state.onComment(CommentTypes[type & 0xff], state.source.slice(start, state.index), start, state.index);
  return Token.WhiteSpace;
}

export function skipBlockComment(state: ParserState): Token {
  const { index: start } = state;
  while (state.index < state.length) {
    switch (state.source.charCodeAt(state.index)) {
      case Chars.Asterisk:
        state.index++;
        state.column++;
        state.flags &= ~Flags.LastIsCR;
        if (consumeOpt(state, Chars.Slash)) {
          if (state.onComment)
            state.onComment(
              CommentTypes[CommentType.Multi & 0xff],
              state.source.slice(start, state.index - 2),
              start,
              state.index
            );
          return Token.WhiteSpace;
        }
        break;

      case Chars.CarriageReturn:
        state.flags |= Flags.NewLine | Flags.LastIsCR;
        advanceNewline(state);
        break;

      case Chars.LineFeed:
        consumeLineFeed(state, (state.flags & Flags.LastIsCR) !== 0);
        state.flags = (state.flags & ~Flags.LastIsCR) | Flags.NewLine;
        break;

      case Chars.LineSeparator:
      case Chars.ParagraphSeparator:
        state.flags = (state.flags & ~Flags.LastIsCR) | Flags.NewLine;
        advanceNewline(state);
        break;

      default:
        state.flags &= ~Flags.LastIsCR;
        consumeAny(state);
    }
  }

  return report(state, Errors.UnterminatedComment);
}
