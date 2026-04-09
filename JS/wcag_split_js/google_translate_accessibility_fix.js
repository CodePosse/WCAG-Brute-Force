// Hides Google Translate generated elements from screen readers and removes them from tab order.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[id^="goog-gt-"]').forEach((el) => {
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('tabindex', '-1');
    el.setAttribute('aria-label', el.id);
  });
});
