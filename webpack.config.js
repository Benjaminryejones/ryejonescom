const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: "../css/styles.css"
});

module.exports = {
	entry: ['./src/js/index.js', './src/scss/styles.scss'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/js')
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','resolve-url-loader','sass-loader?sourceMap']
                })
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
		extractSass
	]
};
