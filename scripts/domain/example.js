
$(document).ready(function() {
  // home slider
  $(".owl-carousel-1").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    navText: false,
    dots: true,
    dotsContainer: '#dots'
  });

  $('.wrap-form select').selectric({
    arrowButtonMarkup: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
  });

  // second slider
  $(".owl-carousel-2").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i></i>'
    ],
    dots: false,
    nav: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      550: {
        items: 1
      },
      767: {
        items: 2,
        nav: true
      },
      1300: {
        items: 3
      }
    }
  });
  
  // custom tabs
  $('.tours .tab-title').click(function (e){
    var activeNumber = e.target.dataset.number
    $('.tours .tab-title').removeClass('active')
    $('.tours .tab-title[data-number="' + activeNumber + '"]').addClass('active');
    $('.tours .tabs-content').removeClass('show');
    $('.tours .tabs-content[data-number="' + activeNumber + '"]').addClass('show');
  });
}); 