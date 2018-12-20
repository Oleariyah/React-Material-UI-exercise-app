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
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            hash: 'sha512',
                            digest: 'hex',
                            name:'[hash].[ext]'
                        },
                    },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x\
                    },
                  },
                ],
              }
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