$(function() {

    $("input, textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnCambiar").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var usuario = $("#txt_usuario").val();
            var clavea = $("#txt_clavea").val();
            var nclave = $("#txt_nclave").val();
            var rep_nclave = $("#txt_rep_nclave").val();
            var paraEnviar = {
                usuario: usuario,
                clavea: clavea,
                nclave: nclave,
                rep_nclave: rep_nclave
            }
            $.ajax({
                /*** AQUI VA EL AJAX PARA LA BUSQUEDA, SE DEBE AGREGAR LA URL PARA HACER LA BUSQUEDA ***/
                //url: "././mail/contact_me.php", EJEMPLO
                URL: 'asd',
                type: "POST",
                data: paraEnviar,
                cache: false,
                success: function() {
                    // Enable button & show success message
                    $("#btnCambiar").attr("disabled", false);
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<b><i class='fas fa-check'></i> Se han modificado sus datos. </b>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#edit_profile').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<b>Error:</b> No se modificaron sus datos.");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#edit_profile').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#txt_usuario').focus(function() {
    $('#success').html('');
});
