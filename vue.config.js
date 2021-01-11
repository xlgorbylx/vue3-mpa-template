module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/dist/',
  pages: {
    index: {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    About: {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'About']
    }
  }
}
