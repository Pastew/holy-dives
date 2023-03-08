

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lightbox.js
 # JS Adapter for J1 Lightbox
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/lokesh/lightbox2/
 #
 # Copyright (C) 2023 Juergen Adams
 # Copyright (C) 2007, 2018 Lokesh Dhakar
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Lightbox V2 is licensed under the MIT License.
 # For details, see https://github.com/lokesh/lightbox2/
 #
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-03-08 14:55:23 +0100
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.lightbox = (function (j1, window) {
  var environment  = 'development';
  var lightboxDefaults;
  var lightboxSettings;
  var lightboxOptions;
  var frontmatterOptions;  
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
        module_name: 'j1.adapter.lightbox',
        generated:   '2023-03-08 14:55:23 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.lightbox;
      logger  = log4javascript.getLogger('j1.adapter.lightbox');
      // create settings object from frontmatter (page settings)
      frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // Load  module DEFAULTS|CONFIG
      lightboxDefaults          = $.extend({}, {"version":"0.0.1", "enabled":true, "alwaysShowNavOnTouchDevices":false, "albumLabel":"Image %1 of %2", "disableScrolling":true, "fadeDuration":400, "fitImagesInViewport":true, "imageFadeDuration":600, "maxWidth":null, "maxHeight":null, "positionFromTop":50, "resizeDuration":250, "showImageNumberLabel":true, "wrapAround":true});
      lightboxSettings          = $.extend({}, {"enabled":true, "imageFadeDuration":600});
      lightboxOptions           = $.extend(true, {}, lightboxDefaults, lightboxSettings, frontmatterOptions);
      var dependencies_met_j1_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          lightbox.option({
            alwaysShowNavOnTouchDevices:  lightboxOptions.alwaysShowNavOnTouchDevices,
            albumLabel:                   lightboxOptions.albumLabel,
            disableScrolling:             lightboxOptions.disableScrolling,
            fadeDuration:                 lightboxOptions.fadeDuration,
            fitImagesInViewport:          lightboxOptions.fitImagesInViewport,
            imageFadeDuration:            lightboxOptions.imageFadeDuration,
            maxWidth:                     lightboxOptions.maxWidth,
            maxHeight:                    lightboxOptions.maxHeight,
            positionFromTop:              lightboxOptions.positionFromTop,
            resizeDuration:               lightboxOptions.resizeDuration,
            showImageNumberLabel:         lightboxOptions.showImageNumberLabel,
            wrapAround:                   lightboxOptions.wrapAround
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          clearInterval(dependencies_met_j1_finished);
        } // END dependencies_met_j1_finished
      }, 25);
    }, // END init lightbox
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
    } // END getState
  }; // END return
})(j1, window);



