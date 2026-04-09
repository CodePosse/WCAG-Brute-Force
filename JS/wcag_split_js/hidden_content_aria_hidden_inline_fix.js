// Alternate version: only applies to elements hidden with inline styles.
// More precise than the computed-style version, but may miss CSS-hidden content.
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('[style*="display"], [style*="visibility"]')
    .forEach((el) => {
      const isInlineHidden =
        el.style.display === 'none' || el.style.visibility === 'hidden';

      const hasAria = Array.from(el.attributes).some((attr) =>
        attr.name.startsWith('aria-')
      );

      if (isInlineHidden && !hasAria) {
        el.setAttribute('aria-hidden', 'true');
      }
    });
});
