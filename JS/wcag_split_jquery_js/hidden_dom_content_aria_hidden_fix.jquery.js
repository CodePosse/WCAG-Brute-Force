/* Add aria-hidden only to elements hidden with inline display:none and lacking aria-* attributes */
$(function () {
  $('[style*="display: none"]').filter(function () {
    const hasAria = Array.from(this.attributes).some(function (attr) {
      return attr.name.startsWith('aria-');
    });
    return !hasAria;
  }).attr("aria-hidden", "true");
});