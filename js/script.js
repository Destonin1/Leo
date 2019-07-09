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
 	$('li#li2').css({"border": "none"});
 	$('li#li3').css({"border": "none"});
 	$('li#li4').css({"border": "none"});
 });

  $('li#li2').on("click", function(){
 	$(this).css({"border": "2px solid #b7b7b7", "border-bottom": "3px solid #fff"});
 	$('li#li1').css({"border": "none"});
 	$('li#li3').css({"border": "none"});
 	$('li#li4').css({"border": "none"});
 });

  $('li#li3').on("click", function(){
 	$(this).css({"border": "2px solid #b7b7b7", "border-bottom": "3px solid #fff"});
 	$('li#li1').css({"border": "none"});
 	$('li#li2').css({"border": "none"});
 	$('li#li4').css({"border": "none"});
 });

  $('li#li4').on("click", function(){
 	$(this).css({"border": "2px solid #b7b7b7", "border-bottom": "3px solid #fff"});
 	$('li#li1').css({"border": "none"});
 	$('li#li2').css({"border": "none"});
 	$('li#li3').css({"border": "none"});
 });

});