module.exports = (api, opts, rootOptions) => {
    api.extendPackage({
        scripts: {
            "wifi-start": "apicloud wifiStart --port 23456",
            "wifi-stop": "apicloud wifiStop --port 23456",
            "wifi-sync": "cross-env PLATFORM_ENV=none vue-cli-service build && apicloud wifiSync --project dist --updateAll false --port 23456 && apicloud wifiLog --port 23456",
            "build:android": "cross-env PLATFORM_ENV=android vue-cli-service build",
            "build:ios": "cross-env PLATFORM_ENV=ios vue-cli-service build"
        },
        devDependencies: {
            "apicloud-cli": "^0.2.0",
            "cross-env": "^5.2.0",
            "fs-extra": "^7.0.1",
        }
    })
    api.render('./templates')
}