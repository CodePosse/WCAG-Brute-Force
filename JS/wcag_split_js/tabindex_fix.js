// Removes "tab-index" attributes and reapplies tabindex values to links.
// Use with caution. This is a brute-force keyboard-navigation fix.
document.addEventListener('DOMContentLoaded', () => {
  const allElems = document.querySelectorAll('*');
  const aTags = document.querySelectorAll('a');

  allElems.forEach((el) => el.removeAttribute('tab-index'));
  aTags.forEach((a, i) => a.setAttribute('tabindex', String(i)));
});
