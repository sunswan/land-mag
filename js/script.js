// Tab acordeon

$(document).ready(function () {
    $('.FAQ__heading').click(function () {
        $(this).toggleClass('in').next().slideToggle();
    });
});

// hamburger menu
$(function () {
  $('.header__burger').on("click", function () {
    $('#navy').slideToggle("500, linear");
    $('body').toggleClass('overlay');
  });
});

jQuery(function ($) {
  $(document).mouseup(function (e) { 
    let div = $("#navy"); 
    if (!div.is(e.target) 
      || div.is(e.target)) { 
      div.hide("slow"); 
    }
  });
});