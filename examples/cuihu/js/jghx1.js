    $(function() {
        //判断当全是中式1还是法式2
        var zf = 1;
        var hx = 'w1';
        $('.thyorhty li').click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var num = $(this).index();
            switch (num) {
                case 0:
                    $('.xulie').attr('src', 'w1.html');
                    $('.map').removeClass('fsm');
                    $('.map').addClass('zsm');
                    $('.housemess').attr('style', 'background: url("img/zshx/TXT/w1-TXT.png")  no-repeat center;background-size:67% 65%;')
                    zf = 1;
                    hx = 'w1';
                    break;
                case 1:
                    $('.xulie').attr('src', 'Q7.html');
                    $('.map').removeClass('zsm');
                    $('.map').addClass('fsm');
                    $('.housemess').attr('style', 'background: url("img/fshx/TXT/Q7-TXT.png")  no-repeat center;background-size: 67% 65%;')
                    zf = 2;
                    hx = 'Q7';
                    break;
            }
        });
        $('.map').click(function () {
            $('.goback').show();
            if (zf == 1) {
                $('.zs').show();
            } else {
                $('.fs').show();
            }
        })
        $('.goback').click(function () {
            $(this).hide();
            $('.bigmap1').hide();
            $('.pmt2').hide();
            $('.l2').hide();
            $('.l3').hide();
            $('.snqj').hide();
            $('.qjlist').hide();
            $('.pmt').find('i').removeClass('active');
        });
        $('.fslouking').click(function () {
            hx = 'w2';
            $('.fs .mapshow').attr('style', 'background: url(img/fshx/w2-map0.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.fsalone li').eq(0).click(function () {
            hx = 'Q1';
            $('.fs .mapshow').attr('style', 'background: url(img/fshx/Q1-map0.png) no-repeat bottom;background-size: 100% 100%;')
        });
        $('.fsalone li').eq(1).click(function () {
            hx = 'Q2';
            $('.fs .mapshow').attr('style', 'background: url(img/fshx/Q2-map0.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.fsalone li').eq(2).click(function () {
            hx = 'Q3';
            $('.fs .mapshow').attr('style', 'background: url(img/fshx/Q3-map0.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.fsalone li').eq(3).click(function () {
            hx = 'Q4';
            $('.fs .mapshow').attr('style', 'background: url(img/fshx/Q4-map0.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.fsalone li').eq(4).click(function () {
            hx = 'Q6a';
            $('.fs .mapshow').attr('style', 'background: url(img/fshx/Q6a-map0.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.fsalone li').eq(5).click(function () {
            hx = 'Q6';
            $('.fs .mapshow').attr('style', 'background: url(img/fshx/Q6-map0.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.fsalone li').eq(6).click(function () {
            hx = 'Q7';
            $('.fs .mapshow').attr('style', 'background: url(img/fshx/Q7-map0.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.louking li').click(function () {
            hx = 'W1';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-w1.png) no-repeat bottom;background-size: 85% 95%;')
        })
        $('.alone li').eq(0).click(function () {
            hx = 'ZQ1';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-q1.png) no-repeat bottom;background-size: 100% 100%:')
        })
        $('.alone li').eq(1).click(function () {
            hx = 'ZQ2';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-q2.png) no-repeat bottom;background-size: 100% 100%:')
        })
        $('.alone li').eq(2).click(function () {
            hx = 'ZQ3';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-q3.png) no-repeat bottom;background-size: 100% 100%:')
        })
        $('.alone li').eq(3).click(function () {
            hx = 'ZQ4';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-q4.png) no-repeat bottom;background-size: 100% 100%:')
        })
        $('.toghter li').eq(0).click(function () {
            hx = 'Z1';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z1.png) no-repeat bottom;background-size: 100% 100%;')
        });
        $('.toghter li').eq(1).click(function () {
            hx = 'Z1a';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z1a.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(2).click(function () {
            hx = 'Z2';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z2.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(3).click(function () {
            hx = 'Z3';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z3.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(4).click(function () {
            hx = 'Z4';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z4.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(5).click(function () {
            hx = 'Z5';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z5.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(6).click(function () {
            hx = 'Z5a';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z5a.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(7).click(function () {
            hx = 'Z6';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z6.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(8).click(function () {
            hx = 'Z6a';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z6a.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(9).click(function () {
            hx = 'Z7';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z7.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.toghter li').eq(10).click(function () {
            hx = 'Z7a';
            $('.zs .mapshow').attr('style', 'background: url(img/zshx/map/bjt-z7a.png) no-repeat bottom;background-size: 100% 100%;')
        })
        $('.mapshow').click(function () {
            $('.pmt2').show();
            switch (hx) {
                case 'w2':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/w2-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Q1':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q1-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Q2':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q2-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Q3':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q3-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Q4':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q4-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Q6a':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q6a-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Q6':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q6-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Q7':
                    $('.goback').hide();
                    $('.bigmap1').hide();
                    $('.pmt2').hide();
                    $('.l2').hide();
                    $('.l3').hide();
                    $('.pmt').find('i').removeClass('active');
                    break;
                case 'W1':
                    $('.goback').hide();
                    $('.bigmap1').hide();
                    $('.l2').hide();
                    $('.l3').hide();
                    $('.pmt').attr('style', 'display:none');
                    $('.pmt').find('i').removeClass('active');
                    break;
                case 'ZQ1':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q1-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'ZQ2':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q2-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'ZQ3':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q3-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'ZQ4':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q4-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Z1':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z1-1.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l2').show();
                    break;
                case 'Z1a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z1a-1.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l2').show();
                    break;
                case 'Z2':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z2-1.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l2').show();
                    break;
                case 'Z3':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z3-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Z4':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z4-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Z5':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z5-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Z5a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z5a-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Z6':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z6-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Z6a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z6a-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Z7':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z7-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
                case 'Z7a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z7a-2.png) no-repeat bottom;background-size: 100% 100%;');
                    $('.l3').show();
                    break;
            }

        })
        $('.l3 li').eq(0).click(function () {
            $(this).find('i').addClass('active');
            $(this).siblings().find('i').removeClass('active');
            switch (hx) {
                case 'w2':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/w2-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q1':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q1-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q2':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q2-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q3':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q3-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q4':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q4-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q6a':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q6a-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q6':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q6-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ1':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q1-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ2':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q2-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ3':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q3-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ4':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q4-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;



                case 'Z3':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z3-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z4':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z4-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z5':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z5-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z5a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z5a-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z6':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z6-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z6a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z6a-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z7':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z7-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z7a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z7a-2.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
            }
        })
        $('.l3 li').eq(1).click(function () {
            $(this).find('i').addClass('active');
            $(this).siblings().find('i').removeClass('active');
            switch (hx) {
                case 'w2':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/w2-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q1':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q1-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q2':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q2-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q3':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q3-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q4':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q4-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q6a':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q6a-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q6':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q6-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ1':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q1-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ2':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q2-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ3':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q3-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ4':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q4-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;



                case 'Z3':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z3-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z4':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z4-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z5':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z5-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z5a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z5a-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z6':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z6-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z6a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z6a-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z7':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z7-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z7a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z7a-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
            }
        })
        $('.l3 li').eq(2).click(function () {
            $(this).find('i').addClass('active');
            $(this).siblings().find('i').removeClass('active');
            switch (hx) {
                case 'w2':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/w2-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q1':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q1-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q2':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q2-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q3':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q3-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q4':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q4-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q6a':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q6a-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Q6':
                    $('.pmtshow').attr('style', 'background: url(img/fshx/hxcc/Q6-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ1':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q1-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ2':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q2-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ3':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q3-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'ZQ4':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Q4-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;



                case 'Z3':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z3-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z4':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z4-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z5':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z5-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z5a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z5a-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z6':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z6-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z6a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z6a-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z7':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z7-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z7a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z7a-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
            }
        })
        $('.l2 li').eq(0).click(function () {
            $(this).find('i').addClass('active');
            $(this).siblings().find('i').removeClass('active');
            switch (hx) {

                case 'Z1':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z1-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z1a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z1a-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z2':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z2-1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
            }
        })
        $('.l2 li').eq(1).click(function () {
            $(this).find('i').addClass('active');
            $(this).siblings().find('i').removeClass('active');
            switch (hx) {

                case 'Z1':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z1-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z1a':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z1a-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
                case 'Z2':
                    $('.pmtshow').attr('style', 'background: url(img/zshx/hxcc/Z2-f1.png) no-repeat bottom;background-size: 100% 100%;');
                    break;
            }
        });
        $('.ffhh').click(function(){
            $(this).hide();
            $('.hhff').show();
            $('.thyorhty').hide();
            $('.vrkanfang').show();
            $('.choice2').show();
            if( zf == 1){
                $('.xulie').attr('src','w1_f1.html')
            }else {
                $('.xulie').attr('src','Q7_f1.html')
            }
        })
        $('.hhff').click(function(){
            $('.qjlist').hide();
            $(this).hide();
            $('.ffhh').show();
            $('.thyorhty').show();
            $('.vrkanfang').hide();
            $('.choice2').hide();
            if( zf == 1){
                $('.xulie').attr('src','w1.html')
            }else {
                $('.xulie').attr('src','Q7.html')
            }
        })
        $('.vrkanfang li').click(function(){
            $(this).find('i').addClass('active');
            $(this).siblings().find('i').removeClass('active');
            var num = $(this).index();
            if(zf == 1){
                switch (num) {

                    case 0:
                        $('.xulie').attr('src','w1_f1.html')
                        break;
                    case 1:
                        $('.xulie').attr('src','w1_1.html')
                        break;
                    case 2:
                        $('.xulie').attr('src','w1_2.html')
                        break;
                }
            }else {
                switch (num) {

                    case 0:
                        $('.xulie').attr('src','Q7_f1.html')
                        break;
                    case 1:
                        $('.xulie').attr('src','Q7_1.html')
                        break;
                    case 2:
                        $('.xulie').attr('src','Q7_2.html')
                        break;
                }
            }
        })
        $('.choice2 div').click(function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            $('.qjlist').hide();
                var num = $(this).index();
            switch (num) {

                case 0:
                    $('.hhff').show();
                    $('.ffhh').hide();
                    $('.thyorhty').hide();
                    $('.vrkanfang').show();
                    $('.choice2').show();
                    if( zf == 1){
                        $('.xulie').attr('src','w1_f1.html')
                    }else {
                        $('.xulie').attr('src','Q7_f1.html')
                    }
                    break;
                case 1:
                    $('.ffhh').show();
                    $('.hhff').hide();
                    $('.thyorhty').show();
                    $('.vrkanfang').hide();
                    $('.choice2').hide();
                    if( zf == 1){
                        $('.xulie').attr('src','w1.html')
                    }else {
                        $('.xulie').attr('src','Q7.html')
                    }
                    break;
                case 2:
                    $('.qjlist').show();
                    $('.qjlist').removeClass('zsqj');
                    $('.qjlist').removeClass('fsqj');
                    if(zf == 1){
                        $('.qjlist').addClass('zsqj')
                    }else{
                        $('.qjlist').addClass('fsqj')
                    }
                    break;

            }
        })
        $('.zsqj li').click(function(){
            $('.goback').show();
            $('.snqj').show();
            var num = $(this).index();
            switch (num) {

                case 0:
                    $('.snqj').attr('src','qj/41/pano/index.html');
                    break;
                case 1:
                    $('.snqj').attr('src','qj/40/pano/index.html');
                    break;
                case 2:
                    $('.snqj').attr('src','qj/42/pano/index.html');
                    break;
                case 3:
                    $('.snqj').attr('src','qj/43/pano/index.html');
                    break;
                case 4:
                    $('.snqj').attr('src','qj/44/pano/index.html');
                    break;
                case 5:
                    $('.snqj').attr('src','qj/45/pano/index.html');
                    break;
                case 6:
                    $('.snqj').attr('src','qj/46/pano/index.html');
                    break;
                case 7:
                    $('.snqj').attr('src','qj/49/pano/index.html');
                    break;
                case 8:
                    $('.snqj').attr('src','qj/48/pano/index.html');
                    break;
                case 9:
                    $('.snqj').attr('src','qj/52/pano/index.html');
                break;
                case 10:
                    $('.snqj').attr('src','qj/53/pano/index.html');
                    break;
                case 11:
                    $('.snqj').attr('src','qj/50/pano/index.html');
                    break;
                case 12:
                    $('.snqj').attr('src','qj/51/pano/index.html');
                break;
                case 13:
                    $('.snqj').attr('src','qj/54/pano/index.html');
                    break;
                case 14:
                    $('.snqj').attr('src','qj/55/pano/index.html');
                    break;




            }
        })
        $('.fsqj li').click(function(){
            $('.goback').show();
            $('.snqj').show();
            var num = $(this).index();
            switch (num) {
                case 0:
                    $('.snqj').attr('src','qj/57/pano/index.html');
                    break;
                case 1:
                    $('.snqj').attr('src','qj/56/pano/index.html');
                    break;
                case 2:
                    $('.snqj').attr('src','qj/60/pano/index.html');
                    break;
                case 3:
                    $('.snqj').attr('src','qj/58/pano/index.html');
                    break;
                case 4:
                    $('.snqj').attr('src','qj/59/pano/index.html');
                    break;
                case 5:
                    $('.snqj').attr('src','qj/61/pano/index.html');
                    break;
                case 6:
                    $('.snqj').attr('src','qj/62/pano/index.html');
                    break;
                case 7:
                    $('.snqj').attr('src','qj/63/pano/index.html');
                    break;
                case 8:
                    $('.snqj').attr('src','qj/64/pano/index.html');
                    break;
                case 9:
                    $('.snqj').attr('src','qj/65/pano/index.html');
                    break;
                case 10:
                    $('.snqj').attr('src','qj/70/pano/index.html');
                    break;
                case 11:
                    $('.snqj').attr('src','qj/69/pano/index.html');
                    break;
                case 12:
                    $('.snqj').attr('src','qj/68/pano/index.html');
                    break;
                case 13:
                    $('.snqj').attr('src','qj/67/pano/index.html');
                    break;
                case 14:
                    $('.snqj').attr('src','qj/66/pano/index.html');
                    break;
            }
        })
    })