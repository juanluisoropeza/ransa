$(document).ready(function () {
    $('.btn_view_comments').on('click', function() {
        $('#cnt_view_details').hide();
        $('#cnt_view_history').hide();
        $('#cnt_view_comments').show();
    });
    
    $('.btn_view_history').on('click', function() {
        $('#cnt_view_details').hide();
        $('#cnt_view_comments').hide();
        $('#cnt_view_history').show();
    });

    $('.btn_view_detail').on('click', function() {
        $('#cnt_view_comments').hide();
        $('#cnt_view_history').hide();
        $('#cnt_view_details').show();
    });
});