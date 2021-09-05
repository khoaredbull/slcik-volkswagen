
// $('.banner-car-warapper').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });
var $status = $('.number');
var $slickElement = $('.banner-car-warapper');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  autoplay: false,
  dots: true
});
document.querySelector('.slick-dots li:first-child').innerHTML = '<span class="count">1</span>'
document.querySelector('.slick-dots li:nth-child(2)').innerHTML = '<span class="count">2</span>'
document.querySelector('.slick-dots li:nth-child(3)').innerHTML = '<span class="count">3</span>'
document.querySelector('.slick-dots li:nth-child(4)').innerHTML = '<span class="count">4</span>'
document.querySelector('.slick-dots li:nth-child(5)').innerHTML = '<span class="count">5</span>'
