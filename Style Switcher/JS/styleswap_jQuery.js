/* lame but effective, used onclick */
$.fn.themeWCAG = function () {
    $('link').attr("href", './../CSS/theme-wcag.css');
};

$.fn.themeDefault = function () {
    $('link').attr("href", './../CSS/theme.css');
};
//add it to the a link itself
$.fn.themeToggle = function () {
    const isDefault =
        $('#theme').attr('href') === './../CSS/theme-wcag.css';

    if (isDefault) {
        $(this).themeDefault();
    } else {
        $(this).themeWCAG();
    }
};
