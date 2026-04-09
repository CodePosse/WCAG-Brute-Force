// Adds a default meta description if one is missing.
(() => {
  if (!document.querySelector('meta[name=\"description\"]')) {
    const descMetaTag = document.createElement('meta');
    descMetaTag.setAttribute('name', 'description');
    descMetaTag.setAttribute('content', 'Your Page Description Here');
    document.head.appendChild(descMetaTag);
  }
})();
