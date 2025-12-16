/* heavy-handed JS patching */


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

// add aria text to pdf links for screenreaders
$('a[href$=".pdf"]').each(function () {
  var linktext = $(this).text();
  $(this).attr("aria-label", linktext + " (opens PDF document)");
});