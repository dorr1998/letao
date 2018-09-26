$(function(){
// 校验规则：
  // 1. 用户名不能为空
  // 2. 用户密码不能为空
  // 3. 用户密码长度为6-12位
  $('#form').bootstrapValidator({
    //设置小图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    //设置校验字段
    fields: {
      username: {
        // 配置校验规则
       validators: {
        //  非空校验
         notEmpty: {
           message: "用户名不能为空"
         },
         stringLength: {
          min: 2,
          max: 6,
          message: "用户名长度为2-6位"           
         }
       } 
      },
      password: {
        // 配置校验规则
       validators: {
        //  非空校验
         notEmpty: {
           message: "密码不能为空"
         },
         stringLength: {
          min: 6,
          max: 12,
          message: "密码长度为6-12位"           
         }
       } 
      }
    }
  })

})

