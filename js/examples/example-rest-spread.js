/**
 * @file
 * A JavaScript file for the theme.
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  $(document).ready(function() {

    // rest - list of args converted to array
    function sum(...numbers) {
      return numbers.reduce((prev, current) => prev + current);
    }
    // console.log(sum(1, 3, 4, 5));

    // rest with other parameters before
    function sumWithUnit(unit, ...numbers) {
      return numbers.reduce((prev, current) => prev + current) + unit;
    }
    // console.log(sumWithUnit('ounces', 2, 4, 7, 1));

    // spread - array converted to list of args
    function addTwoNumbers(x, y) {
      return x + y;
    }
    let twoNumbers = [3, 5];
    // console.log(addTwoNumbers(...twoNumbers));
  });

}(jQuery);