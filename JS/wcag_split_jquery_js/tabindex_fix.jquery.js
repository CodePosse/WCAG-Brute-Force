/* Remove existing tab indexes, then re-add sequential tabindex to links */
$(function () {
  $('*').removeAttr('tab-index');
  var n = 1;
  $('a').each(function () {
    $(this).attr('tabindex', n++);
  });
});