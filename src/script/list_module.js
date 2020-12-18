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




            const $chose = $('.list-sort .sort-type');

            $chose.on('click', function() {
                $(this).addClass('active').siblings('a').removeClass('active');
            });



            const $list = $('.list-render ul');
            let $array_default = [];
            let $array = [];
            let $prev = [];
            let $next = [];
            const $sort = $('.sort-type')
            $.ajax({
                url: 'http://10.31.161.53/dashboard/yohobuy1/php/list.php',
                dataType: 'json'
            }).done(function(datalist) {
                data = datalist.pagedata;
                let $strhtml = '';
                $.each(data, function(index, value) {
                    $strhtml += `
                        <li>
                            <a href="detail.html?sid=${value.sid}">
                                <img class="lazy" data-original="${value.url}" width="200" height="200"/>
                                <p>${value.title}</p>
                                <span>￥${value.price}</span>
                            </a>
                        </li>
                    `;
                });
                $list.html($strhtml);
                $("img.lazy").lazyload({ effect: "fadeIn" });
                $array_default = [];
                $array = [];
                $('.list-render li').each(function(index, element) {
                    $array_default[index] = $(this);
                    $array[index] = $(this);
                });
                $('.page').pagination({
                    pageCount: datalist.pageno,
                    jump: true,
                    prevContent: '上一页',
                    nextContent: '下一页',
                    callback: function(api) {
                        $('.sort-type').eq(0).addClass('active').siblings('a').removeClass('active');
                        $.ajax({
                            url: 'http://10.31.161.53/dashboard/yohobuy1/php/list.php',
                            data: {
                                page: api.getCurrent()
                            },
                            dataType: 'json'
                        }).done(function(datalist) {
                            data = datalist.pagedata;
                            let $strhtml = '';
                            $.each(data, function(index, value) {
                                $strhtml += `
                                        <li>
                                            <a href="detail.html?sid=${value.sid}">
                                                <img class="lazy" data-original="${value.url}" width="200" height="200"/>
                                                <p>${value.title}</p>
                                                <span>￥${value.price}</span>
                                            </a>
                                        </li>
                                    `;
                            });
                            $list.html($strhtml);
                            $("img.lazy").lazyload({ effect: "fadeIn" });
                            $array_default = [];
                            $array = [];
                            $('.list-render li').each(function(index, element) {
                                $array_default[index] = $(this);
                                $array[index] = $(this);
                            });

                        });
                    }
                });

                $sort.eq(0).on('click', function() {
                    $.each($array_default, function(index, value) {
                        $list.append(value);
                    });
                });
                $sort.eq(1).on('click', function() {
                    for (let i = 0; i < $array.length - 1; i++) {
                        for (let j = 0; j < $array.length - i - 1; j++) {
                            $prev = parseFloat($array[j].find('span').html().substring(1));
                            $next = parseFloat($array[j + 1].find('span').html().substring(1));
                            if ($prev > $next) {
                                let temp = $array[j];
                                $array[j] = $array[j + 1];
                                $array[j + 1] = temp;
                            }
                        }
                    }
                    $.each($array, function(index, value) {
                        $list.append(value);
                    });
                });
                $sort.eq(2).on('click', function() {
                    for (let i = 0; i < $array.length - 1; i++) {
                        for (let j = 0; j < $array.length - i - 1; j++) {
                            $prev = parseFloat($array[j].find('span').html().substring(1));
                            $next = parseFloat($array[j + 1].find('span').html().substring(1));
                            if ($prev < $next) {
                                let temp = $array[j];
                                $array[j] = $array[j + 1];
                                $array[j + 1] = temp;
                            }
                        }
                    }
                    $.each($array, function(index, value) {
                        $list.append(value);
                    });
                });
            });
        }
    }
})