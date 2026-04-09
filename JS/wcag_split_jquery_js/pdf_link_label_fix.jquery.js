/* Add ARIA labels to PDF links */
$(function () {
  $('a[href$=".pdf"]').each(function () {
    var linktext = $(this).text();
    $(this).attr("aria-label", linktext + " (opens PDF document)");
  });
});