/*
  작성자 : 김혜미
  작성일 : 2022-07-07
  요구기능 : 
  1. 참조사이트 : https://www.jeongyookgak.com/
  2. 베스트 상품 데이터 출력을 위한 업무 사항을 기재하시오.
  3. 총 데이터 항목 개수는 6개
  4. 항목별 이름과 구조를 정의하시오.
*/

// 배열
// 베스트 상품 보기 링크
let itemLinkArr = [];
// 베스트 상품 장바구니 링크
let itemCartArr = [];
// 베스트 상품 이미지
let itemImgArr = [];
// 베스트 상품 타이틀
let itemTitleArr = [];
// 베스트 상품 가격
let itemPriceArr = [];
// /배열

// 객체
let bestItemList = [
  {
    link: "#",
    cart: "#",
    img: "1pork.png",
    title: "초신선 돼지 삼겹살 구이용",
    info: "기준가 23.400원/600g",
  },
  {
    link: "#",
    cart: "#",
    img: "2chicken.png",
    title: "초신선 닭볶음탕",
    info: "기준가 6.700원/950g",
  },
  {
    link: "#",
    cart: "#",
    img: "3porkcutlet.png",
    title: "초신선 등심 돈까스",
    info: "기준가 11.800원/770g",
  },
  {
    link: "#",
    cart: "#",
    img: "4egg.png",
    title: "초신선 동물복지 무항생제 유정란",
    info: "기준가 6.900원/12구",
  },
  {
    link: "#",
    cart: "#",
    img: "5milk.png",
    title: "초신선 무항생제 우유",
    info: "기준가 3.600원/900ml",
  },
  {
    link: "#",
    cart: "#",
    img: "6hanu.png",
    title: "초신선 무항생제 이유식용 하눙 우둔 다짐육",
    info: "기준가 15.300원/180g",
  },
];

// html, css, js 로딩완료
$(document).ready(function () {
  $("html").css("overflow", "hidden");

  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");
  let modalOpen = $(".modalopen");
  let modalCloseFn = () => {
    modalWrap.stop().fadeOut(200);
    $("html").css("overflow", "auto");
    modalOpen.show();
  };

  modalOpen.hide();
  modalClose.click(function () {
    modalCloseFn();
  });
  $("html").keydown(function (key) {
    if (key.keyCode) {
      modalCloseFn();
    }
  });

  let modalMain = $(".modal-main");
  modalMain.click(function (event) {
    event.stopPropagation();
  });
  modalWrap.click(function () {
    modalCloseFn();
  });

  modalOpen.click(function () {
    modalWrap.stop().fadeIn(200);
    $("html").css("overflow", "hidden");
    modalOpen.hide();
  });
});

// html, css, js 멀티미디어까지 로딩완료
window.onload = function () {
  new Swiper(".sw-visual", {
    speed: 250,
    navigation: {
      prevEl: ".sw-visual-prev",
      nextEl: ".sw-visual-next",
    },
    pagination: {
      el: ".sw-benefit-pg",
      type: "fraction",
    },
  });

  $(document).ready(function () {
    //팝업닫기
    let top_ad = $(".ad");
    let ad_close = $(".ad-close");
    ad_close.click(function (event) {
      event.preventDefault();
      top_ad.hide();
    });
  });
  window.onload = function () {};
};
