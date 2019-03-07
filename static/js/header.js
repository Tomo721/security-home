$('.js-catalog').on('click', function () {
  $(this).toggleClass('open');
  $('.drop-catalog').toggleClass('open');
});

$('.drop-catalog__close').on('click', function () {
  $(this).removeClass('open');
  $('.drop-catalog').removeClass('open');
});

$('.burger').on('click', function () {
  $('.burger-menu').toggleClass('open');
});
