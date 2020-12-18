define(['pagination', 'jlazyload'], () => {
    return {
        init: function() {

            //检测用户是否已经登录，如果登录，则将登录框变成欢迎

            if (localStorage.getItem('.loginbar')) {
                $('#login-hello').show();
                $('#loginBox').hide();
                $('#login-hello .welcome').html(localStorage.getItem('.loginbar'));
            }

            //退出登录 - 删除本地存储
            $('#login-hello a').on('click', function() {
                $('#login-hello').hide();
                $('#loginBox').show();
                localStorage.removeItem('.loginbar');
            });
            const $form = $('#registry');
            const $username = $('#username');
            const $tel = $('#telphone');
            const $password = $('#password');
            const $email = $('#email');
            const $jname = $('.judgementname');
            const $jtel = $('.judgementtel');
            const $jpsw = $('.judgementpwd');
            const $jemail = $('.judgementemail');
            let $userflag = true;
            let $telflag = true;
            let $passwordflag = true;
            let $emailflag = true;

            //二级菜单
            const $navlist = $('.nav-li');
            const $navbox = $('.nav-box');
            const $navcontent = $('.nav-content');
            $navlist.hover(function() {
                console.log($(this).index());
                $navbox.show();
                $navcontent.eq($(this).index()).show().siblings('.nav-content').hide();
            }, function() {
                $navbox.hide();
            });
            //2.鼠标移入右侧的大盒子，大盒子依然显示隐藏
            $navbox.hover(function() {
                $(this).show();
            }, function() {
                $(this).hide();
            });


            $username.on('focus', function() {
                $jname.css('color', '#333').html('中英文均可，最长14个英文或7个汉字');
            })
            $username.on('blur', function() {
                let $val = $(this).val();
                if ($val !== '') {
                    var $strLen = $val.replace(/[\u4e00-\u9fa5]/g, '**').length;
                    if ($strLen > 0 && $strLen <= 14) {
                        var $reg = /^[a-zA-Z\d\u4e00-\u9fa5]+$/;
                        if ($reg.test($val)) {
                            $jname.css('color', 'green').html('✔');
                            $userflag = true;
                            $.ajax({
                                type: 'post',
                                url: 'http://10.31.161.53/dashboard/yohobuy1/php/registry.php',
                                data: {
                                    xingming: $username.val()
                                }
                            }).done(function(data) {
                                if (!data) {
                                    $jname.css('color', 'green').html('√');
                                    if (!$username.val()) {
                                        $jname.css('color', 'red').html('用户名不能为空');
                                    }
                                } else {
                                    $jname.css('color', 'red').html('该用户名已存在');
                                }
                            });
                        } else {
                            $jname.css('color', 'red').html('用户名格式有误');
                            $userflag = false;
                        }
                    } else {
                        $jname.css('color', 'red').html('用户名长度有误');
                        $userflag = false;
                    }
                } else {
                    $jname.css('color', 'red').html('用户名不能为空');
                    $userflag = false;
                }
            });




            //手机号码验证
            $tel.on('focus', function() {
                $jtel.css('color', 'red').html('手机号码不能为空');
                $telflag = false;
            })

            //手机号码失去焦点
            $tel.on('blur', function() {
                $val = $(this).val();
                if ($val !== '') {
                    var $reg = /^1[3|5|8]\d{9}$/;
                    if ($reg.test($val)) {
                        $jtel.css('color', 'green').html('✔');
                        $telflag = true;
                    } else {
                        $jtel.css('color', 'red').html('手机号码格式有误');
                        $telflag = false;
                    }
                } else {
                    $jtel.css('color', 'red').html('手机号码不能为空');
                    $telflag = false;
                }

            })



            //密码验证
            $password.on('focus', function() {
                $jpsw.css('color', '#333').html('请输入密码,长度为6-16个字符');
            });

            $password.on('input', function() {
                let $val = $(this).val();
                if ($val.length >= 6 && $val.length <= 16) {
                    var $regnum = /\d+/;
                    var $reguppercase = /[A-Z]+/;
                    var $reglowercase = /[a-z]+/;
                    var $other = /[\W_]+/;
                    var $count = 0;
                    if ($regnum.test($val)) {
                        $count++;
                    }
                    if ($reguppercase.test($val)) {
                        $count++;
                    }
                    if ($reglowercase.test($val)) {
                        $count++;
                    }
                    if ($other.test($val)) {
                        $count++;
                    }
                    switch ($count) {
                        case 1:
                            $jpsw.css('color', 'red').html('弱');
                            $passwordflag = false;
                            break;
                        case 2:
                        case 3:
                            $jpsw.css('color', 'orange').html('中');
                            $passwordflag = true;
                            break;
                        case 4:
                            $jpsw.css('color', 'green').html('强');
                            $passwordflag = true;
                            break;
                    };
                } else {
                    $jpsw.css('color', 'red').html('密码长度有误');
                    $passwordflag = false;
                }
            });

            $password.on('blur', function() {
                if ($(this).val() !== '') {
                    if ($passwordflag) {
                        $jpsw.css('color', 'green').html('✔');
                    }
                } else {
                    $jpsw.css('color', 'red').html('密码不能为空');
                }
            });

            $form.on('submit', function() {
                if ($username.val() === '') {
                    $jname.css('color', "red").html('用户名不能为空')
                    $userflag = false;
                }
                if ($tel.val() === '') {
                    $jtel.css('color', "red").html('手机号码不能为空')
                    $telflag = false;
                }
                if ($password.val() === '') {
                    $jpsw.css('color', "red").html('用户密码不能为空')
                    $passwordflag = false;
                }
                if ($email.val() === '') {
                    $jemail.css('color', "red").html('用户邮箱不能为空')
                    $emailflag = false;
                }
                if (!$userflag || !$telflag || !$passwordflag || !$emailflag) {
                    return false;
                }
            })
        }
    }
})