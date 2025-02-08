const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.js$/,
    resolve: {
      fallback: {
        path: require.resolve("path-browserify")
      }
    }
  })
);