const CracoLessPlugin = require("craco-less");

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
  ],
};
