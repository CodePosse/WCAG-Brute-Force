// Adds an HTML5 doctype if one is missing.
(() => {
  if (document.doctype == null) {
    const doctype = document.implementation.createDocumentType('html', '', '');
    document.insertBefore(doctype, document.documentElement);
  }
})();
