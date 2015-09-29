jQuery(document).ready(function($) {
 
  
	if(! $('#tax_exempt_checkbox').is(':checked')) {
	  $('#tax_exempt_id_field').hide();
  }

  $('#tax_exempt_checkbox').on('click', function () {
	  if($(this).is(':checked')) {
  	  $('#tax_exempt_id_field').slideDown('slow');
  	} else {
  	  $('#tax_exempt_id_field').slideUp('slow');
  	  $('input#tax_exempt_id').val('');
  	  $( document.body ).trigger( 'update_checkout' );
  	}
  });
  
  var first_time_check = true;
  
  function checkVAT() {
    
    //reset error + disabled submit button
    $('p.tax-exempt-id p.error').remove();
    $('#place_order').removeAttr('disabled');

    //check VAT only if Tax Exempt checkbox is clicked
    
    if($('#tax_exempt_checkbox').val()==="1" && first_time_check !== true) {
      var billingCountry = $('#billing_country').val();
      
      var vatID = $('input#tax_exempt_id').val();
      var vatIDCountry = vatID.substring(0, 2);
      
      var splitVatID;
     
      if (vatIDCountry !== billingCountry) {
        
        window.setTimeout(function(){
          $("p.tax-exempt-id").addClass('woocommerce-invalid').addClass('woocommerce-invalid-required-field').removeClass('woocommerce-validated');
          $('#place_order').attr("disabled","disabled"); 
        }, 500);
        
        $('p.tax-exempt-id').append('<p class="error">' + translate.error_country + '</p>');
      } else {
        splitVatID = vatID.slice(2);
  
        $.getJSON('http://vatid.eu/check/' + billingCountry + '/' + splitVatID,function( data ) {
          var valid = data.response.valid;
          console.log(valid);
          
          if(valid === "false") {
            $('p.tax-exempt-id').addClass('woocommerce-invalid');
            console.log('invalid');
            $('#place_order').attr("disabled","disabled");
            $('p.tax-exempt-id').append('<p class="error">' + translate.error_id + '<br/><small>' + translate.error_contact + '</small>' + '</p>');
          } else {
            $('#place_order').removeAttr('disabled');
            $('p.tax-exempt-id').addClass('woocommerce-valid');
         	  $( document.body ).trigger( 'update_checkout' );
          }
          
        });
  
      }
    
    }
    
  }   
  
  $('input#tax_exempt_id').focusout( function() {
    first_time_check = false;
    checkVAT();
  });
  
  $('#tax_exempt_checkbox').change( function() {
    checkVAT();
  });
  
  if($('#tax_exempt_id_field').length > 0 && $('#tax_exempt_checkbox').val === "1") {
      first_time_check = false;
      checkVAT();  
  }

  
});