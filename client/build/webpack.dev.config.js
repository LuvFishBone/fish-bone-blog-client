const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = webpackMerge(webpackBase, {
    mode: 'development',
    devServer: {
        historyApiFallback:true,
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        host: '0.0.0.0',
        port: 8082,
        proxy: {
            '/api': 'http://localhost:8081',
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'fish bone front-end admin',
            inject: true,
            template: path.resolve(__dirname ,'../index.html'),
            //favicon: './favicon.ico',
        }),
        new webpack.ProvidePlugin({
            axios: 'axios'
        })

    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
});