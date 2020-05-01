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

}); 
