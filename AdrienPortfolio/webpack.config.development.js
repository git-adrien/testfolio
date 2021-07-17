const { merge } = require('webpack-merge') 
const path = require('path')

const config = require('./webpack.config',{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        writeToDisk:true
    },
    output:{
        path: path.resolve(__dirname, 'public')
    }
}
)
