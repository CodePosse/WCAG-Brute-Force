// Style Switcher VanillaJS CSS toggler
// Toggles between theme.css and theme-wcag.css
const toggles = document.querySelectorAll('#styleToggle, #styleToggle2');
const stylesheet = document.getElementById('siteStylesheet');
// Function to toggle stylesheets
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
// Attach event listeners to all toggles
toggles.forEach(toggle => {
    toggle.addEventListener('click', toggleStyles);
});
// Function to swap stylesheets directly
function swapStylesheet(sheet) {
    document.getElementById('siteStylesheet').href = sheet;
}