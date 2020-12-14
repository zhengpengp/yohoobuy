define([], () => {
    return {
        init: function() {
            setInterval(function() {
                $('h1').toggleClass('logo-cn')
            }, 3000);
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

            const $img_brand = $('.img-brand');
            const $ulist = $('.img-brand .img-list'); //运动的盒子
            const $piclist2 = $('.brand-part1'); //6个图片
            const $btnlist2 = $('.img-brand ol li'); //5个圈圈
            const $leftarrow = $('.brand-left');
            const $rightarrow = $('.brand-right');
            let $timerb = null;
            let $num1 = 0; //存储索引值
            const $liwidth = $piclist2.eq(0).width(); //1个li的宽度(图片的宽度)
            $ulist.width($liwidth * $piclist2.length);
            $img_brand.hover(function() {
                clearInterval($timerb); //鼠标移入停止自动轮播
                $leftarrow.show();
                $rightarrow.show();
            }, function() {
                $leftarrow.hide();
                $rightarrow.hide();
                $timerb = setInterval(function() { //鼠标移出继续自动轮播。
                    $rightarrow.click();
                }, 3000);
            });
            //4.左右箭头添加点击事件。
            $rightarrow.on('click', function() {
                lunboSwitch();
            });

            $leftarrow.on('click', function() {
                $num1 -= 2; //-1:$ulist迁移一张图片，但是封装函数里面又有++,达到-1的效果，需要-2.
                lunboSwitch();
            });

            //5.代码冗余，进行函数封装
            function lunboSwitch() {
                $num1++;
                console.log($num1, $piclist2.length);
                if ($num1 === $piclist2.length) {
                    $ulist.attr('left', 0);
                    $num1 = 0;
                }
                //判断左箭头
                if ($num1 === -1) {
                    $ulist.attr('left', -$liwidth * $piclist2.length);
                    $num1 = $piclist2.length;
                }
                $ulist.stop(true).animate({
                    left: -$liwidth
                });
            }

            //6.自动轮播
            $timerb = setInterval(function() {
                $rightarrow.click();
            }, 3000);






            //渲染商品
            const $goodslist = $('.newgoods-main');
            //1.渲染list.html页面
            $.ajax({
                url: 'http://localhost/dashboard/yohobuy1/php/indexgoods.php',
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