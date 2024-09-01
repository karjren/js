jQuery(document).ready(function($) {
  $('#contact-form').submit(function(event) {
	var spin = document.getElementById("form-loading");
	var load = document.getElementById("form-loading-wrapper");
    load.style.display = "flex";
    event.preventDefault();  
    $.ajax({
      type: 'POST',
      url: myAjax.ajaxurl,
      data: {
        action: 'send_contact_form',
        name: $('#name').val(),
        c_email: $('#c_email').val(),
        message: $('#message').val()
      },
      success: function(response) {
		spin.style.display = "none";
        $('#form-response').html(response);
      },
            error: function() {
                $('#form-response').html(response);
            }
    });
  });
 $('#inquiry').submit(function(event) {
	var spin = document.getElementById("form-loading");
	var load = document.getElementById("form-loading-wrapper");
    load.style.display = "flex";
    event.preventDefault();  
    $.ajax({
      type: 'POST',
      url: myAjax.ajaxurl,
      data: {
        action: 'send_inquire_form',
        name: $('#booking-name').val(),
        email: $('#booking-email').val(),
        vehicle_type: $('#vehicle-type').val(),
		deliver: $('#deliver').val(),
        deldate: $('#deldate').val(),
		deltime: $('#deltime').val(),
        return: $('#return').val(),
		retdate: $('#retdate').val(),
        rettime: $('#rettime').val()
      },
      success: function(response) {
		spin.style.display = "none";
        $('#form-response').html(response);
      },
            error: function() {
                $('#form-response').html(response);
            }
    });	
 });
});
