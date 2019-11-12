module.exports = (api, opts, rootOptions) => {
    api.extendPackage({
        scripts: {
            "ac": "vue-cli-service ac",
            "wifi-start": "apicloud wifiStart --port 10915",
            "wifi-stop": "apicloud wifiStop --port 10915",
            "wifi-sync": "cross-env PLATFORM_ENV=none vue-cli-service build && apicloud wifiSync --project dist --updateAll false --port 10915",
            "build:android": "cross-env PLATFORM_ENV=android vue-cli-service build",
            "build:ios": "cross-env PLATFORM_ENV=ios vue-cli-service build"
        },
        devDependencies: {
            "@snicesoft/image-webpack-loader": "^5.0.0",
            "apicloud-cli": "^0.2.0",
            "cross-env": "^5.2.0",
            "fs-extra": "^7.0.1",
            "glob": "^7.1.5",
            "less": "^3.10.3",
            "less-loader": "^5.0.0",
            "node-sass": "^4.13.0",
            "sass-loader": "^8.0.0",
            "stylus": "^0.54.7",
            "stylus-loader": "^3.0.2"
        }
    })
    api.render('./templates')
    if (opts.appTemplate) {
        api.render('./app_templates/' + opts.appTemplate)
    }
}