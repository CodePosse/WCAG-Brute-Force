// Array of theme stylesheet paths
const themes = [
    './../CSS/theme.css',
    './../CSS/theme-wcag.css',
    './../CSS/theme-wcag-high.css'
];
// Get references to the stylesheet link element and toggle controls
const stylesheet = document.getElementById('themeStylesheet');
const toggles = document.querySelectorAll('#themeToggle, #styleToggle2');
// Function to toggle themes
function toggleTheme(e) {
    e.preventDefault();

    let index = parseInt(
        stylesheet.getAttribute('data-theme-index'),
        10
    ) || 0;

    index = (index + 1) % themes.length;

    stylesheet.setAttribute('href', themes[index]);
    stylesheet.setAttribute('data-theme-index', index);

    // Keep ARIA state in sync on both controls
    toggles.forEach(toggle => {
        toggle.setAttribute('aria-pressed', index !== 0);
    });
}
// Attach event listeners to toggle controls
toggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
});