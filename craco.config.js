/* eslint-disable */
//--> Это node.js, тут свои правила...
const { ESLINT_MODES } = require("@craco/craco");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const StyleLintPlugin = require("stylelint-webpack-plugin");
const os = require("os");
const path = require("path");

module.exports = ({ env }) => {
  return {
    "eslint": {
      "mode": ESLINT_MODES.file
    },
    "webpack": {
      "plugins": [
        new StyleLintPlugin(),
        new BundleAnalyzerPlugin({
          "analyzerMode": env === "production" ? "static" : "disabled",
          "reportFilename": path.resolve(os.tmpdir(), `wpBundleReport_${Date.now()}.html`)
        })
      ]
    },
    "style": {
      "modules": {
        "localIdentName": "[local]__[hash:base64:5]"
      },
      "css": {
        "loaderOptions": {
          "url": false
        }
      },
      "sass": {
        "loaderOptions": {
          "includePaths": [
            "src"
          ]
        }
      }
    },
    "babel": {
      "plugins": [
        [
          "@babel/proposal-decorators",
          {
            "legacy": true
          }
        ],
        [
          "@babel/proposal-class-properties",
          {
            "loose": true
          }
        ]
      ]
    }
  };
};
