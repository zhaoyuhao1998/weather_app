$.ajaxPrefilter(function (options) {
  // 统一拼接URL地址
  // console.log(options.url);
  options.url = 'http://www.liulongbin.top:3007' + options.url

  // 选择添加 headers 请求头
  if (options.url.indexOf('/my/') !== -1) {
    options.headers = {
      Authorization: localStorage.getItem('token') || ''
    }
  }
})