const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {

    entry: './tests/sortingPerformance/test.js',

    output: {
        filename: 'sortingPerformanceTest.js',
        path: __dirname + "/dist",
    },


    module : {

        rules: [

            {
                test: /\.(js|jsx)$/,

                exclude: /node_modules/,

                use: [{

                    loader: "babel-loader",
                    options: {
                        presets: ["react"]
                    }

                }]
            },


            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            },

            {

                test: /\.(woff|eot|svg|ttf|woff2)$/,
                use: 'url-loader'

            }

        ]

    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]

};