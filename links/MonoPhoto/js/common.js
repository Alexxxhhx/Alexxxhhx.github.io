$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
    });

