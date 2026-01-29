const toggles = document.querySelectorAll('#styleToggle, #styleToggle2');
const stylesheet = document.getElementById('siteStylesheet');

function toggleStyles(e) {
    e.preventDefault();

    const isFirst = stylesheet.getAttribute('href') === '../CSS/theme.css';

    stylesheet.setAttribute(
        'href',
        isFirst ? '../CSS/theme-wcag.css' : '../CSS/theme.css'
    );

    toggles.forEach(toggle => {
        toggle.setAttribute('aria-pressed', String(isFirst));
    });
}

toggles.forEach(toggle => {
    toggle.addEventListener('click', toggleStyles);
});
