const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === "dev"

const extractSass = new ExtractTextPlugin({
    filename: "[name]___[contenthash].css",
    disable: isDev
});

const extractCss = new ExtractTextPlugin({
    filename: "[name]___[contenthash].css",
    disable: isDev,
})

const extractHtml = new HtmlWebpackPlugin({
    title: 'My App',
    template: './entries/index.ejs'
})

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './entries/app.js'
    },
    output: {
        publicPath: './',
        path: __dirname + "/dist",
        filename: "[name].[hash].bundle.js",
        // chunkFilename: '[name]-[id].[chunkhash:8].bundle.js', // 代码分割
    },
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, "./src"),
        compress: false,
        port: 3001,
        hot: true,
        historyApiFallback: true,
        // noInfo: true,
        overlay: {
            warnings: true,
            errors: true
        },
        // progress: true,
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: extractCss.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap: true,
                        minimize: !isDev
                    }
                }],
                fallback: 'style-loader',
            }),
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader", // translates CSS into CommonJS 
                    options: {
                        importLoaders: 1,
                        sourceMap: true,
                        modules: true,
                        localIdentName: '[local]___[hash:base64:5]',
                        camelCase: true,
                        minimize: !isDev
                    }
                },
                "sass-loader", // compiles Sass to CSS 
                ],
                // use style-loader in development 
                fallback: "style-loader"
            }),
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ['import', {
                            libraryName: 'antd',
                            style: 'css',
                        }],
                    ],
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                },

            }],
        },
        ]
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, './node_modules')],
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json', '.less', '.css'],
    },
    plugins: [
        extractCss,
        extractSass,
        extractHtml
    ]
};