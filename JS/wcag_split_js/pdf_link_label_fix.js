// Adds an aria-label to links that point to PDF files.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("a[href$='.pdf']").forEach((a) => {
    a.setAttribute('aria-label', 'PDF file');
  });
});
