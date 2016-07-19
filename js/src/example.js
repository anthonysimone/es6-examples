/**
 * @file
 * A JavaScript file for the theme.
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  $(document).ready(function() {


  // Code goes here, ES2016 allowed!
  const NOODLES = "fetuccini";
  console.log(NOODLES);

  function iHaveDefaults(times = 4) {
    console.log('I ate ' + NOODLES + ' ' + times + ' times today.')
  }

  iHaveDefaults(6);
  iHaveDefaults();

  $('.a-button').on('click', (e) => {
    console.log($(e.target));
  });


  });

}(jQuery);