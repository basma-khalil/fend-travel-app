const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const autoprefixer = require("autoprefixer");
const dotenv = require('dotenv').config();


module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
	output: {
		libraryTarget: 'var',
		library: 'Client'
	},
	optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
			{
				test: /\.scss$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader", 'sass-loader' ]
            },
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'media/',
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
		new MiniCssExtractPlugin({filename: '[name].css'}),
		new WorkboxPlugin.GenerateSW(),
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