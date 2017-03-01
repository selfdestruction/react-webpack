const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js'
        // vendor: ['react', 'react-dom', 'rxjs'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'common.js',
            minChunks: 2
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] }
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                ],
            },

            // Loaders for other file types can go here
        ],
    },

};