// Adds an aria-label to links that point to Word documents.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("a[href$='.doc'], a[href$='.docx']").forEach((a) => {
    a.setAttribute('aria-label', 'Word document');
  });
});
