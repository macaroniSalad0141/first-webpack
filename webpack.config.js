const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { Template } = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // mode: 'development',
    devtool: 'source-map',
    entry: './src/javascripts/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'javascripts/main.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.vue/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                // ['@babel/preset-env', { 'targets': '> 5%, not dead' }],
                                ['@babel/preset-env', { 'targets': {
                                    'chrome': '58',
                                    'ie': '11' 
                                }}],
                                '@babel/preset-react',
                            ],
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  {
                    loader: 'css-loader',
                    
                  },
                  {
                    loader: 'sass-loader',
                  },
                ],
            },
            {
                test: /\.(png|jpg|jpeg)/,
                // webpack 5の場合、asset modulesを代わりに使う
                // type: 'asset/resource',
                // generator: {
                //     filename: 'images/[name][ext]',
                // },
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name].[ext]',
                            publicPath: '/',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            }
                        }
                    },

                ]
            },
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: './stylesheets/my.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/access.pug',
            filename: 'access.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/members/taro.pug',
            filename: 'members/taro.html',
        }),
        new CleanWebpackPlugin(),
    ],
}