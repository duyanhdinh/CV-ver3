const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "js@": path.resolve(__dirname, 'src/assets/js'),
                "~@": path.resolve(__dirname, 'src/components'),
                "x@": path.resolve(__dirname, 'src/store'),
            }
        }
    }
}