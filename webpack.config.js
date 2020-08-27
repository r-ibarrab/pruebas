const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');


module.exports={

    entry:"src/index.js",
    output:{
        path:"/",
        filename:"bundle.js",
        publicPath:"/"
    },
    devServer:{
        port:3005,
        historyApiFallback:true
    },
    module:{
        rules:[
            {
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:['style-loader','css-loader']
            }

        ]
    },
    plugins:[
        new Htmlwebpackplugin({
            template:'./src/index.html'
        })

    ]

}