const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

function getPageTemplate(pageType) {
    return path.resolve(__dirname, '../generator/page_templates/' + pageType);
}

function createBlank(newPageDir, pageType, name) {
    fs.mkdirSync(newPageDir);
    const pageTmpDir = getPageTemplate(pageType);
    fs.copyFileSync(pageTmpDir + '/App.vue', newPageDir + '/App.vue');
    fs.copyFileSync(pageTmpDir + '/main.js', newPageDir + '/main.js');
}

function createDefault(newPageDir, pageType, name) {
    const mainPage = newPageDir
    const framePage = `${newPageDir}_frm`
    fs.mkdirSync(mainPage);
    fs.mkdirSync(framePage);
    const pageTmpDir = getPageTemplate(pageType);
    const str = fs.readFileSync(pageTmpDir + '/main/App.vue').toString()
    const vueStr = ejs.render(str, {
        frm: `${name}_frm`
    }, {});
    fs.writeFileSync(mainPage + '/App.vue', vueStr)
    fs.copyFileSync(pageTmpDir + '/main/main.js', mainPage + '/main.js');
    fs.copyFileSync(pageTmpDir + '/frm/App.vue', framePage + '/App.vue');
    fs.copyFileSync(pageTmpDir + '/frm/main.js', framePage + '/main.js');
}
module.exports = {
    createPage: function (newPageDir, pageType, name) {
        let isCreated = false
        switch (pageType) {
            case 'blank':
                createBlank(newPageDir, pageType, name);
                isCreated = true
                break;
            case 'default':
                createDefault(newPageDir, pageType, name);
                isCreated = true
                break;
            default:
                break;
        }
        console.log('create page [' + name + '] ' + isCreated ? 'success' : 'fail' + '.');
    }
}