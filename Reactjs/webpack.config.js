var webpack = require('webpack');
var path = require('path');

var DIST_DIR =  path.resolve(__dirname,'dist');
var SRC_DIR = path.resolve(__dirname,'src');

var config = {
    entry: SRC_DIR + "/app/index.js",
    output:{
        path: DIST_DIR+ "/app",
        file_name : "budle.js",
        publicPath : "/app/"

    },
    modules:{
        loaders:[
            {
                test:{}
            }
        ]
    }
}

