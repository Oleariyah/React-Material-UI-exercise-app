const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require ('webpack-node-externals')

module.exports = 
[ 
    {
    entry: [ "./client/src/index.js"],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'index.js',
        path:path.resolve(`${__dirname}`, "dist/public")
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {
                test: /\.(ico|gif|png|jpe?g|svg)$/i,
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
        })
    ]
 },
 {
    target: 'node',
    entry: [ "./server/index.js"],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'index.js',
        path:path.resolve(`${__dirname}`, "dist/server")
    },
     externals: [nodeExternals()]
 }
]