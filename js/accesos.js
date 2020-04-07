$(document).ready(function () {
  
  var table = $('#table_id').DataTable({
    'language': { /* TRADUCCION */
      'lengthMenu': 'Mostrando _MENU_ registros por página',
      'zeroRecords': 'La base de datos esta vacía',
      'info': 'Mostrando _PAGE_ paginas de _PAGES_',
      'search': '',
      'infoEmpty': 'No hay registros disponibles',
      'infoFiltered': '(filtrado de _MAX_ registros en total)',
      'paginate': {
        'next': '<span class="icon-icon_arrow-next"></span>',
        'previous': '<span class="icon-icon_arrow-prev"></span>'
      }
    },
    'order': [[ 2, 'desc' ]], /* por defecto la columna por la q se ordenan los registros.. se cuenta de 0 en adelante, en este caso es la 3ra columna [0,1,2] */
    "pageLength": 5, /* REGISTROS POR PAGINA POR DEFECTO*/
    'lengthChange': false, /* DROPDOWN PARA CAMBIAR EL NRO DE REGISTROS A MOSTRAR POR PAGINA */
    'info': false, /* INFO DE PAGINAS MOSTRADAS */
    'columns': [ /* columnas que puedes servir para ordenar el contenido asc o desc */
      { 'orderable': false },
      { 'orderable': true },
      { 'orderable': true },
      { 'orderable': true },
      { 'orderable': false }
    ]
  });

  /* AGREGANDO EL ICONO DE FLECHA EN EL INPUT DE BUSQUEDA DEL DATATABLE */

  $("#table_id_filter label").append('<button type="button" data-toggle="modal" data-target="#modalTableSearch"> <span class="dropdown-toggle"></span> </button>');
  
  /* AGREGANDO EL ICONO DE LA LUPA PARA EL INPUT DE BUSQUEDA DEL DATATABLE */

  $("#table_id_filter label").prepend('<div class="input-group-prepend"> <span class="input-group-text icon_search"> <i class="icon-icon_search"></i> </span> </div>');



});