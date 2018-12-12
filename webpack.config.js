const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: [ "./client/src/index.js"],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'index.js',
        path:path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    resolve: {
        alias: 
            { '@material-ui/core' : '@material-ui/core/es'}
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/public/index.html'
        }),
        new WorkboxWebpackPlugin.InjectManifest({
            swSrc:'./client/src/custom-sw.js',
            swDest: 'sw.js'
        })
    ]
}