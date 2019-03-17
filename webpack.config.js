const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webPackModuleSettings = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ['css-loader', 'sass-loader']
			})
		}
	]
};

const Main = () => {
	return {
		entry: ['./src/js/main.js'],
		output: {
			path: path.join(__dirname, 'dist'),
			filename: path.join('js', 'main.js')
		},
		module: webPackModuleSettings,
	};
};

module.exports = [
	Main
];
