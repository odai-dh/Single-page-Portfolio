const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Update to your actual entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        open: true, // Opens the browser automatically
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML file
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Handles image files
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader', // Processes <img src="..."> in HTML files
            },
        ],
    },
};