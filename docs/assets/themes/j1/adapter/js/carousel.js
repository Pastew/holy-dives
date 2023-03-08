

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/carousel.js
 # JS Adapter for J1 Carousel (Owl Carousel V1)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
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
j1.adapter.carousel = (function (j1, window) {
  var environment   = 'development';
  var dragging      = false;
  var carouselDefaults;
  var carouselSettings;
  var carouselOptions;
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
        module_name: 'j1.adapter.carousel',
        generated:   '2023-03-08 15:08:54 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.carousel;
      logger  = log4javascript.getLogger('j1.adapter.carousel');
      // Load  module DEFAULTS|CONFIG
      carouselDefaults = $.extend({},   );
      carouselSettings = $.extend({},   );
      carouselOptions  = $.extend(true, {}, carouselDefaults, carouselSettings);
      var dependencies_met_page_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
              // Create an Carousel INSTANCE if slider on id: demo_text_carousel exists
              if ($('#demo_text_carousel').length) {
                logText = '\n' + 'slider is being processed on id: #demo_text_carousel';
                logger.info(logText);
                _this.setState('processing');
                // place HTML markup for the title
                // set space between the slides
                $('head').append('<style>.demo_text_carousel-item{margin: 3px;}</style>');
                // place additional text carousel styles (border/margin)
                  $('head').append('<style>#demo_text_carousel{border-left: 3px solid #0072ff;}</style>');
                  // wait until carousel has been initialized
                  var dependency_met_owl_initialized = setInterval (function () {
                    if ($('#demo_text_carousel > .owl-wrapper-outer').length) {
                      $('head').append('<style>#demo_text_carousel{font-size:1.5rem}</style>');
                      $('head').append('<style>#demo_text_carousel{font-weight:400}</style>');
                      $('#demo_text_carousel > .owl-wrapper-outer').addClass('ml-3');
                      clearInterval(dependency_met_owl_initialized);
                    }
                  }, 25); // END dependency_met_owl_initialized
                // place additional parallax styles if enabled
                // Initialize individual show parameters
                /* eslint-disable */
                $('#demo_text_carousel').owlCarousel({
                  "autoPlay": 5000,
                  "singleItem": true,
                  "pagination": false,
                  // Enable lazyLoad if lightbox is enabled
                  "jsonPath": "/assets/data/carousel.json",
                  "jsonSuccess": customDataSuccess_1
                });
                /* eslint-enable */
                // Initialize instance variable (for later access)
                j1['demo_text_carousel'] = $('#demo_text_carousel').data('owlCarousel');
                // custom show data functions (each slide show)
                function customDataSuccess_1(data){
                  var content = '';
                  for (var i in data['demo_text_carousel']) {
                    var text        = data['demo_text_carousel'][i].text;
                    var href        = data['demo_text_carousel'][i].href;
                    if (href) {
                      content += '<div class="item">' + '<p href=' +href+ '">' +text+ '</p>' + '</div>';
                    } else {
                      content += '<div class="item">' + '<p>' +text+ '</p>' + '</div>';
                    }
                  }
                  $('#demo_text_carousel').html(content);
                  // jadams: managing captions should be adopted from
                  // JustifiedGallery as this simple solution does NOT work
                  // NOTE: Potentially the core of OwlCarousel has to be
                  // changed to manage captions natively
                  // -----------------------------------------------------------
                  // var captionID = '#demo_text_carousel_caption';
                  // $(captionID).hover(
                  //   function(e) {
                  //     $( this ).find( ".carousel-caption" ).show();
                  //     e.stopPropagation();
                  //   }, function(e) {
                  //     $( this ).find( ".carousel-caption" ).hide();
                  //     e.stopPropagation();
                  //   }
                  // );
                  _this.setState('processed');
                  logText = '\n' + 'processing slider finished on id: demo_text_carousel';
                  logger.info(logText);
                } // END customDataSuccess_1
              } // END if carousel exists
              // Create an Carousel INSTANCE if slider on id: demo_text_carousel_parallax exists
              if ($('#demo_text_carousel_parallax').length) {
                logText = '\n' + 'slider is being processed on id: #demo_text_carousel_parallax';
                logger.info(logText);
                _this.setState('processing');
                // place HTML markup for the title
                // set space between the slides
                $('head').append('<style>.demo_text_carousel_parallax-item{margin: 3px;}</style>');
                // place additional text carousel styles (border/margin)
                // place additional parallax styles if enabled
                  $('head').append('<style>#demo_text_carousel_parallax{padding:75px 0 75px 75px;position:relative}</style>');
                  $('head').append('<style>#demo_text_carousel_parallax{background:url(/assets/images/quotes/default.jpg) 50% 0 repeat fixed}</style>');
                  $('head').append('<style>#demo_text_carousel_parallax:after{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:rgba(0,0,0,0.1)}</style>');
                  $('#demo_text_carousel_parallax').addClass('mdi-md-grey-100');
                  $('head').append('<style>#demo_text_carousel_parallax{font-size:1.5rem}</style>');
                  $('head').append('<style>#demo_text_carousel_parallax{font-weight:500}</style>');
                  $('head').append('<style>#demo_text_carousel_parallax:before{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:url(/assets/images/modules/patterns/gridtile.png) repeat;}</style>');
                // Initialize individual show parameters
                /* eslint-disable */
                $('#demo_text_carousel_parallax').owlCarousel({
                  "autoPlay": 5000,
                  "singleItem": true,
                  "pagination": false,
                  // Enable lazyLoad if lightbox is enabled
                  "jsonPath": "/assets/data/carousel.json",
                  "jsonSuccess": customDataSuccess_2
                });
                /* eslint-enable */
                // Initialize instance variable (for later access)
                j1['demo_text_carousel_parallax'] = $('#demo_text_carousel_parallax').data('owlCarousel');
                // custom show data functions (each slide show)
                function customDataSuccess_2(data){
                  var content = '';
                  for (var i in data['demo_text_carousel_parallax']) {
                    var text        = data['demo_text_carousel_parallax'][i].text;
                    var href        = data['demo_text_carousel_parallax'][i].href;
                    if (href) {
                      content += '<div class="item">' + '<p href=' +href+ '">' +text+ '</p>' + '</div>';
                    } else {
                      content += '<div class="item">' + '<p>' +text+ '</p>' + '</div>';
                    }
                  }
                  $('#demo_text_carousel_parallax').html(content);
                  // jadams: managing captions should be adopted from
                  // JustifiedGallery as this simple solution does NOT work
                  // NOTE: Potentially the core of OwlCarousel has to be
                  // changed to manage captions natively
                  // -----------------------------------------------------------
                  // var captionID = '#demo_text_carousel_parallax_caption';
                  // $(captionID).hover(
                  //   function(e) {
                  //     $( this ).find( ".carousel-caption" ).show();
                  //     e.stopPropagation();
                  //   }, function(e) {
                  //     $( this ).find( ".carousel-caption" ).hide();
                  //     e.stopPropagation();
                  //   }
                  // );
                  _this.setState('processed');
                  logText = '\n' + 'processing slider finished on id: demo_text_carousel_parallax';
                  logger.info(logText);
                } // END customDataSuccess_2
              } // END if carousel exists
              // Create an Carousel INSTANCE if slider on id: demo_cats exists
              if ($('#demo_cats').length) {
                logText = '\n' + 'slider is being processed on id: #demo_cats';
                logger.info(logText);
                _this.setState('processing');
                // place HTML markup for the title
                // set space between the slides
                $('head').append('<style>.demo_cats-item{margin: 3px;}</style>');
                // place additional text carousel styles (border/margin)
                // place additional parallax styles if enabled
                // Initialize individual show parameters
                /* eslint-disable */
                $('#demo_cats').owlCarousel({
                  "navigation": false,
                  "itemsCustom": [[0,1],[400,1],[700,2],[1000,2],[1200,2],[1600,2]],
                  "slideSpeed": 300,
                  "paginationSpeed": 400,
                  "items": 2,
                  // Enable lazyLoad if lightbox is enabled
                  "lazyLoad": true,
                  "jsonPath": "/assets/data/carousel.json",
                  "jsonSuccess": customDataSuccess_3
                });
                /* eslint-enable */
                // Initialize instance variable (for later access)
                j1['demo_cats'] = $('#demo_cats').data('owlCarousel');
                // custom show data functions (each slide show)
                function customDataSuccess_3(data){
                  var content = '';
                  for (var i in data['demo_cats']) {
                    var href        = data['demo_cats'][i].href;
                    var lb          = data['demo_cats'][i].lb;
                    var lb_caption  = data['demo_cats'][i].lb_caption;
                    var img         = data['demo_cats'][i].img;
                    var alt         = data['demo_cats'][i].alt;
                    // if lightbox is enabled (preference over href)
                    if (lb) {
                      if (lb_caption) {
                        content += '\t\t' + '<div class="item demo_cats-item thumbnail">'+ '\n';
                        content += '\t\t\t' + '<a href="' +img+ '" ' + 'data-lightbox="demo_cats" data-title="' +lb_caption+ '">' + '\n';
                        content += '\t\t\t\t' + '<img class="lazyOwl" src="' +img+ '" alt="' +lb_caption+ '">' + '\n';
                        content += '\t\t\t' + ' </a>' + '\n';
                        if (href) {
                        content += '\t\t\t' + '<span id="demo_cats_caption" class="text-start carousel-caption"><a class="md-grey-300 link-no-decoration" href="' +href+ '">' +lb_caption+ ' </a> </span>' + '\n';
                        } else {
                        content += '\t\t\t' + '<span id="demo_cats_caption" class="text-start carousel-caption">' +lb_caption+ '</span>' + '\n';
                        }
                        content += '\t\t' + '</div>' + '\n';
                      } else {
                        // jadams, 2021-03-06: added link text (alt) for search engine optimization (SEO|Google)
                        // content += '<a class="item" href="' +img+ '" ' + 'data-lightbox="demo_cats"> <img class="lazyOwl" data-src="' +img+ '" alt="' +alt+ '">' + ' </a>';
                        //
                        content += '<a class="item link-no-decoration" href="' + img + '" ';
                        content += 'data-lightbox="demo_cats"> <img class="lazyOwl" data-src="' + img;
                        content += '" alt="' +alt+ '">' +alt+ ' </a>';
                      }
                    } else if (href) {
                        content += '<div class="item">' + '<img src="' +img+ '" alt="' +alt+ '">' + '</div>';
                    } else {
                        content += '<div class="item">' + '<img src="' +img+ '" alt="' +alt+ '">' + '</div>';
                    }
                  }
                  $('#demo_cats').html(content);
                  // jadams: managing captions should be adopted from
                  // JustifiedGallery as this simple solution does NOT work
                  // NOTE: Potentially the core of OwlCarousel has to be
                  // changed to manage captions natively
                  // -----------------------------------------------------------
                  // var captionID = '#demo_cats_caption';
                  // $(captionID).hover(
                  //   function(e) {
                  //     $( this ).find( ".carousel-caption" ).show();
                  //     e.stopPropagation();
                  //   }, function(e) {
                  //     $( this ).find( ".carousel-caption" ).hide();
                  //     e.stopPropagation();
                  //   }
                  // );
                  _this.setState('processed');
                  logText = '\n' + 'processing slider finished on id: demo_cats';
                  logger.info(logText);
                } // END customDataSuccess_3
              } // END if carousel exists
              // Create an Carousel INSTANCE if slider on id: demo_simple exists
              if ($('#demo_simple').length) {
                logText = '\n' + 'slider is being processed on id: #demo_simple';
                logger.info(logText);
                _this.setState('processing');
                // place HTML markup for the title
                // set space between the slides
                $('head').append('<style>.demo_simple-item{margin: 3px;}</style>');
                // place additional text carousel styles (border/margin)
                // place additional parallax styles if enabled
                // Initialize individual show parameters
                /* eslint-disable */
                $('#demo_simple').owlCarousel({
                  "autoPlay": 3000,
                  "items": 3,
                  "autoHeight": true,
                  "pagination": false,
                  "paginationNumbers": false,
                  "itemsDesktop": "[1199,3]",
                  "itemsDesktopSmall": "[979,3]",
                  // Enable lazyLoad if lightbox is enabled
                  "jsonPath": "/assets/data/carousel.json",
                  "jsonSuccess": customDataSuccess_4
                });
                /* eslint-enable */
                // Initialize instance variable (for later access)
                j1['demo_simple'] = $('#demo_simple').data('owlCarousel');
                // custom show data functions (each slide show)
                function customDataSuccess_4(data){
                  var content = '';
                  for (var i in data['demo_simple']) {
                    var href        = data['demo_simple'][i].href;
                    var lb          = data['demo_simple'][i].lb;
                    var lb_caption  = data['demo_simple'][i].lb_caption;
                    var img         = data['demo_simple'][i].img;
                    var alt         = data['demo_simple'][i].alt;
                    // if lightbox is enabled (preference over href)
                    if (lb) {
                      if (lb_caption) {
                        content += '\t\t' + '<div class="item demo_simple-item ">'+ '\n';
                        content += '\t\t\t' + '<a href="' +img+ '" ' + 'data-lightbox="demo_simple" data-title="' +lb_caption+ '">' + '\n';
                        content += '\t\t\t\t' + '<img class="lazyOwl" src="' +img+ '" alt="' +lb_caption+ '">' + '\n';
                        content += '\t\t\t' + ' </a>' + '\n';
                        if (href) {
                        content += '\t\t\t' + '<span id="demo_simple_caption" class="text-start carousel-caption"><a class="md-grey-300 link-no-decoration" href="' +href+ '">' +lb_caption+ ' </a> </span>' + '\n';
                        } else {
                        content += '\t\t\t' + '<span id="demo_simple_caption" class="text-start carousel-caption">' +lb_caption+ '</span>' + '\n';
                        }
                        content += '\t\t' + '</div>' + '\n';
                      } else {
                        // jadams, 2021-03-06: added link text (alt) for search engine optimization (SEO|Google)
                        // content += '<a class="item" href="' +img+ '" ' + 'data-lightbox="demo_simple"> <img class="lazyOwl" data-src="' +img+ '" alt="' +alt+ '">' + ' </a>';
                        //
                        content += '<a class="item link-no-decoration" href="' + img + '" ';
                        content += 'data-lightbox="demo_simple"> <img class="lazyOwl" data-src="' + img;
                        content += '" alt="' +alt+ '">' +alt+ ' </a>';
                      }
                    } else if (href) {
                        content += '<div class="item">' + '<img src="' +img+ '" alt="' +alt+ '">' + '</div>';
                    } else {
                        content += '<div class="item">' + '<img src="' +img+ '" alt="' +alt+ '">' + '</div>';
                    }
                  }
                  $('#demo_simple').html(content);
                  // jadams: managing captions should be adopted from
                  // JustifiedGallery as this simple solution does NOT work
                  // NOTE: Potentially the core of OwlCarousel has to be
                  // changed to manage captions natively
                  // -----------------------------------------------------------
                  // var captionID = '#demo_simple_caption';
                  // $(captionID).hover(
                  //   function(e) {
                  //     $( this ).find( ".carousel-caption" ).show();
                  //     e.stopPropagation();
                  //   }, function(e) {
                  //     $( this ).find( ".carousel-caption" ).hide();
                  //     e.stopPropagation();
                  //   }
                  // );
                  _this.setState('processed');
                  logText = '\n' + 'processing slider finished on id: demo_simple';
                  logger.info(logText);
                } // END customDataSuccess_4
              } // END if carousel exists
              // Create an Carousel INSTANCE if slider on id: demo_oneslide exists
              if ($('#demo_oneslide').length) {
                logText = '\n' + 'slider is being processed on id: #demo_oneslide';
                logger.info(logText);
                _this.setState('processing');
                // place HTML markup for the title
                // set space between the slides
                $('head').append('<style>.demo_oneslide-item{margin: 3px;}</style>');
                // place additional text carousel styles (border/margin)
                // place additional parallax styles if enabled
                // Initialize individual show parameters
                /* eslint-disable */
                $('#demo_oneslide').owlCarousel({
                  "navigation": true,
                  "slideSpeed": 300,
                  "paginationSpeed": 400,
                  "singleItem": true,
                  "transitionStyle": "goDown",
                  // Enable lazyLoad if lightbox is enabled
                  "lazyLoad": true,
                  "jsonPath": "/assets/data/carousel.json",
                  "jsonSuccess": customDataSuccess_5
                });
                /* eslint-enable */
                // Initialize instance variable (for later access)
                j1['demo_oneslide'] = $('#demo_oneslide').data('owlCarousel');
                // custom show data functions (each slide show)
                function customDataSuccess_5(data){
                  var content = '';
                  for (var i in data['demo_oneslide']) {
                    var href        = data['demo_oneslide'][i].href;
                    var lb          = data['demo_oneslide'][i].lb;
                    var lb_caption  = data['demo_oneslide'][i].lb_caption;
                    var img         = data['demo_oneslide'][i].img;
                    var alt         = data['demo_oneslide'][i].alt;
                    // if lightbox is enabled (preference over href)
                    if (lb) {
                      if (lb_caption) {
                        content += '\t\t' + '<div class="item demo_oneslide-item ">'+ '\n';
                        content += '\t\t\t' + '<a href="' +img+ '" ' + 'data-lightbox="demo_oneslide" data-title="' +lb_caption+ '">' + '\n';
                        content += '\t\t\t\t' + '<img class="lazyOwl" src="' +img+ '" alt="' +lb_caption+ '">' + '\n';
                        content += '\t\t\t' + ' </a>' + '\n';
                        if (href) {
                        content += '\t\t\t' + '<span id="demo_oneslide_caption" class="text-start carousel-caption"><a class="md-grey-300 link-no-decoration" href="' +href+ '">' +lb_caption+ ' </a> </span>' + '\n';
                        } else {
                        content += '\t\t\t' + '<span id="demo_oneslide_caption" class="text-start carousel-caption">' +lb_caption+ '</span>' + '\n';
                        }
                        content += '\t\t' + '</div>' + '\n';
                      } else {
                        // jadams, 2021-03-06: added link text (alt) for search engine optimization (SEO|Google)
                        // content += '<a class="item" href="' +img+ '" ' + 'data-lightbox="demo_oneslide"> <img class="lazyOwl" data-src="' +img+ '" alt="' +alt+ '">' + ' </a>';
                        //
                        content += '<a class="item link-no-decoration" href="' + img + '" ';
                        content += 'data-lightbox="demo_oneslide"> <img class="lazyOwl" data-src="' + img;
                        content += '" alt="' +alt+ '">' +alt+ ' </a>';
                      }
                    } else if (href) {
                        content += '<div class="item">' + '<img src="' +img+ '" alt="' +alt+ '">' + '</div>';
                    } else {
                        content += '<div class="item">' + '<img src="' +img+ '" alt="' +alt+ '">' + '</div>';
                    }
                  }
                  $('#demo_oneslide').html(content);
                  // jadams: managing captions should be adopted from
                  // JustifiedGallery as this simple solution does NOT work
                  // NOTE: Potentially the core of OwlCarousel has to be
                  // changed to manage captions natively
                  // -----------------------------------------------------------
                  // var captionID = '#demo_oneslide_caption';
                  // $(captionID).hover(
                  //   function(e) {
                  //     $( this ).find( ".carousel-caption" ).show();
                  //     e.stopPropagation();
                  //   }, function(e) {
                  //     $( this ).find( ".carousel-caption" ).hide();
                  //     e.stopPropagation();
                  //   }
                  // );
                  _this.setState('processed');
                  logText = '\n' + 'processing slider finished on id: demo_oneslide';
                  logger.info(logText);
                } // END customDataSuccess_5
              } // END if carousel exists
          clearInterval(dependencies_met_page_finished);
          var dependencies_met_sliders_processed = setInterval(function() {
            if (_this.getState() == 'processed') {
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              logger.info('\n' + 'initializing module finished');
              clearInterval(dependencies_met_sliders_processed);
            }
          }, 25); // END 'dependencies_met_sliders_processed'
        } // END if j1.getState 'finished'
      }, 25); // END 'dependencies_met_page_finished'
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
    // -----------------------------------------------------------------------
    //  Caption text animation (currently NOT used)
    // -----------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // fadeIn()
    // Animation (caption): fadeIn
    // -------------------------------------------------------------------------
    fadeIn: function (id, options) {
      $(id + '.active .caption .fadeIn-1').stop().delay(options.delay)
      .animate({
        opacity:      options.opacity
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
      $(id + '.active .caption .fadeIn-2').stop().delay(options.delay+200)
      .animate({
        opacity:      options.opacity
      }, {
        duration:     options.duration,
          easing:     options.easing
      });
      $(id + '.active .caption .fadeIn-3').stop().delay(options.delay+500)
      .animate({
        opacity:      options.opacity
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
    },
    // -------------------------------------------------------------------------
    // fadeInUp()
    // Animation (caption): fadeInUp
    // -------------------------------------------------------------------------
    fadeInUp: function (id, options) {
      $(id + '.active .caption .fadeInUp-1')
      .stop()
      .delay(options.delay)
      .animate({
        opacity:      options.opacity,
        top:          options.top
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
      $(id + '.active .caption .fadeInUp-2')
      .stop()
      .delay(options.delay+200)
      .animate({
        opacity:      options.opacity,
        top:          options.top
      }, {
        duration: 800,
        easing: 'easeOutCubic'
      });
      $(id + '.active .caption .fadeInUp-3')
      .stop()
      .delay(options.delay+500)
      .animate({
        opacity:      options.opacity,
        top:          options.top
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
    },
    // -------------------------------------------------------------------------
    // fadeInRight()
    // Animation (caption): fadeInRight
    // -------------------------------------------------------------------------
    fadeInRight: function (id, options) {
      $(id + '.active .caption .fadeInRight-1')
      .stop()
      .delay(options.delay)
      .animate({
        opacity:      options.opacity,
        left:         options.left
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
      $(id + '.active .caption .fadeInRight-2')
      .stop()
      .delay(options.delay+200)
      .animate({
        opacity:      options.opacity,
        left:         options.left
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
      $(id + '.active .caption .fadeInRight-3')
      .stop()
      .delay(options.delay+500)
      .animate({
        opacity:      options.opacity,
        left:         options.left
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
    },
    // -------------------------------------------------------------------------
    // fadeInDown()
    // Animation (caption): fadeInDown
    // -------------------------------------------------------------------------
    fadeInDown: function (id, options) {
      $('#item-1').backstretch();
      $(id + '.active .caption .fadeInDown-1')
      .stop()
      .delay(options.delay)
      .animate({
        opacity:      options.opacity,
        top:          options.top
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
      $(id + '.active .caption .fadeInDown-2')
      .stop()
      .delay(options.delay+200)
      .animate({
        opacity:      options.opacity,
        top:          options.top
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
      $(id + '.active .caption .fadeInDown-3')
      .stop()
      .delay(options.delay+500)
      .animate({
        opacity:      options.opacity,
        top:          options.top
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
    },
    // -------------------------------------------------------------------------
    // fadeInLeft()
    // Animation (caption): fadeInLeft
    // -------------------------------------------------------------------------
    fadeInLeft: function (id, options) {
      $('#item-2').backstretch();
      $(id + '.active .caption .fadeInLeft-1')
      .stop()
      .delay(500)
      .animate({
        opacity:      options.opacity,
        top:          options.left
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
      $(id + '.active .caption .fadeInLeft-2')
      .stop()
      .delay(700)
      .animate({
        opacity:      options.opacity,
        top:          options.left
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
      $(id + '.active .caption .fadeInLeft-3')
      .stop()
      .delay(1000)
      .animate({
        opacity:      options.opacity,
        top:          options.left
      }, {
        duration:     options.duration,
        easing:       options.easing
      });
    },
    // -------------------------------------------------------------------------
    // fadeInReset()
    // Reset animation (caption): fadeIn
    // -------------------------------------------------------------------------
    fadeInReset: function (id, options) {
      if (!options.dragging) {
        $(id + '.caption .fadeIn-1,' +
          id + '.caption .fadeIn-2,' +
          id + '.caption .fadeIn-3')
        .stop()
        .delay(options.delay)
        .animate({
            opacity:  options.opacity
        }, {
            duration: options.duration,
            easing:   options.easing
        });
      } else {
        $(id + '.caption .fadeIn-1,' +
          id + '.caption .fadeIn-2,' +
          id + '.caption .fadeIn-3')
        .css({
            opacity:  options.opacity
        });
      }
    }, // END fadeOut
    // -------------------------------------------------------------------------
    // fadeInUpReset()
    // Reset animation (caption): fadeInUp
    // -------------------------------------------------------------------------
    fadeInUpReset: function (id, options) {
      if (!options.dragging) {
        $(id + '.caption .fadeInUp-1,' +
          id + '.caption .fadeInUp-2,' +
          id + '.caption .fadeInUp-3')
        .stop()
        .delay(options.delay)
        .animate({
            opacity:  options.opacity,
            top:      options.top
        }, {
          duration:   options.duration,
          easing:     options.easing
        });
      } else {
        $(id + '.caption .fadeInUp-1', +
          id + '.caption .fadeInUp-2,' +
          id + '.caption .fadeInUp-3')
        .css({
            opacity:  options.opacity,
            top:      options.top
        });
      }
    }, // END fadeInUpReset
    // -------------------------------------------------------------------------
    // fadeInRightReset()
    // Reset animation (caption): fadeInRight
    // -------------------------------------------------------------------------
    fadeInRightReset: function (id, options) {
      if (!options.dragging) {
        $(id + '.caption .fadeInRight-1,' +
          id + '.caption .fadeInRight-2,' +
          id + '.caption .fadeInRight-3')
        .stop()
        .delay(options.delay)
        .animate({
            opacity:  options.opacity,
            left:     options.left
        }, {
          duration:   options.duration,
          easing:     options.easing
        });
      } else {
        $(id + '.caption .fadeInRight-1,' +
          id + '.caption .fadeInRight-2,' +
          id + '.caption .fadeInRight-3')
        .css({
            opacity:  options.opacity,
            left:     options.left
        });
      }
    }, // END fadeInRightReset
    // -------------------------------------------------------------------------
    // fadeOutDown()
    // Reset animation (caption): fadeInDown
    // -------------------------------------------------------------------------
    fadeInDownReset: function (id, options) {
      if (!options.dragging) {
        $(id + '.caption .fadeInDown-1,' +
          id + '.caption .fadeInDown-2,' +
          id + '.caption .fadeInDown-3')
        .stop()
        .delay(options.delay)
        .animate({
            opacity:  options.opacity,
            top:      options.top
        }, {
            duration: options.duration,
            easing:   options.easing
        });
      } else {
        $(id + '.caption .fadeInDown-1,' +
          id + '.caption .fadeInDown-2,' +
          id + '.caption .fadeInDown-3')
        .css({
            opacity:  options.opacity,
            top:      options.transitionTypes
        });
      }
    }, // END fadeOutDown
    // -------------------------------------------------------------------------
    // fadeInLeftReset()
    // Reset animation (caption): fadeInLeft
    // -------------------------------------------------------------------------
    fadeInLeftReset: function (id, options) {
      if (!options.dragging) {
        $(id + '.caption .fadeInLeft-1,' +
          id + '.caption .fadeInLeft-2,' +
          id + '.caption .fadeInLeft-3')
        .stop()
        .delay(options.delay)
        .animate({
            opacity:  options.opacity,
            left:     options.left
        }, {
          duration:   options.duration,
          easing:     options.easing
        });
      } else {
        $(id + '.caption .fadeInLeft-1,' +
          id + '.caption .fadeInLeft-2,' +
          id + '.caption .fadeInLeft-3')
        .css({
            opacity:  options.opacity,
            left:     options.left
        });
      }
    }, // END fadeInLeftReset
  }; // END return
})(j1, window);



