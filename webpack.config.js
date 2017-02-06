const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets'
    },
    module: {
      // rules: [
      //     {
      //         test: /\jsx?$/,
      //     }
      // ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, './src')
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlagin(),
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html',
            inject: 'body',
            filname: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'common.js',
            minChunks: 2
        })
    ]
};