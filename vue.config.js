const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports ={
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack:  {
    resolve: {
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify")
      }
    },
    plugins: [
      new NodePolyfillPlugin(),
      [
        "component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]
    ],
  },
}
