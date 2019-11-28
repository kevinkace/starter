const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // externals : { react : "React" },
    module : {
        rules : [
            {
                test    : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use     : {
                    loader : "babel-loader"
                }
            },
            {
                test : /\.html$/,
                use  : [
                    {
                    loader : "html-loader"
                    }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            filename : "./index.html",
            options  : {
                title : "website title"
            }
        })
    ]
};
