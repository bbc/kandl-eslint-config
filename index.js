module.exports = {
    "rules": {
        "camelcase": 2, // Force all variable names to use camelCase
        "eol-last": 2, // Force single newline at eof,
        "eqeqeq": 2, // Force === and !==
        "indent": [2, 4, { "SwitchCase": 1 }], // 4 spaces, force indentation in switch statements
        "linebreak-style": [2, "unix"],
        "max-len": [2, 100, 4], // max length: 100 chars,
        "new-cap": 2, // Require capitalized names for constructor functions
        "no-trailing-spaces": 2, // Prohibit trailing whitespace
        "no-undef-init": 2, // Force defining variables before use
        "no-unused-vars": 2, // Prohibit variables which are defined but never used
        "quotes": [2, "single"], // Force single quotes
        "semi": [2, "always"], // Require semicolons
        "keyword-spacing": 2, // Force spaces after keywords
        "space-before-blocks": [2, "always"], // Force space before blocks,
        "space-before-function-paren": [2, "always"], // Force space before function parenthesis
        "space-infix-ops": [2, {"int32Hint": false}], // Force space around infix operators (e.g. 'x + y', not 'x+y')
        "spaced-comment": [2, "always"], // Force space before comments
        "strict": [2, "global"] // Force 'use strict' directive at beginning of script
    },
    "env": {
        "node": true,
        "mocha": true,
        "es6": true
    },
    "extends": "eslint:recommended"
}
