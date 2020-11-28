const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;

          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: isProd ? "[hash:base64]" : "[path][name]__[local]--[hash:base64:5]",
          },
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      }
    },
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./src",
        aliases: {
          "images": "./images",
          "components": "./components",
          "pages": "./pages",
          "styles": "./styles",
          "actions": "./actions",
          "reducers": "./reducers"
        }
      }
    }
  ],
};
