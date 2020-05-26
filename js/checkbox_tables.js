$(function () { 
    // Header Master Checkbox Event
    $("#masterCheck").on("click", function () {
        if ($("input:checkbox").prop("checked")) {
            $("input:checkbox[name='row-check']").prop("checked", true);
            $("input:checkbox[name='row-check']").parent().parent().parent().addClass("row_checked");
        } else {
            $("input:checkbox[name='row-check']").prop("checked", false);
            $("input:checkbox[name='row-check']").parent().parent().parent().removeClass("row_checked");
            $('.div_tbody').find('.checkmark').removeClass('show');
        }
    });

    // Check event on each table row checkbox
    $("input:checkbox[name='row-check']").on("change", function () {
        var total_check_boxes = $("input:checkbox[name='row-check']").length;
        var total_checked_boxes = $("input:checkbox[name='row-check']:checked").length;

        
        $(this).parent().parent().parent().toggleClass("row_checked");

        // If all checked manually then check master checkbox
        if (total_check_boxes === total_checked_boxes) {
            $("#masterCheck").prop("checked", true);
        } else {
            $("#masterCheck").prop("checked", false);
        }
    });
    
    /* DROPDOWN FLOTANTE */

    $(document).on('shown.bs.dropdown', '.row_float_dropdown', function (e) {
        // get the padding right in the table
        let right = $('.screens_with_tables .swt_box');
        let paddingRight = parseInt(right.css('padding-right'));
        // The .dropdown container
        var container = $(e.target);
    
        // Find the actual .dropdown-menu
        var dropdown_float = container.find('.dropdown-menu');
        if (dropdown_float.length) {
            // Save a reference to it, so we can find it after we've attached it to the body
            container.data('dropdown-menu', dropdown_float);
        } else {
            dropdown_float = container.data('dropdown-menu');
        }
        dropdown_float.css('top', (container.offset().top + container.outerHeight() - 20) + 'px');
        dropdown_float.css('right', (paddingRight)+'px');
        dropdown_float.css('left', 'auto');
        dropdown_float.css('position', 'absolute');
        dropdown_float.css('display', 'block');
        dropdown_float.appendTo('body');
    });

    $(document).on('hide.bs.dropdown', '.row_float_dropdown', function (e) {
        // Hide the dropdown menu bound to this button
        $(e.target).data('dropdown-menu').remove();
    });

});