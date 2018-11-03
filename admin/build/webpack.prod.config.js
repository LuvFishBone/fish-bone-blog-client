const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(webpackBase, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './'
    },
    plugins:[
        new webpack.HashedModuleIdsPlugin(),
        // new CleanWebpackPlugin([path.resolve(__dirname, '../dist')]),
        new HtmlWebpackPlugin({
            title: 'fish bone front-end admin',
            inject: true,
            template: path.resolve(__dirname ,'../index.html'),
            //favicon: './favicon.ico'
        }),
        new webpack.ProvidePlugin({
            axios: 'axios'
        })
        // new CopyWebpackPlugin([
        //     {
        //       from: path.resolve(__dirname, '../src/static'),
        //       to: path.resolve(__dirname, '../dist'),
        //       ignore: ['.*']
        //     }
        // ])
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }

})