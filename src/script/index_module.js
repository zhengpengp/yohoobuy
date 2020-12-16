define(['jlazyload'], () => {
    return {
        init: function() {

            //logo翻转效果
            setInterval(function() {
                $('h1').toggleClass('logo-cn')
            }, 3000);

            //二级菜单
            const $navlist = $('.nav-li');
            const $navbox = $('.nav-box');
            const $navcontent = $('.nav-content');
            console.log($navcontent);
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


            //轮播图效果
            //获取元素
            const $banner = $('.banner');
            const $piclist = $('.banner-img li');
            const $btnlist = $('.banner-list li');
            const $left = $('.banner-switch .prev');
            const $right = $('.banner-switch .next');
            let $num = 0;
            let $timer1 = null;
            let $timer2 = null;
            //鼠标移入时，获取此时的索引，并执行函数tabswitch，300ms延时，以防操作过快
            $btnlist.on('mouseover', function() {
                $num = $(this).index();
                $timer1 = setTimeout(function() {
                    tabswitch()
                }, 300);
            });
            //鼠标移出时，不改变
            $btnlist.on('mouseout', function() {
                clearTimeout($timer1);
            });
            // 点击右键，切换图片
            $right.on('click', function() {
                $num++;
                if ($num > $btnlist.length - 1) {
                    $num = 0;
                }
                tabswitch()
            });
            // 点击左键，切换图片
            $left.on('click', function() {
                $num--;
                if ($num < 0) {
                    $num = $btnlist.length - 1;
                }
                tabswitch()
            });
            //自动轮播
            $timer2 = setInterval(function() {
                $right.click();
            }, 3000);

            //当鼠标移入banner区域，停止轮播
            $banner.hover(function() {
                clearInterval($timer2);
            }, function() {
                $timer2 = setInterval(function() {
                    $right.click();
                }, 3000);
            });
            //给元素添加类名，修改图片的透明度
            function tabswitch() {
                $btnlist.eq($num).addClass('focus').siblings().removeClass('focus');
                $piclist.eq($num).stop(true).animate({
                    opacity: 1
                }).siblings().stop(true).animate({
                    opacity: 0
                });
            }

            //brand区域轮播
            const $img_brand = $('.img-brand');
            const $ulist = $('.img-brand .img-list');
            const $piclist2 = $('.brand-part1');
            const $leftarrow = $('.brand-left');
            const $rightarrow = $('.brand-right');
            let $timerb = null;
            let $num1 = 0;
            const $liwidth = $piclist2.eq(0).width();
            $ulist.width($liwidth * $piclist2.length);
            $img_brand.hover(function() {
                clearInterval($timerb);
                $leftarrow.show();
                $rightarrow.show();
            }, function() {
                $leftarrow.hide();
                $rightarrow.hide();
                $timerb = setInterval(function() {
                    $rightarrow.click();
                }, 3000);
            });
            $rightarrow.on('click', function() {
                lunboSwitch();
            });
            $leftarrow.on('click', function() {
                $num1 -= 2;
                lunboSwitch();
            });

            function lunboSwitch() {
                $num1++;
                if ($num1 === $piclist2.length) {
                    $ulist.css('left', 0);
                    $num1 = 1;
                }
                if ($num1 === -1) {
                    $ulist.css('left', -$liwidth * $piclist2.length);
                    $num1 = $piclist2.length;
                }
                $ulist.stop(true).animate({
                    left: -$liwidth * $num1
                });
            }
            //自动轮播
            $timerb = setInterval(function() {
                $rightarrow.click();
            }, 3000);






            //渲染商品
            const $goodslist = $('.newgoods-main');
            //1.渲染list.html页面
            $.ajax({
                url: 'http://10.31.161.53/dashboard/yohobuy1/php/indexgoods.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $.each(data, function(index, value) {
                    $strhtml += `
                        <li>
                            <a href="detail.html?sid=${value.sid}">
                                <img src="${value.url}"/>
                                <p>${value.title}</p>
                                <span>￥${value.price}</span>
                            </a>
                        </li>
                    `;
                });
                $goodslist.html($strhtml);
            });

            //点击返回顶部效果
            const $rtop = $('.return-top');
            const $layer = $('.right-floating-layer');

            function scroll() {
                var $scrolltop = $(window).scrollTop();
                if ($scrolltop > 0) {
                    $layer.show();
                } else {
                    $layer.hide();
                };
            };
            scroll();
            $(window).on('scroll', function() {
                scroll();
            });

            $rtop.on("click", function() {
                $('html').animate({
                    scrollTop: 0
                });
            })
        }
    }
})