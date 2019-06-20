$(document).ready(function() {
	$('#closeElement').click(function() {
		$("#element").css(
			{
				'transform': 'scale(0)',
				'-webkit-transform': 'scale(0)'
			}
		)
			.fadeOut(1000);
	});

	$('#facebookBtn').click(function() {
		window.open('https://facebook.com/ATribeBeyondBlessed', "_blank");
	});

	$('#instagramBtn').click(function() {
		window.open('https://instagram.com/ant753?igshid=je3mfwymo0jk', "_blank");
	});
	/**
	 * jQuery Validate Function
	 *
	 * This function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted
	 * to the index.php file.
	 *
	 * Update this file as needed for your form.
	 * All ids and name values must match up to your form here.
	 *
	 * @author Eric Martinez <emartinez451@cnm.edu>
	 **/

	/* begin validate function here */
	$("#contact-form").validate({

		// setup handling of form errors
		debug: true,
		errorClass: "text-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules here define what is good or bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			name: {
				required: true
			},
			email: {
				email: true,
				required: true
			},
			message: {
				required: true,
				maxlength: 2000
			}
		},

		// error messages to display to the end user when rules above don't pass
		messages: {
			name: {
				required: "Please enter your name."
			},
			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			message: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			}
		},

		// AJAX submit the form data to back end if rules pass
		submitHandler: function(form) {
			$("#contact-form").ajaxSubmit({
				type: "POST",
				url: $("contactForm").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#my-contact-form")[0].reset();
					}
				}
			})
		}

	});/* end validate function here */

});/*end document.ready()*/