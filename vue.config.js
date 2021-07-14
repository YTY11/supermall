module.exports = {

  lintOnSave: false,
  configureWebpack: {

    resolve: {

      //配置别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'router': '@/router',
        'views': '@/views'
      }
    }
  },
}
