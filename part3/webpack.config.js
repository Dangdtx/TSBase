const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    // 入口文件
    entry: "./src/index.ts",
    // 制定打包文件所在目录
    output: {
        // 制定打包文件所在目录
        path: path.resolve(__dirname, 'dist'),

        // 打包后的文件名
        filename: 'bundle.js',
        // 告诉webpack打包最外层不使用剪头函数
        environment: {
            arrowFunction: false
        }
    },
    // 打包时用到的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                // 要使用的laoder  从右向左加载 先从ts编译成JS 然后再babel设置兼容
                use: [
                    // babel配置项
                    {
                        // laoder 指定加载器
                        loader: 'babel-loader',
                        // babel-loader 的配置项
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的浏览器目标
                                        targets: {
                                            "chrome": "55",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本 core-js为低版本浏览器模拟高版本的运行环境
                                        "corejs": "3",
                                        // 使用corejs的方式 “useage” 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }

                    },
                    'ts-loader',],
                // 过滤掉的文件
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: '党党'
            template: './src/index.html',
        })
    ],
    // 用来设置引用的模块
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "@": "./src"
        }
    }
}