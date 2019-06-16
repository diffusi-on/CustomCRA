/* eslint-disable */
//--> Это node.js, тут свои правила...
const fs = require("fs");
const path = require("path");

const unsupportedBrowserFeaturesIgnoreList = [
  "css-appearance",
  "css-gradients",
  "css-filters",
  "border-image",
  "user-select-none",
  "text-size-adjust",
  "word-break",
  "flexbox"
]
const browsersList = JSON.parse(fs.readFileSync(path.resolve(__dirname, "package.json"), "utf8")).browserslist;
const namePattern = "^[a-z]+([A-Z][a-z]+)*[A-Z]?$";

module.exports = {
  "defaultSeverity": "warning",
  "plugins": [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-high-performance-animation",
    "stylelint-no-unsupported-browser-features"
  ],
  "rules": {
    "order/order": [
      "dollar-variables",
      "at-rules",
      "custom-properties",
      "declarations",
      "rules"
    ],
    "order/properties-order": [
      {
        "properties": [
          "appearance"
        ]
      },
      {
        "properties": [
          "content",
          "quotes"
        ]
      },
      {
        "properties": [
          "display",
          "visibility"
        ]
      },
      {
        "properties": [
          "position",
          "z-index",
          "top",
          "right",
          "bottom",
          "left"
        ]
      },
      {
        "properties": [
          "box-sizing"
        ]
      },
      {
        "properties": [
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "align-content",
          "align-items",
          "align-self",
          "justify-content",
          "order"
        ]
      },
      {
        "properties": [
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height"
        ]
      },
      {
        "properties": [
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left"
        ]
      },
      {
        "properties": [
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left"
        ]
      },
      {
        "properties": [
          "float",
          "clear"
        ]
      },
      {
        "properties": [
          "overflow",
          "overflow-x",
          "overflow-y"
        ]
      },
      {
        "properties": [
          "clip",
          "zoom"
        ]
      },
      {
        "properties": [
          "columns",
          "column-gap",
          "column-fill",
          "column-rule",
          "column-span",
          "column-count",
          "column-width"
        ]
      },
      {
        "properties": [
          "table-layout",
          "empty-cells",
          "caption-side",
          "border-spacing",
          "border-collapse",
          "list-style",
          "list-style-position",
          "list-style-type",
          "list-style-image"
        ]
      },
      {
        "properties": [
          "transform",
          "transform-origin",
          "transform-style",
          "backface-visibility",
          "perspective",
          "perspective-origin"
        ]
      },
      {
        "properties": [
          "transition",
          "transition-property",
          "transition-duration",
          "transition-timing-function",
          "transition-delay"
        ]
      },
      {
        "properties": [
          "animation",
          "animation-name",
          "animation-duration",
          "animation-play-state",
          "animation-timing-function",
          "animation-delay",
          "animation-iteration-count",
          "animation-direction"
        ]
      },
      {
        "properties": [
          "border",
          "border-top",
          "border-right",
          "border-bottom",
          "border-left",
          "border-width",
          "border-top-width",
          "border-right-width",
          "border-bottom-width",
          "border-left-width"
        ]
      },
      {
        "properties": [
          "border-style",
          "border-top-style",
          "border-right-style",
          "border-bottom-style",
          "border-left-style"
        ]
      },
      {
        "properties": [
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-left-radius",
          "border-bottom-right-radius"
        ]
      },
      {
        "properties": [
          "border-color",
          "border-top-color",
          "border-right-color",
          "border-bottom-color",
          "border-left-color"
        ]
      },
      {
        "properties": [
          "border-image"
        ]
      },
      {
        "properties": [
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width"
        ]
      },
      {
        "properties": [
          "stroke-width",
          "stroke-linecap",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke"
        ]
      },
      {
        "properties": [
          "opacity"
        ]
      },
      {
        "properties": [
          "background",
          "background-color",
          "background-image",
          "background-repeat",
          "background-position",
          "background-size",
          "box-shadow",
          "fill"
        ]
      },
      {
        "properties": [
          "filter"
        ]
      },
      {
        "properties": [
          "color"
        ]
      },
      {
        "properties": [
          "font",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-effect",
          "font-style",
          "font-variant",
          "font-weight"
        ]
      },
      {
        "properties": [
          "font-emphasize",
          "font-emphasize-position",
          "font-emphasize-style"
        ]
      },
      {
        "properties": [
          "letter-spacing",
          "line-height",
          "list-style",
          "word-spacing"
        ]
      },
      {
        "properties": [
          "text-align",
          "text-align-last",
          "text-decoration",
          "text-indent",
          "text-justify",
          "text-overflow",
          "text-overflow-ellipsis",
          "text-overflow-mode",
          "text-rendering",
          "text-outline",
          "text-shadow",
          "text-transform",
          "text-wrap",
          "word-wrap",
          "word-break"
        ]
      },
      {
        "properties": [
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-style",
          "text-emphasis-position"
        ]
      },
      {
        "properties": [
          "vertical-align",
          "white-space",
          "word-spacing",
          "hyphens"
        ]
      },
      {
        "properties": [
          "src"
        ]
      },
      {
        "properties": [
          "tab-size",
          "counter-reset",
          "counter-increment",
          "resize",
          "cursor",
          "pointer-events",
          "speak",
          "user-select",
          "nav-index",
          "nav-up",
          "nav-right",
          "nav-down",
          "nav-left"
        ]
      }
    ],
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-low-performance-animation-properties": true,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        "browsers": browsersList,
        "ignore": unsupportedBrowserFeaturesIgnoreList
      }
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        "except": [
          "blockless-after-same-name-blockless",
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "comment-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "stylelint-commands"
        ]
      }
    ],
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": [
      "always",
      {
        "except": [
          "after-custom-property",
          "first-nested"
        ],
        "ignore": [
          "after-comment",
          "inside-single-line-block"
        ]
      }
    ],
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "named-where-possible",
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "never",
    "function-whitespace-after": "always",
    "indentation": 2,
    "length-zero-no-unit": true,
    "linebreaks": "unix",
    "max-empty-lines": 1,
    "max-nesting-depth": 5,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-empty-first-line": true,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": [
          "composes"
        ]
      }
    ],
    "property-no-vendor-prefix": true,
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-named-arguments": "never",
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-function-pattern": namePattern,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-named-arguments": "never",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-mixin-pattern": namePattern,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": namePattern,
    "scss/no-duplicate-dollar-variables": true,
    "scss/operator-no-unspaced": true,
    "scss/percent-placeholder-pattern": namePattern,
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "never",
    "selector-class-pattern": namePattern,
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-id-pattern": namePattern,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-empty-lines": 0,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "local",
          "global"
        ]
      }
    ],
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "string-quotes": "double",
    "unit-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true
  }
};
