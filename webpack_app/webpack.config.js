module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
   module: {
       rules: [
           {test: /\.css$/, loader: "style-loader!css-loader"}, //every file that ends with '.css'
           {test:/\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets:['es2015']}} //affects all files that have the '.js' extension
       ]
   }
}