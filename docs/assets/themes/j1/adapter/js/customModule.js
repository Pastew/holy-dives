

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/customModule.js
 # J1 Adapter for custom module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-03-08 15:17:46 +0100
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.customModule = (function (j1, window) {
  var environment   = 'development';
  var moduleOptions = {};
  var instances     = [];
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
        module_name: 'j1.adapter.customModule',
        generated:   '2023-03-08 15:17:46 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.dropdowns;
      logger  = log4javascript.getLogger('j1.adapter.customModule');
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // create settings object from frontmatterOptions
      frontmatterOptions  = options != null ? $.extend({}, options) : {};
      moduleOptions       = $.extend({}, );
      if (typeof frontmatterOptions !== 'undefined') {
        moduleOptions = $.extend({}, moduleOptions, frontmatterOptions);;
      }
      var dependencies_met_j1_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          var elms = document.querySelectorAll('.dropdowns');
          // -------------------------------------------------------------------
          // Initializer
          // -------------------------------------------------------------------
          var log_text = '\n' + 'custom functions are being initialized';
          logger.info(log_text);
          //
          // place init code here if required
          //
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          clearInterval(dependencies_met_j1_finished);
        } // END dependencies_met_j1_finished
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // custom_module_1
    // Called by ???
    // -------------------------------------------------------------------------
    custom_module_1: function (options) {
      var logger  = log4javascript.getLogger('j1.adapter.customModule.custom_module_1');
      logText = '\n' + 'entered custom function: custom_module_1';
      logger.info(logText);
      return true;
    },
    // -------------------------------------------------------------------------
    // messageHandler
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



