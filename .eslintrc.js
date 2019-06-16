/* eslint-disable */
//--> Это node.js, тут свои правила...
const path = require("path");

module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "process": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "babel",
    "css-modules",
    "filenames",
    "import",
    "promise",
    "react",
    "sort-class-members",
    "sort-imports-es6-autofix",
    "unicorn"
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "webpack": {
        "config": {
          "resolve": {
            "extensions": [
              ".jsx",
              ".js",
              ".tsx",
              ".ts"
            ],
            "modules": [
              "src",
              "node_modules"
            ]
          }
        }
      }
    },
    "css-modules": {
      "basePath": "src"
    }
  },
  "rules": {
    "accessor-pairs": "warn",
    "array-bracket-newline": [
      "warn",
      "consistent"
    ],
    "array-bracket-spacing": [
      "warn",
      "never"
    ],
    "array-callback-return": "warn",
    "array-element-newline": [
      "warn",
      "consistent"
    ],
    "arrow-parens": [
      "warn",
      "always"
    ],
    "arrow-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "babel/semi": "warn",
    "block-scoped-var": "warn",
    "block-spacing": [
      "warn",
      "always"
    ],
    "brace-style": [
      "warn",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      "warn",
      "never"
    ],
    "comma-spacing": [
      "warn",
      {
        "after": true
      }
    ],
    "comma-style": [
      "warn",
      "last"
    ],
    "computed-property-spacing": [
      "warn",
      "never"
    ],
    "consistent-return": "warn",
    "consistent-this": [
      "warn",
      "self"
    ],
    "constructor-super": "warn",
    "css-modules/no-undef-class": "warn",
    "dot-location": [
      "warn",
      "property"
    ],
    "dot-notation": "warn",
    "eol-last": "warn",
    "eqeqeq": [
      "warn",
      "always"
    ],
    "filenames/match-exported": [
      "warn",
      null,
      null,
      true
    ],
    "filenames/match-regex": [
      "warn",
      "^[a-z]*([A-Z][a-z]+)*[A-Z]?$"
    ],
    "for-direction": "warn",
    "func-call-spacing": [
      "warn",
      "never"
    ],
    "func-names": [
      "warn",
      "never"
    ],
    "function-paren-newline": [
      "warn",
      "consistent"
    ],
    "func-style":
    [
      "warn",
      "expression"
    ],
    "generator-star-spacing": [
      "warn",
      "after"
    ],
    "getter-return": "warn",
    "guard-for-in": "warn",
    "id-match": [
      "warn",
      "^(([A-Z]?[a-z]+)+[A-Z]?|[A-Z](_?[A-Z])+[A-Z])$"
    ],
    "id-length": [
      "warn",
      {
        "exceptions": [
          "a",
          "b",
          "c"
        ],
        "min": 2,
        "properties": "never",
      }
    ],
    "import/default": "warn",
    "import/exports-last": "warn",
    "import/first": "warn",
    "import/named": "warn",
    "import/namespace": "warn",
    "import/newline-after-import": "warn",
    "import/no-absolute-path": "warn",
    "import/no-cycle": "warn",
    "import/no-mutable-exports": "warn",
    "import/no-nodejs-modules": "warn",
    "import/no-self-import": "warn",
    "import/no-unresolved": [
      "warn",
      {
        "caseSensitive": false
      }
    ],
    "import/no-useless-path-segments": "warn",
    "import/prefer-default-export": "warn",
    "import/unambiguous": "warn",
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-quotes": "warn",
    "key-spacing": [
      "warn",
      {
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "warn",
      {
        "after": true
      }
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "lines-between-class-members": [
      "warn",
      "always"
    ],
    "max-classes-per-file": [
      "warn",
      1
    ],
    "max-depth": [
      "warn",
      5
    ],
    "max-len": [
      "warn",
      {
        "code": 130
      }
    ],
    "max-nested-callbacks": [
      "warn",
      5
    ],
    "new-cap": [
      "warn",
      {
        "newIsCap": true
      }
    ],
    "no-alert": "warn",
    "no-array-constructor": "warn",
    "no-async-promise-executor": "warn",
    "no-await-in-loop": "warn",
    "no-caller": "warn",
    "no-case-declarations": "warn",
    "no-catch-shadow": "warn",
    "no-class-assign": "warn",
    "no-compare-neg-zero": "warn",
    "no-cond-assign": [
      "warn",
      "always"
    ],
    "no-console": "warn",
    "no-const-assign": "warn",
    "no-constant-condition": "warn",
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-delete-var": "warn",
    "no-div-regex": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-duplicate-imports": "warn",
    "no-else-return": "warn",
    "no-empty": "warn",
    "no-empty-character-class": "warn",
    "no-empty-function": "warn",
    "no-empty-pattern": "warn",
    "no-eq-null": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-label": "warn",
    "no-extra-semi": "warn",
    "no-fallthrough": "warn",
    "no-floating-decimal": "warn",
    "no-func-assign": "warn",
    "no-global-assign": "warn",
    "no-implicit-globals": "warn",
    "no-implied-eval": "warn",
    "no-inner-declarations": "warn",
    "no-invalid-regexp": "warn",
    "no-invalid-this": "warn",
    "no-irregular-whitespace": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-lonely-if": "warn",
    "no-loop-func": "warn",
    "no-magic-numbers": [
      "warn",
      {
        "detectObjects": true,
        "ignore": [
          -1,
          0,
          1
        ]
      }
    ],
    "no-misleading-character-class": "warn",
    "no-mixed-operators": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 1
      }
    ],
    "no-native-reassign": "warn",
    "no-negated-condition": "warn",
    "no-negated-in-lhs": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-proto": "warn",
    "no-redeclare": "warn",
    "no-regex-spaces": "warn",
    "no-return-assign": "warn",
    "no-return-await": "warn",
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow": [
      "warn",
      {
        "hoist": "all"
      }
    ],
    "no-shadow-restricted-names": "warn",
    "no-spaced-func": "warn",
    "no-sparse-arrays": "warn",
    "no-tabs": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-trailing-spaces": [
      "warn",
      {
        "skipBlankLines": true
      }
    ],
    "no-undef": "warn",
    "no-underscore-dangle": "warn",
    "no-unexpected-multiline": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unneeded-ternary": "warn",
    "no-unreachable": "warn",
    "no-unsafe-finally": "warn",
    "no-unsafe-negation": "warn",
    "no-unused-expressions": "warn",
    "no-unused-labels": "warn",
    "no-unused-vars": [
      "warn",
      {
        "ignoreRestSiblings": true,
        "caughtErrors": "none"
      }
    ],
    "no-use-before-define": "warn",
    "no-useless-call": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-var": "warn",
    "no-void": "warn",
    "no-whitespace-before-property": "warn",
    "no-with": "warn",
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-shorthand": [
      "warn",
      "always"
    ],
    "one-var": [
      "warn",
      "never"
    ],
    "one-var-declaration-per-line": [
      "warn",
      "always"
    ],
    "operator-assignment": [
      "warn",
      "always"
    ],
    "operator-linebreak": [
      "warn",
      "before"
    ],
    "padded-blocks": [
      "warn",
      "never"
    ],
    "prefer-arrow-callback": "warn",
    "prefer-const": [
      "warn",
      {
        "destructuring": "all"
      }
    ],
    "prefer-destructuring": [
      "warn",
      {
        "array": true,
        "object": true
      }
    ],
    "prefer-numeric-literals": "warn",
    "prefer-object-spread": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/no-new-statics": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-return-in-finally": "warn",
    "promise/no-return-wrap": "warn",
    "promise/param-names": "warn",
    "promise/valid-params": "warn",
    "quote-props": [
      "warn",
      "as-needed"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "radix": "warn",
    "react/jsx-boolean-value": "warn",
    "react/jsx-closing-bracket-location": [
      "warn",
      "after-props"
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      "never"
    ],
    "react/jsx-curly-spacing": [
      "warn",
      {
        "allowMultiline": false,
        "children": true,
        "when": "never"
      }
    ],
    "react/jsx-equals-spacing": [
      "warn",
      "never"
    ],
    "react/jsx-filename-extension": "warn",
    "react/jsx-first-prop-new-line": [
      "warn",
      "multiline"
    ],
    "react/jsx-handler-names": [
      "warn",
      {
        "eventHandlerPrefix": "handle",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/jsx-key": "warn",
    "react/jsx-max-depth": [
      "warn",
      {
        "max": 5
      }
    ],
    "react/jsx-no-bind": "warn",
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-undef": "warn",
    "react/jsx-tag-spacing": [
      "warn",
      {
        "beforeSelfClosing": "always"
      }
    ],
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/jsx-wrap-multilines": [
      "warn",
      {
        "assignment": "ignore",
        "declaration": "ignore",
        "return": "parens-new-line"
      }
    ],
    "react/no-access-state-in-setstate": "warn",
    "react/no-array-index-key": "warn",
    "react/no-children-prop": "warn",
    "react/no-deprecated": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-find-dom-node": "warn",
    "react/no-is-mounted": "warn",
    "react/no-multi-comp": "warn",
    "react/no-redundant-should-component-update": "warn",
    "react/no-render-return-value": "warn",
    "react/no-string-refs": "warn",
    "react/no-this-in-sfc": "warn",
    "react/no-typos": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-unknown-property": "warn",
    "react/no-unsafe": "warn",
    "react/no-will-update-set-state": "warn",
    "react/prop-types": [
      "warn",
      {
        "skipUndeclared": true
      }
    ],
    "react/react-in-jsx-scope": "warn",
    "react/self-closing-comp": "warn",
    "react/style-prop-object": "warn",
    "react/void-dom-elements-no-children": "warn",
    "require-atomic-updates": "warn",
    "require-await": "warn",
    "require-yield": "warn",
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "semi-spacing": "warn",
    "semi-style": [
      "warn",
      "last"
    ],
    "sort-imports-es6-autofix/sort-imports-es6": [
      "warn",
      {
        "ignoreCase": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ]
      }
    ],
    "sort-class-members/sort-class-members": [
      "warn",
      {
        "order": [
          "[static-properties]",
          "[static-init-methods]",
          "[static-get-methods]",
          "[static-set-methods]",
          "[static-methods]",
          "[private-properties]",
          "[properties]",
          "constructor",
          "[getters]",
          "[setters]",
          "[get-methods]",
          "[set-methods]",
          "[init-methods]",
          "[render-methods]",
          "[methods]",
          "[react-lifecycle-methods]",
          "[event-handlers]"
        ],
        "groups": {
          "static-init-methods": [
            {
              "name": "/^init.*$/",
              "type": "method",
              "static": true
            }
          ],
          "static-get-methods": [
            {
              "name": "/^get.*$/",
              "type": "method",
              "static": true
            }
          ],
          "static-set-methods": [
            {
              "name": "/^set.*$/",
              "type": "method",
              "static": true
            }
          ],
          "private-properties": [
            {
              "name": "/undefined/",
              "type": "method"
            }
          ],
          "init-methods": [
            {
              "name": "/^init.*$/",
              "type": "method",
              "static": false
            }
          ],
          "get-methods": [
            {
              "name": "/^get.*$/",
              "type": "method",
              "static": false
            }
          ],
          "set-methods": [
            {
              "name": "/^set.*$/",
              "type": "method",
              "static": false
            }
          ],
          "render-methods": [
            {
              "name": "/^render.*$/",
              "type": "method",
              "static": false
            }
          ],
          "react-lifecycle-methods": [
            {
              "name": "/^(componentDidMount|componentDidUpdate|componentDidCatch|componentWillUnmount)$/",
              "type": "method",
              "static": false
            }
          ],
          "event-handlers": [
            {
              "name": "/^handle.+/",
              "type": "method",
              "static": false
            }
          ],
        }
      }
    ],
    "space-before-blocks": [
      "warn",
      "always"
    ],
    "space-before-function-paren": [
      "warn",
      "never"
    ],
    "space-in-parens": [
      "warn",
      "never"
    ],
    "space-infix-ops": "warn",
    "space-unary-ops": [
      "warn",
      {
        "words": true
      }
    ],
    "switch-colon-spacing": [
      "warn",
      {
        "after": true,
        "before": false
      }
    ],
    "template-curly-spacing": [
      "warn",
      "never"
    ],
    "template-tag-spacing": [
      "warn",
      "always"
    ],
    "unicode-bom": [
      "warn",
      "never"
    ],
    "unicorn/custom-error-definition": "warn",
    "unicorn/error-message": "warn",
    "unicorn/escape-case": "warn",
    "unicorn/new-for-builtins": "warn",
    "unicorn/no-array-instanceof": "warn",
    "unicorn/no-fn-reference-in-iterator": "warn",
    "unicorn/no-for-loop": "warn",
    "unicorn/no-hex-escape": "warn",
    "unicorn/no-new-buffer": "warn",
    "unicorn/no-zero-fractions": "warn",
    "unicorn/number-literal-case": "warn",
    "unicorn/prefer-add-event-listener": "warn",
    "unicorn/prefer-includes": "warn",
    "unicorn/prefer-spread": "warn",
    "unicorn/prefer-starts-ends-with": "warn",
    "unicorn/prefer-type-error": "warn",
    "unicorn/regex-shorthand": "warn",
    "unicorn/throw-new-error": "warn",
    "use-isnan": "warn",
    "valid-jsdoc": "warn",
    "valid-typeof": "warn",
    "vars-on-top": "warn",
    "wrap-iife": [
      "warn",
      "any"
    ],
    "yield-star-spacing": [
      "warn",
      "after"
    ],
    "yoda": [
      "warn",
      "never"
    ]
  }
};
