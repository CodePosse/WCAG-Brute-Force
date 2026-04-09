// Watches the DOM for Google Translate generated elements and applies accessibility attributes.
document.addEventListener('DOMContentLoaded', () => {
  function applyAttributes(el) {
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('tabindex', '-1');
    el.setAttribute('aria-label', el.id);
  }

  function fixGoogleTranslateAccessibility(node) {
    if (node.id && node.id.startsWith('goog-gt-')) {
      applyAttributes(node);
    }

    if (node.querySelectorAll) {
      const matches = node.querySelectorAll('[id^="goog-gt-"]');
      matches.forEach(applyAttributes);
    }
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          fixGoogleTranslateAccessibility(node);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
