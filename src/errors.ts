export const enum Errors {
    Unexpected,
    UnexpectedToken,
    BadGetterArity,
    BadSetterArity,
    BadSetterRestParameter,
    NoCatchOrFinally,
    NewlineAfterThrow,
    ParamAfterRest,
    InvalidDuplicateArgs,
    MisingFormal,
    InvalidParameterAfterRest,
    LineBreakAfterAsync,
    LineBreakAfterArrow,
    InvalidParenthesizedPattern,
    UnexpectedStrictReserved,
    StrictFunction,
    InvalidNestedStatement,
    SloppyFunction,
    DisallowedInContext,
    DuplicateProtoProperty,
    ConstructorSpecialMethod,
    StaticPrototype,
    PrivateFieldConstructor,
    ConstructorClassField,
    DuplicateConstructor,
    ForbiddenAsStatement,
    StrictLHSPrefixPostFix,
    InvalidLhsInPrefixPostFixOp,
    StrictDelete,
    StrictLHSAssignment,
    UnicodeOutOfRange,
    TemplateOctalLiteral,
    StrictOctalEscape,
    InvalidEightAndNine,
    InvalidHexEscapeSequence,
    UnterminatedString,
    UnexpectedEscapedKeyword,
    UnexpectedSurrogate,
    InvalidUnicodeEscapeSequence,
    StrictOctalLiteral,
    InvalidRestBindingPattern,
    InvalidRestDefaultValue,
    ElementAfterRest,
    InitializerAfterRest,
    StrictModeWith,
    UnknownLabel,
    Redeclaration,
    InvalidVarDeclInForLoop,
    DeclarationMissingInitializer,
    MissingInitializer,
    LetInLexicalBinding,
    InvalidStrictExpPostion,
    UnexpectedReservedWord,
    InvalidGeneratorParam,
    UnexpectedSuper,
    LoneSuper,
    BadSuperCall,
    NewTargetArrow,
    MetaNotInFunctionBody,
    IllegalReturn,
    InvalidBindingStrictMode,
    InvalidAwaitInArrowParam,
    UnNamedFunctionStmt,
    InvalidLHSInForLoop,
    ForInOfLoopMultiBindings,
    InvalidArrowYieldParam,
    IllegalUseStrict,
    InvalidLHSInAssignment,
    AsyncFunctionInSingleStatementContext,
    ExportDeclAtTopLevel,
    ImportDeclAtTopLevel,
    GeneratorLabel,
    UnterminatedRegExp,
    UnexpectedTokenRegExp,
    UnexpectedNewlineRegExp,
    DuplicateRegExpFlag,
    UnexpectedTokenRegExpFlag,
    UnterminatedComment,
    YieldInParameter,
    InvalidNumericSeparators,
    InvalidBigIntLiteral,
    MissingHexDigits,
    MissingOctalDigits,
    MissingBinaryDigits,
    InvalidModuleSpecifier,
    NoAsAfterImportNamespace,
    MultipleDefaultsInSwitch,
    UnterminatedTemplate,
    InvalidArrowConstructor,
    InvalidDestructuringTarget,
    VariableExists,
    DuplicateParameter,
    UnexpectedStrictEvalOrArguments,
    BadImportCallArity,
    ArgumentsDisallowedInInitializer,
    InvalidCharacter,
    InvalidDecimalWithLeadingZero,
    NonNumberAfterExponentIndicator,
    DuplicatePrivateName,
    InvalidWhitespacePrivateName,
    UnexpectedKeyword,
    NotAssignable,
    NotBindable,
    ComplexAssignment,
    UnexpectedWSRegExp,
    MissingUAfterSlash,
    UndefinedUnicodeCodePoint,
    InvalidOrUnexpectedToken,
    ForInOfLoopInitializer,
    DeletePrivateField,
    InvalidStaticField,
    InvalidPrivateFieldAccess,
    AwaitBindingIdentifier,
    AwaitExpressionFormalParameter,
    UnexpectedLexicalDeclaration
}

export const ErrorMessages: {
    [key: string]: string
} = {
    [Errors.Unexpected]: 'Unexpected token',
    [Errors.UnexpectedToken]: 'Unexpected token %0',
    [Errors.BadGetterArity]: `Getter functions must have no arguments`,
    [Errors.BadSetterArity]: 'Setter function must have exactly one argument',
    [Errors.BadSetterRestParameter]: 'Setter function argument must not be a rest parameter',
    [Errors.NoCatchOrFinally]: 'Missing catch or finally after try',
    [Errors.NewlineAfterThrow]: 'Illegal newline after throw',
    [Errors.ParamAfterRest]: 'Rest parameter must be last formal parameter',
    [Errors.InvalidDuplicateArgs]: 'Duplicate binding %0',
    [Errors.MisingFormal]: 'Missing formal parameter',
    [Errors.InvalidParameterAfterRest]: 'Parameter after rest parameter',
    [Errors.LineBreakAfterAsync]: 'No line break is allowed after async',
    [Errors.LineBreakAfterArrow]: 'No line break is allowed after \'=>\'',
    [Errors.InvalidParenthesizedPattern]: 'Invalid parenthesized pattern',
    [Errors.StrictFunction]: 'In strict mode code, functions can only be declared at top level or inside a block',
    [Errors.SloppyFunction]: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
    [Errors.InvalidNestedStatement]: '%0  statement must be nested within an iteration statement',
    [Errors.DisallowedInContext]: '\'%0\' may not be used as an identifier in this context',
    [Errors.DuplicateProtoProperty]: 'Property name __proto__ appears more than once in object literal',
    [Errors.ConstructorSpecialMethod]: 'Class member named constructor (or \'constructor\') may not be an accessor',
    [Errors.StaticPrototype]: 'Classes may not have static property named prototype',
    [Errors.PrivateFieldConstructor]: 'Classes may not have a private field named \'#constructor\'',
    [Errors.ConstructorClassField]: 'Classes may not have a field named \'constructor\'',
    [Errors.DuplicateConstructor]: 'A class may only have one constructor',
    [Errors.InvalidStaticField]: 'Classes may not have a non-static field named \'%0\'',
    [Errors.ForbiddenAsStatement]: '%0 can\'t appear in single-statement context',
    [Errors.StrictLHSPrefixPostFix]: '%0 increment/decrement may not have eval or arguments operand in strict mode',
    [Errors.InvalidLhsInPrefixPostFixOp]: 'Invalid left-hand side expression in %0 operation',
    [Errors.StrictDelete]: 'Identifier expressions must not be deleted in strict mode',
    [Errors.StrictLHSAssignment]: 'Eval or arguments can\'t be assigned to in strict mode code',
    [Errors.UnicodeOutOfRange]: 'Unicode escape code point out of range',
    [Errors.StrictOctalEscape]: 'Octal escapes are not allowed in strict mode',
    [Errors.InvalidEightAndNine]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
    [Errors.TemplateOctalLiteral]: 'Template literals may not contain octal escape sequences',
    [Errors.InvalidHexEscapeSequence]: 'Invalid hexadecimal escape sequence',
    [Errors.UnterminatedString]: 'Unterminated string literal',
    [Errors.UnexpectedEscapedKeyword]: 'Unexpected escaped keyword',
    [Errors.InvalidUnicodeEscapeSequence]: 'Invalid Unicode escape sequence',
    [Errors.MissingUAfterSlash]: '\'u\' was expected after \\',
    [Errors.UnexpectedSurrogate]: 'Unexpected surrogate pair',
    [Errors.StrictOctalLiteral]: 'Legacy octal literals are not allowed in strict mode',
    [Errors.InvalidRestBindingPattern]: '`...` must be followed by an identifier in declaration contexts',
    [Errors.InvalidRestDefaultValue]: 'Rest elements cannot have a default value',
    [Errors.ElementAfterRest]: 'Rest elements cannot have a default value',
    [Errors.InitializerAfterRest]: 'Rest elements cannot have a initializer',
    [Errors.StrictModeWith]: 'Strict mode code may not include a with statement',
    [Errors.Redeclaration]: 'Label \'%0\' has already been declared',
    [Errors.InvalidVarDeclInForLoop]: 'Invalid variable declaration in for-%0 statement',
    [Errors.DeclarationMissingInitializer]: 'Missing initializer in %0 declaration',
    [Errors.LetInLexicalBinding]: 'let is disallowed as a lexically bound name',
    [Errors.InvalidStrictExpPostion]: 'The identifier \'%0\' must not be in expression position in strict mode',
    [Errors.UnexpectedReservedWord]: 'Unexpected reserved word',
    [Errors.InvalidGeneratorParam]: 'Generator parameters must not contain yield expressions',
    [Errors.UnexpectedSuper]: 'Member access from super not allowed in this context',
    [Errors.BadSuperCall]: 'super() is not allowed in this context',
    [Errors.NewTargetArrow]: 'new.target must be within function (but not arrow expression) code',
    [Errors.MetaNotInFunctionBody]: 'new.target only allowed within functions',
    [Errors.IllegalReturn]: 'Illegal return statement',
    [Errors.InvalidBindingStrictMode]: 'The identifier \'%0\' must not be in binding position in strict mode',
    [Errors.InvalidAwaitInArrowParam]: '\'await\' is not a valid identifier name in an async function',
    [Errors.UnNamedFunctionStmt]: 'Function declaration must have a name in this context',
    [Errors.InvalidLHSInForLoop]: 'Invalid left-hand side in for-loop',
    [Errors.ForInOfLoopMultiBindings]: 'Invalid left-hand side in for-%0 loop: Must have a single binding.',
    [Errors.InvalidArrowYieldParam]: 'Arrow parameters must not contain yield expressions',
    [Errors.IllegalUseStrict]: 'Illegal \'use strict\' directive in function with non-simple parameter list',
    [Errors.InvalidLHSInAssignment]: 'Invalid left-hand side in assignment',
    [Errors.AsyncFunctionInSingleStatementContext]: 'Async functions can only be declared at the top level or inside a block',
    [Errors.ExportDeclAtTopLevel]: 'Export declarations may only appear at top level of a module',
    [Errors.ImportDeclAtTopLevel]: 'Import declarations may only appear at top level of a module',
    [Errors.UnknownLabel]: 'Undefined label \'%0\'',
    [Errors.GeneratorLabel]: 'Generator functions cannot be labelled',
    [Errors.DuplicateRegExpFlag]: 'Duplicate regular expression flag %0',
    [Errors.UnexpectedNewlineRegExp]: 'Regular expressions can not contain escaped newlines',
    [Errors.UnexpectedTokenRegExp]: 'Unexpected regular expression',
    [Errors.UnexpectedTokenRegExpFlag]: 'Unexpected regular expression flag',
    [Errors.UnterminatedRegExp]: 'Unterminated regular expression literal -- a / was expected',
    [Errors.UnterminatedComment]: 'Unterminated MultiLineComment',
    [Errors.YieldInParameter]: 'Yield expression not allowed in formal parameter',
    [Errors.InvalidNumericSeparators]: 'Numeric separators are not allowed here',
    [Errors.InvalidBigIntLiteral]: 'Invalid BigIntLiteral',
    [Errors.MissingBinaryDigits]: 'Missing binary digits after \'0b\'',
    [Errors.MissingOctalDigits]: 'Missing octal digits after \'0o\'',
    [Errors.MissingHexDigits]: 'Missing hexadecimal digits after \'0x\'',
    [Errors.InvalidModuleSpecifier]: 'Invalid module specifier',
    [Errors.NoAsAfterImportNamespace]: 'Missing \'as\' keyword after import namespace',
    [Errors.MultipleDefaultsInSwitch]: 'More than one default clause in switch statement',
    [Errors.UnterminatedTemplate]: 'Unterminated template literal',
    [Errors.InvalidArrowConstructor]: 'Arrow functions cannot be used as constructors',
    [Errors.InvalidDestructuringTarget]: 'Invalid destructuring assignment target',
    [Errors.VariableExists]: 'Identifier \'%0\' has already been declared!',
    [Errors.DuplicateParameter]: 'Duplicate parameter \'%0\'',
    [Errors.UnexpectedStrictReserved]: 'Unexpected strict mode reserved word',
    [Errors.UnexpectedStrictEvalOrArguments]: 'Unexpected eval or arguments in strict mode',
    [Errors.BadImportCallArity]: 'Dynamic import must have one specifier as an argument',
    [Errors.ArgumentsDisallowedInInitializer]: '\'%0\' is not allowed in class field initializer',
    [Errors.InvalidCharacter]: 'Invalid character \'%0\'',
    [Errors.InvalidDecimalWithLeadingZero]: 'Decimal integer literals with a leading zero are forbidden in strict mode',
    [Errors.NonNumberAfterExponentIndicator]: 'Invalid non-number after exponent indicator',
    [Errors.DuplicatePrivateName]: 'Duplicate private name',
    [Errors.InvalidWhitespacePrivateName]: 'Invalid whitespace after  \'#\'',
    [Errors.UnexpectedKeyword]: 'Unexpected keyword \'%0\'',
    [Errors.NotAssignable]: '\'%0\' is not a valid assignment left hand side',
    [Errors.NotBindable]: '\'%0\' can not be treated as an actual binding pattern',
    [Errors.ComplexAssignment]: 'A \'=\' was expected',
    [Errors.UnexpectedWSRegExp]: 'Regular expressions can not contain whitespace',
    [Errors.LoneSuper]: 'Only "(" or "." or "[" are allowed after \'super\'',
    [Errors.UndefinedUnicodeCodePoint]: 'Undefined Unicode code-point',
    [Errors.InvalidOrUnexpectedToken]: 'Invalid or unexpected token',
    [Errors.ForInOfLoopInitializer]: '\'for-%0\' loop variable declaration may not have an initializer',
    [Errors.DeletePrivateField]: 'Private fields can not be deleted',
    [Errors.InvalidPrivateFieldAccess]: 'Invalid private field \'%0\'',
    [Errors.AwaitBindingIdentifier]: '\'await\' is not a valid identifier name in an async function',
    [Errors.AwaitExpressionFormalParameter]: 'Illegal await-expression in formal parameters of async function',
    [Errors.UnexpectedLexicalDeclaration]: 'Lexical declaration cannot appear in a single-statement context',
};

function constructError(msg: string, column: number): Error {
    let error: Error = new Error(msg);
    try {
        throw error;
    } catch (base) {
        // istanbul ignore else
        if (Object.create && Object.defineProperty) {
            error = Object.create(base);
            Object.defineProperty(error, 'column', {
                enumerable: true,
                writable: true,
                value: column
            });
        }
    }
    // istanbul ignore next
    return error;
}

export function createError(type: Errors, index: number, line: number, column: number, loc: any, ...params: string[]): any {
    if (loc) {
        index = loc.index;
        line = loc.line;
        column = loc.column;
    }
    const description = ErrorMessages[type].replace(/%(\d+)/g, (_: string, i: number) => params[i]);
    const error: any = constructError(description + ' at ' + ':' + line + ':' + column, column);
    error.index = index;
    error.lineNumber = line;
    error.description = description;
    return error;
}