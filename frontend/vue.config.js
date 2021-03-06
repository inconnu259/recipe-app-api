module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api*": {
        // Forward frontend dev server request for /api to django dev server
        target: "http://backend:8000/",
        secure: false
      }
    }
  }
};
