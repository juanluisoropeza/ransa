$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.fixed-nav-inner').toggleClass('open-nav')
  });
  $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });

  /* NEW MENU */

  $('.nav-toggle').click(function(e) {  
    e.preventDefault();
    $("#nav_sidebar").toggleClass("open_nav");
    $("#nav_sidebar").toggleClass("enter");
    if(!$("#nav_sidebar").hasClass( "enter" )) {
      $('.submenu-link').removeClass('opened');
      $('.thirdmenu-link').removeClass('opened');
    }
  });

  $('.submenu-link').click(function(e) {
    e.preventDefault();
    $(this).toggleClass("opened");
    $(this).parent().find(".sub-menu-dropdown").toggleClass("show");
  });

  $('.thirdmenu-link').click(function(e) {
    e.preventDefault();
    $(this).toggleClass("opened");
    $(this).parent().find(".third-menu-dropdown").toggleClass("show");
  });

  /* THEAD EN TABLAS STICKY */
  $("#table_scroll").scroll(function(){
    var scrollTop = $("#table_scroll").scrollTop();
    if(scrollTop != 0)
        $('#thead_sticky').addClass("fijar_thead");
    else    
        $('#thead_sticky').removeClass("fijar_thead");
});
  
});