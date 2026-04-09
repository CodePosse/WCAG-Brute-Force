// Adds a title to iframes that do not already have one.
document.addEventListener('DOMContentLoaded', () => {
  const iframes = document.querySelectorAll('iframe');

  iframes.forEach((iframe) => {
    if (!iframe.hasAttribute('title')) {
      iframe.setAttribute('title', 'Now I have a TITLE tag');
    }
  });
});
