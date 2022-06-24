// html, css, js 로딩완료
$(document).ready();

// html, css, js 멀티미디어까지 로딩완료
window.onload = function () {
  // visual 슬라이드
  new Swiper('.sw-visual', {
    speed: 250,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    },
    pagination: {
      el: '.sw-benefit-pg',
      type: 'fraction'
    }
  });

$(document).ready(function(){
  //팝업닫기
  let top_ad = $('.ad');
  let ad_close = $('.ad-close');
  ad_close.click(function(event){
    // a태그 href 기능 막기
    event.preventDefault();
    top_ad.hide();
  });
});
window.onload = function () {};

}