/**
 * @file
 * A JavaScript file for the theme.
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  $(document).ready(function() {


    function getDeveloper() {
      let name = 'Nick';
      let age = 41;

      return { 
        name: name,
        age: age
      }
    }
    // console.log(getDeveloper().name);



    let developer = {
      name: 'Nick',
      age: 41
    }
    let { name, age } = developer;
    // console.log(`${name} is ${age} years old.`);


    // can be used as a function parameter
    function congratulate({ name, age }) {
      console.log(`Hello ${name}. Congratulations on turning ${41}!`);
    }
    // congratulate(developer);

  });

}(jQuery);