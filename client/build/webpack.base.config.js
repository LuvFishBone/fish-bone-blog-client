const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const px2rem = require('postcss-px2rem')

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
               test: /\.(less|css)$/,
               use: [
                   'style-loader',
                   'css-loader',
                   'less-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ],
                            postcss: function() {
                                return [px2rem({remUnit: 75})];
                            },
                        }
                    }
            ]
           },
           {
               test: /\.js$/,
               use: [
                   'babel-loader'
               ],
               exclude: /node_modules/
           },
           { test: /iview.src.*?js$/, loader: 'babel-loader' },
           {
               test: /\.vue$/,
               use: [
                   'vue-loader',
                   {
                       loader: 'iview-loader',
                       options: {
                           prefix: false,
                       }
                   }
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
                    'file-loader'
                ]
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
            
       ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    }
}