/* Add a default language if missing */
$(function () {
  $('html:not([lang])').attr('lang', 'en-US');
});