/**
 * @file
 * A JavaScript file for the theme.
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  $(document).ready(function() {

    let button = document.getElementById('a-button');

    button.addEventListener('click', function() {
      let countdown = new Promise(function(resolve, reject) {
        // Execute some item that can succeed or fail
        let randomBoolean = Math.random() >= 0.5;
        let transitionDuration = Math.floor(Math.random() * 4 + 2);
        let $timer = $('<div/>').css({'width': '100%', 'height': '20px', 'margin': '20px 0', 'background': 'purple', 'transition': 'width 2000ms linear'});
        $('body').append($timer);
        setTimeout(function() {
          $timer.css('width', 0);
        }, 1);

        // Time pretending to do the thing
        setTimeout(function() {
          if (randomBoolean) {
            resolve();
          } else {
            reject('something broke, you have been rejected!');
          }
        }, 2000);
      });

      countdown.then(function() {
        console.log('countdown finished successfully!');
      });

      countdown.catch(function(reason) {
        console.log(reason);
      });

      // let countdown = new Promise(function(resolve, reject) {
      //   let transitionDuration = Math.floor(Math.random() * 4 + 2);
      //   let $timer = $(`<div style="width: 100%; height: 20px; margin: 20px; background: purple; transition: width ${transitionDuration};"></div>`);
      //   $('body').append($timer);
      //   $timer.css('width', 0);
      // });
    });


  });

}(jQuery);