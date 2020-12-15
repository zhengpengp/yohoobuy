define([], () => {
    return {
        init: function() {
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