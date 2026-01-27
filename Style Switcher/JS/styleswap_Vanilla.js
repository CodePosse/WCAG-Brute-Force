const link = document.getElementById('styleToggle');
const stylesheet = document.getElementById('siteStylesheet');

link.addEventListener('click', function (e) {
    e.preventDefault();

    const isFirst = stylesheet.getAttribute('href') === '../CSS/theme.css';

    stylesheet.setAttribute('href', isFirst ? '../CSS/theme-wcag.css' : '../CSS/theme.css');
    link.setAttribute('aria-pressed', String(isFirst));
});