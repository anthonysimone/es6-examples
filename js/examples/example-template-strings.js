/**
 * @file
 * A JavaScript file for the theme.
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  $(document).ready(function() {

    let foo = 'bar';
    let link = 'https://google.com'
    let myTemplate = '<div><p><a href="' + link + '" target="_blank">' +
        foo +
        '</a></p></div>';

    console.log(myTemplate);

    // let anotherTemplate = `
    //   <div>
    //     <p>
    //       <a href="#">Some Link</a>
    //     </p>
    //   </div>
    // `;
    // console.log(anotherTemplate);

    // let betterTemplate = `
    //   <div>
    //     <p>
    //       <a href="${link}" target="_blank">${foo}</a>
    //     </p>
    //   </div>
    // `;
    // console.log(betterTemplate);

  });

}(jQuery);