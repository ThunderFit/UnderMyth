const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './resources/assets/js/initialize.js',
        './resources/assets/sass/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'resources/assets/sass'),
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                url: false
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /.jsx?$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/style.css',
            allChunks: true,
        })
    ]
};