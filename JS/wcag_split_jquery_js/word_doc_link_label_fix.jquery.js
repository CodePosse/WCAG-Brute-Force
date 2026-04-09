/* Add ARIA labels to Word document links */
$(function () {
  $('a[href$=".doc"], a[href$=".docx"]').each(function () {
    var linktext = $(this).text();
    $(this).attr("aria-label", linktext + " (opens Word document)");
  });
});