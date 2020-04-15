
$(function() {
  $('.select_custon_select2').select2({
    language: {
      noResults: function() {  
        return "No hay resultados";        
      },
      searching: function() {
        return "Buscando...";
      }
    }
  });
});