
/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/cookieConsent.js
 # JS Adapter for J1 CookieConsent
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-03-08 15:17:46 +0100
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.cookieConsent = (function (j1, window) {
  var environment                 = 'development';
  var tracking_enabled            = ('true' === 'true') ? true: false;
  var tracking_id                 = '';
  var tracking_id_valid           = (tracking_id.includes('tracking-id')) ? false : true;
  var stringifiedAttributes       = '';
  var expireCookiesOnRequiredOnly;
  var cookieDefaults;
  var cookieSettings;
  var cookieOptions;
  var cookieConsentDefaults;
  var cookieConsentSettings;
  var cookieConsentOptions;
  var _this;
  var $modal;
  var cookie_names;
  var user_cookie;
  var logger;
  var url;
  var baseUrl;
  var hostname;
  var auto_domain;
  var check_cookie_option_domain;
  var cookie_domain;
  var secure;
  var logText;
  var cookie_written;
  var contentLanguage;
  var navigatorLanguage;
  var domainAttribute;
  // NOTE: RegEx for tracking_id: ^(G|UA|YT|MO)-[a-zA-Z0-9-]+$
  // See: https://stackoverflow.com/questions/20411767/how-to-validate-google-analytics-tracking-id-using-a-javascript-function/20412153
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
        module_name: 'j1.adapter.cookieConsent',
        generated:   '2023-03-08 15:17:46 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this                 = j1.adapter.cookieConsent;
      logger                = log4javascript.getLogger('j1.adapter.cookieConsent');
      cookie_names          = j1.getCookieNames();
      url                   = new liteURL(window.location.href);
      baseUrl               = url.origin;
      hostname              = url.hostname;
      auto_domain           = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      secure                = (url.protocol.includes('https')) ? true : false;
      contentLanguage       = 'en';
      navigatorLanguage     = navigator.language || navigator.userLanguage;
      // Load cookie DEFAULTS|CONFIG
      cookieDefaults        = $.extend({}, {"enabled":true, "checkCookies":false, "encryptCookiesOnHttp":false, "expireCookiesOnRequiredOnly":true, "path":"/", "domain":false, "expires":365, "same_site":"Strict", "secure":"auto", "http_only":false});
      cookieSettings        = $.extend({}, {"enabled":true, "checkCookies":true, "same_site":"Strict"});
      cookieOptions         = $.extend(true, {}, cookieDefaults, cookieSettings);
      // Load  module DEFAULTS|CONFIG
      cookieConsentDefaults = $.extend({}, {"enabled":false, "show_cookie_icon":false, "expire_cookies_on_required_only":true, "reloadPageOnChange":true, "autoShowDialog":true, "dialogLanguage":"content", "dialogLanguages":["en", "de"], "contentURL":"/assets/data/cookieconsent", "whitelisted":[], "xhrDataElement":"consent-data", "dialogContainerID":"consent-dialog", "postSelectionCallback":"j1.adapter.cookieConsent.cbCookie", "modal_settings":{"title":{"de":"Ihre Privatsphäre", "en":"Your Privacy"}, "body_text":{"en":"This website uses cookies and similar technologies that are required for operation. You are free to decide to give, refuse or withdraw your consent at any time by clicking the <b>My Settings</b> button. Changes are possible at any time by clicking on the cookie icon in the menu bar. Additional cookies are used only with your consent. Additional cookies are used to analyze the use of this website or to store your personal settings for this website. Personal settings allow all visitors to save preferences of the use of services. For more information about what data is collected and shared with partners, please find more information with <b>Privacy Notice</b>. <br><br> To visit this website, your consent on cookies is required by clicking the <b>I Agree</b> button.\n", "de":"Diese Website verwendet Cookies und ähnliche Technologien, die für den Betrieb dieser Website erforderlich sind. Sie können zu jederzeit entscheiden, ob Sie Ihre Zustimmung geben, verweigern oder zurückziehen. Sie können Ihre Zustimmung geben, indem Sie auf die Schaltfläche <b>Einverstanden</b> klicken. Nachträgliche Änderungen sind jederzeit möglich, indem Sie auf das Cookie Symbol in der Menüleiste klicken. <br><br> Erweiterte Cookies werden nur mit Ihrer <b>Zustimmung</b> verwendet. Zusätzliche Cookies werden verwendet, um die Nutzung dieser Website zu analysieren oder Ihre persönlichen Einstellungen für diese Webseite zu speichern. Analysen der Nutzung der Website helfen uns, Ihnen eine optimaler Nutzung diese Website zu ermöglichen. Persönliche Einstellungen erlauben es allen Besuchern, Präferenzen der Nutzung von Diensten zu speichern. <br><br> Weitere Informationen darüber, welche Daten gesammelt und an Partner weitergegeben werden finden Sie in der <b>Datenschutzrichtlinie</b>. Oder in Kurzform, indem Sie auf <b>Datenschutzerklärung</b> klicken. <br><br> Wenn Sie diese Website besuchen, ist Ihre Zustimmung zur Verwendung von Cookies erforderlich, indem Sie auf die Schaltfläche <b>Einverstanden</b> klicken.\n"}, "privacy_notice":{"en":"The operator of this website takes the protection of your personal data seriously. We treat your data confidential and comply with the General Data Protection Regulation (GDPR) of the European Union to protect your privacy. A set of data is stored in persistent cookies and remain on your computer for later use. Our partners and we make use of persistent vookies. Those additional cookies are only used with your consent. <br> <ul>\n  <li style=\"list-style-type: none;\">\n    <b>Necessary</b>\n    <p>\n      This website is based on static content, and no database is used behind it.\n      All information (data) needed to control this site is stored in so-called\n      session Cookies. Your browser automatically removes all session cookies\n      if you close all windows in the browser.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Analysis</b>\n    <p>\n      Analysis of the usage of this website helps optimize the site's pages to\n      improve the visitor's experience. For traffic analysis, the service\n      Google Analytics (GA) is used. GA uses persistent cookies that remain on\n      your computer for its service. This website does <b>not</b> transfer any\n      personal data to GA. Implicit personal information, like IP addresses, is\n      anonymized to protect your privacy.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Personalization</b>\n    <p>\n      Remebering your personal settings provides additional services like themes\n      translation, comments, or running advertising campaigns to provide visitors\n      with a website free of charge. Partners use persistent cookies that\n      remain on your computer for their services. Our partners like Bootswatch,\n      Hyvor, Disqus, or Google provide excellent personalized services and finance\n      running this site.\n    </p>\n  </li>\n</ul>\n", "de":"Der Betreiber dieser Website nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre Daten vertraulich und halten uns an die <b>Datenschutzgrundverordnung (DSGVO)</b> der Europäischen Union zum Schutz Ihrer Privatsphäre. <br><br> Eine Reihe von Daten wird in dauerhaften Cookies gespeichert. Unsere Partner und wir verwenden dauerhafte Cookies. Diese zusätzlichen Daten werden nur mit Ihrer <b>Zustimmung</b> gespeichert. <br> <ul>\n  <li style=\"list-style-type: none;\">\n    <b>Notwendig</b>\n    <p>\n      Diese Website speichert <b>keine</b> persönliche Daten\n      in Datenbanken. Alle Informationen (Daten) die zur Steuerung dieser Seite\n      notwendig sind, werden in sogenannten Sitzungscookies gespeichert. Ihr\n      Browser <b>entfernt</b> Sitzungscookies automatisch ohne Ihr zutun, wenn Sie\n      alle Browserfenster schließen.\n    </p>\n  <li style=\"list-style-type: none;\">\n    <b>Analysen</b>\n    <p>\n      Die Nutzung von Verkehrsanalysen hilft bei der Optimierung der\n      Website, um die Nutzung für alle Besucher zu verbessern. Für die Analyse wird\n      der Dienst Google Analytics (GA) verwendet. GA verwendet dauerhafte\n      Cookies die auf Ihrem Computer verbleiben, um diesen Dienst zu ermöglichen.\n      Diese Website überträgt <b>keine</b> persönlichen Daten an den Dienst GA.\n      Implizite persönliche Informationen, wie IP-Adressen, werden zum Schutz der\n      Privatsphäre unserer Besucher anonymisiert.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Personalisierung</b>\n    <p>\n      Die Speicherung persönlichger Einstellungen wird verwendet, um zusätzliche\n      Dienste anzubieten. Dazu gehören Themen, Übersetzungen, Kommentare oder Werbekampagnen\n      die allen Anwendern einen kostenlosen Besuch dieser Website ermöglichen.\n      Partner verwenden für ihre Dienste dauerhafte Cookies, die auf Ihrem Computer\n      verbleiben. Unsere Partner wie Bootswatch, Disqus, oder Google bieten hervorragende\n      personalisierte Dienste und finanzieren die Kosten für den Betrieb dieser Seiten.\n    <p>\n  </li>\n</ul>\n"}}});
      cookieConsentSettings = $.extend({}, {"enabled":true, "show_cookie_icon":true});
      cookieConsentOptions  = $.extend(true, {}, cookieConsentDefaults, cookieConsentSettings);
      // initialize state flag
      _this.state = 'pending';
      // Load  module DEFAULTS|CONFIG
      /* eslint-disable */
      // moduleOptions = $.extend({}, {"enabled":true, "show_cookie_icon":true, "expire_cookies_on_required_only":true, "reloadPageOnChange":true, "autoShowDialog":true, "dialogLanguage":"content", "dialogLanguages":["en", "de"], "contentURL":"/assets/data/cookieconsent", "whitelisted":[], "xhrDataElement":"consent-data", "dialogContainerID":"consent-dialog", "postSelectionCallback":"j1.adapter.cookieConsent.cbCookie", "modal_settings":{"title":{"de":"Ihre Privatsphäre", "en":"Your Privacy"}, "body_text":{"en":"This website uses cookies and similar technologies that are required for operation. You are free to decide to give, refuse or withdraw your consent at any time by clicking the <b>My Settings</b> button. Changes are possible at any time by clicking on the cookie icon in the menu bar. Additional cookies are used only with your consent. Additional cookies are used to analyze the use of this website or to store your personal settings for this website. Personal settings allow all visitors to save preferences of the use of services. For more information about what data is collected and shared with partners, please find more information with <b>Privacy Notice</b>. <br><br> To visit this website, your consent on cookies is required by clicking the <b>I Agree</b> button.\n", "de":"Diese Website verwendet Cookies und ähnliche Technologien, die für den Betrieb dieser Website erforderlich sind. Sie können zu jederzeit entscheiden, ob Sie Ihre Zustimmung geben, verweigern oder zurückziehen. Sie können Ihre Zustimmung geben, indem Sie auf die Schaltfläche <b>Einverstanden</b> klicken. Nachträgliche Änderungen sind jederzeit möglich, indem Sie auf das Cookie Symbol in der Menüleiste klicken. <br><br> Erweiterte Cookies werden nur mit Ihrer <b>Zustimmung</b> verwendet. Zusätzliche Cookies werden verwendet, um die Nutzung dieser Website zu analysieren oder Ihre persönlichen Einstellungen für diese Webseite zu speichern. Analysen der Nutzung der Website helfen uns, Ihnen eine optimaler Nutzung diese Website zu ermöglichen. Persönliche Einstellungen erlauben es allen Besuchern, Präferenzen der Nutzung von Diensten zu speichern. <br><br> Weitere Informationen darüber, welche Daten gesammelt und an Partner weitergegeben werden finden Sie in der <b>Datenschutzrichtlinie</b>. Oder in Kurzform, indem Sie auf <b>Datenschutzerklärung</b> klicken. <br><br> Wenn Sie diese Website besuchen, ist Ihre Zustimmung zur Verwendung von Cookies erforderlich, indem Sie auf die Schaltfläche <b>Einverstanden</b> klicken.\n"}, "privacy_notice":{"en":"The operator of this website takes the protection of your personal data seriously. We treat your data confidential and comply with the General Data Protection Regulation (GDPR) of the European Union to protect your privacy. A set of data is stored in persistent cookies and remain on your computer for later use. Our partners and we make use of persistent vookies. Those additional cookies are only used with your consent. <br> <ul>\n  <li style=\"list-style-type: none;\">\n    <b>Necessary</b>\n    <p>\n      This website is based on static content, and no database is used behind it.\n      All information (data) needed to control this site is stored in so-called\n      session Cookies. Your browser automatically removes all session cookies\n      if you close all windows in the browser.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Analysis</b>\n    <p>\n      Analysis of the usage of this website helps optimize the site's pages to\n      improve the visitor's experience. For traffic analysis, the service\n      Google Analytics (GA) is used. GA uses persistent cookies that remain on\n      your computer for its service. This website does <b>not</b> transfer any\n      personal data to GA. Implicit personal information, like IP addresses, is\n      anonymized to protect your privacy.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Personalization</b>\n    <p>\n      Remebering your personal settings provides additional services like themes\n      translation, comments, or running advertising campaigns to provide visitors\n      with a website free of charge. Partners use persistent cookies that\n      remain on your computer for their services. Our partners like Bootswatch,\n      Hyvor, Disqus, or Google provide excellent personalized services and finance\n      running this site.\n    </p>\n  </li>\n</ul>\n", "de":"Der Betreiber dieser Website nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre Daten vertraulich und halten uns an die <b>Datenschutzgrundverordnung (DSGVO)</b> der Europäischen Union zum Schutz Ihrer Privatsphäre. <br><br> Eine Reihe von Daten wird in dauerhaften Cookies gespeichert. Unsere Partner und wir verwenden dauerhafte Cookies. Diese zusätzlichen Daten werden nur mit Ihrer <b>Zustimmung</b> gespeichert. <br> <ul>\n  <li style=\"list-style-type: none;\">\n    <b>Notwendig</b>\n    <p>\n      Diese Website speichert <b>keine</b> persönliche Daten\n      in Datenbanken. Alle Informationen (Daten) die zur Steuerung dieser Seite\n      notwendig sind, werden in sogenannten Sitzungscookies gespeichert. Ihr\n      Browser <b>entfernt</b> Sitzungscookies automatisch ohne Ihr zutun, wenn Sie\n      alle Browserfenster schließen.\n    </p>\n  <li style=\"list-style-type: none;\">\n    <b>Analysen</b>\n    <p>\n      Die Nutzung von Verkehrsanalysen hilft bei der Optimierung der\n      Website, um die Nutzung für alle Besucher zu verbessern. Für die Analyse wird\n      der Dienst Google Analytics (GA) verwendet. GA verwendet dauerhafte\n      Cookies die auf Ihrem Computer verbleiben, um diesen Dienst zu ermöglichen.\n      Diese Website überträgt <b>keine</b> persönlichen Daten an den Dienst GA.\n      Implizite persönliche Informationen, wie IP-Adressen, werden zum Schutz der\n      Privatsphäre unserer Besucher anonymisiert.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Personalisierung</b>\n    <p>\n      Die Speicherung persönlichger Einstellungen wird verwendet, um zusätzliche\n      Dienste anzubieten. Dazu gehören Themen, Übersetzungen, Kommentare oder Werbekampagnen\n      die allen Anwendern einen kostenlosen Besuch dieser Website ermöglichen.\n      Partner verwenden für ihre Dienste dauerhafte Cookies, die auf Ihrem Computer\n      verbleiben. Unsere Partner wie Bootswatch, Disqus, oder Google bieten hervorragende\n      personalisierte Dienste und finanzieren die Kosten für den Betrieb dieser Seiten.\n    <p>\n  </li>\n</ul>\n"}}});
      /* eslint-enable */
      // if (typeof settings !== 'undefined') {
      //   moduleOptions = $.extend({}, moduleOptions, settings);
      // }
      if (cookieConsentOptions.dialogLanguage === 'auto') {
        cookieConsentOptions.dialogLanguage = navigatorLanguage;
      } else if (cookieConsentOptions.dialogLanguage === 'content') {
        cookieConsentOptions.dialogLanguage = contentLanguage;
      }
      check_cookie_option_domain  = (cookieOptions.domain === 'false') ? false : true;
      expireCookiesOnRequiredOnly = (cookieOptions.expireCookiesOnRequiredOnly === 'true') ? true: false;
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var same_site = cookieOptions.same_site;
        var expires;
        if (cookieConsentOptions.enabled) {
          expires = cookieOptions.expires;
        } else {
          // expire permanent cookies to session
          j1.expireCookie({ name: cookie_names.user_state });
          j1.expireCookie({ name: cookie_names.user_consent });
          j1.expireCookie({ name: cookie_names.user_translate });
          // disable the themes menus
          $('#themes_menu').css('display', 'none');
          $('#themes_mmenu').css('display', 'none');
          logger.warn('\n' + 'disable module: Themer');
          // disable the quick link for (Google) Translation
          $('#quickLinksTranslateButton').css('display', 'none');
          logger.warn('\n' + 'disable module: Trranslator');
        }
        // set domain used by cookies
        if (check_cookie_option_domain) {
          if (cookieOptions.domain == 'auto') {
            domainAttribute = auto_domain;
            stringifiedAttributes += '; ' + 'Domain=' + domainAttribute;
          } else  {
            domainAttribute = cookieOptions.domain;
            stringifiedAttributes += '; ' + 'Domain=' + domainAttribute;
          }
        } else {
          domainAttribute = cookieOptions.domain;
        }
        // Failsafe: if 'None' is given for samesite in non-secure
        // environments open access to cookies to subdomains
        // ---------------------------------------------------------------------
        if (same_site == 'None' && !secure) {
          same_site = 'Lax';
        }
        if ( j1.getState() === 'finished' ) {
          _this.setState('started');
          if (cookieConsentOptions.enabled) {
            logger.debug('\n' + 'state: ' + _this.getState());
            logger.info('\n' + 'module is being initialized');
            j1.cookieConsent = new CookieConsent ({
              contentURL:             cookieConsentOptions.contentURL,          // dialog content (modals) for all supported languages
              cookieName:             cookie_names.user_consent,                // name of the consent cookie
              cookieStorageDays:      expires,                                  // lifetime of a cookie [0..365], 0: session cookie
              cookieSameSite:         same_site,                                // restrict consent cookie
              cookieSecure:           secure,                                   // only sent to the server with an encrypted request over HTTPS
              cookieDomain:           domainAttribute,                          // set domain (hostname|domain)
              dialogLanguage:         cookieConsentOptions.dialogLanguage,      // language for the dialog (modal)
              whitelisted:            cookieConsentOptions.whitelisted,         // pages NO cookie dialog is shown
              reloadPageOnChange:     cookieConsentOptions.reloadPageOnChange,  // reload if setzings has changed
              dialogContainerID:      cookieConsentOptions.dialogContainerID,   // container, the dialog modal is (dynamically) loaded
              xhrDataElement:         cookieConsentOptions.xhrDataElement,      // container for all language-specific dialogs (modals)
              postSelectionCallback:  cookieConsentOptions.postSelectionCallback, // callback function, called after the user has made his selection
            });
          } else {
            logger.warn('\n' + 'module is disabled');
          }
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.debug('\n' + 'module initialized successfully');
          // -------------------------------------------------------------------
          // NOTE: Click events moved to Navigator (core)
          // -------------------------------------------------------------------
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
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
    // -------------------------------------------------------------------------
    // cbCookie()
    // Called (callback) by CookieConsent module after the user has
    // made his selection
    // -------------------------------------------------------------------------
    cbCookie: function () {
      var url             = new liteURL(window.location.href);
      var hostname        = url.hostname;
      var gaCookies       = j1.findCookie('_ga');
      var gasCookies      = j1.findCookie('__ga');
      var j1Cookies       = j1.findCookie('j1');
      var cookie_names    = j1.getCookieNames();
      var user_state      = j1.readCookie(cookie_names.user_state);
      var user_consent    = j1.readCookie(cookie_names.user_consent);
      var user_translate  = j1.readCookie(cookie_names.user_translate);
      var json            = JSON.stringify(user_consent);
      var user_agent      = platform.ua;
      var cookie_written;
      logger.info('\n' + 'entered post selection callback from CookieConsent');
      logger.info('\n' + 'current values from CookieConsent: ' + json);
      // enable cookie button if not visible
      if ($('#quickLinksCookieButton').css('display') === 'none')  {
        $('#quickLinksCookieButton').css('display', 'block');
      }
      // Manage Google Analytics OptIn/Out
      // See: https://github.com/luciomartinez/gtag-opt-in/wiki
      if (tracking_enabled && tracking_id_valid) {
        // Managing cookie life-time
        // ---------------------------------------------------------------------
        // If cookie settings allows only "required" cookies, all "persistent"
        // cookies (Comments|Ads|Translation) get expired to "session" for
        // better GDPR compliance. The GDPR regulations does NOT require
        // any consent on session-only cookies.
        //
        if (!user_consent.analysis || !user_consent.personalization) {
          // overload cookie consent settings
          user_translate.analysis         = user_consent.analysis;
          user_translate.personalization  = user_consent.personalization;
          // disable translation service
          user_translate.translationEnabled = false;
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_translate,
            data:     user_translate,
            secure:   secure
          });
          // expire permanent cookies to session
          // -------------------------------------------------------------------
          j1.expireCookie({ name: cookie_names.user_state });
          j1.expireCookie({ name: cookie_names.user_consent });
          j1.expireCookie({ name: cookie_names.user_translate });
        }
        if (cookieConsentOptions.reloadPageOnChange) {
          // reload current page (skip cache)
          location.reload(true);
        }
      } else {
        // Failsafe: Make (really) sure the all GA|GAS cookies removed
        // left from a previous session/page view for better privacy compliance
        // ---------------------------------------------------------------------
        // remove cookies on invalid GA config or left from a previous
        // session/page view if they exists
        // ---------------------------------------------------------------------
        gaCookies.forEach(function (item) {
          logger.warn('\n' + 'delete GA cookie: ' + item);
          if (hostname == 'localhost') {
            j1.removeCookie({ name: item, domain: false, secure: false });
          } else {
            j1.removeCookie({ name: item, domain: '.' + hostname, secure: false });
          }
        });
        // remove cookies on invalid GAS config or left from a previous
        // session/page view if they exists
        // ---------------------------------------------------------------------
        gasCookies.forEach(function (item) {
          // Remove cookies from Google Ads
          logger.warn('\n' + 'delete GAS cookie: ' + item);
          if (hostname == 'localhost') {
            j1.removeCookie({ name: item, domain: false, secure: false });
          } else {
            j1.removeCookie({ name: item, domain: '.' + hostname, secure: false });
          }
        });
        // Managing cookie life-time. If cookie settings allows only
        // "required" cookies, all "persistent" cookies (Comments|Ads|Translation)
        // get expired to "session" for better GDPR compliance. The GDPR
        // regulations|privacy does NOT require any consent on using cookies
        // for session-only cookies.
        // ---------------------------------------------------------------------
        if (!user_consent.analysis || !user_consent.personalization) {
          // overload cookie consent settings
          user_translate.analysis         = user_consent.analysis;
          user_translate.personalization  = user_consent.personalization;
          // disable translation service
          user_translate.translationEnabled = false;
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_translate,
            data:     user_translate,
            secure:   secure
          });
          if (expireCookiesOnRequiredOnly) {
            // expire permanent cookies to session
            j1.expireCookie({ name: cookie_names.user_state });
            j1.expireCookie({ name: cookie_names.user_consent });
            j1.expireCookie({ name: cookie_names.user_translate });
          }
        }
        if (cookieConsentOptions.reloadPageOnChange) {
          // reload current page (skip cache)
          location.reload(true);
        }
      } // END if tracking_enabled
    } // END cbCookie
  }; // END return
})(j1, window);


