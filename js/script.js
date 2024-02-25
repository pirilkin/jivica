$(document).ready(function () {

  $('.header-nav__item a').click(function (e) {
    // e.preventDefault();

    $('.header-nav__item a').removeClass('active');

    $(this).addClass('active');

    // var height = $('.header-nav__items').innerHeight();

    var id = $(this).attr('href');

    var pos = $(id).offset().top;

    // console.log(pos);

    $('html').animate({
      scrollTop: pos

    }, 700)
  });

  $('.six-block-order').click(function (e) {
    // e.preventDefault();

    $(this).addClass('active');

    // var height = $('.six-block-order').innerHeight();

    var id = $(this).attr('href');

    var pos = $(id).offset().top;

    // console.log(pos);

    $('html').animate({
      scrollTop: pos
    }, 1000);
    


    // map_initialize();
  })
  //  //из за неработы на iphone
  //  $('.header-list-a').css('cursor', 'pointer');
  // $(document).on('click', '.header-list-a', function (event) {
  //   event.preventDefault()
  //   var height = $('.header-nav__items').innerHeight();

  //   var id = $(this).attr('href');

  //   var pos = $(id).offset().top;

  //   // console.log(pos);

  //   $('html').animate({
  //     scrollTop: pos

  //   }, 700)
  // });
  //из за неработы на iphone
  $('.online_phone').mask('+380 (99) 999-99-99', {
    autoclear: false,
  });

});