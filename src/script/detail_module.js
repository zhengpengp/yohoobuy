define(['jcookie'], () => {
    return {
        init: function() {
            let $sid = location.search.substring(1).split('=')[1];

            if (!$sid) {
                $sid = 1;
            }
            $.ajax({
                url: 'http://10.31.161.53/dashboard/yohobuy1/php/detail.php',
                data: {
                    sid: $sid
                },
                dataType: 'json'
            }).done(function(data) {
                $('#smallpic').attr('src', data.url);
                $('.loadtitle').html(data.title);
                $('.loadpcp').html(data.price);
                $('#bpic').attr('src', data.url);

                let $picurl = data.urls.split(',');
                let $strhtml = '<ul>';
                const $list = $('#list');
                $.each($picurl, function(index, value) {
                    $strhtml += `<li><img src="${value}"/></li>`;
                });
                $strhtml += '<ul>';
                $list.html($strhtml);
            });
            $('#main-li li:first-child').addClass('active');
            const $spic = $('#spic');
            const $bpic = $('#bpic');
            const $small = $('#smallpic')
            const $sf = $('#sf');
            const $bf = $('#bf');
            const $list = $('#list');

            $sf.width($spic.width() * $bf.width() / $bpic.width());
            $sf.height($spic.height() * $bf.height() / $bpic.height());
            let $bili = $bpic.width() / $spic.width();
            $spic.hover(function() {
                $sf.css('visibility', 'visible');
                $bf.css('visibility', 'visible');
                $(this).on('mousemove', function(ev) {
                    let $leftvalue = ev.pageX - $('.goodsinfo').offset().left - $sf.width() / 2;
                    let $topvalue = ev.pageY - $('.goodsinfo').offset().top - $sf.height() / 2;
                    if ($leftvalue < 0) {
                        $leftvalue = 0;
                    } else if ($leftvalue >= $spic.width() - $sf.width()) {
                        $leftvalue = $spic.width() - $sf.width()
                    }

                    if ($topvalue < 0) {
                        $topvalue = 0;
                    } else if ($topvalue >= $spic.height() - $sf.height()) {
                        $topvalue = $spic.height() - $sf.height()
                    }

                    $sf.css({
                        left: $leftvalue,
                        top: $topvalue
                    });

                    $bpic.css({
                        left: -$leftvalue * $bili,
                        top: -$topvalue * $bili
                    });

                });
            }, function() {
                $sf.css('visibility', 'hidden');
                $bf.css('visibility', 'hidden');
            });
            // $(window).on('reload', '#main-li:first-child', function() {
            //     addClass('active');
            // });
            $list.on('mouseover', 'li', function() {
                $(this).addClass('active').siblings().removeClass('active');
                let $imgurl = $(this).find('img').attr('src');
                $small.attr('src', $imgurl);
                $bpic.attr('src', $imgurl);
            });
            let arrsid = [];
            let arrnum = [];

            $list.on('mouseover', 'img', function() {

            })


            function getcookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    arrsid = $.cookie('cookiesid').split(',');
                    arrnum = $.cookie('cookienum').split(',');
                }
            }

            $('.p-btn a').on('click', function() {
                getcookietoarray();
                if ($.inArray($sid, arrsid) === -1) {
                    arrsid.push($sid);
                    $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
                    arrnum.push($('#count').val());
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
                } else {
                    let $index = $.inArray($sid, arrsid);
                    arrnum[$index] = parseInt(arrnum[$index]) + parseInt($('#count').val());
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
                }
            });

            $('.p-btn a').on('click', function() {
                $(this).css('background-color', 'red');
                $('.success').css('display', 'block')
            })






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
});