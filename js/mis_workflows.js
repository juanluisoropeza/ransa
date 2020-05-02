$(document).ready(function () {
  /* CAMBIAR ICONOS DE LA FILA DESPLEGABLE */
  $( ".workflows .row_wfl_ppal .div_tbody .item_column .item" ).on( "click", "a.icon_box", function(e) {
    if($(this).hasClass('collapsed')) {
      $(this).parent().parent().parent().addClass('filaAbierta');
      $(this).find(".icon-icon_arrow-down1")
            .removeClass("icon-icon_arrow-down1")
            .addClass("icon-icon_arrow-right");
    } else {
      $(this).parent().parent().parent().removeClass('filaAbierta');
      $(this).find(".icon-icon_arrow-right")
            .removeClass("icon-icon_arrow-right")
            .addClass("icon-icon_arrow-down1");
    }
  });

  
  /* CAMBIAR ICONOS DE LA FILA INTERNA DESPLEGABLE */
  $( ".workflows .row_wfl_ppal .div_tbody .item_column .item" ).on( "click", "a.intern_clp_link", function(e) {
    if($(this).hasClass('collapsed')) {
      $(this).parent().parent().parent().addClass('filaAbierta');
      $(this).find(".icon-icon_arrow-down1")
            .removeClass("icon-icon_arrow-down1")
            .addClass("icon-icon_arrow-right");
    } else {
      $(this).parent().parent().parent().removeClass('filaAbierta');
      $(this).find(".icon-icon_arrow-right")
            .removeClass("icon-icon_arrow-right")
            .addClass("icon-icon_arrow-down1");
    }
  });

  /* opcion del dropdown que cuando se abre si no cabe scrolee la tabla */
  /*
  $('.row_wfl_ppal').on('shown.bs.dropdown', function (e) {
    var $table = $(this),
        $menu = $(e.target).find('.dropdown-menu'),
        tableOffsetHeight = $table.offset().top + $table.height(),
        menuOffsetHeight = $menu.offset().top + $menu.outerHeight(true);

    if (menuOffsetHeight > tableOffsetHeight)
      $table.css("padding-bottom", menuOffsetHeight - tableOffsetHeight);
  });

  $('.row_wfl_ppal').on('hide.bs.dropdown', function () {
    $(this).css("padding-bottom", 0);
  })
  */
}); 

$(document).on('shown.bs.dropdown', '.rw_ddfloat', function (e) {
  // get the padding right in the table
  let right = $('.screens_with_tables .swb_wflow');
  let paddingRight = parseInt(right.css('padding-right'));
  // The .dropdown container
  var $container = $(e.target);

  // Find the actual .dropdown-menu
  var $dropdown = $container.find('.dropdown-menu');
  if ($dropdown.length) {
      // Save a reference to it, so we can find it after we've attached it to the body
      $container.data('dropdown-menu', $dropdown);
  } else {
      $dropdown = $container.data('dropdown-menu');
  }

  $dropdown.css('top', ($container.offset().top + $container.outerHeight() - 20) + 'px');
  $dropdown.css('right', (paddingRight)+'px');
  $dropdown.css('left', 'auto');
  $dropdown.css('position', 'absolute');
  $dropdown.css('display', 'block');
  $dropdown.appendTo('body');
});

$(document).on('hide.bs.dropdown', '.rw_ddfloat', function (e) {
  // Hide the dropdown menu bound to this button
  $(e.target).data('dropdown-menu').remove();
});
