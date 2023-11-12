
jQuery(document).ready(function(){
	
  $('.navi>li').mouseover(function(){        
    $(this).find('.submenu, .submenu2').stop().fadeIn(500);
    $(".menu_bg").stop().fadeIn(500);
}).mouseout(function(){
    $(this).find('.submenu, .submenu2').stop().fadeOut(500);
    $(".menu_bg").stop().fadeOut(500);
});

$(function(){

  $('dt').click(function(){
 
   $('dd').hide();
 
   $(this).next('dd').show();
 
   $('dt').removeClass('on');
 
   $(this).addClass('on');
 
  });

});

});
