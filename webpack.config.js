module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        watchContentBase: true,
        port: 3001,
        open: true
    }
};