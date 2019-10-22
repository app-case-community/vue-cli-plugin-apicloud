const glob = require('glob')
const pathPrefix = 'src/pages/'
const pathSuffix = '/main.js'
const files = glob.sync(`${pathPrefix}**${pathSuffix}`)
const pages = {
  index: {
    entry: 'src/main.js',
    template: 'public/index.html'
  }
}
files.forEach(item => {
  const newItem = item.substring(pathPrefix.length)
  const dir = newItem.substring(0, newItem.indexOf(pathSuffix))
  let page = dir.replace(/\//g, '_')
  pages[page] = item
})
module.exports = pages
