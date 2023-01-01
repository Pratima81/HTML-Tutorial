(function($){
  var path = location.pathname ;
  if( path == '/sample/contact-3/') { 
    $('#contact-check').show();
    $('#mitsumori-check').hide();
    $('[name="contact-type"]:radio').change( function() {
        if( $('#contact-1').prop('checked')) {
            $('#contact-check').show();
            $('#mitsumori-check').hide();
        } else if ($('#mitsumori-1').prop('checked')) {
            $('#contact-check').hide();
            $('#mitsumori-check').show();
        } 
    });
  } else if( path == '/sample/confirm-3/') { 
    var contactType = $('input[name="contact-type"]').val();
    if( contactType == 'contact') {
        $('#contact-check').show();
        $('#mitsumori-check').hide();
    } else if (contactType == 'mitsumori') {
        $('#contact-check').hide();
        $('#mitsumori-check').show();
    } 
  }
})(jQuery);