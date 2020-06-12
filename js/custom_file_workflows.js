/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));

$(document).ready(function () {
	$(document).on('change', '#file1', function (e) {
		$("#file1").toggleClass('ocultar_borde');
		$("#lbl_info1").toggleClass('active').find('.icon-icon_upload2').removeClass('icon-icon_upload2').addClass('icon-icon_attach');
		$("#lbl_info1 > span");
		e.stopPropagation();
	});
	$(document).on('change', '#file2', function (e) {
		$("#file2").toggleClass('ocultar_borde');
		$("#lbl_info2").toggleClass('active').find('.icon-icon_upload2').removeClass('icon-icon_upload2').addClass('icon-icon_attach');
		$("#lbl_info2 > span");
		e.stopPropagation();
	});
});