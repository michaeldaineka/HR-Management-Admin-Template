const CracoLessPlugin = require("craco-less");
import colors from "./src/theme/primary";

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
