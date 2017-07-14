const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const extractHtml = new HtmlWebpackPlugin({
    title: 'My App',
    template: './entries/index.html'
})

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './entries/app.js'
    },
    output: {
        publicPath: '/',
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
    },
    devServer: {
        allowedHosts:[
            'zhou.wallent.mg'
        ],
        // publicPath: '/', // New
        contentBase: path.join(__dirname, "./src"),
        compress: true,
        port: 6666,
        // hot: true,
        noInfo: true,
        overlay: {
            warnings: true,
            errors: true
        },
        // progress: true,
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader" // translates CSS into CommonJS 
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS 
                    }],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            },

            {
                test: /\.(js|jsx)$/,
                // include: path.appSrc,
                // loader: require.resolve('babel-loader'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            ['import', {
                                libraryName: 'antd',
                                style: 'css'

                            }],
                        ],
                        // This is a feature of `babel-loader` for webpack (not Babel itself).
                        // It enables caching results in ./node_modules/.cache/babel-loader/
                        // directory for faster rebuilds.
                        cacheDirectory: true
                    }
                }],
            },
        ]
    },
    plugins: [
        extractSass,
        extractHtml
    ]
};