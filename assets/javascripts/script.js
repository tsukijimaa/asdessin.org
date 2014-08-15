jQuery( document ).ready( function($) {
  $(".menu li").hover(function() {
    $(this).children('ul').show();
  }, function() {
    $(this).children('ul').hide();
  });
});
