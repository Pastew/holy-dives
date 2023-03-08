

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/dropdowns.js
 # J1 Adapter for J1 Module Dropdowns
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
j1.adapter.dropdowns = (function (j1, window) {
  var environment   = 'development';
  var instances     = [];
  var dropdownsDefaults;
  var dropdownsSettings;
  var dropdownsOptions;
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
        module_name: 'j1.adapter.dropdowns',
        generated:   '2023-03-08 15:17:46 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.dropdowns;
      logger  = log4javascript.getLogger('j1.adapter.dropdowns');
      // Load  module DEFAULTS|CONFIG
      dropdownsDefaults = $.extend({}, );
      dropdownsSettings = $.extend({}, );
      dropdownsOptions  = $.extend(true, {}, dropdownsDefaults, dropdownsSettings);
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      var dependencies_met_j1_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          var elms = document.querySelectorAll('.dropdowns');
          // -------------------------------------------------------------------
          // dropdowns initializer
          // -------------------------------------------------------------------
          var log_text = '\n' + 'dropdowns is being initialized';
          logger.info(log_text);
            elms.forEach(function (elm) {
              var id = elm.dataset.target;
              if (id === 'icon-dropdown') {
                // processing: icon-dropdown
                //
                var instance = j1.dropdowns.init(elm, {
                  alignment:        "bottom",
                  autoTrigger:      true,
                  constrainWidth:   true,
                  coverTrigger:     true,
                  closeOnClick:     true,
                  hover:            true,
                  inDuration:       "300",
                  outDuration:      "300",
                  onOpen:           "j1.adapter.dropdowns.cbOnOpen",
                  onClose:          "j1.adapter.dropdowns.cbOnClose",
                  onItemClick:      "false"
                });
                instances.push(instance);
              }
            });
            elms.forEach(function (elm) {
              var id = elm.dataset.target;
              if (id === 'button-dropdown') {
                // processing: button-dropdown
                //
                var instance = j1.dropdowns.init(elm, {
                  alignment:        "left",
                  autoTrigger:      true,
                  constrainWidth:   true,
                  coverTrigger:     true,
                  closeOnClick:     true,
                  hover:            false,
                  inDuration:       "150",
                  outDuration:      "250",
                  onOpen:           "j1.adapter.dropdowns.cbOnOpen",
                  onClose:          "j1.adapter.dropdowns.cbOnClose",
                  onItemClick:      "false"
                });
                instances.push(instance);
              }
            });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          clearInterval(dependencies_met_j1_finished);
        } // END dependencies_met_j1_finished
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // cbOnClick)
    // Called by the dropdowns CORE module when and dropdown element
    // is clicked
    // -------------------------------------------------------------------------
    cbOnclick: function (event) {
      var logger  = log4javascript.getLogger('j1.adapter.dropdowns.cbOnClick');
      var itemEl = $(event.target).closest('li')[0];
      // logText = '\n' + 'entered cbOnClick on id: ' + id;
      // logger.info(logText);
      return true;
    },
    // -------------------------------------------------------------------------
    // cbOnOpen()
    // Called by the dropdowns CORE module when dropdown get opened
    // -------------------------------------------------------------------------
    cbOnOpen: function (elm) {
      var logger  = log4javascript.getLogger('j1.adapter.dropdowns.cbOnOpen');
      var id      = elm.id;
      logText = '\n' + 'entered cbOnOpen on id: ' + id;
      logger.info(logText);
      return true;
    },
    // -------------------------------------------------------------------------
    // cbOnClose()
    // Called by the dropdowns CORE module when dropdown get closed
    // -------------------------------------------------------------------------
    cbOnClose: function (elm) {
      var logger    = log4javascript.getLogger('j1.adapter.dropdowns.cbOnClose');
      var id        = elm.id;
      var listItems = '#' + elm.id + " li";
      var menuItems = document.querySelectorAll(listItems);
      var activeItem;
      var activeValue;
      // Loop through each <li> element and mark selected menuItem by class active
      for (var i=0; i < menuItems.length; i++) {
        if (menuItems[i].classList.contains('active')) {
            activeItem  = i;
            activeValue = menuItems[i].dataset.target;
        }
      }
      logText = '\n' + 'entered cbOnClose on id: ' + id;
      logger.info(logText);
      logText = '\n' + 'item selected: ' + activeItem;
      logger.info(logText);
      logText = '\n' + 'value selected: ' + activeValue;
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



