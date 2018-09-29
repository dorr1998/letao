// 使用NProess插件

// NProgress.start();
// setTimeout(function(){
// NProgress.done();
// },2000);

$(document).ajaxStart(function () {
  NProgress.start();
});

$(document).ajaxStop(function () {
  setTimeout(function(){
  NProgress.done();
  },500);
});



