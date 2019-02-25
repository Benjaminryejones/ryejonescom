const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const extractSass = new ExtractTextPlugin({
// 	filename: "../css/styles.css"
// });

module.exports = {
	entry: ['./src/js/index.js', './src/scss/styles.scss'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
					// options: {
					// 	presets: ['env']
					// }
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader
					,{loader: 'css-loader', options: { url: false, sourceMap: true }}
					,{loader: 'resolve-url-loader'}
					,{loader: 'sass-loader?sourceMap'}
					],
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
				use: [
				  {
				    loader: 'url-loader',
				    options: {
				      limit: 100000
				    }
				  }
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css"
    })
	],
	mode : 'production'
};
