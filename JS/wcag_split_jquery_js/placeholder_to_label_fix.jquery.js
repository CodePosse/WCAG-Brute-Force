/* Convert placeholder text into visible text before form controls */
$(function () {
  $("form *[id]").each(function () {
    var ph = this.placeholder;
    $(this).removeAttr("placeholder");
    $(this).before("" + ph + ":");
  });
});