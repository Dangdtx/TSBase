const path = require('path');
const HtmlWebpack = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    // 入口文件
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: path.join(__dirname, './dist/app.js'),
        environment: {
            arrowFunction: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpack({
            template: "./src/index.html"
        })
    ],
    resolve: {
        alias: {
            "@": "./src"
        },
        extensions: [".ts", ".js"]
    }

}