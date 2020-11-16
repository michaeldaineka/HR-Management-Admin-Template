const CracoLessPlugin = require("craco-less");
const colors = require("./src/theme/primary");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": colors.palette.primary },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
