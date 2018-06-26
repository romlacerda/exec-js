const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsWebpackPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
         rules: [{
             test: /\.s?[ac]ss$/,
             use: [
                 MiniCssExtractPlugin.loader,
                 //'style-loader', // Adiciona CSS a dom injeanto a tag style
                 'css-loader', // Interpreta @import, url()
                 'sass-loader'
             ]
         }, {
             test: /\.(´mg|svg|jpg|gif)$/,
             use: ['file-loader']
         }]
    }
}