/* Remove duplicate link title attributes when title matches visible text */
$(function () {
  $('a[title]').each(function () {
    var title = this.title;
    var mytext = $(this).text();
    if (title === mytext) {
      $(this).removeAttr('title');
    }
  });
});