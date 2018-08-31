// DOM Content Loaded
$(function(){


    console.log('読み込んだよ');

    // スライドショー
    $('.slider').slick({
        arrows: false, //スライド右と左の矢印。矢印表示自体はcssで
        autoplay: true,//自動再生
        adaptiveHeight: true,//高さの自動調整
        dots: true, //スライドしたの小さい丸。スライダ。丸の位置はslick-theme.cssの.slick-dotsを変える。色は要素検証でどこ変えればいいかわかる。
        autoplaySpeed:2600,//スピード 5秒=5,000
        fade:true, //スライドをフェードで切り替え
        speed:1500,
        pauseOnHover: false//ホバーしたときにスライドショー止まるか

    });

//     <script>　
// $(document).ready(function(){
//  　$('.your-class').slick({
//  　　autoplay: true,
//  　　adaptiveHeight: true,
//  　　arrows: true,
//  　　prevArrow:'<div class="prev">PREV</div>',
//  　　nextArrow:'<div class="next">NEXT</div>'
//  　});
//  });
// </script>
//
//     $('.slick').slick({
//    asNavFor:'.thumbnail',
//    arrows: true,
//    slidesToShow:1,
//    prevArrow:'<div class="arrow prev">PREV</div>',
//    nextArrow:'<div class="arrow next">NEXT</div>',
//  });
//  $('.thumbnail').slick({
//    asNavFor:'.slick',
//    focusOnSelect: true,
//    arrows: false,
//    slidesToShow:4,
//  });



});
