/**
 * @file
 * A JavaScript file for the theme.
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  $(document).ready(function() {

    // Var works the same as it always does
    // Hoisting: variable declaration gets moved to top of scope with var
    var someBooleanVar = true;
    function fireVar() {
      if (someBooleanVar) {
        var foo = 'bar';
        console.log(foo);
      } else {
        console.log(foo);
      }
    }
    
    // fireVar();


    // Let - is a block level declaration
    // So, its scope is within its current block, or set of {}
    let someBooleanLet = true;
    function fireLet() {
      if (someBooleanLet) {
        let foo = 'bar';
        console.log(foo);
      } else {
        console.log(foo)
      }
    }
    
    // fireLet();


    // Const - does not allow variable to be reassigned, but can be modified
    // const fruit = ['apple', 'orange', 'persimmon'];
    // console.log(fruit);

    // fruit = ['watermelon', 'canteloup'];
    // console.log(fruit);

    // fruit.push('cherry');
    // console.log(fruit);


    // When to use what?
    // There's almost no reason to use var anymore, however, the difference between let and const is debatable
  });

}(jQuery);