const fs = require('fs')
const { createPage } = require('./libs/page')

function normalizeConfig(args) {
    const config = {}
    for (const key in args) {
        // if (renamedArrayArgs[key]) {
        //     config[renamedArrayArgs[key]] = args[key].split(',')
        // } else if (renamedArgs[key]) {
        //     config[renamedArgs[key]] = args[key]
        // } else if (key !== '_') {
        config[camelize(key)] = args[key]
        // }
    }
    return config
}

function camelize(str) {
    return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

module.exports = (api, projectOptions) => {
    const isAndroid = process.env.PLATFORM_ENV === 'android'
    api.chainWebpack(config => {
        config.module
            .rule('svg')
            .use('file-loader')
            .loader('file-loader')
            .tap(options => {
                // 修改它的选项...
                options.name = 'imgage/[name].[hash:8].[ext]'
                return options
            })
        const imagesRule = config.module.rule('images')
        var ruleImageLoader = imagesRule
            .use('@snicesoft/image-webpack-loader')
            .loader('@snicesoft/image-webpack-loader')
        if (isAndroid) {
            ruleImageLoader.options({
                bypassOnDebug: true,
                webp: {
                    quality: 75
                }
            })
        }
        ruleImageLoader.end()

        imagesRule
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.name = `imgage/[name].[hash:8].${isAndroid ? 'webp' : '[ext]'}`
                return options
            })
            .end()
    })
    api.registerCommand('ac', {
        usage: 'vue-cli-service ac <command> [options]',
        commands: {
            'add [options] <page-name>': 'create new page'
        },
        options: {
            '--type [type]': '指定页面模板 (默认：default)'
        }
    }, args => {
        if (args._.length === 0) {
            // help
            return
        }
        const argsConfig = normalizeConfig(args)
        const config = Object.assign({
            type: 'default',
        }, argsConfig)
        console.log('config', config)
        const pagesPath = api.resolve('./src/pages')
        const type = args._[0]
        switch (type) {
            case 'add':
                let name = args._[1]
                if (name) {
                    name = name.toLowerCase()
                    const newPageDir = `${pagesPath}/${name}`
                    if (fs.existsSync(newPageDir)) {
                        console.warn('page [' + name + '] exists.')
                        return
                    }
                    createPage(newPageDir, config.type, name)
                } else {
                    console.error('please use [ac add `new_page`]')
                }
                break;
            default:
                break
        }
    })
}
