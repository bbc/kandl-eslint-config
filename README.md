# kandl-eslint-config

Extensible shared [ESLint](http://eslint.org/) v2.* config based on K&L's [Style Guide](https://github.com/bbc/kandl-style-guide).

# Usage

In your repo:

1. `npm install --save-dev git+ssh://git@github.com:bbc/kandl-eslint-config.git eslint@^2.*`
2. Add `"extends": "kandl"` to your `.eslintrc`, e.g. for a new `.eslintrc`:
```
{
    "extends": "kandl"
}
```

## Overriding a rule

Rules can easily be overriden, e.g.

```
{
    "extends": "kandl",
    "rules": {
        "max-len": [2, 82, 4] // max length: 82 chars
    }
}
```

# License

This K&L ESLint Config is licensed under the MIT License and is copyrighted by the BBC except where stated. Please see [LICENSE.md](LICENSE.md) for the full license.
