wow = new WOW();
wow.init();
$(document).ready(function() {

/**
 * check if the input has any value
 */
$('.form__input').blur(() => {
  if ($(this).val()) {
    $(this).closest('.form__wrapper').addClass('form--filled');
  } else {
    $(this).closest('.form__wrapper').removeClass('form--filled');
	}	
});

/**
 * Form validation
 */
  $('.form').validate({
    rules: {
      password: {
        minlength: 6
      }
    }
  });

/**
 * Form2 validation
 */
$('.form2').validate();


/**
 * Simple Modal
 */
  $('.modal__toggle').on('click',  (e) => {
    e.preventDefault();
    $('.modal').toggleClass('modal--open');
  });
});
