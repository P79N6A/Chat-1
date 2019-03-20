const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolvePath = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path:   path.resolve(__dirname, 'output/js') //输出路径
        // chunkFilename: 'js/[name].js',  非入口文件的名称
        // publicPath: 按需加载，外部资源路径
    },
    resolve: {
        // 文件类型解析优先级
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
        // 自定义路径
        alias: {
            $common: resolvePath('src/common'),
            $components: resolvePath('src/components'),
            $containers: resolvePath('src/containers'),
            $icons: resolvePath('src/icons'),
            $css: resolvePath('src/css'),
            $routes: resolvePath('src/routes'),
            $types: resolvePath('src/types'),
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['babel-loader', 'ts-loader'],
            exclude: /node_modules/,
        },{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader',
            // 可以直接配置，也可以使用配置文件
            // use: {
            //   loader: 'babel-loader',
            //   options: {
                // "presets": ["es2015", "react"]
            //   }
            // },
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            // include: /node_modules/,
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: 'url-loader'
        },{
            test: /\.less$/,
            // include: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                {loader: 'less-loader', options: {
                    javascriptEnabled: true,
            //         modifyVars: {
            //         "brand-primary": "red",
            //         "color-text-base":  "#333",
            // }
        }},
        ],}
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,  //将js资源放置在body元素底部
            chunks: ['app'],
            template: 'src/index.html',
            // filename: 'index.html',  输出文件名称，默认为index.html
            // favicon: project.paths.favicon, 图标
            // chunksSortMode: 'manual', chunks加入到html的排序方式
            // template : 模版路径
            // minify: htmlMinify, 以某种形式缩小输出
        })
    ]
}
