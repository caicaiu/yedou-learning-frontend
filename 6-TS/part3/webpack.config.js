const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

// webpack.config.js 配置文件
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    // 打包时使用的模块
    module: {
        // 加载规则
        rules: [
            {
                // 匹配.ts 文件
                test: /.ts$/,
                // 使用 ts-loader 进行编译
                use: [
                    {
                      loader:"babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            chrome: "58",
                                            ie: "11",
                                        },
                                        // 指定corejs的版本
                                        corejs: "3",
                                        // 使用corejs的方式 "usage" 表示按需加载
                                        useBuiltIns: "usage",
                                    },
                                ],
                            ],
                        },
                    },
                    "ts-loader",
                ],
                // 排除 node_modules 目录
                exclude: /node_modules/,
            },
        ],
    },
    // 配置webpack的插件
    plugins: [
        // 自动清除dist目录
        new CleanWebpackPlugin(),
        // 自动生成html文件 且指定模板
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
}
