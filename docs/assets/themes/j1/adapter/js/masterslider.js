

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/masterslider.js
 # J1 Adapter for Averta MasterSlider Lite v2.85.13 (Feb 2022)
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
j1.adapter.masterslider = (function (j1, window) {
  var environment       = 'development';
  var moduleVersion     = 'lite';
  var sliderManager     = j1.stringToBoolean('true');
  var lightboxEnabled   = j1.stringToBoolean('');
  var saveSliderConfig  = j1.stringToBoolean('true');
  var newline           = '\n';
  var masterSliderDefaults;
  var masterSliderSettings;
  var masterSliderOptions;
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
      var msSliderManager;
      if (sliderManager) {
        msSliderManager             = document.createElement('script');
        msSliderManager.id          = 'ms-slider-manager';
        msSliderManager.innerHTML   = '';
      }
      // used for later access
      j1.masterslider           = {};
      j1.masterslider.instances = j1.masterslider.instances || [];
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.masterslider',
        generated:   '2023-03-08 14:55:23 +0100'
      }, options);
      // Load  module DEFAULTS|CONFIG
      masterSliderDefaults = $.extend({}, {"xhr_data_path":"/assets/data/masterslider", "module_version":"lite", "save_slider_config":true, "slider_manager":true, "slider_manager_load_timeout":2500, "icon_family":"MDI", "icon_class":false, "icon_color":"#1E88E5", "icon_size":"2x", "skin":"default", "lightbox":{"enabled":false, "type":"lb"}, "controls":{"arrows":{"enabled":false, "autohide":false, "overVideo":true, "hideUnder":null}, "bullets":{"enabled":false, "autohide":false, "overVideo":true, "dir":"h", "hideUnder":null, "align":"bottom", "margin":10}, "thumblist":{"enabled":false, "width":100, "height":80, "autohide":true, "overVideo":true, "dir":"h", "speed":17, "hideUnder":null, "inset":false, "arrows":false, "hover":false, "customClass":"", "align":"right", "type":"thumbs", "margin":1, "space":1, "fillMode":"fill"}, "scrollbar":{"enabled":false, "autohide":false, "overVideo":true, "dir":"h", "inset":false, "align":"bottom", "color":"#3D3D3D", "hideUnder":null, "margin":10, "width":4}, "circletimer":{"enabled":false, "autohide":false, "overVideo":true, "color":"#A2A2A2", "radius":4, "stroke":10, "hideUnder":null}, "timebar":{"enabled":false, "autohide":false, "overVideo":true, "color":"#FFFFFF", "hideUnder":null, "align":"bottom", "inset":false, "margin":0}, "slideinfo":{"enabled":false, "autohide":false, "overVideo":true, "insertTo":"", "size":100, "hideUnder":null, "align":"bottom", "inset":false, "margin":10}}, "options":{"width":300, "height":150, "minHeight":0, "space":0, "start":1, "grabCursor":true, "swipe":true, "mouse":true, "keyboard":false, "layout":"boxed", "wheel":false, "autoplay":false, "instantStartLayers":false, "mobileBGVideo":false, "loop":false, "shuffle":false, "preload":0, "heightLimit":true, "autoHeight":false, "smoothHeight":true, "endPause":false, "overPause":true, "fillMode":"fill", "centerControls":true, "startOnAppear":false, "layersMode":"center", "autofillTarget":"", "hideLayers":false, "fullscreenMargin":0, "speed":20, "dir":"h", "responsive":true, "tabletWidth":768, "tabletHeight":null, "phoneWidth":480, "phoneHeight":null, "sizingReference":"window", "parallaxMode":"mouse", "filters":null, "view":"basic"}, "plugins":{"MSScrollParallax":{"enabled":false, "layers_parallax_depth":50, "background_parallax_depth":40, "fade_layers":false}}});
      masterSliderSettings = $.extend({}, {"skin":"default", "sliders":[{"slider":null, "enabled":true, "id":"ms_00001", "skin":"light-3", "lightbox":{"enabled":true, "type":"lb"}, "controls":{"arrows":{"enabled":true}, "bullets":{"enabled":true}}, "options":{"width":1200, "height":600, "applyFiltersAllSlides":true, "duoColor":false, "filters":{"grayscale":0.5, "sepia":0.5}}, "slides":[{"slide":null, "alt":"Cat 1", "title":"Cat 1", "foreground_image":"/assets/images/modules/masterslider/slider_1/cat-1.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":false}, {"slide":null, "alt":"Cat 2", "title":"Cat 2", "foreground_image":"/assets/images/modules/masterslider/slider_1/cat-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":false}, {"slide":null, "alt":"Cat 3", "title":"Cat 3", "foreground_image":"/assets/images/modules/masterslider/slider_1/cat-3.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":false}]}, {"slider":null, "enabled":true, "id":"ms_00002", "lightbox":{"enabled":true, "type":"lb"}, "controls":null, "options":{"height":500, "fillMode":"fill", "layersMode":"center", "layout":"fullwidth", "autoplay":true, "loop":true, "speed":10}, "slides":[{"slide":null, "alt":"Cities 1", "title":"Cities 1", "foreground_image":"/assets/images/modules/masterslider/slider_2/andreas-brucker.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":false}, {"slide":null, "alt":"Cities 2", "title":"Cities 2", "foreground_image":"/assets/images/modules/masterslider/slider_2/denys-nevozhai-1.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":false}, {"slide":null, "alt":"Cities 3", "title":"Cities 3", "foreground_image":"/assets/images/modules/masterslider/slider_2/denys-nevozhai-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":false}]}, {"slider":null, "enabled":true, "id":"ms_00003", "skin":"default", "controls":{"slideinfo":{"enabled":true, "margin":-133}}, "options":{"width":1200, "height":600}, "slides":[{"slide":null, "alt":"MS free image - Food Restaurant", "title":"MS free image - Food Restaurant", "foreground_image":"/assets/images/modules/masterslider/slider_3/ms-free-food-restaurant.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":true, "title":"The Art of Life", "title_color":"#BDBDBD", "title_animated":"fadeInRight", "title_upcase":false, "tagline":"places to enjoy", "tagline_color":false, "tagline_animated":"fadeInLeft", "tagline_upcase":false, "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.\n", "description_color":"#9E9E9E", "description_animated":"fadeInRight"}}, {"slide":null, "alt":"MS free image - Food Hamburger", "title":"MS free image - Food Hamburger", "foreground_image":"/assets/images/modules/masterslider/slider_3/ms-free-food-hamburger.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":true, "title":"The Art of Life", "title_color":"#BDBDBD", "title_animated":"fadeInRight", "title_upcase":false, "tagline":"places to enjoy", "tagline_color":false, "tagline_animated":"fadeInLeft", "tagline_upcase":false, "description":"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.\n", "description_color":"#9E9E9E", "description_animated":"fadeInRight"}}, {"slide":null, "alt":"MS free image - Food Family 2", "title":"MS free image - Food Family 2", "foreground_image":"/assets/images/modules/masterslider/slider_3/ms-free-food-family-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":true, "title":"The Art of Life", "title_color":"#BDBDBD", "title_animated":"fadeInRight", "title_upcase":false, "tagline":"places to enjoy", "tagline_color":false, "tagline_animated":"fadeInLeft", "tagline_upcase":false, "description":"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad veniam.\n", "description_color":"#9E9E9E", "description_animated":"fadeInRight"}}]}, {"slider":null, "enabled":true, "id":"ms_00004", "skin":"light-2", "controls":{"bullets":{"enabled":true}, "thumblist":{"enabled":true, "width":100, "height":80, "type":"thumbs", "autohide":false, "dir":"v", "align":"right"}, "scrollbar":{"enabled":true, "inset":true, "align":"top", "color":"#404040"}}, "options":{"width":1200, "height":600}, "slides":[{"slide":null, "alt":"MS free image - Animals 1", "title":"MS free image - Animals 1", "foreground_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-1.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-1-100x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Animals 2", "title":"MS free image - Animals 2", "foreground_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-2-100x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Animals 3", "title":"MS free image - Animals 3", "foreground_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-3.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-3-100x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Animals 4", "title":"MS free image - Animals 4", "foreground_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-4.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-4-100x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Animals 5", "title":"MS free image - Animals 5", "foreground_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-5.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-5-100x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Animals 6", "title":"MS free image - Animals 6", "foreground_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-6.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-6-100x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Animals 7", "title":"MS free image - Animals 7", "foreground_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-7.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_4/ms-free-animals-7-100x80.jpg", "slideinfo":false}]}, {"slider":null, "enabled":true, "id":"ms_00005", "skin":"default", "controls":{"bullets":{"enabled":true}, "thumblist":{"enabled":true, "width":140, "height":80, "type":"thumbs", "autohide":false, "align":"bottom", "margin":5, "space":5}}, "options":{"width":1200, "height":530}, "slides":[{"slide":null, "alt":"MS free image - Food Restaurant", "title":"MS free image - Food Restaurant", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-restaurant.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-restaurant-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Family", "title":"MS free image - Food Family", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-family.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-family-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Woman Hand", "title":"MS free image - Food Woman Hand", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-woman-hand.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-woman-hand-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Family 2", "title":"MS free image - Food Family 2", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-family-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-family-2-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Family 3", "title":"MS free image - Food Family 3", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-family-3.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-family-3-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Hamburger", "title":"MS free image - Food hamburger", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-hamburger.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-hamburger-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Pizza", "title":"MS free image - Food Pizza", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-pizza.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-pizza-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Single Man", "title":"MS free image - Food Single Man", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-single-man.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-single-man-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Single Woman", "title":"MS free image - Food Single Woman", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-single-woman.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-single-woman-140x80.jpg", "slideinfo":false}, {"slide":null, "alt":"MS free image - Food Table", "title":"MS free image - Food Table", "foreground_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-table.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":"/assets/images/modules/masterslider/slider_5/ms-free-food-table-140x80.jpg", "slideinfo":false}]}, {"slider":null, "enabled":true, "id":"ms_00006", "skin":"light-3", "controls":{"thumblist":{"enabled":true, "width":300, "height":160, "type":"tabs", "autohide":false, "dir":"h", "align":"bottom", "margin":-12, "space":0, "hideUnder":400}}, "options":{"width":1200, "height":530, "layout":"fullwidth"}, "slides":[{"slide":null, "alt":"MS free image - Kitchen Design Ideas", "title":"MS free image - Kitchen Design Ideas", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876385555_74a0d7d7ee_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Kitchen Design Ideas", "tagline":"Slider with Horizontal Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}, {"slide":null, "alt":"MS free image - Modern Wall Design", "title":"MS free image - Modern Wall Design", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876387431_d86867a3d9_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Modern Wall Design", "tagline":"Slider with Horizontal Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}, {"slide":null, "alt":"MS free image - Banquette Seating Kitchen", "title":"MS free image - Banquette Seating Kitchen", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876388511_d618d53455_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Banquette Seating Kitchen", "tagline":"Slider with Horizontal Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}, {"slide":null, "alt":"MS free image - Harmony in Interior Design", "title":"MS free image - Harmony in Interior Design", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876389463_db27a377e1_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Harmony in Interior Design", "tagline":"Slider with Horizontal Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}, {"slide":null, "alt":"MS free image - Make Your Workspace Better", "title":"MS free image - Make Your Workspace Better", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876390339_2e4dd9dbbb_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Make Your Workspace Better", "tagline":"Slider with Horizontal Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}]}, {"slider":null, "enabled":true, "id":"ms_00007", "lightbox":{"enabled":true, "type":"lb"}, "controls":{"thumblist":{"enabled":true, "width":240, "height":160, "type":"tabs", "autohide":false, "dir":"v", "align":"right", "margin":-12, "space":0, "hideUnder":700}}, "options":{"width":1000, "height":500, "instantStartLayers":true, "loop":true, "speed":15, "view":"fadeBasic"}, "slides":[{"slide":null, "alt":"MS free image - Kitchen Design Ideas", "title":"MS free image - Kitchen Design Ideas", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876385555_74a0d7d7ee_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Kitchen Design Ideas", "tagline":"Slider with Vertical Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}, {"slide":null, "alt":"MS free image - Modern Wall Design", "title":"MS free image - Modern Wall Design", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876387431_d86867a3d9_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Modern Wall Design", "tagline":"Slider with Vertical Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}, {"slide":null, "alt":"MS free image - Banquette Seating Kitchen", "title":"MS free image - Banquette Seating Kitchen", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876388511_d618d53455_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Banquette Seating Kitchen", "tagline":"Slider with Vertical Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}, {"slide":null, "alt":"MS free image - Harmony in Interior Design", "title":"MS free image - Harmony in Interior Design", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876389463_db27a377e1_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Harmony in Interior Design", "tagline":"Slider with Vertical Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}, {"slide":null, "alt":"MS free image - Make Your Workspace Better", "title":"MS free image - Make Your Workspace Better", "foreground_image":"/assets/images/modules/masterslider/slider_6_7/6876390339_2e4dd9dbbb_b.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumbinfo":{"title":"Make Your Workspace Better", "tagline":"Slider with Vertical Tabs", "description":"Lorem ipsum dolor sit amet, consectetuer elit\n"}, "slideinfo":false}]}, {"slider":null, "enabled":true, "id":"ms_00008", "skin":"default", "controls":{"slideinfo":{"enabled":true, "margin":-120}}, "options":{"width":600, "height":300, "layout":"partialview", "loop":true, "filters":{"brightness":0.8, "grayscale":0.5, "opacity":0.6}}, "slides":[{"slide":null, "alt":"MS free image - Special slider for bloggers", "title":"MS free image - Special slider for bloggers", "foreground_image":"/assets/images/modules/masterslider/slider_8/postslider6-bg-slide2-1024x622.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":false, "title":"Special slider for bloggers", "title_color":"#F5F5F5", "title_animated":"fadeInLeft", "title_upcase":false, "tagline":false, "tagline_color":false, "tagline_animated":false, "tagline_upcase":false, "description":false, "description_animated":false, "button":{"enabled":true, "align":"center", "margin":"mt-4", "animated":"fadeInRight", "class":"btn btn-primary btn-sm", "link":"#void", "text":"Read More"}}}, {"slide":null, "alt":"MS free image - We love architecture websites", "title":"MS free image - We love architecture websites", "foreground_image":"/assets/images/modules/masterslider/slider_8/postslider-5-img-3.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":400, "boxed":false, "title":"We love architecture websites", "title_color":"#212121", "title_animated":"fadeInLeft", "title_upcase":false, "tagline":false, "tagline_color":false, "tagline_animated":false, "tagline_upcase":false, "description":false, "description_animated":false, "button":{"enabled":true, "align":"center", "margin":"mt-4", "animated":"fadeInRight", "class":"btn btn-primary btn-sm", "link":"#void", "text":"Read More"}}}, {"slide":null, "alt":"MS free image - New Buildings, New Designs!", "title":"MS free image - New Buildings, New Designs!", "foreground_image":"/assets/images/modules/masterslider/slider_8/postslider-5-img-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":400, "boxed":false, "title":"New Buildings, New Designs!", "title_color":"#212121", "title_animated":"fadeInLeft", "title_upcase":false, "tagline":false, "tagline_color":false, "tagline_animated":false, "tagline_upcase":false, "description":false, "description_animated":false, "button":{"enabled":true, "align":"center", "margin":"mt-4", "animated":"fadeInRight", "class":"btn btn-primary btn-sm", "link":"#void", "text":"Read More"}}}, {"slide":null, "alt":"MS free image - Greatest Modern Architect Designs", "title":"MS free image - Greatest Modern Architect Designs", "foreground_image":"/assets/images/modules/masterslider/slider_8/postslider-5-img-1.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":400, "boxed":false, "title":"Greatest Modern Architect Designs", "title_color":"#212121", "title_animated":"fadeInLeft", "title_upcase":false, "tagline":false, "tagline_color":false, "tagline_animated":false, "tagline_upcase":false, "description":false, "description_animated":false, "button":{"enabled":true, "align":"center", "margin":"mt-4", "animated":"fadeInRight", "class":"btn btn-primary btn-sm", "link":"#void", "text":"Read More"}}}]}, {"slider":null, "enabled":true, "id":"ms_00009", "skin":"default", "controls":{"arrows":{"enabled":true}, "slideinfo":{"enabled":true}}, "options":{"width":700, "height":350, "layout":"partialview", "loop":true, "filters":{"grayscale":0.8, "opacity":0.4}}, "slides":[{"slide":null, "alt":"MS free image - Childhood Memories", "title":"MS free image - Childhood Memories", "foreground_image":"/assets/images/modules/masterslider/slider_9/6-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":false, "title":"Childhood Memories", "title_color":"#222222", "title_animated":false, "title_upcase":true, "tagline":"John Wiliam", "tagline_color":"#0D47A1", "tagline_animated":false, "tagline_upcase":false, "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n", "description_color":"#616161", "description_animated":false}}, {"slide":null, "alt":"MS free image - Consectetuer adipiscing elit", "title":"MS free image - Consectetuer adipiscing elit", "foreground_image":"/assets/images/modules/masterslider/slider_9/5-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":false, "title":"Consectetuer adipiscing elit", "title_color":"#222222", "title_animated":"fadeInRight", "title_upcase":true, "tagline":"John Wiliam", "tagline_color":"#0D47A1", "tagline_animated":false, "tagline_upcase":true, "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n", "description_color":"#9E9E9E", "description_animated":false}}, {"slide":null, "alt":"MS free image - Suspendissue ut pulvinar mauris", "title":"MS free image - Suspendissue ut pulvinar mauris", "foreground_image":"/assets/images/modules/masterslider/slider_9/6-3.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":false, "title":"Suspendissue ut pulvinar mauris", "title_color":"#222222", "title_animated":"fadeInRight", "title_upcase":true, "tagline":"John Wiliam", "tagline_color":"#0D47A1", "tagline_animated":false, "tagline_upcase":true, "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n", "description_color":"#9E9E9E", "description_animated":false}}, {"slide":null, "alt":"MS free image - Sed dabibus sit amet felis", "title":"MS free image - Sed dabibus sit amet felis", "foreground_image":"/assets/images/modules/masterslider/slider_9/8.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":false, "title":"Sed dabibus sit amet felis", "title_color":"#222222", "title_animated":"fadeInRight", "title_upcase":true, "tagline":"Gregory Wilson", "tagline_color":"#0D47A1", "tagline_animated":false, "tagline_upcase":true, "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n", "description_color":"#9E9E9E", "description_animated":false}}, {"slide":null, "alt":"MS free image - Cheetags on the edge", "title":"MS free image - Cheetags on the edge", "foreground_image":"/assets/images/modules/masterslider/slider_9/8-1.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":false, "title":"Cheetags on the edge", "title_color":"#222222", "title_animated":"fadeInRight", "title_upcase":true, "tagline":"Gregory Wilson", "tagline_color":"#0D47A1", "tagline_animated":false, "tagline_upcase":true, "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n", "description_color":"#9E9E9E", "description_animated":false}}, {"slide":null, "alt":"MS free image - Consectetuer adipiscing elit", "title":"MS free image - Consectetuer adipiscing elit", "foreground_image":"/assets/images/modules/masterslider/slider_9/1-2.jpg", "background_image":"/assets/themes/j1/modules/masterslider/css/blank.gif", "thumb_image":false, "slideinfo":{"rtext":300, "boxed":false, "title":"Consecteur adipiscing elit", "title_color":"#222222", "title_animated":"fadeInRight", "title_upcase":true, "tagline":"Gregory Wilson", "tagline_color":"#0D47A1", "tagline_animated":false, "tagline_upcase":true, "description":"Lorem ipsum dolor sit amet, consec tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n", "description_color":"#9E9E9E", "description_animated":false}}]}]});
      masterSliderOptions = $.extend({}, masterSliderDefaults, masterSliderSettings);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.masterslider;
      logger  = log4javascript.getLogger('j1.adapter.masterslider');
      // initialize state flag
      _this.setState('started');
      console.debug('module state: ' + _this.getState());
      // load HTML portion for sliders configured
      console.debug('loading HTML portion for all sliders configured');
      _this.loadSliderHTML(masterSliderOptions, masterSliderOptions.sliders);
      // create an 'MasterSlider' instance for all sliders configured
      console.debug('create an \'MasterSlider\' instance for all MS sliders configured');
      _this.createSliderInstances(masterSliderOptions.sliders, msSliderManager);
      // initialize sliders configured if HTML portion (of sliders) loaded
      var dependencies_met_data_loaded = setInterval(function() {
        if (_this.getState() == 'data_loaded') {
          logger.info('\n' + 'ms module version detected: ' + moduleVersion);
          logger.info('\n' + 'module is being initialized');
          console.debug('MS slider module is being initialized');
          _this.initSliders(masterSliderOptions, masterSliderOptions.sliders, msSliderManager, saveSliderConfig);
          clearInterval(dependencies_met_data_loaded);
        } // END dependencies_met_j1_finished
      }, 25);
      // load the slider manager to DISPLAY instances in page (if visible)
      var dependencies_met_module_finished = setInterval(function() {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState == 'block') ? true: false;
        if (_this.getState() == 'sliders_initialized' && pageVisible ) {
            // TODO: Check why a timeout is required to load the Slider Manager
            setTimeout (function() {
              if (sliderManager) document.body.appendChild(msSliderManager);
              // final state|messages
              _this.setState('finished');
              logger.info('\n' + 'initializing module finished');
              console.debug('initializing MS slider module finished');
            }, masterSliderOptions.slider_manager_load_timeout);
            clearInterval(dependencies_met_module_finished);
        } // END dependencies_met_j1_finished
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // loadSliderHTML()
    // load all master sliders (HTML portion) dynanically configured
    // and enabled (AJAX) from data file
    // NOTE: Make sure the placeholder is available in the content page
    // eg. using the asciidoc extension masterslider::
    // -------------------------------------------------------------------------
    loadSliderHTML: function (options, slider) {
      var numSliders      = Object.keys(slider).length;
      var active_sliders  = numSliders;
      var xhr_data_path   = options.xhr_data_path + '/index.html';
      var xhr_container_id;
      // console.debug('load HTML portion of all sliders configured found in page');
      console.debug('number of sliders found: ' + numSliders);
      _this.setState('load_data');
      Object.keys(slider).forEach(function(key) {
        if (slider[key].enabled) {
          console.debug('load HTML data on slider id: ' + slider[key].id);
          xhr_container_id = 'p_' + slider[key].id;
          j1.loadHTML({
            xhr_container_id: xhr_container_id,
            xhr_data_path:    xhr_data_path,
            xhr_data_element: slider[key].id
          });
        } else {
          console.debug('slider found disabled on id: ' + slider[key].id);
          active_sliders--;
        }
      });
      console.debug('sliders loaded in page active|deactive: ' + active_sliders + '|' + numSliders);
      _this.setState('data_loaded');
    }, // END loadSliderHTML
    // -------------------------------------------------------------------------
    // createSliderInstances()
    // create an 'MasterSlider' instance for all sliders configured
    // -------------------------------------------------------------------------
    createSliderInstances: function (sliders, sliderManager) {
      var msSliderManager = sliderManager;
      var numSliders      = Object.keys(sliders).length;
      var msSliderManagerItem;
      // add jQuery ready() function once
      if (sliderManager) {
        msSliderManagerItem        = '$(function() {' + '\n';
        msSliderManagerItem       += '  console.debug("initializing MS Slider Manager");' + '\n';
        msSliderManagerItem       += '\n';
        msSliderManager.innerHTML  = msSliderManagerItem;
      }
      var i=0;
      Object.keys(sliders).forEach(function(key) {
        i++;
        console.debug('create slider instance on id: ' + sliders[key].id);
        if (sliderManager) {
          msSliderManagerItem        = '  var masterslider_' + i + ' = new MasterSlider();' + '\n';
          msSliderManager.innerHTML += msSliderManagerItem;
        } else {
          _this["masterslider_" + i] = new MasterSlider();
        }
      });
      console.debug('slider instances created: ' + numSliders);
    }, // END loadSliderHTML
    // -------------------------------------------------------------------------
    // initSliders()
    // initialze all master sliders found in page. Dynamically apply properties
    // for methods 'setup' and 'control'.
    // -------------------------------------------------------------------------
    initSliders: function (options, slider, sliderManager, save_config) {
      var msSliderManager = sliderManager;
      var newline         = '\n';
      // run the method 'control' on all sliders 'enabled'
      //
      function setupControls(options, slider, sliderManager) {
        const controlOptions = options.controls;
        var msSliderManager  = sliderManager;
        var index;
        var i=0;
        logger.info('\n' + 'generate slider controls');
        if (sliderManager) msSliderManager.innerHTML += newline;
        Object.keys(slider).forEach(function(key) {
          i++;                                                                  // instance index
          index = parseInt(key);                                                // object index
          if (slider[index].enabled) {
            if (slider[index].controls) {
              Object.keys(slider[index].controls).forEach(function(key) {
                var msSliderManagerItem = '\n';
                logger.debug('\n' + 'slider control found id|key: ' + slider[index].id + '|' + key);
                // merge settings, defaults into control
                control = $.extend({}, controlOptions[key], slider[index].controls[key]);
                // remove J1 config setting
                delete control['enabled'];
                if (sliderManager) {
                  msSliderManagerItem        = '    ' + 'masterslider_' + i + '.control(' + '\'' + key + '\'' +  ', ' + JSON.stringify(control) + ');'
                  msSliderManager.innerHTML +=  msSliderManagerItem + '\n';
                } else {
                  _this["masterslider_" + i].control(key, control);
                }
              });
            } else {
              logger.debug('\n' + 'no slider controls found on id: ' + slider[key].id);
            }
          } else {
            logger.debug('\n' + 'slider found disabled on id: ' + slider[key].id);
          }
        });
      } // END setupControls
      // initialize plugins on all sliders if 'enabled'
      //
      function setupPlugIns(options, slider, sliderManager) {
        const pluginOptions = options.plugins;
        var msSliderManager = sliderManager;
        var plugins         = {};
        var pluginSettings;
        var index;
        var i=0;
        logger.debug('\n' + 'generate slider plugins');
        if (sliderManager) msSliderManager.innerHTML += newline;
        Object.keys(slider).forEach(function(key) {
          i++;                                                                  // instance index
          index = parseInt(key);                                                // object index
          if (slider[index].enabled) {
            if (slider[index].plugins) {
              Object.keys(slider[index].plugins).forEach(function(key) {
                var msSliderManagerItem = '\n';
                logger.info('\n' + 'slider plugin found id|key: ' + slider[index].id + '|' + key);
                // merge settings, defaults into 'plugins'
                plugins = $.extend({}, pluginOptions, slider[index].plugins);
                // generate setup for plugin 'MSScrollParallax'
                // NOTE: for the MS config, the plugin 'MSScrollParallax'  is named ' J1ScrollParallax'
                if (plugins.J1ScrollParallax.enabled) {
                  // remove J1 config settings
                  delete plugins.J1ScrollParallax.enabled;
                  // create a 'properties' string
                  pluginSettings = JSON.stringify(plugins.J1ScrollParallax).replace(/"/g, '').replace(/{/g, '').replace(/}/g, '');
                  logger.debug('\n' + 'plugin J1ScrollParallax found: ' + pluginSettings);
                  // remove property names to get a pure 'parameter' string
                  pluginSettings = pluginSettings.replace(/layers_parallax_depth:/g, '');
                  pluginSettings = pluginSettings.replace(/background_parallax_depth:/g, '');
                  pluginSettings = pluginSettings.replace(/fade_layers:/g, '');
                  if (sliderManager) {
                    msSliderManagerItem        = '    ' + 'MSScrollParallax.setup(masterslider_' + i + ', ' + pluginSettings + ');';
                    msSliderManager.innerHTML +=  msSliderManagerItem + '\n';
                  } else {
                    MSScrollParallax.setup(j1.masterslider.instances[index], pluginSettings);
                  }
                } // END plugin 'MSScrollParallax'
              });
            } else {
              logger.debug('\n' + 'no slider plugins found on id: ' + slider[key].id);
            }
          } else {
            logger.debug('\n' + 'slider found disabled on id: ' + slider[key].id);
          }
        });
      } // END setupPlugIns
      // run the method 'setup' on all sliders 'enabled'
      //
      function setupSliders(options, slider, sliderManager, save_config) {
        const controlOptions = options.controls;
        var msSliderManager  = sliderManager;
        var control          = {};
        var index;
        logger.info('\n' + 'generate slider setup');
        if (sliderManager) msSliderManager.innerHTML += newline;
        var i=0;
        Object.keys(slider).forEach(function(key) {
          var msSliderManagerItem = '\n';
          i++;                                                                  // instance index
          index = parseInt(key);                                                // object index
          if (slider[index].enabled) {
            logger.info('\n' + 'slider is being initialized on id: ' + slider[key].id);
            // merge settings, defaults into 'setup'
            setup = $.extend({}, settings.options, slider[index].options);
            // log the filter object if enabled
            if (setup.filters != null) {
              var filterSettings = JSON.stringify(setup.filters).replace(/"/g, '');
              logger.debug('\n' + 'filters found: ' + filterSettings.replace(/{/g, '').replace(/}/g, ''));
            }
            if (sliderManager) {
              msSliderManagerItem        = '    ' + 'masterslider_' + i + '.setup(' + '\'' + slider[key].id + '\'' + ', ' + JSON.stringify(setup) + ');'
              msSliderManager.innerHTML +=  msSliderManagerItem + '\n';
            } else {
              _this["masterslider_" + i].setup(slider[key].id, setup);
            }
            // save slider config for later access
            if (save_config) {
              if (sliderManager) {
                msSliderManagerItem        = '    ' + 'j1.masterslider.instances.push(masterslider_' + i + ');';
                msSliderManager.innerHTML +=  msSliderManagerItem + '\n';
              } else {
                j1.masterslider.instances.push(_this["masterslider_" + i]);
              }
            }
          } else {
            logger.info('\n' + 'slider found disabled on id: ' + slider[key].id);
          }
        });
        // close jQuery ready() function once
        var msSliderManagerItem;
        msSliderManagerItem        = '\n' + '  console.debug("initializing MS Slider Manager finished");' + '\n';
        msSliderManagerItem       +=  '});' + '\n';
        msSliderManager.innerHTML +=  msSliderManagerItem + '\n';
        _this.setState('sliders_initialized');
        logger.debug('\n' + 'state: ' + _this.getState());
        logger.info('\n' + 'initializing sliders finished');
      } // END setupSliders
      var settings  = $.extend({}, options, slider);
      var control   = {};
      var setup     = {};
      var log_text;
      _this.setState('initialize_sliders');
      logger.debug('\n' + 'state: ' + _this.getState());
      log_text = '\n' + 'sliders are being initialized';
      logger.info(log_text);
      setupControls(options, slider, msSliderManager);
      setupSliders(options, slider, msSliderManager, save_config);
      setupPlugIns(options, slider, msSliderManager);
    }, // END initSliders
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
    // registerEvents()
    // Currently NOT used (experimental)
    // -------------------------------------------------------------------------
    registerEvents: function (options, slider) {
      var index;
      var i=0;
      Object.keys(slider).forEach(function(key) {
        i++;                                                                    // instance index
        index = parseInt(key);                                                  // object index
          logger.debug('\n' + 'slider events are being initialized on id: ' + index);
          slider[index].api.addEventListener(MSSliderEvent.WAITING, function(e) {
          var brutze = e;
          // var currentSlide = masterslider_1.api.view.currentSlide;
          // var currentSlide = currSlider.api.view.currentSlide;
          var controller      = e.target.view.controller;
          var controllerValue = e.target.view.controller.value;
          var isLoading       = e.target.currentSlide.$loading.length;
          // dispatches when the slider's current slide change starts.
          if (!isLoading) {
            logger.info('\n' + 'slider is loaded' );
          } else {
            logger.info('\n' + 'slider is being loaded: ' + e.target.currentSlide.bg_src);
          }
        });
        // var currSlider = 'masterslider_1';
        // currSlider.api.addEventListener(MSSliderEvent.CHANGE_START, function(currSlider) {
        //   // var currentSlide = masterslider_1.api.view.currentSlide;
        //   var currentSlide = currSlider.api.view.currentSlide;
        //
        //   // dispatches when the slider's current slide change starts.
        //   logger.info('\n' + 'slider is being changed on id: ');
        // });
        // var selector = "#" + slider[key].id;
        // if ($(selector).length) {
        //   $(document).on("click", selector, function(e) {
        //     // e.preventDefault();
        //
        //     var elm     = e.currentTarget.attributes[0];
        //     var img_src = e.target.currentSrc;
        //     var id      = e.handleObj.selector;
        //
        //     logger.info('\n' + 'click event on id: ' + e.currentTarget.id);
        //   });
        // }
      });
    }, // END registerEvents
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return _this.state;
    } // END getState
  }; // END return
})(j1, window);



