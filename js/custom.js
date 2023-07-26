$(function () {


    $('.main').fullpage({
        anchors: ['main', 'sub01', 'sub02', 'sub03'],
        navigator: false,
        css3: false,
        responsiveWidth: 700,
        responsiveHeight: 1,
        afterRender: function () {
            $('.main ').eq(0).addClass('on')
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.main ').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');


    })
    $('.mainvisual').YTPlayer({
        videoURL: 'ITm3YAJxgWA',
        containment: '.mainvisual .itm01',
        showControls: false,
        autoPlay: true,

        playOnlyIfVisible: true,

    });


    $('.mainslide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'

    });

    $('.concept_slide').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


})