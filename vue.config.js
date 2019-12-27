module.exports = {
  assetsDir:"public",
  lintOnSave: false,
  devServer: {
    proxy: {
      '/UploadFiles': {
        target: 'http://filenet.yuanh.com.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/UploadFiles" : "/UploadFiles" }
      },
    }
  }
}
