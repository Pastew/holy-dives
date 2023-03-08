

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/scroller.js
 # J1 Adapter for scroller
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-03-08 15:08:54 +0100
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.scroller = (function (j1, window) {
var environment   = 'development';
var language      = 'en';
var user_agent    = platform.ua;
var scrollerDefaults;
var scrollerSettings;
var scrollerOptions;
var _this;
var logger;
var logText;
var lastPageInfo;
// var platform_name         = platform.name;
// var platform_version      = platform.version;
// var platform_layout       = platform.layout;
// var platform_os           = platform.os;
// var platform_description  = platform.description;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // init()
    // adapter initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.scroller',
        generated:   '2023-03-08 15:08:54 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this = j1.adapter.scroller;
      logger = log4javascript.getLogger('j1.adapter.scroller');
      // Load  module DEFAULTS|CONFIG
      scrollerDefaults = $.extend({}, );
      scrollerSettings = $.extend({}, {"enabled":true, "scrollers":[{"scroller":{"enabled":true, "type":"showOnScroll", "id":"home_intro_panel", "container":"home_intro_panel", "showDelay":1000, "scrollOffset":500}}, {"scroller":{"enabled":false, "type":"showOnScroll", "id":"home_service_panel", "container":"home_service_panel", "showDelay":700, "scrollOffset":200}}, {"scroller":{"enabled":true, "type":"infiniteScroll", "id":"home_news_panel", "container":"home_news_panel-scroll-group", "pagePath":"/assets/data/news_panel_posts/page", "elementScroll":true, "scrollOffset":200, "lastPage":2, "infoLastPage":true, "lastPageInfo_en":"More articles can be found with the <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n", "lastPageInfo_de":"Weitere Artikel finden Sie im <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n"}}, {"scroller":{"enabled":true, "type":"infiniteScroll", "id":"blog_navigator_preview", "container":"timeline", "pagePath":"/pages/public/blog/navigator/page", "elementScroll":true, "scrollOffset":200, "lastPage":4, "infoLastPage":false, "lastPageInfo_en":"", "lastPageInfo_de":""}}]});
      scrollerOptions  = $.extend(true, {}, scrollerDefaults, scrollerSettings);
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // initialize scrollers if page is available and visible
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState == 'block') ? true: false;
        if ( j1.getState() === 'finished' && pageVisible ) {
          _this.generate_scrollers();
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // generate_scrollers()
    // generate scrollers configured|enabled
    // -------------------------------------------------------------------------
    generate_scrollers: function () {
      logger = log4javascript.getLogger('j1.adapter.scroller');
      logText = '\n' + 'scrollers are being initialized';
      logger.info(logText);
      // START generate scrollers
      var dependencies_met_page_ready = setInterval (function (options) {
        if (j1.getState() === 'finished') {
          var container = '#' + 'home_intro_panel';
          // scroller_id: home_intro_panel
          logText = '\n' + 'scroller of type showOnScroll is being initialized on: ' + 'home_intro_panel';
          logger.info(logText);
          // Create an scroller instance of showOnScroll if container exists
          if ($(container).length) {
            $(container).scroller({
              id:             'home_intro_panel',
              type:           'showOnScroll',
              container:      'home_intro_panel',
              showDelay:      1000,
              scrollOffset:   500,
            });
          }
          // END scroller_id: home_intro_panel
          // scroller_id: home_news_panel
          logText = '\n' + 'scroller of type infiniteScroll is being initialized on: ' + 'home_news_panel';
          logger.info(logText);
          var container = '#' + 'home_news_panel-scroll-group';
          var pagePath  = '/assets/data/news_panel_posts/page';
          if (language === 'en') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
            lastPageInfo += '</p></div>';
          } else if (language === 'de') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
            lastPageInfo += '</p></div>';
          } else {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
            lastPageInfo += '</p></div>';
          }
          // Create an scroller instance of infiniteScroll if container exists
          if ($(container).length) {
            $(container).scroller({
              id:             'home_news_panel',
              type:           'infiniteScroll',
              pagePath:       '/assets/data/news_panel_posts/page',
              elementScroll:  true,
              scrollOffset:   200,
              lastPage:       2,
              infoLastPage:   true,
              lastPageInfo:   lastPageInfo,
            });
          }
          // END scroller_id: home_news_panel
          // scroller_id: blog_navigator_preview
          logText = '\n' + 'scroller of type infiniteScroll is being initialized on: ' + 'blog_navigator_preview';
          logger.info(logText);
          var container = '#' + 'timeline';
          var pagePath  = '/pages/public/blog/navigator/page';
          if (language === 'en') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          } else if (language === 'de') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          } else {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          }
          // Create an scroller instance of infiniteScroll if container exists
          if ($(container).length) {
            $(container).scroller({
              id:             'blog_navigator_preview',
              type:           'infiniteScroll',
              pagePath:       '/pages/public/blog/navigator/page',
              elementScroll:  true,
              scrollOffset:   200,
              lastPage:       4,
              infoLastPage:   false,
              lastPageInfo:   lastPageInfo,
            });
          }
          // END scroller_id: blog_navigator_preview
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
      // END generate scrollers
    },
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



