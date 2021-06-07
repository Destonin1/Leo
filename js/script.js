$(document).ready(function(){

	var slideInterval = 10000;
 	var slideNow = 1;
 	var translateWidth = 0;
 	var slideCount = $('#slidewrapper').children().length;
 	
     var navBtnId = 0;

 $('.slide-nav-btn').click(function() {
         navBtnId = $(this).index();

         if (navBtnId + 1 != slideNow) {
             translateWidth = -$('#viewport').width() * (navBtnId);
             $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
             });

             slideNow = navBtnId + 1;
        }
 });

 $('li#li1').on("click", function(){
 	$(this).css({"border": "2px solid #b7b7b7", "border-bottom": "3px solid #fff"});
 	$('li#li2').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 	$('li#li3').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 	$('li#li4').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 });

  $('li#li2').on("click", function(){
 	$(this).css({"border": "2px solid #b7b7b7", "border-bottom": "3px solid #fff"});
 	$('li#li1').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 	$('li#li3').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 	$('li#li4').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 });

  $('li#li3').on("click", function(){
 	$(this).css({"border": "2px solid #b7b7b7", "border-bottom": "3px solid #fff"});
 	$('li#li1').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 	$('li#li2').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 	$('li#li4').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 });

  $('li#li4').on("click", function(){
 	$(this).css({"border": "2px solid #b7b7b7", "border-bottom": "3px solid #fff"});
 	$('li#li1').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 	$('li#li2').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 	$('li#li3').css({"border": "2px solid transparent", "border-bottom": "3px solid transparent"});
 });

  $('.slider_top').slick({
        autoplay: true,
          autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="ss-btn slide-slick-next"><img src="img/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="ss-btn slide-slick-prev"><img src="img/arrow-right.png"></button>',
        responsive: [
        {
          breakpoint: 576,
              settings: {
                arrows: false,
                dots: true
              }
        }
        ] 
      });

      $('.slider-middle-items').slick({
        arrows: false,
        dots: true,
        customPaging : function(slider) {
              var thumb = $(slider.slides).data('thumb');
            return '<div class="dot-play"><img src="img/icon1.png"></div><p class="under_text">Responsive Websites</p>';
            }
      });

      $('.fa-bars').on('click', function() {
        $('.menu_small').toggleClass('menu_small_active');
      });

      $('.footer_slider').slick();

});