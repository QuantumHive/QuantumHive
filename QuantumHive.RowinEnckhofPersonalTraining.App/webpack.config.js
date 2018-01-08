const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
    resolve: { extensions: ["*", ".js"] },
    context: path.resolve(__dirname, "./App"),
    entry: {
        main: ["babel-polyfill", "./index.js"]
    },
    output: {
        path: path.resolve(__dirname, "./wwwroot/dist"),
        publicPath: "/dist/",
        filename: "[name].js"
    },
    devtool: "eval-source-map",
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': "jquery",
            Popper: ["popper.js", "default"]
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("development"),
            __DEV__: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => [autoprefixer]
            }
        })
    ],
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"] },
            { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: "file-loader" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            { test: /\.(jpe?g|png|gif)$/i, loader: "file-loader?name=[name].[ext]" },
            { test: /\.ico$/, loader: "file-loader?name=[name].[ext]" },
            {
                test: /(\.css|\.scss|\.sass)$/, use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [autoprefixer]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            //so we can use @import in the custom styles that are relative to the /styles folder
                            includePaths: [path.resolve(__dirname, "./App/styles")]
                        }
                    }
                ]
            }
        ]
    }
}