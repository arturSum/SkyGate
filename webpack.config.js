const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {

    entry: './index.js',

    output: {
        filename: 'main.js',
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
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }


        ]

    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]

};