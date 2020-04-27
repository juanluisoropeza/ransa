$(document).ready(function () {
  /* CAMBIAR ICONOS DE LA FILA DESPLEGABLE */
  $( ".workflows .content_table .div_table_wfl .div_tbody .table_row .tddiv_elements" ).on( "click", "a.icon_box", function(e) {
    if($(this).hasClass('collapsed')) {
      $(this).parent().parent().addClass('filaAbierta');
      $(this).find(".icon-icon_arrow-down1")
            .removeClass("icon-icon_arrow-down1")
            .addClass("icon-icon_arrow-right");
    } else {
      $(this).parent().parent().removeClass('filaAbierta');
      $(this).find(".icon-icon_arrow-right")
            .removeClass("icon-icon_arrow-right")
            .addClass("icon-icon_arrow-down1");
    }
  });

  
  /* CAMBIAR ICONOS DE LA FILA INTERNA DESPLEGABLE */
  $( ".workflows .content_table .div_table_wfl .div_tbody .table_row .tddiv_elements" ).on( "click", "a.intern_clp_link", function(e) {
    if($(this).hasClass('collapsed')) {
      $(this).parent().parent().addClass('filaAbierta');
      $(this).find(".icon-icon_arrow-down1")
            .removeClass("icon-icon_arrow-down1")
            .addClass("icon-icon_arrow-right");
    } else {
      $(this).parent().parent().removeClass('filaAbierta');
      $(this).find(".icon-icon_arrow-right")
            .removeClass("icon-icon_arrow-right")
            .addClass("icon-icon_arrow-down1");
    }
  });

});