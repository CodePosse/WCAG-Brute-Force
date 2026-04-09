/* Add default titles to iframes that are missing one */
$(function () {
  $('iframe:not([title])').attr({
    title: 'your iframe title'
  });
});