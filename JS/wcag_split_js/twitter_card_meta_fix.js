// Adds a default Twitter card tag if one is missing.
(() => {
  if (!document.querySelector('meta[name=\"twitter:card\"]')) {
    const twitterMetaTag = document.createElement('meta');
    twitterMetaTag.setAttribute('name', 'twitter:card');
    twitterMetaTag.setAttribute('content', 'summary_large_image');
    document.head.appendChild(twitterMetaTag);
  }
})();
