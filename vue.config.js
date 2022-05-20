const production = process.env.NODE_ENV === "production";
module.exports = {
  publicPath: "/",
  devServer: { disableHostCheck: true },
  productionSourceMap: false,
  lintOnSave: true,
  chainWebpack(config) {
    config.module.rule("scss").oneOfs.store.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [production ? "src/styles/variables_prod.scss" : "src/styles/variables_test.scss"],
        })
        .end();
    });
  },
};
