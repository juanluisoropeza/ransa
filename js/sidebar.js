$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.fixed-nav-inner').toggleClass('open-nav')
  });
  $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });


  

  /*$("#menu-toggle").on("click", function(){
    $("#nav_sidebar").removeClass("enter");
  });*/

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


  /* MENU OPCION DESPLEGABLE / BUSQUEDA HEADER */

  $('#ddm_busqueda .select2-selection__arrow').click(function(){
    $(".select2-container--open").addClass("select2-header-option");
  });
  $('.dropdown').on('hide.bs.dropdown', function() {
    $('.select2-container--open').removeClass();
  });
  
});