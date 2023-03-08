

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/masonry.js
 # J1 Adapter for the comments module
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
j1.adapter.masonry = (function (j1, window) {
var environment     = 'development';
var cookie_names    = j1.getCookieNames();
var user_state      = j1.readCookie(cookie_names.user_state);
var viewport_width  = $(window).width();
var masonryDefaults;
var masonrySettings;
var masonryOptions;
var themes_allowed;
var theme_enabled;
var theme;
var _this;
var logger;
var logText;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // init()
    // adapter initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // [INFO   ] [j1.adapter.comments                    ] [ detected comments provider (j1_config): } ]
      // [INFO   ] [j1.adapter.comments                    ] [ start processing load region head, layout:  ]
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.masonry',
        generated:   '2023-03-08 15:17:46 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this  = j1.adapter.masonry;
      theme  = user_state.theme_name;
      logger = log4javascript.getLogger('j1.adapter.masonry');
      // Load  module DEFAULTS|CONFIG
      masonryDefaults = $.extend({}, {"enabled":false, "hideDisabled":true, "initLayout":false, "originTop":false, "originLeft":false, "percentPosition":false, "horizontalOrder":false, "stagger":30, "transitionDuration":0.8});
      masonrySettings = $.extend({}, {"enabled":true, "transitionDuration":0.5, "grids":[{"name":"Example Grid 1", "grid":{"enabled":true, "hideDisabled":true, "id":"example_masonry", "originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"name":"Example Grid 2", "grid":{"enabled":true, "hideDisabled":true, "id":"example_masonry_2", "originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}]});
      masonryOptions = $.extend({}, masonryDefaults, masonrySettings);
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        if ( j1.getState() === 'finished' ) {
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
              logger.info('\n' + 'found masonry on id: ' + 'example_masonry');
              var $grid_example_masonry = $('#example_masonry');
              logger.info('\n' + 'initialize grid on id: ' + 'example_masonry');
              // initialize the (masonry) grid
              //
              $grid_example_masonry.masonry({
                percentPosition:        true,
                horizontalOrder:        false,
                originLeft:             true,
                originTop:              true,
                initLayout:             true,
                transitionDuration:     "0.8s",
                stagger:                "30",
              });
              logger.info('\n' + 'install event handlers on id: ' + 'example_masonry');
              // grid event handler
              //
              $grid_example_masonry.on( 'click', '.card', function() {
                // remove clicked element
                // layout remaining item elements
                $grid_example_masonry.masonry('remove', this).masonry('layout');
                $grid_example_masonry.masonry('reloadItems');
              });
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry on id: ' + 'example_masonry_2');
              var $grid_example_masonry_2 = $('#example_masonry_2');
              logger.info('\n' + 'initialize grid on id: ' + 'example_masonry_2');
              // initialize the (masonry) grid
              //
              $grid_example_masonry_2.masonry({
                percentPosition:        true,
                horizontalOrder:        false,
                originLeft:             true,
                originTop:              true,
                initLayout:             true,
                transitionDuration:     "0.8s",
                stagger:                "30",
              });
              logger.info('\n' + 'install event handlers on id: ' + 'example_masonry_2');
              // grid event handler
              //
              $grid_example_masonry_2.on( 'click', '.card', function() {
                // remove clicked element
                // layout remaining item elements
                $grid_example_masonry_2.masonry('remove', this).masonry('layout');
                $grid_example_masonry_2.masonry('reloadItems');
              });
             // ENDIF grid enabled
           // ENDFOR (all) grids
          logger.info('\n' + 'initializing module finished');
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler()
    // manage messages send from other J1 modules
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



