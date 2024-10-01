$(function () {

  $(function () {
    $('a[href^="#"]').click(function () {
      var adjust = 0;
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });

  // ハンバーガーメニュー
  $(".openbtn1").click(function () {

    $(this).toggleClass('active');
    $(".sp_btn").toggleClass('active');
    $(".l-sp-header__nav-wrap").toggleClass('active');
    $(".sp_back").toggleClass('active');
    $(".popup-bg-cover").toggleClass('active');
  });
  $(".l-sp-header__nav-wrap").click(function () {

    $(this).toggleClass('active');
    $(".sp_btn").toggleClass('active');
    $(".sp_back").toggleClass('active');
    $(".popup-bg-cover").toggleClass('active');
    $(".openbtn1").toggleClass('active');
  });

  // スマホナビ


// ふわっと
  window.addEventListener("scroll", function () {
    const elm = document.querySelector("header");
    const scroll = window.pageYOffset;
    if (scroll > 500) {
      elm.classList.add("active");
    } else {
      elm.classList.remove("active");
    }
  });

  // acodion

  $('.accordion-header').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });


  // #page-topをクリックした際の設定
  $('#page-top').click(function () {
    $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
    }, 100);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
  });

  // page-top　スクロールで出現
  window.addEventListener("scroll", function () {
    const elm = document.querySelector("#page-top");
    const scroll = window.pageYOffset;
    if (scroll > 500) {
      elm.classList.add("show");
    } else {
      elm.classList.remove("show");
    }
  });


  jQuery(function ($) {
    $(function () {
      $('.modal01').on('click', function () {
        $('.p-prize__modal.01').toggleClass('show');
      });
      $('.p-prize__modal.01').on('click', function () {
        $('.p-prize__modal.01').toggleClass('show');
      });
      $('.modal02').on('click', function () {
        $('.p-prize__modal.02').toggleClass('show');
      });
      $('.p-prize__modal.02').on('click', function () {
        $('.p-prize__modal.02').toggleClass('show');
      });

      $('.modal03').on('click', function () {
        $('.p-prize__modal.03').toggleClass('show');
      });
      $('.p-prize__modal.03').on('click', function () {
        $('.p-prize__modal.03').toggleClass('show');
      });

      $('.modal04').on('click', function () {
        $('.p-prize__modal.04').toggleClass('show');
      });
      $('.p-prize__modal.04').on('click', function () {
        $('.p-prize__modal.04').toggleClass('show');
      });

      $('.modal05').on('click', function () {
        $('.p-prize__modal.05').toggleClass('show');
      });
      $('.p-prize__modal.05').on('click', function () {
        $('.p-prize__modal.05').toggleClass('show');
      });

    });
  });




});
