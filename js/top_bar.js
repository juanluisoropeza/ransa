/* ESTA FUNCION GARANTIZA QUE EN EL SEARCH DEL TOP HEADER NO SE PIERDA EL SELECT 2 */
$(document).ready(function () {
  $("#ddm_busqueda").on("click",".select2-selection--single",function(){
    $("#ddm_busqueda").off("click",".select2-selection--single",function(){});
    $(".select2-container--open").addClass("select2-header-option");
  });
});