/* Add aria-hidden to hidden elements that do not already have aria-* attributes.
   Use with caution and test thoroughly. */
$(function () {
  $(":hidden").filter(function () {
    const hasAria = Array.from(this.attributes).some(function (attr) {
      return attr.name.startsWith('aria-');
    });
    return !hasAria;
  }).attr("aria-hidden", "true");
});