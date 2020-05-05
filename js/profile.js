$(document).ready(function () {
    $("#edit_profile").validate({
        lang: 'es_PE',
        errorElement: "p",
        errorClass: "help-block text-danger",
        rules: {
            "txt_usuario": {
				required: true,
                maxlength: 200,
                minlength: 2
			},
			"txt_clavea": {
				required: true,
                maxlength: 200,
                minlength: 4
            },
            "txt_nclave" : {
				required: true,
                minlength : 4
            },
            "txt_rep_nclave" : {
				required: true,
                minlength : 4,
                equalTo : "#txt_nclave"
            }
        }, 
        messages: {

        },
        highlight: function (element, errorClass) {
			$(element).removeClass(errorClass);
		}
    });
});
