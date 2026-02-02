// Array of theme stylesheet paths
const themes = [
    './../CSS/theme.css',
    './../CSS/theme-wcag.css',
    './../CSS/theme-wcag-high.css'
];
// Attach click event listener to toggle controls
$('#themeToggle, #styleToggle2').on('click', function (e) {
    e.preventDefault();

    const $link = $('#themeStylesheet');
    const current = $link.attr('href');

    let index = themes.findIndex(theme =>
        current.indexOf(theme.split('./').pop()) !== -1
    );

    // If not found, reset to first
    if (index === -1) index = 0;

    const nextIndex = (index + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    $link.attr('href', nextTheme);

    // Optional: update aria state
    $(this).attr('aria-pressed', nextIndex !== 0);
});
