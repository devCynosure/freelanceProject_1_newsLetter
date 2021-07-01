module.exports = {
    entry: './src/scripts.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'public'),
    },
    watch: true
}