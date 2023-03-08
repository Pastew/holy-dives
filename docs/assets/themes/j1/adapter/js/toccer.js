

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/toccer.js
 # JS Adapter for J1 Toccer
 #
 # Product/Info:
 # https://jekyll.one
 # https://tscanlin.github.io/tocbot
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Tocbot is licensed under under the MIT License.
 # For details, see https://tscanlin.github.io/tocbot
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-03-08 14:17:11 +0100
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.toccer = (function () {
  var environment         = 'development';
  var toccerDefaults;
  var toccerSettings;
  var toccerOptions;
  var frontmatterOptions;
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings  = $.extend({
        module_name: 'j1.adapter.toccer',
        generated:   '2023-03-08 14:17:11 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.toccer;
      logger  = log4javascript.getLogger('j1.adapter.toccer');
      // create settings object from frontmatter
      frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // Load  module DEFAULTS|CONFIG
      toccerDefaults       = $.extend({}, {"enabled":true, "log":false, "tocSelector":".js-toc", "contentSelector":".js-toc-content", "headingSelector":"h2, h3, h4, h5, h6", "ignoreSelector":".notoc", "collapseDepth":3, "activeLinkColor":"#f44336", "throttleTimeout":150, "scrollSmooth":true, "scrollSmoothDuration":300, "scrollSmoothOffset":0, "scrollContainer":null});
      toccerSettings       = $.extend({}, {"enabled":true, "log":false});
      toccerOptions        = $.extend(true, {}, toccerDefaults, toccerSettings, frontmatterOptions);
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // save config settings into the toccer object for later access
      _this['moduleOptions'] = toccerOptions;
      if (j1.stringToBoolean(toccerOptions.toc)) {
        var dependencies_met_navigator = setInterval(function() {
          if ( j1.getState() == 'finished' ) {
            _this.initToccerCore(toccerOptions);
            _this.setState('finished');
            logger.debug('\n' + 'state: ' + _this.getState());
            logger.info('\n' + 'module initialized successfully');
            logger.debug('\n' + 'met dependencies for: j1');
            clearInterval(dependencies_met_navigator);
          }
        }, 25);
      }
    }, // END init
    // -------------------------------------------------------------------------
    // Initialize the toccer on page
    // -------------------------------------------------------------------------
    initToccerCore: function (options) {
      var scrollOffset = j1.getScrollOffset();
      _this.setState('running');
      logger.debug('\n' + 'state: ' + _this.getState());
      // tocbot get fired if HTML portion is loaded (AJAX load finished)
      //
      var dependencies_met_ajax_load_finished = setInterval (function () {
        if ($('#toc_mmenu').length) {
          /* eslint-disable */
          tocbot.init({
            log:                    options.log,
            activeLinkColor:        options.activeLinkColor,
            tocSelector:            options.tocSelector,
            headingSelector:        options.headingSelector,
            ignoreSelector:         options.ignoreSelector,
            contentSelector:        options.contentSelector,
            collapseDepth:          options.collapseDepth,
            throttleTimeout:        options.throttleTimeout,
            hasInnerContainers:     false,
            includeHtml:            false,
            linkClass:              'toc-link',
            extraLinkClasses:       '',
            activeLinkClass:        'is-active-link',
            listClass:              'toc-list',
            extraListClasses:       '',
            isCollapsedClass:       'is-collapsed',
            collapsibleClass:       'is-collapsible',
            listItemClass:          'toc-list-item',
            positionFixedSelector:  '',
            positionFixedClass:     'is-position-fixed',
            fixedSidebarOffset:     'auto',
            scrollContainer:        null,
            scrollSmooth:           options.scrollSmooth,
            scrollSmoothDuration:   options.scrollSmoothDuration,
            scrollSmoothOffset:     scrollOffset,
            headingsOffset:         1,
            throttleTimeout:        options.throttleTimeout
          });
          /* eslint-enable */
          logger.debug('\n' + 'met dependencies for: loadHTML');
          clearInterval(dependencies_met_ajax_load_finished);
        } // END AJAX load finished
      }, 25); // END dependencies_met_ajax_load_finished
    }, // END initToccerCore
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 NAV module
    // Manage messages (paylods) send from other J1 modules
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



