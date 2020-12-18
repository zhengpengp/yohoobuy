define([], () => {
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





            const $username = $('#username');
            const $password = $('#password');
            const $login = $('#login');
            $login.on('click', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://10.31.161.53/dashboard/yohobuy1/php/login.php',
                    data: {
                        user: $username.val(),
                        pass: $password.val()
                    }
                }).done(function(data) {
                    if (!data) {
                        alert('用户名或者密码有误!');
                        $password.val('');
                    } else {
                        location.href = './index.html';
                        localStorage.setItem('.loginbar', $username.val());
                    }
                })
            });
        }
    }
});