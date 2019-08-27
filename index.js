const fs = require('fs')
const path = require('path')
module.exports = (api, projectOptions) => {
    api.chainWebpack(config => {
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
    })
    api.registerCommand('ac', args => {
        if (args._.length === 0) {
            // help
            return
        }
        const pagesPath = api.resolve('./src/pages')
        const type = args._[0]
        switch (type) {
            case 'add':
                const name = args._[1]
                const pageType = 'default'
                if (name) {
                    const newPageDir = `${pagesPath}/${name}`
                    if (fs.existsSync(newPageDir)) {
                        console.warn('page [' + name + '] exists.')
                        return
                    }
                    createPage(newPageDir, pageType, name);
                } else {
                    console.error('please use [ac add `new_page`]')
                }
                break;
            default:
                break
        }
    })
}

function createPage(newPageDir, pageType, name) {
    fs.mkdirSync(newPageDir);
    const pageTmpDir = path.resolve(__dirname, './generator/page_templates/' + pageType);
    fs.copyFileSync(pageTmpDir + '/App.vue', newPageDir + '/App.vue');
    fs.copyFileSync(pageTmpDir + '/main.js', newPageDir + '/main.js');
    console.log('create page [' + name + '] success.');
}
