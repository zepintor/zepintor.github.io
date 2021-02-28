const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';

const webpackConfig = {
    entry: "./src/index.js",
    mode: env,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCssAssetsPlugin({})],
        splitChunks: {
            chunks: "all",
            name: true,
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules\/(?!(metro4-react)\/).*/,
                loader: 'babel-loader',
                options: { babelrcRoots: ['.', '../'] }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(less)$/,
                exclude: /node_modules\/(?!(metro4-react)\/).*/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !isProduction,
                            reloadAll: true
                        },
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer()
                            ],
                            sourceMap: true
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: !isProduction ? '[name].css' : '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};

if (env === 'production') {
}

module.exports = webpackConfig;
