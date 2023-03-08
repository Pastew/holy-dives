

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/comments.js
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
j1.adapter.waves = (function (j1, window) {
var environment     = 'development';
var cookie_names    = j1.getCookieNames();
var user_state      = j1.readCookie(cookie_names.user_state);
var viewport_width  = $(window).width();
var waveDefaults;
var waveSettings;
var waveOptions;
var frontmatterOptions;
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
        module_name: 'j1.adapter.waves',
        generated:   '2023-03-08 15:17:46 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      // create settings object from frontmatter
      frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // create settings object from module options
      waveDefaults = $.extend({}, {"enabled":false, "themes":["UnoLight"]});
      waveSettings = $.extend({}, {"enabled":true, "themes":["UnoLight"]});
      waveOptions = $.extend(true, {}, waveDefaults, waveSettings, frontmatterOptions);
      _this  = j1.adapter.waves;
      theme  = user_state.theme_name;
      logger = log4javascript.getLogger('j1.adapter.wave');
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState == 'block') ? true: false;
        if ( j1.getState() === 'finished' && pageVisible ) {
          themes_allowed = waveOptions.themes.toString();
          theme_enabled  = waveOptions.themes.indexOf(theme) > -1 ? true : false;
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          logger.debug('\n' + 'themes allowd: ' + themes_allowed);
          logger.debug('\n' + 'theme detected: ' + theme);
          // TODO: Check why a timeout is required to enable|disable the wave elements
          if (themes_allowed === 'all' ) {
            logger.info('\n' + 'activate waves for theme: ' + 'all' );
            setTimeout (function() {
              $('.wave').show();
              logger.info('\n' + 'initializing module finished');
            }, 1000 );
          } else if (theme_enabled) {
            logger.info('\n' + 'activate waves for theme: ' + theme );
            setTimeout (function() {
              $('.wave').show();
              logger.info('\n' + 'initializing module finished');
            }, 1000 );
          } else {
            logger.warn('\n' + 'no valid theme/s found');
            logger.warn('\n' + 'deactivate (hide) waves');
            setTimeout (function() {
              $('.wave').hide();
              logger.info('\n' + 'initializing module finished');
            }, 1000 );
          }
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



