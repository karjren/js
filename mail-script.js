jQuery(document).ready(function($) {
  $('#contact-form').submit(function(event) {
    event.preventDefault();

    var load = document.getElementById("form-loading-wrapper");
    var spin = document.getElementById("form-loading");
	var captcha = document.getElementById("captcha-response");  
    load.style.display = "flex";

    // ✅ 1. Get reCAPTCHA token
    var recaptchaResponse = grecaptcha.getResponse();

    // ✅ 2. If box not checked — show message and stop
    if (!recaptchaResponse) {
      load.style.display = "none";
	  $('#captcha-response').html("<p style='color:red;'>Please verify that you're not a robot.</p>");	
      return false;
    }
    // ✅ 3. Proceed with AJAX if verified
    $.ajax({
      type: 'POST',
      url: myAjax.ajaxurl,
      data: {
        action: 'send_contact_form',
        name: $('#name').val(),
        c_email: $('#c_email').val(),
        message: $('#message').val(),
        sp: $('#sp').val(),
        'g-recaptcha-response': recaptchaResponse
      },
      success: function(response) {
		captcha.style.display = "none";
        spin.style.display = "none";
        $('#form-response').html(response);
        grecaptcha.reset(); // reset checkbox
      },
      error: function() {
        load.style.display = "none";
        $('#form-response').html('<p style="color:red;">An error occurred. Please try again.</p>');
      }
    });
  });
 $('#inquiry').submit(function(event) {
	var spin = document.getElementById("form-loading");
	var load = document.getElementById("form-loading-wrapper");
	var captcha = document.getElementById("captcha-response");   
    load.style.display = "flex";
    event.preventDefault();  
	var recaptchaResponse = grecaptcha.getResponse(); 
	if (!recaptchaResponse) {
      load.style.display = "none";
	  $('#captcha-response').html("<p style='color:red;'>Please verify that you're not a robot.</p>");	
      return false;
    } 
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
        rettime: $('#rettime').val(),
		sph: $('#sph').val(),
		'g-recaptcha-response': recaptchaResponse
      },
      success: function(response) {
		captcha.style.display = "none";  
		spin.style.display = "none";
        $('#form-response').html(response);
		grecaptcha.reset(); // reset checkbox  
      },
            error: function() {
                $('#form-response').html(response);
            }
    });	
 });
});
