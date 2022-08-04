const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const autoprefixer = require("autoprefixer");
const dotenv = require('dotenv').config();


module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
	output: {
		libraryTarget: 'var',
		library: 'Client'
	},
    module: {
        rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', "postcss-loader", 'sass-loader' ]
            },
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'media/',
							publicPath: 'src/client/media/',
						},
					},
				]
			}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
		new BundleAnalyzerPlugin(),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer()
				]
			}
		}),
		new webpack.DefinePlugin({
			'process.env.GEONAMES_USERNAME': JSON.stringify(process.env.GEONAMES_USERNAME),
			'process.env.PIXABAY_KEY': JSON.stringify(process.env.PIXABAY_KEY),
			'process.env.WEATHERBIT_KEY': JSON.stringify(process.env.WEATHERBIT_KEY)
		})
    ]
}