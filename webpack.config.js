const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    devtool: isDev ? 'source-map' : false,
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: isDev ? "/" : ""
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            images: path.resolve(__dirname, 'src/images'),
            scss: path.resolve(__dirname, 'src/scss'),
            pages: path.resolve(__dirname, 'src/pages'),
            components: path.resolve(__dirname, 'src/components')
        }
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        historyApiFallback: {
            disableDotRule: true,
        },
        useLocalIp: true,
        host: '0.0.0.0',

        //hot: true,
        //open: true
        //port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            favicon: './images/favicon.ico',
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src/images/favicon.ico'),
        //             to: path.resolve(__dirname, 'dist')
        //         }
        //     ]
        // })
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash].[ext]',
                            outputPath: 'images/',
                            publicPath: '../images/'
                        },
                    },
                ],
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: isDev
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            indent: 'postcss',
                            sourceMap: isDev,
                            plugins: loader => [
                                require('autoprefixer')(),
                            ],
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDev,
                        },
                    }
                ],
            },
        ]
    }
}