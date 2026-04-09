// Adds a default language to the root <html> element if one is missing.
(() => {
  if (!document.documentElement.hasAttribute('lang')) {
    document.documentElement.setAttribute('lang', 'en-US');
  }
})();
