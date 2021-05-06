$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

  $('.owl-carousel').owlCarousel({
        item:3,
        singleItem: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        loop: true,
        nav: false,
        responsiveClass: true,
        margin: 10,
        responsive:{
            0:{
                items: 1,
                dots: false
            },
            550:{
                items: 2,
                dots: false
            },
            750:{
                items: 3,
                dots: false
            },
            1024:{
                items: 4
            }

        }
    });

