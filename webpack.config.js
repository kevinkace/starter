const path = require("path");

const HtmlWebpackPlugin  = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CSSPlugin          = require("@modular-css/webpack/plugin");

module.exports = {
    entry     : "./src/index.js",
    devtool   : "source-map",
    devServer : {
        historyApiFallback : true,
        contentBase : "./dist"
    },
    externals : { mithril : "m" },
    mode : "development",

    module : {
        rules : [{
            test    : /\.js$/,
            exclude : /(node_modules)/,
            loader  : "babel-loader"
        }, {
            test   : /\.css$/,
            loader : "@modular-css/webpack/loader"
        }]
    },
    plugins : [
        // Cleans build artifacts (pathsToClean, cleanOptions)
        new CleanWebpackPlugin([ "dist" ]),
        // Modular CSS
        new CSSPlugin({ css : "./index.css" }),
        // Tells webpack to use this plugin to generate the output
        new HtmlWebpackPlugin({
            title      : "App Name",
            template   : "./src/index.ejs"
        })
    ],
    // Bundled JS
    output : {
        filename : "index.js",
        path     : path.resolve(__dirname, "dist")
    }
};
