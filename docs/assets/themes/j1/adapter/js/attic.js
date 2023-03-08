

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/attic.js
 # JS Adapter for J1 Master Header
 #
 # Product/Info:
 # https://jekyll.one
 # http://www.jquery-backstretch.com/
 #
 # Copyright (C) 2023 Juergen Adams
 # Copyright (C) 2012 Scott Robbin
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Backstretch is licensed under the MIT License.
 # For details, see https://github.com/jquery-backstretch/jquery-backstretch
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
j1.adapter.attic = (function (j1, window) {
  var environment   = 'development';
  var moduleOptions = {};
  var _this;
  var logger;
  var logText;
  var atticFilters;
  var filterArray;
  var filterStr;
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
        module_name: 'j1.adapter.attic',
        generated:   '2023-03-08 15:08:54 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.attic;
      logger  = log4javascript.getLogger('j1.adapter.attic');
      // initialize state flag
      _this.state = 'pending';
      // create settings object from frontmatter
      var frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // create settings object from attic options
      var atticDefaults = $.extend({}, {"debug":false, "circuit":false, "notranslate":true, "pauseOnHover":false, "icon_family":"MDI", "icon_color":"#9E9E9E", "icon_size":"default", "raised_level":0, "r_text":"enabled", "text_emphasis":"stronger", "padding_top":200, "padding_bottom":50, "margin_bottom":50, "title_size":"3em", "title_color":"rgba(255, 255, 255, 0.8)", "title_align":"left", "title_animate":"animate__bounceInDown", "title_animate_duration":"animate__slower", "tagline_size":"1.5em", "tagline_color":"rgba(255, 255, 255, 0.8)", "tagline_align":"left", "tagline_animate":"animate__fadeInRight", "tagline_animate_duration":"animate__slower", "background_color_1":"#0D47A1", "background_color_2":"#0D47A1", "action_enabled":false, "action_url":"#void", "action_button":"btn-default", "action_icon":"download", "action_icon_family":"MDI", "action_text":"Download Now", "logo_enabled":false, "logo_url":"/assets/images/modules/icons/j1/j1-512x512.png", "logo_alt":"Jekyll-One-Template", "logo_height":196, "logo_animate":"animate__slideInDown", "spinner":false, "caption":"", "caption_href":"", "caption_color":"rgba(255, 255, 255, 0.5)", "opacity":1.0, "alignX":0.5, "alignY":0.5, "scale":"cover", "transition":"fadeInOut", "duration":5000, "transitionDuration":"normal", "animateFirst":false, "start":0, "paused":false, "preload":2, "preloadSize":1, "bypassCss":false, "alwaysTestWindowResolution":false, "resolutionRefreshRate":2500, "resolutionChangeRatioThreshold":0.1, "isVideo":false, "loop":false, "mute":false, "attics":[{"name":"Home", "attic":{"enabled":false, "id":"attic_home", "layout":"home", "notranslate":true}}, {"name":"Page_Post", "attic":{"enabled":false, "id":"attic_page_post", "layout":["page", "post"], "notranslate":true}}, {"name":"Text attic", "attic":{"enabled":false, "id":"attic_text", "layout":["collection", "app", "raw"], "notranslate":true}}]});
      var atticSettings = $.extend({}, {"debug":false, "attics":[{"name":"Home", "attic":{"enabled":true, "id":"attic_home", "layout":"home", "padding_top":400, "padding_bottom":50, "opacity":0.5, "background_color_1":"#0D47A1", "background_color_2":"#0D47A1", "filters":{"grayscale":1, "contrast":0.8, "brightness":0.8}}}, {"name":"Pages and Posts", "attic":{"enabled":true, "id":"attic_page_post", "layout":["collection", "page", "post", "blog_archive"], "padding_top":400, "padding_bottom":50, "opacity":0.5, "filters":{"grayscale":1, "contrast":0.8, "brightness":0.8}}}, {"name":"Raw pages", "attic":{"enabled":true, "id":"attic_raw", "layout":["raw"], "padding_top":400, "padding_bottom":50, "opacity":0.5, "filters":{"grayscale":1, "contrast":0.8, "brightness":0.8}}}, {"name":"Text pages", "attic":{"enabled":true, "id":"attic_text", "layout":["app"]}}]});
//    merge all attic options
      var atticOptions = $.extend({}, atticDefaults, atticSettings, frontmatterOptions);
      // Save frontmatterOptions and atticOptions in the j1 namespace
      // to be used later by j1.template.init() to load the header
      //
      _this['frontmatterOptions'] = frontmatterOptions;
      _this['atticOptions']       = atticOptions;
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      _this.loadHeader();
    }, // END init
    // -------------------------------------------------------------------------
    // Initialize all header supported
    // -------------------------------------------------------------------------
    loadHeader: function () {
      var frontmatterOptions  = _this.frontmatterOptions;
      // merge all attic options
      var atticOptions = $.extend({}, _this.atticOptions, _this.frontmatterOptions);
          // Create the SPECIFIC header loader FUNCTION of type: attic_home
          function attic_home (atticOptions) {
            // convert attic filter settings to object to array to string
            atticFilters = $.extend({}, {"grayscale":1, "contrast":0.8, "brightness":0.8});
            filterArray = [];
            $.each(atticFilters, function(idx2,val2) {
              var str = idx2 + '(' + val2 + ')';
              filterArray.push(str);
            });
            filterStr = filterArray.join(' ');
            // Fire backstretch for all slides of the header on attic_id
            if ($('#attic_home').length) {
              $('#attic_home').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // Collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_home').data('backstretch');
            // Add event for pauseOnHover
            //
            if (atticOptions.pauseOnHover) {
              $('#attic_home').hover (
                function() {
                  $('#attic_home').backstretch('pause'); },
                function() {
                  $('#attic_home').backstretch('resume'); }
              );
            }
           $(window).on('backstretch.before', function (e, instance, index) {
              var evt                 = e;
              var inst                = instance;
              var idx                 = index;
              var atticOptions        = _this.atticOptions;
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var textOverlayHTML;
              // console.log('module attic - set state: backstretch_before');
              _this.setState('backstretch_before');
              if (index === backstretch_instance_data.images.length -1) {
                if (atticOptions.circuit == false) {
                  // Stop the slideshow after reached the last image
                  $('#attic_home').backstretch('pause');
                }
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
              // Add collected CSS filters
              $('.backstretch').css('filter', filterStr);
              // mute the overlay content while sliding
              $('.textOverlay').css('opacity', '0');
              // mute the badge while sliding
              $('.attic-caption').css('opacity', '0');
              // re-initialze particles on a slideshow if exists
              if ($('.particles-js-canvas-el').length > 0) {
                j1.adapter.particles.init();
              }
            }); // END on('backstretch.before')
            $(window).on('backstretch.after', function (e, instance, index) {
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var atticOptions        = _this.atticOptions;
              var frontmatterOptions  = _this.frontmatterOptions;
              var textOverlayHTML;
              // apply DEFAULT settings for textOverlayTitle|textOverlayTagline
              // on the FIRST backstretch instance if title|tagline NOT set
              //
              if (index == 0) {
                if (typeof instance.images[index].title == 'undefined') {
                  textOverlayTitle    = frontmatterOptions.title;
                }
                if (typeof instance.images[index].tagline == 'undefined') {
                  textOverlayTagline  = frontmatterOptions.tagline;
                }
              }
              if (typeof instance.images[index].badge != 'undefined') {
                var bType               = instance.images[index].badge.type;
                var bAuthor             = instance.images[index].badge.author;
                var bLink               = instance.images[index].badge.href;
              }
              _this.setState('backstretch_after');
              if (typeof instance.images[index].caption != 'undefined') {
                var cText = instance.images[index].caption.text;
                var cLink = instance.images[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' + cLink + '" target="_blank">'+cText+'</a>').show();
                } else {
                  $('.attic-caption').text(cText).show();
                }
              } else if (typeof instance.images[index].badge != 'undefined') {
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge animate__animated animate__fadeIn animate__slower">'
                      + ' <a class="attic__badge_unsplash link-no-decoration"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                      $('.attic-caption').html(badgeHTML).hide();
                }
              }
              // TODO: Add additional styles to head-title-text|head-tagline-
              // text (e.g. text-center)
              // atticOptions.tagline_align
              textOverlayHTML = ''
                + '<div id="head-title" class="head-title animate__animated ">'
                + '  <h2 id="head-title-text" class="notoc text-' + atticOptions.title_align + ' text-emphasis-stronger">' + textOverlayTitle + '</h2>'
                + '</div>'
                + '<div id="head-tagline" class="head-tagline animate__animated ">'
                + '  <h3 id="head-tagline-text" class="notoc text-' + atticOptions.tagline_align + '">' + textOverlayTagline + '</h3>'
                + '</div>';
               $('.textOverlay').html(textOverlayHTML).hide();
              $('#head-title').addClass(atticOptions.title_animate);
              $('#head-title').addClass(atticOptions.title_animate_delay);
              $('#head-title').addClass(atticOptions.title_animate_duration);
              $('#head-tagline').addClass(atticOptions.tagline_animate);
              $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
              $('.textOverlay').show();
              $('.textOverlay').css('opacity', '1');
              // jadams, 2022-08-19: show a badge only if defined
              //
              if (typeof instance.images[index].badge != 'undefined') {
                $('.attic-caption').show();
                $('.attic-caption').css('opacity', '1');
              }
              // jadams, 2022-08-09:
              // resize the (background-)image to make sure the 'attic'
              // container is changed in size (heigth) if title/tagline
              // expands 'multiline' on small viewports
              // e.g. on mobile devices
              //
              $('#attic_home').backstretch('resize');
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              // logger.info('\n' + 'module initialized successfully');
            }); // END on('backstretch.after')
          } // END if attic_id exists
          // Initialize the header found in page
          if ($('#attic_home').length) {
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                                "opacity":                0.5, 
                            "padding_top":            400, 
                         "padding_bottom":         50, 
                     "background_color_1":     "#0D47A1", 
                     "background_color_2":     "#0D47A1", 
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                                "opacity":                0.5, 
                }
                /* eslint-enable */
                // Merge|Overload Attic OPTIONS
                atticOptions = $.extend({}, atticOptions, atticOptionsHeader, atticOptionsBackstretch);
                // Overload Attic OPTIONS by settings from frontmatterOptions
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
                 // ENDFOR item in header_config.attics
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            if (atticOptions.r_text == 'enabled') { $('#attic_home').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_home').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-title').addClass(atticOptions.title_animate_delay);
            $('#head-title').addClass(atticOptions.title_animate_duration);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            $('#head-tagline-text').addClass(text_emphasis);
            // check if attic should be translated
            //
            if (atticOptions.notranslate) {
              $('#attic_home').addClass('notranslate');
            }
            var attic_style = '';
            // Initialze header background gradient
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // Initialze header sizes
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +atticOptions.padding_top+ 'px; padding-bottom: ' +atticOptions.padding_bottom+ 'px; margin-bottom: ' +atticOptions.margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to all header images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            var attic_opacity;
            attic_opacity = '<style> .backstretch-item { opacity: ' +atticOptions.opacity+ '; </style>';
            $('head').append(attic_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            if (typeof atticOptions.slides != 'undefined') {
              // Load the image header if the page is ready (visible)
              $(function() {
                // logger.debug('\n' + 'Load image header on: ' + attic_home);
                logger.debug('\n' + 'Load image header');
                attic_home(atticOptions);
                _this.setState('completed');
                logger.debug('\n' + 'state: ' + _this.getState());
              });
            }
          } // END if header id found in page
         // END if header enabled
          // Create the SPECIFIC header loader FUNCTION of type: attic_page_post
          function attic_page_post (atticOptions) {
            // convert attic filter settings to object to array to string
            atticFilters = $.extend({}, {"grayscale":1, "contrast":0.8, "brightness":0.8});
            filterArray = [];
            $.each(atticFilters, function(idx2,val2) {
              var str = idx2 + '(' + val2 + ')';
              filterArray.push(str);
            });
            filterStr = filterArray.join(' ');
            // Fire backstretch for all slides of the header on attic_id
            if ($('#attic_page_post').length) {
              $('#attic_page_post').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // Collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_page_post').data('backstretch');
            // Add event for pauseOnHover
            //
            if (atticOptions.pauseOnHover) {
              $('#attic_home').hover (
                function() {
                  $('#attic_page_post').backstretch('pause'); },
                function() {
                  $('#attic_page_post').backstretch('resume'); }
              );
            }
           $(window).on('backstretch.before', function (e, instance, index) {
              var evt                 = e;
              var inst                = instance;
              var idx                 = index;
              var atticOptions        = _this.atticOptions;
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var textOverlayHTML;
              // console.log('module attic - set state: backstretch_before');
              _this.setState('backstretch_before');
              if (index === backstretch_instance_data.images.length -1) {
                if (atticOptions.circuit == false) {
                  // Stop the slideshow after reached the last image
                  $('#attic_page_post').backstretch('pause');
                }
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
              // Add collected CSS filters
              $('.backstretch').css('filter', filterStr);
              // mute the overlay content while sliding
              $('.textOverlay').css('opacity', '0');
              // mute the badge while sliding
              $('.attic-caption').css('opacity', '0');
              // re-initialze particles on a slideshow if exists
              if ($('.particles-js-canvas-el').length > 0) {
                j1.adapter.particles.init();
              }
            }); // END on('backstretch.before')
            $(window).on('backstretch.after', function (e, instance, index) {
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var atticOptions        = _this.atticOptions;
              var frontmatterOptions  = _this.frontmatterOptions;
              var textOverlayHTML;
              // apply DEFAULT settings for textOverlayTitle|textOverlayTagline
              // on the FIRST backstretch instance if title|tagline NOT set
              //
              if (index == 0) {
                if (typeof instance.images[index].title == 'undefined') {
                  textOverlayTitle    = frontmatterOptions.title;
                }
                if (typeof instance.images[index].tagline == 'undefined') {
                  textOverlayTagline  = frontmatterOptions.tagline;
                }
              }
              if (typeof instance.images[index].badge != 'undefined') {
                var bType               = instance.images[index].badge.type;
                var bAuthor             = instance.images[index].badge.author;
                var bLink               = instance.images[index].badge.href;
              }
              _this.setState('backstretch_after');
              if (typeof instance.images[index].caption != 'undefined') {
                var cText = instance.images[index].caption.text;
                var cLink = instance.images[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' + cLink + '" target="_blank">'+cText+'</a>').show();
                } else {
                  $('.attic-caption').text(cText).show();
                }
              } else if (typeof instance.images[index].badge != 'undefined') {
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge animate__animated animate__fadeIn animate__slower">'
                      + ' <a class="attic__badge_unsplash link-no-decoration"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                      $('.attic-caption').html(badgeHTML).hide();
                }
              }
              // TODO: Add additional styles to head-title-text|head-tagline-
              // text (e.g. text-center)
              // atticOptions.tagline_align
              textOverlayHTML = ''
                + '<div id="head-title" class="head-title animate__animated ">'
                + '  <h2 id="head-title-text" class="notoc text-' + atticOptions.title_align + ' text-emphasis-stronger">' + textOverlayTitle + '</h2>'
                + '</div>'
                + '<div id="head-tagline" class="head-tagline animate__animated ">'
                + '  <h3 id="head-tagline-text" class="notoc text-' + atticOptions.tagline_align + '">' + textOverlayTagline + '</h3>'
                + '</div>';
               $('.textOverlay').html(textOverlayHTML).hide();
              $('#head-title').addClass(atticOptions.title_animate);
              $('#head-title').addClass(atticOptions.title_animate_delay);
              $('#head-title').addClass(atticOptions.title_animate_duration);
              $('#head-tagline').addClass(atticOptions.tagline_animate);
              $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
              $('.textOverlay').show();
              $('.textOverlay').css('opacity', '1');
              // jadams, 2022-08-19: show a badge only if defined
              //
              if (typeof instance.images[index].badge != 'undefined') {
                $('.attic-caption').show();
                $('.attic-caption').css('opacity', '1');
              }
              // jadams, 2022-08-09:
              // resize the (background-)image to make sure the 'attic'
              // container is changed in size (heigth) if title/tagline
              // expands 'multiline' on small viewports
              // e.g. on mobile devices
              //
              $('#attic_page_post').backstretch('resize');
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              // logger.info('\n' + 'module initialized successfully');
            }); // END on('backstretch.after')
          } // END if attic_id exists
          // Initialize the header found in page
          if ($('#attic_page_post').length) {
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                                "opacity":                0.5, 
                            "padding_top":            400, 
                         "padding_bottom":         50, 
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                                "opacity":                0.5, 
                }
                /* eslint-enable */
                // Merge|Overload Attic OPTIONS
                atticOptions = $.extend({}, atticOptions, atticOptionsHeader, atticOptionsBackstretch);
                // Overload Attic OPTIONS by settings from frontmatterOptions
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
                 // ENDFOR item in header_config.attics
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            if (atticOptions.r_text == 'enabled') { $('#attic_page_post').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_page_post').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-title').addClass(atticOptions.title_animate_delay);
            $('#head-title').addClass(atticOptions.title_animate_duration);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            $('#head-tagline-text').addClass(text_emphasis);
            // check if attic should be translated
            //
            if (atticOptions.notranslate) {
              $('#attic_page_post').addClass('notranslate');
            }
            var attic_style = '';
            // Initialze header background gradient
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // Initialze header sizes
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +atticOptions.padding_top+ 'px; padding-bottom: ' +atticOptions.padding_bottom+ 'px; margin-bottom: ' +atticOptions.margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to all header images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            var attic_opacity;
            attic_opacity = '<style> .backstretch-item { opacity: ' +atticOptions.opacity+ '; </style>';
            $('head').append(attic_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            if (typeof atticOptions.slides != 'undefined') {
              // Load the image header if the page is ready (visible)
              $(function() {
                // logger.debug('\n' + 'Load image header on: ' + attic_page_post);
                logger.debug('\n' + 'Load image header');
                attic_page_post(atticOptions);
                _this.setState('completed');
                logger.debug('\n' + 'state: ' + _this.getState());
              });
            }
          } // END if header id found in page
         // END if header enabled
          // Create the SPECIFIC header loader FUNCTION of type: attic_raw
          function attic_raw (atticOptions) {
            // convert attic filter settings to object to array to string
            atticFilters = $.extend({}, {"grayscale":1, "contrast":0.8, "brightness":0.8});
            filterArray = [];
            $.each(atticFilters, function(idx2,val2) {
              var str = idx2 + '(' + val2 + ')';
              filterArray.push(str);
            });
            filterStr = filterArray.join(' ');
            // Fire backstretch for all slides of the header on attic_id
            if ($('#attic_raw').length) {
              $('#attic_raw').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // Collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_raw').data('backstretch');
            // Add event for pauseOnHover
            //
            if (atticOptions.pauseOnHover) {
              $('#attic_home').hover (
                function() {
                  $('#attic_raw').backstretch('pause'); },
                function() {
                  $('#attic_raw').backstretch('resume'); }
              );
            }
           $(window).on('backstretch.before', function (e, instance, index) {
              var evt                 = e;
              var inst                = instance;
              var idx                 = index;
              var atticOptions        = _this.atticOptions;
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var textOverlayHTML;
              // console.log('module attic - set state: backstretch_before');
              _this.setState('backstretch_before');
              if (index === backstretch_instance_data.images.length -1) {
                if (atticOptions.circuit == false) {
                  // Stop the slideshow after reached the last image
                  $('#attic_raw').backstretch('pause');
                }
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
              // Add collected CSS filters
              $('.backstretch').css('filter', filterStr);
              // mute the overlay content while sliding
              $('.textOverlay').css('opacity', '0');
              // mute the badge while sliding
              $('.attic-caption').css('opacity', '0');
              // re-initialze particles on a slideshow if exists
              if ($('.particles-js-canvas-el').length > 0) {
                j1.adapter.particles.init();
              }
            }); // END on('backstretch.before')
            $(window).on('backstretch.after', function (e, instance, index) {
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var atticOptions        = _this.atticOptions;
              var frontmatterOptions  = _this.frontmatterOptions;
              var textOverlayHTML;
              // apply DEFAULT settings for textOverlayTitle|textOverlayTagline
              // on the FIRST backstretch instance if title|tagline NOT set
              //
              if (index == 0) {
                if (typeof instance.images[index].title == 'undefined') {
                  textOverlayTitle    = frontmatterOptions.title;
                }
                if (typeof instance.images[index].tagline == 'undefined') {
                  textOverlayTagline  = frontmatterOptions.tagline;
                }
              }
              if (typeof instance.images[index].badge != 'undefined') {
                var bType               = instance.images[index].badge.type;
                var bAuthor             = instance.images[index].badge.author;
                var bLink               = instance.images[index].badge.href;
              }
              _this.setState('backstretch_after');
              if (typeof instance.images[index].caption != 'undefined') {
                var cText = instance.images[index].caption.text;
                var cLink = instance.images[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' + cLink + '" target="_blank">'+cText+'</a>').show();
                } else {
                  $('.attic-caption').text(cText).show();
                }
              } else if (typeof instance.images[index].badge != 'undefined') {
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge animate__animated animate__fadeIn animate__slower">'
                      + ' <a class="attic__badge_unsplash link-no-decoration"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                      $('.attic-caption').html(badgeHTML).hide();
                }
              }
              // TODO: Add additional styles to head-title-text|head-tagline-
              // text (e.g. text-center)
              // atticOptions.tagline_align
              textOverlayHTML = ''
                + '<div id="head-title" class="head-title animate__animated ">'
                + '  <h2 id="head-title-text" class="notoc text-' + atticOptions.title_align + ' text-emphasis-stronger">' + textOverlayTitle + '</h2>'
                + '</div>'
                + '<div id="head-tagline" class="head-tagline animate__animated ">'
                + '  <h3 id="head-tagline-text" class="notoc text-' + atticOptions.tagline_align + '">' + textOverlayTagline + '</h3>'
                + '</div>';
               $('.textOverlay').html(textOverlayHTML).hide();
              $('#head-title').addClass(atticOptions.title_animate);
              $('#head-title').addClass(atticOptions.title_animate_delay);
              $('#head-title').addClass(atticOptions.title_animate_duration);
              $('#head-tagline').addClass(atticOptions.tagline_animate);
              $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
              $('.textOverlay').show();
              $('.textOverlay').css('opacity', '1');
              // jadams, 2022-08-19: show a badge only if defined
              //
              if (typeof instance.images[index].badge != 'undefined') {
                $('.attic-caption').show();
                $('.attic-caption').css('opacity', '1');
              }
              // jadams, 2022-08-09:
              // resize the (background-)image to make sure the 'attic'
              // container is changed in size (heigth) if title/tagline
              // expands 'multiline' on small viewports
              // e.g. on mobile devices
              //
              $('#attic_raw').backstretch('resize');
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              // logger.info('\n' + 'module initialized successfully');
            }); // END on('backstretch.after')
          } // END if attic_id exists
          // Initialize the header found in page
          if ($('#attic_raw').length) {
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                                "opacity":                0.5, 
                            "padding_top":            400, 
                         "padding_bottom":         50, 
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                                "opacity":                0.5, 
                }
                /* eslint-enable */
                // Merge|Overload Attic OPTIONS
                atticOptions = $.extend({}, atticOptions, atticOptionsHeader, atticOptionsBackstretch);
                // Overload Attic OPTIONS by settings from frontmatterOptions
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
                 // ENDFOR item in header_config.attics
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            if (atticOptions.r_text == 'enabled') { $('#attic_raw').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_raw').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-title').addClass(atticOptions.title_animate_delay);
            $('#head-title').addClass(atticOptions.title_animate_duration);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            $('#head-tagline-text').addClass(text_emphasis);
            // check if attic should be translated
            //
            if (atticOptions.notranslate) {
              $('#attic_raw').addClass('notranslate');
            }
            var attic_style = '';
            // Initialze header background gradient
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // Initialze header sizes
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +atticOptions.padding_top+ 'px; padding-bottom: ' +atticOptions.padding_bottom+ 'px; margin-bottom: ' +atticOptions.margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to all header images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            var attic_opacity;
            attic_opacity = '<style> .backstretch-item { opacity: ' +atticOptions.opacity+ '; </style>';
            $('head').append(attic_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            if (typeof atticOptions.slides != 'undefined') {
              // Load the image header if the page is ready (visible)
              $(function() {
                // logger.debug('\n' + 'Load image header on: ' + attic_raw);
                logger.debug('\n' + 'Load image header');
                attic_raw(atticOptions);
                _this.setState('completed');
                logger.debug('\n' + 'state: ' + _this.getState());
              });
            }
          } // END if header id found in page
         // END if header enabled
          // Create the SPECIFIC header loader FUNCTION of type: attic_text
          function attic_text (atticOptions) {
            // convert attic filter settings to object to array to string
            atticFilters = $.extend({}, );
            filterArray = [];
            $.each(atticFilters, function(idx2,val2) {
              var str = idx2 + '(' + val2 + ')';
              filterArray.push(str);
            });
            filterStr = filterArray.join(' ');
            // Fire backstretch for all slides of the header on attic_id
            if ($('#attic_text').length) {
              $('#attic_text').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // Collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_text').data('backstretch');
            // Add event for pauseOnHover
            //
            if (atticOptions.pauseOnHover) {
              $('#attic_home').hover (
                function() {
                  $('#attic_text').backstretch('pause'); },
                function() {
                  $('#attic_text').backstretch('resume'); }
              );
            }
           $(window).on('backstretch.before', function (e, instance, index) {
              var evt                 = e;
              var inst                = instance;
              var idx                 = index;
              var atticOptions        = _this.atticOptions;
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var textOverlayHTML;
              // console.log('module attic - set state: backstretch_before');
              _this.setState('backstretch_before');
              if (index === backstretch_instance_data.images.length -1) {
                if (atticOptions.circuit == false) {
                  // Stop the slideshow after reached the last image
                  $('#attic_text').backstretch('pause');
                }
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
              // Add collected CSS filters
              $('.backstretch').css('filter', filterStr);
              // mute the overlay content while sliding
              $('.textOverlay').css('opacity', '0');
              // mute the badge while sliding
              $('.attic-caption').css('opacity', '0');
              // re-initialze particles on a slideshow if exists
              if ($('.particles-js-canvas-el').length > 0) {
                j1.adapter.particles.init();
              }
            }); // END on('backstretch.before')
            $(window).on('backstretch.after', function (e, instance, index) {
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var atticOptions        = _this.atticOptions;
              var frontmatterOptions  = _this.frontmatterOptions;
              var textOverlayHTML;
              // apply DEFAULT settings for textOverlayTitle|textOverlayTagline
              // on the FIRST backstretch instance if title|tagline NOT set
              //
              if (index == 0) {
                if (typeof instance.images[index].title == 'undefined') {
                  textOverlayTitle    = frontmatterOptions.title;
                }
                if (typeof instance.images[index].tagline == 'undefined') {
                  textOverlayTagline  = frontmatterOptions.tagline;
                }
              }
              if (typeof instance.images[index].badge != 'undefined') {
                var bType               = instance.images[index].badge.type;
                var bAuthor             = instance.images[index].badge.author;
                var bLink               = instance.images[index].badge.href;
              }
              _this.setState('backstretch_after');
              if (typeof instance.images[index].caption != 'undefined') {
                var cText = instance.images[index].caption.text;
                var cLink = instance.images[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' + cLink + '" target="_blank">'+cText+'</a>').show();
                } else {
                  $('.attic-caption').text(cText).show();
                }
              } else if (typeof instance.images[index].badge != 'undefined') {
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge animate__animated animate__fadeIn animate__slower">'
                      + ' <a class="attic__badge_unsplash link-no-decoration"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                      $('.attic-caption').html(badgeHTML).hide();
                }
              }
              // TODO: Add additional styles to head-title-text|head-tagline-
              // text (e.g. text-center)
              // atticOptions.tagline_align
              textOverlayHTML = ''
                + '<div id="head-title" class="head-title animate__animated ">'
                + '  <h2 id="head-title-text" class="notoc text-' + atticOptions.title_align + ' text-emphasis-stronger">' + textOverlayTitle + '</h2>'
                + '</div>'
                + '<div id="head-tagline" class="head-tagline animate__animated ">'
                + '  <h3 id="head-tagline-text" class="notoc text-' + atticOptions.tagline_align + '">' + textOverlayTagline + '</h3>'
                + '</div>';
               $('.textOverlay').html(textOverlayHTML).hide();
              $('#head-title').addClass(atticOptions.title_animate);
              $('#head-title').addClass(atticOptions.title_animate_delay);
              $('#head-title').addClass(atticOptions.title_animate_duration);
              $('#head-tagline').addClass(atticOptions.tagline_animate);
              $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
              $('.textOverlay').show();
              $('.textOverlay').css('opacity', '1');
              // jadams, 2022-08-19: show a badge only if defined
              //
              if (typeof instance.images[index].badge != 'undefined') {
                $('.attic-caption').show();
                $('.attic-caption').css('opacity', '1');
              }
              // jadams, 2022-08-09:
              // resize the (background-)image to make sure the 'attic'
              // container is changed in size (heigth) if title/tagline
              // expands 'multiline' on small viewports
              // e.g. on mobile devices
              //
              $('#attic_text').backstretch('resize');
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              // logger.info('\n' + 'module initialized successfully');
            }); // END on('backstretch.after')
          } // END if attic_id exists
          // Initialize the header found in page
          if ($('#attic_text').length) {
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                }
                /* eslint-enable */
                // Merge|Overload Attic OPTIONS
                atticOptions = $.extend({}, atticOptions, atticOptionsHeader, atticOptionsBackstretch);
                // Overload Attic OPTIONS by settings from frontmatterOptions
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
             // ENDFOR item in header_config.attics
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            if (atticOptions.r_text == 'enabled') { $('#attic_text').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_text').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-title').addClass(atticOptions.title_animate_delay);
            $('#head-title').addClass(atticOptions.title_animate_duration);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            $('#head-tagline-text').addClass(text_emphasis);
            // check if attic should be translated
            //
            if (atticOptions.notranslate) {
              $('#attic_text').addClass('notranslate');
            }
            var attic_style = '';
            // Initialze header background gradient
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // Initialze header sizes
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +atticOptions.padding_top+ 'px; padding-bottom: ' +atticOptions.padding_bottom+ 'px; margin-bottom: ' +atticOptions.margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to all header images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            var attic_opacity;
            attic_opacity = '<style> .backstretch-item { opacity: ' +atticOptions.opacity+ '; </style>';
            $('head').append(attic_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            if (typeof atticOptions.slides != 'undefined') {
              // Load the image header if the page is ready (visible)
              $(function() {
                // logger.debug('\n' + 'Load image header on: ' + attic_text);
                logger.debug('\n' + 'Load image header');
                attic_text(atticOptions);
                _this.setState('completed');
                logger.debug('\n' + 'state: ' + _this.getState());
              });
            }
          } // END if header id found in page
         // END if header enabled
       // END for item in header_config.attics
      // NO header found in page
      if ($('#no_header').length) {
        _this.setState('completed');
        logger.debug('\n' + 'state: ' + _this.getState());
        logger.warn('\n' + 'no header configured or found in page');
      }
      return true;
    }, // END loadHeader
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
        status = 'completed';
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



