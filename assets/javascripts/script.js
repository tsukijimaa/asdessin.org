jQuery( document ).ready( function($) {
  $(".menu li").hover(function() {
    $(this).children('ul').show();
  }, function() {
    $(this).children('ul').hide();
  });

  $("#info-press").hide();
  $("#news-list-tab li").click(function(){
    var info_type = $(this).attr("id").split("tab-")[1];
    $(".news-contents dl").removeClass("active");
    $("#info-" + info_type).addClass("active");
    $("#news-list-tab li").removeClass("tab-selected");
    $(this).addClass("tab-selected");
    $(".news-contents dl:not('.active')").fadeOut();
    $(".news-contents dl.active").fadeIn();
  });
});
