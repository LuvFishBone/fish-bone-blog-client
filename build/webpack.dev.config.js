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
        port: 5352,
        proxy: {
            '/api': 'http://localhost:5350',
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /\.(less)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                         loader: 'px2rem-loader',
                         options: {
                             remUnit: 50,
                             remPrecision: 8
                         }
                     },
                    'postcss-loader',
                    'less-loader',
                 ],
                 exclude: /node_modules/
            }
        ]
    },
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