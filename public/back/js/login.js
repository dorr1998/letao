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
         },
         callback: {
          message: "用户名不存在"
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
         },
          // 专门用于配置回调提示信息的校验规则
          callback: {
          message: "密码错误"
        }
       } 
      }
    }
  });

  // 2. 进行登录请求
  //    通过 ajax 进行登录请求

  // 表单校验插件有一个特点, 在表单提交的时候进行校验
  // 如果校验成功, 继续提交, 需要阻止这次默认的提交, 通过 ajax 进行请求提交
  // 如果校验失败, 默认会阻止提交
$('#form').on('success.form.bv',function( e ){
    //阻止表单的默认提交
    e.preventDefault();
    //使用ajax进行提交
    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      data: $('#form').serialize(),
      dataType: "json",
      success: function(info){
        console.log(info);
        if(info.success){
          location.href = "index.html";
        }
        if(info.error === 1000){
          // alert( "用户名不存在" );
          // NOT_VALIDATED 未校验, VALIDATING校验中, INVALID校验失败 or VALID校验成功
          $('#form').data('bootstrapValidator').updateStatus('username','INVALID',"callback");
        }
        if(info.error === 1001){
          // alert( "密码错误" );
          // updateStatus
          // 参数1: 字段名称
          // 参数2: 校验状态
          // 参数3: 校验规则, 可以设置提示文本
          $('#form').data('bootstrapValidator').updateStatus('password','INVALID',"callback");
        }
      }
    })
});

 // 3. 重置功能实现
$('[type="reset"]').click(function(){
  $('#form').data('bootstrapValidator').resetForm();
});

});

