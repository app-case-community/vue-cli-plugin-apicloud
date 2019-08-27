const fs = require('fs-extra')
const path = require('path')

const autoPages = (pages) => {
  var ps = {}
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (page === undefined) continue
    var entry = `src/${page}/main.js`
    var name = page.substr(page.lastIndexOf('/') + 1)
    var pageName = name
    var template = `public/${name}.html`
    const templateFile = path.resolve(__dirname, template)
    if (!fs.existsSync(templateFile)) {
      template = 'public/index.html'
    }
    ps[pageName] = {
      entry,
      template
    }
  }
  return ps
}

const pages = {
  index: {
    entry: 'src/main.js',
    template: 'public/index.html'
  },
  ...autoPages(fs.readdirSync(path.resolve(__dirname, './src/pages')).map(it => `pages/${it}`))
}

module.exports = pages
