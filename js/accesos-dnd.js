$(document).ready(function () {
    $(".list-group").sortable({
        revert: true,
        /*update: function (event, ui) {
            // Some code to prevent duplicates
        }*/
    });
    $('#btn_addColTable').on('click', function() {
        $('#modal_cnt_1').hide();
        $('#modal_cnt_2').show();
    });
    
    $('#btn_save_addCol').on('click', function() {
        $('#modal_cnt_2').hide();
        $('#modal_cnt_1').show();
    });
});