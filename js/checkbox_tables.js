$(function () { 
    // Header Master Checkbox Event
    $("#masterCheck").on("click", function () {
        if ($("input:checkbox").prop("checked")) {
            $("input:checkbox[name='row-check']").prop("checked", true);
            $("input:checkbox[name='row-check']").parent().parent().parent().addClass("row_checked");
        } else {
            $("input:checkbox[name='row-check']").prop("checked", false);
            $("input:checkbox[name='row-check']").parent().parent().parent().removeClass("row_checked");
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
        }
        else {
            $("#masterCheck").prop("checked", false);
        }
    });
});