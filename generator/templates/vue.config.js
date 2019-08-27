const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
const isDev = process.env.NODE_ENV === 'development'
const { PackerAppPlugin } = require('./build/plugins')

module.exports = {
  publicPath: isDev ? '/' : './',
  productionSourceMap: isDev,
  pages: require('./pages.config'),
  chainWebpack: (config) => {
    config.resolve.alias
      .set('~', resolve('src'))
  },
  configureWebpack: {
    plugins: [].concat(isDev ? [] : [
      new PackerAppPlugin({
        appid: 'VueApicloud',
        type: 'apicloud',
        rootDir: resolve('.'),
        originDir: resolve('dist'),
        distDirs: {
          android: resolve('./../android/app/src/main/assets/widget'),
          ios: resolve('./../ios/app/widget')
        }
      })
    ])
  }
}
