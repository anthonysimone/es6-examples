/**
 * @file
 * A JavaScript file for the theme.
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  $(document).ready(function() {

    function randomNumber() {
      return Math.floor(Math.random() * 10);
    }

    // Old pattern :(, with default parameters you can define them as you'd expect to be able to 
    function getFavorites(color, number, icecreamFlavor) {
      color = color || 'red';
      number = number || 7;
      icecreamFlavor = icecreamFlavor || 'strawberry';

      console.log('Favorite color is ' + color);
      console.log('Favorite number is ' + number);
      console.log('Favorite icecream flavor is ' + icecreamFlavor);
    }

    getFavorites();
    getFavorites('orange', 4, 'pistachio');

  });

}(jQuery);