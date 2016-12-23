var path=require('path')

module.exports={
  entry:'./src/index.js',
  output:{
    path:'./dist',
    filename:'index.js'
  },
  resolve:{
    extensions:['','.js']//解析
  },
/*  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },*/
  module: {
    loaders: [{
      test: /\.js$/,
      exclude:path.join(__dirname,'node_modules'),
      loader: 'babel',
      include:path.join(__dirname,'src')
    }]
  },
  babel: {
      presets: ['es2015']
  }
}
