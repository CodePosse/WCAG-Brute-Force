/* heavy-handed jQuery patching */

// COPY AND PASTE WHAT YOU NEED INTO YOUR jQuery FILE
// or run it all by adding it to your document ready function
// Start of jQuery WCAG Hot Fix //

//force doctype and lang attribute
// this is only needed if the doctype is missing
if (document.doctype == null) {
  $('html').before('<!DOCTYPE html>');
}
// declare a language in the html tag as US English by default
$('html:not([lang])').attr('lang', 'en-US');

// fixes missing alt and remove title attributes
// it is faster to grab the images and then filter them instead of going back to select all images again
$("img").on("load", function () {
  // fixes missing alt attributes
  $(this).filter(":not([alt])").attr("alt", "your alt text");
  // fixes empty alt values
  $(this).filter("[alt='']").attr("alt", "your alt text");
  //images should not have titles
  $(this).filter("[title]").removeAttr("title");
});



//a links with titles but no img that dupe text value eg: <a title="xyz">xyz</a> but it cannot have any gaps/spaces
$("a[title]*").each(function () {
  var title = this.title;
  var mytext = this.text;
  if (title == mytext) {
    $(this).removeAttr("title");
  }
});


// fixes missing iframe titles
$('iframe:not([title])').attr({ title: 'your iframe title' });

// fixes confusing layout tabindex but it is risky. We remove all tab indexes, then re-add to all a tags
$('*').removeAttr('tab-index');

var n = 1;
$('a').each(function () {
  $(this).attr('tabindex', n++);
});


// form fixes
// add labels to form elements

// this is for a specific named item, goes by the ID value
$("#login").prepend("<label for='login'>Username</label>");

// steals ID and makes label for it
// rips out placeholder as label text
$("form *[id]").each(function () {
  var id = this.id;
  var ph = this.placeholder;
  $(this).removeAttr("placeholder");
  $(this).before("<label for=" + id + ">" + ph + ":</label>");
});



// acknowledge modal close buttons
//redefine these values
$(modal_or_menu_element).keyup(function (event) {
  if (event.keyCode == 27) {
    // Close the modal/menu
    $(modal_or_menu_element).closeElement();
    // Return focus to the element that invoked it
    $('a[href=#modal_or_menu_element_id]').focus();
  }
});


// Hidden content should be hidden from screen readers too
// DANGER ZONE: this is a brute force method that may cause issues if you have content that is visually hidden but should be read by screen readers. Use with caution and test thoroughly.
$("*").each(function () {
  $(":hidden").attr("aria-hidden", "true");
});

// add aria text to pdf links for screenreaders
$('a[href$=".pdf"]').each(function () {
  var linktext = $(this).text();
  $(this).attr("aria-label", linktext + " (opens PDF document)");
});
// add ARIA labels to document links for doc and docx files
$('a[href$=".doc"], a[href$=".docx"]').each(function () {
  var linktext = $(this).text();
  $(this).attr("aria-label", linktext + " (opens Word document)");
});

// Essential Open Graph Tags (for Social & Accessibility)
$('head').append('<meta property="og:title" content="Your Page Title Here" />');
$('head').append('<meta property="og:description" content="Your Page Description Here" />');
$('head').append('<meta property="og:type" content="website" />');
$('head').append('<meta property="og:url" content="https://www.yourwebsite.com/your-page-url" />');
$('head').append('<meta property="og:image" content="https://www.yourwebsite.com/path-to-your-image.jpg" />');
// Twitter Card Tags (for Social & Accessibility)
$('head').append('<meta name="twitter:card" content="summary_large_image" />');
$('head').append('<meta name="twitter:title" content="Your Page Title Here" />');
$('head').append('<meta name="twitter:description" content="Your Page Description Here" />');
$('head').append('<meta name="twitter:image" content="https://www.yourwebsite.com/path-to-your-image.jpg" />');
// Additional Accessibility Tags
$('head').append('<meta name="description" content="Your Page Description Here" />');
$('head').append('<meta name="keywords" content="keyword1, keyword2, keyword3" />');
$('head').append('<meta name="author" content="Your Name or Company" />');
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
// End of Meta Tags
// End of jQuery WCAG Hot Fix //