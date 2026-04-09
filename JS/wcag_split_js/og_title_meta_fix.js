// Adds a default Open Graph title tag if one is missing.
(() => {
  if (!document.querySelector('meta[property="og:title"]')) {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('property', 'og:title');
    metaTag.setAttribute('content', 'Your Page Title Here');
    document.head.appendChild(metaTag);
  }
})();
