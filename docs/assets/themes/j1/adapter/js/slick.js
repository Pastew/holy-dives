
/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/slick.js
 # JS Adapter for J1 Slick
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-03-08 15:08:54 +0100
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.slick = (function (j1, window) {
  var environment                 = 'development';
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // Initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.cookieConsent',
        generated:   '2023-03-08 15:08:54 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this                 = j1.adapter.slick;
      logger                = log4javascript.getLogger('j1.adapter.slick');
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState == 'block') ? true: false;
        if ( j1.getState() === 'finished' && pageVisible ) {
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          $('.featured-post-slider').slick({
            dots: false,
            speed: 300,
            autoplay: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2
                }
              }
            ]
          });
          $('.masonry-container').masonry({
            itemSelector: '.masonry-container > div',
            columnWidth: 1
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialization finished');
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info('\n' + message.text);
      }
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState()
    // Sets the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      _this.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return _this.state;
    }, // END getState
  }; // END return
})(j1, window);


