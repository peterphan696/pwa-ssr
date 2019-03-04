const withCSS = require('@zeit/next-css')
let config = {
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }

        return config
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        }
    }
}
config = withCSS(config)
module.exports = config;
