var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: {
        index: path.join(__dirname, '/index.jsx'),
        common: ['react', 'react-dom']
    },

    output: {
        'path': path.join(__dirname, 'dest'),
        'filename': '[name].[hash].js',
        'publicPath': './'
    },

    resolve: {
        extensions: ['', '.js', '.jsx','.css','.less','.scss']
    },

    module: {

        loaders: [
            {test:/\.css$/, loader: "style!css"},

            //{test: /\.less$/, loader: "style!css!less"},

            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style","css!sass")},

            {test: /\.(png|gif|jpe?g)$/, loader: "url-loader?limit=8192&name=/imgs/[hash].[ext]"},

            {test: /\.(woff|eot|ttf)$/i, loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'},

           // {test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel?presets[]=react,presets[]=es2015']},

            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],

                    // All of the plugins of babel-preset-es2015,
                    // minus babel-plugin-transform-es2015-modules-commonjs
                    // tree shaking
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties',
                        // 'transform-es2015-template-literals',
                        // 'transform-es2015-literals',
                        // 'transform-es2015-function-name',
                        // 'transform-es2015-arrow-functions',
                        // 'transform-es2015-block-scoped-functions',
                        // 'transform-es2015-classes',
                        // 'transform-es2015-object-super',
                        // 'transform-es2015-shorthand-properties',
                        // 'transform-es2015-computed-properties',
                        // 'transform-es2015-for-of',
                        // 'transform-es2015-sticky-regex',
                        // 'transform-es2015-unicode-regex',
                        // 'check-es2015-constants',
                        // 'transform-es2015-spread',
                        // 'transform-es2015-parameters',
                        // 'transform-es2015-destructuring',
                        // 'transform-es2015-block-scoping',
                        // 'transform-es2015-typeof-symbol',
                        // ['transform-regenerator', { async: false, asyncGenerators: false }],
                    ],
                },
            }
        ]
    },

    plugins: [

        //html编译处理
        new HtmlwebpackPlugin({
            title: 'BBD',
            template: path.join(__dirname, '/index.html'),
            filename: 'index.html',
            inject: true,
            hash: false,
            //删除注释 压缩html
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        //
        new ExtractTextPlugin("style.[hash].css"),

        //libs 可以缓存
        //new webpack.optimize.CommonsChunkPlugin('common','common.js'),

        //压缩 React
        new webpack.DefinePlugin({
            "process.env": {
                //development,production
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
