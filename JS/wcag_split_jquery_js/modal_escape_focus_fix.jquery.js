/* Example ESC key close handler for a modal or menu
   Replace modal_or_menu_element and modal_or_menu_element_id with your own values. */
$(function () {
  $(modal_or_menu_element).keyup(function (event) {
    if (event.keyCode == 27) {
      $(modal_or_menu_element).closeElement();
      $('a[href="#modal_or_menu_element_id"]').focus();
    }
  });
});