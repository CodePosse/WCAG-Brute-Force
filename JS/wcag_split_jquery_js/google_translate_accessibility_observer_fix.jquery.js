/* Use MutationObserver when Google Translate elements are added after jQuery runs */
$(function () {
  const observer = new MutationObserver(function () {
    $('[id^="goog-gt-"]').each(function () {
      $(this).attr({
        'aria-hidden': 'true',
        'tabindex': '-1',
        'aria-label': this.id
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});