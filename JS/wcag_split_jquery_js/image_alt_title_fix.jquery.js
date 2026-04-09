/* Fix missing image alt text and remove image title attributes */
$(function () {
  $("img").on("load", function () {
    $(this).filter(":not([alt])").attr("alt", "your alt text");
    $(this).filter("[alt='']").attr("alt", "your alt text");
    $(this).filter("[title]").removeAttr("title");
  });

  // Also handle already-loaded images.
  $("img").each(function () {
    $(this).filter(":not([alt])").attr("alt", "your alt text");
    $(this).filter("[alt='']").attr("alt", "your alt text");
    $(this).filter("[title]").removeAttr("title");
  });
});