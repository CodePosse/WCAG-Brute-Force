// Fixes missing or empty alt text on images and removes title attributes from images.
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img');

  const hasAttr = (el, attr) => el.hasAttribute(attr);

  imgs.forEach((img) => {
    if (!hasAttr(img, 'alt')) {
      img.setAttribute('alt', 'Now I have an ALT tag');
    }

    if (hasAttr(img, 'alt') && img.alt === '') {
      img.alt = 'Now I have an ALT text';
    }

    img.removeAttribute('title');
  });
});
