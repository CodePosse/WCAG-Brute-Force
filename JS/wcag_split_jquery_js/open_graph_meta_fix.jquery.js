/* Open Graph meta tag placeholders split from the original file.
   Replace placeholder values before use. */
$(function () {
  $('head').append('<meta property="og:title" content="your page title">');
  $('head').append('<meta property="og:description" content="your page description">');
  $('head').append('<meta property="og:type" content="website">');
  $('head').append('<meta property="og:url" content="' + window.location.href + '">');
  $('head').append('<meta property="og:image" content="your image URL">');
});