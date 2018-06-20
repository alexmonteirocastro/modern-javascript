const path = require('path');

module.exports = {
    entry: {
    app: ['babel-polyfill', './src/app.js']  //entry point for ES6, 7 and so on..
    },

    output: {
        path:  path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'   //output into 'build/app.bundle.js' - file to include in the HTML
    }, 

    module: {
        rules: [{ //'loaders'  is called 'rules' in Webpack 4
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0']
            }
        }]
    }
}