// Adds aria-hidden="true" to elements hidden by CSS when they have no existing ARIA attributes.
// Use with caution and test thoroughly.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('*').forEach((el) => {
    const style = window.getComputedStyle(el);

    if (style.display === 'none' || style.visibility === 'hidden') {
      const hasAria = Array.from(el.attributes).some((attr) =>
        attr.name.startsWith('aria-')
      );

      if (!hasAria) {
        el.setAttribute('aria-hidden', 'true');
      }
    }
  });
});
