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

// fixes missing iframe titles
$('iframe:not([title])').attr({ title: 'your iframe title' });

// fixes confusing layout tabindex but it is risky. We remove all tab indexes, then re-add to all a tags
$('*').removeAttr('tab-index');

var n = 1;
$('a').each(function () {
  $(this).attr('tabindex', n++);
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