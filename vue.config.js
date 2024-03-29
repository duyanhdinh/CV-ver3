const path = require("path");
module.exports = {
  publicPath: '/CV-ver3/',
  configureWebpack: {
    resolve: {
      alias: {
        "js@": path.resolve(__dirname, "src/assets/js"),
        "i@": path.resolve(__dirname, "src/assets/images"),
        "~@": path.resolve(__dirname, "src/components"),
        "x@": path.resolve(__dirname, "src/store"),
      },
    },
  },
};
