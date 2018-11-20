const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry:{
        main: path.resolve(__dirname, '../src/main.js')
    },
    module: {
       rules:[
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader']
            },
           {
               test: /\.js$/,
               use: [
                   'babel-loader'
               ],
               exclude: /node_modules/
           },
           {
               test: /\.vue$/,
               use: [
                   'vue-loader'
                ]
           },
           {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
            
       ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            fastclick: 'fastclick/lib/fastclick.js',
        }
    }
}