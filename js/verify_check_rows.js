$(document).ready(function () {
    $('.div_tbody input[type=checkbox]').on('change', function() {
        var checkCount = $(".div_tbody input[type=checkbox]:checked").length;
        console.log(checkCount);
        if(checkCount > 0) {
            $('.div_tbody').find('.checkmark').addClass('show');
        } else {
            $('.div_tbody').find('.checkmark').removeClass('show');
        }
    });
});