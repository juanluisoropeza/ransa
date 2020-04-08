$(document).ready(function () {


  /* AGREGANDO EL ICONO DE FLECHA EN EL INPUT DE BUSQUEDA DEL DATATABLE */

  $("#table_id_filter label").append('<button type="button" data-toggle="modal" data-target="#modalTableSearch"> <span class="dropdown-toggle"></span> </button>');
  
  /* AGREGANDO EL ICONO DE LA LUPA PARA EL INPUT DE BUSQUEDA DEL DATATABLE */

  $("#table_id_filter label").prepend('<div class="input-group-prepend"> <span class="input-group-text icon_search"> <i class="icon-icon_search"></i> </span> </div>');



});