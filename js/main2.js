// DOM Content Loaded
$(function(){


    console.log('読み込んだよ');

    $('.slick').slick({
   asNavFor:'.thumbnail',
   arrows: true,
   slidesToShow:1,
   autoplay: true,
   adaptiveHeight: false,
   autoplaySpeed:2600,//スピード 5秒=5,000
   fade:true, //スライドをフェードで切り替え
   speed:1500,
   pauseOnHover: false,//ホバーしたときにスライドショー止まるか
   prevArrow:'<div class="slide-arrow prev-arrow"><i class="fas fa-angle-left"></i></div>',
   nextArrow:'<div class="slide-arrow next-arrow"><i class="fas fa-angle-right"></i></div>',
 });
 $('.thumbnail').slick({
   asNavFor:'.slick',
   focusOnSelect: true,
   centerMode:true,
   centerPadding: '10%',
   arrows: false,
   slidesToShow:5,
 });

 //ナビゲーション
     var $win = $(window),
     $cloneNav = $('header').clone().addClass('clone-nav').appendTo('body'),
     showClass = 'is-show';

    $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 670 ) {
     $cloneNav.addClass(showClass);
    } else {
     $cloneNav.removeClass(showClass);
    }
    });


    // $(window).on('scroll',function(){
    //       // 上からのスクロール値
    //       var dy = $(this).scrollTop();
    //       // console.log(dy);
    //
    //       // #works .containerの高さを取得
    //       var worksContainerTop = $('nav').find('.container').offset().top;
    //       // console.log(worksContainerTop);
    //
    //       // スクロールが#works .containerのY座標を超えらたら
    //       if(dy >= worksContainerTop - $(window).height()){
    //           // sectionに.fade-inのクラスを追加する
    //           $('nav').find('.container').addClass('is-show');
    //       }
    //   });








 });
