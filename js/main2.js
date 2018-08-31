// DOM Content Loaded
$(function(){


    console.log('読み込んだよ');

    $('.slick').slick({
   asNavFor:'.thumbnail',
   arrows: true,
   slidesToShow:1,
   autoplay: true,
   adaptiveHeight: true,
   autoplaySpeed:2600,//スピード 5秒=5,000
   fade:true, //スライドをフェードで切り替え
   speed:1500,
   pauseOnHover: false,//ホバーしたときにスライドショー止まるか
   prevArrow:'<div class="arrow prev">PREV</div>',
   nextArrow:'<div class="arrow next">NEXT</div>',
 });
 $('.thumbnail').slick({
   asNavFor:'.slick',
   focusOnSelect: true,
   centerMode:true,
   arrows: false,
   slidesToShow:5,
 });

 //ナビゲーション
     var $win = $(window),
     $cloneNav = $('nav').clone().addClass('clone-nav').appendTo('body'),
     showClass = 'is-show';

    $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
     $cloneNav.addClass(showClass);
    } else {
     $cloneNav.removeClass(showClass);
    }
    });
 });
