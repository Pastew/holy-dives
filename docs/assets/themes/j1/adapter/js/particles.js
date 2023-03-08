/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/particles.js
 # J1 Adapter for the particles module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-03-08 14:55:23 +0100
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.particles = (function (j1, window) {
var environment     = 'development';
var cookie_names    = j1.getCookieNames();
var particleDefaults;
var particleSettings;
var particleOptions;
var frontmatterOptions;
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
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.particles',
        generated:   '2023-03-08 14:55:23 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      // create settings object from frontmatter
      frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // Load  module DEFAULTS|CONFIG
      particleDefaults = $.extend({}, {"enabled":false, "xhr_data_path":"/assets/data/particles.yml", "particle_data":{"particles":{"number":{"value":400, "density":{"enable":true, "value_area":800}}, "color":{"value":"#ffffff"}, "shape":{"type":"circle", "stroke":{"width":0, "color":"#ff0000"}, "polygon":{"nb_sides":5}, "image":{"src":"", "width":100, "height":100}}, "opacity":{"value":1, "random":false, "anim":{"enable":false, "speed":2, "opacity_min":0, "sync":false}}, "size":{"value":20, "random":false, "anim":{"enable":false, "speed":20, "size_min":0, "sync":false}}, "line_linked":{"enable":true, "distance":100, "color":"#ffffff", "opacity":1, "width":1}, "move":{"enable":true, "speed":2, "direction":"none", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract":{"enable":false, "rotateX":3000, "rotateY":3000}}}, "interactivity":{"detect_on":"canvas", "events":{"onhover":{"enable":true, "mode":"grab"}, "onclick":{"enable":true, "mode":"push"}, "resize":true}, "modes":{"grab":{"distance":100, "line_linked":{"opacity":0.75}}, "bubble":{"distance":100, "size":40, "duration":0.4, "opacity":0.4, "speed":3}, "repulse":{"distance":200, "duration":1.2}, "push":{"particles_nb":4}, "remove":{"particles_nb":2}}}, "retina_detect":false}});
      particleSettings = $.extend({}, {"enabled":false, "particles":[{"name":"Particle Snow", "particle":{"enabled":true, "id":"snowflake", "canvas_selector":".backstretch", "particle_data":{"particles":{"number":{"value":150, "density":{"enable":true, "value_area":800}}, "color":{"value":"#ffffff"}, "shape":{"type":"image", "stroke":{"width":0, "color":"#000000"}, "polygon":{"nb_sides":5}, "image":{"src":"/assets/themes/j1/modules/particles/css/images/snowflake-1.png", "width":100, "height":100}}, "opacity":{"value":0.5, "random":true, "anim":{"enable":false, "speed":1, "opacity_min":0.1, "sync":false}}, "size":{"value":15, "random":true, "anim":{"enable":false, "speed":40, "size_min":0.1, "sync":false}}, "line_linked":{"enable":false, "distance":500, "color":"#ffffff", "opacity":0.4, "width":2}, "move":{"enable":true, "speed":1.5, "direction":"bottom", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract":{"enable":false, "rotateX":600, "rotateY":1200}}}, "interactivity":{"detect_on":"canvas", "events":{"onhover":{"enable":false, "mode":"grab"}, "onclick":{"enable":false, "mode":"push"}}, "modes":{"grab":{"distance":100, "line_linked":{"opacity":0.75}}, "bubble":{"distance":100, "size":40, "duration":0.4, "opacity":0.4, "speed":3}, "repulse":{"distance":200, "duration":1.2}, "push":{"particles_nb":4}, "remove":{"particles_nb":2}}}, "retina_detect":false}}}, {"name":"Particle Default", "particle":{"enabled":false, "id":"particle-default"}}]});
      particleOptions  = $.extend(true, {}, particleDefaults, particleSettings, frontmatterOptions);
      _this  = j1.adapter.particles;
      logger = log4javascript.getLogger('j1.adapter.particles');
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        if ( j1.getState() === 'finished' ) {
          var obj;
          var data;
          var allConfigs;
          var particlesJSON;
          var objParticles;
          var particleID;
          var particleContainer;
          var dataUrl = particleDefaults['xhr_data_path'];
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized')
              particleID          = 'snowflake';
              particleContainer   = '.backstretch';
              $(particleContainer).attr('id', particleID);
              var dependencies_met_attic_ready = setInterval (function (options) {
                if ($('#' + particleID).length != 0) {
                  logger.info('\n' + 'container found: ' + '#' + particleID);
                  // load particles config from yaml data file (dataUrl)
                  $.get(dataUrl)
                  .done(function (data) {
                    allConfigs = yaml.loadAll(data, 'utf8');
                      particleID = 'snowflake';
                      if (particleID == 'snowflake') {
                        // pass the data >>object<<
                        objParticles = allConfigs[0][particleID][0];
                        particlesJS(particleID, objParticles);
                      }
                  })
                  .fail(function () {
                    logger.error('\n' + 'loading data: failed');
                  });
                } else {
                  logger.warn('\n' + 'container id not found: ' + '#' + particleID);
                }
                clearInterval(dependencies_met_attic_ready);
              }, 25);
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


