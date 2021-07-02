const path = require("path");

module.exports = {
    entry: './src/scripts.js',
    output: {
        filename: './js/build.js',
        path: path.resolve(__dirname, 'public'),
    },
    watch: true
}