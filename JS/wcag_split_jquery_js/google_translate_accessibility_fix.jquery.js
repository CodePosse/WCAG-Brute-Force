/* Hide Google Translate helper controls from screen readers and tab order */
$(function () {
  $('[id^="goog-gt-"]').each(function () {
    $(this).attr({
      'aria-hidden': 'true',
      'tabindex': '-1',
      'aria-label': this.id
    });
  });
});