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
        config.module
            .rule('images')
            .use('url-loader')
            .loader('file-loader')
            .tap(options => {
                // 修改它的选项...
                options.name = 'imgage/[name].[hash:8].[ext]'
                return options
            })
        config.module
            .rule('svg')
            .use('file-loader')
            .loader('file-loader')
            .tap(options => {
                // 修改它的选项...
                options.name = 'imgage/[name].[hash:8].[ext]'
                return options
            })
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