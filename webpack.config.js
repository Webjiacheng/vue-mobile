/**
 * Created by hujiacheng on 2017/4/1.
 */
/**
 * Created by hujiacheng on 2017/4/1.
 */
/**
 * Created by hujiacheng on 2017/3/30.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    //入口
    entry:{
        main:'./main.js'
    },
    //输出
    output:{
        path:__dirname+/dist/,
        filename:'./build.js'
    },
    //模块
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{
                    presets:['es2015'],
                    plugins:['transform-runtime']
                }
            },
            {
                test:/\.(png|jpg|ttf)$/,
                loader:'url-loader'
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    //打包html实例对象
    plugins: [new HtmlWebpackPlugin({
        template:'./index.html'
    })]
}