const isProd = process.env.NODE_ENV == "production";
// const timestamp = new Date().getTime(); // 获取当前时间戳

module.exports = {
  publicPath: "/",
  devServer: { disableHostCheck: true },
  lintOnSave: true,
  productionSourceMap: isProd ? false : true,
  chainWebpack(config) {
    config.module.rule("scss").oneOfs.store.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [isProd ? "src/styles/variables_prod.scss" : "src/styles/variables_dev.scss"],
        })
        .end();
    });
  },
  css: isProd
    ? {
        extract: {
          filename: `css/[name].[chunkhash].css`,
          chunkFilename: `css/[name].[chunkhash].css`,
        },
      }
    : {},

  configureWebpack: (config) => {
    config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
    config.optimization = {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace("@", "")}`;
            },
          },
        },
      },
    };
    if (isProd) {
      Object.assign(config, {
        output: {
          ...config.output,
          filename: `js/[name].[chunkhash].js`,
          chunkFilename: `js/[name].[chunkhash].js`,
        },
      });
    }
  },
};
