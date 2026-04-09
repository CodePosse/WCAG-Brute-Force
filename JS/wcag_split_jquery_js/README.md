# WCAG Brute Force – jQuery Modular Fixes

This directory contains modularized jQuery scripts extracted from the original `WCAG_AA_jQuery.js` file. Each script targets a specific accessibility remediation and can be included independently.

## Usage

Include only the fixes you need:

```html
<script src="jquery.min.js"></script>
<script src="js/lang_fix.jquery.js"></script>
<script src="js/image_alt_title_fix.jquery.js"></script>
```

All scripts are safe to run independently and use `$(document).ready()` to avoid conflicts.

---

## File Index

- [doctype_fix.jquery.js](./doctype_fix.jquery.js)
- [lang_fix.jquery.js](./lang_fix.jquery.js)
- [image_alt_title_fix.jquery.js](./image_alt_title_fix.jquery.js)
- [anchor_duplicate_title_fix.jquery.js](./anchor_duplicate_title_fix.jquery.js)
- [iframe_title_fix.jquery.js](./iframe_title_fix.jquery.js)
- [tabindex_fix.jquery.js](./tabindex_fix.jquery.js)
- [form_login_label_fix.jquery.js](./form_login_label_fix.jquery.js)
- [placeholder_to_label_fix.jquery.js](./placeholder_to_label_fix.jquery.js)
- [modal_escape_focus_fix.jquery.js](./modal_escape_focus_fix.jquery.js)
- [hidden_content_aria_hidden_fix.jquery.js](./hidden_content_aria_hidden_fix.jquery.js)
- [hidden_dom_content_aria_hidden_fix.jquery.js](./hidden_dom_content_aria_hidden_fix.jquery.js)
- [pdf_link_label_fix.jquery.js](./pdf_link_label_fix.jquery.js)
- [word_doc_link_label_fix.jquery.js](./word_doc_link_label_fix.jquery.js)
- [open_graph_meta_fix.jquery.js](./open_graph_meta_fix.jquery.js)
- [twitter_card_meta_fix.jquery.js](./twitter_card_meta_fix.jquery.js)
- [accessibility_meta_fix.jquery.js](./accessibility_meta_fix.jquery.js)
- [google_translate_accessibility_fix.jquery.js](./google_translate_accessibility_fix.jquery.js)
- [google_translate_accessibility_observer_fix.jquery.js](./google_translate_accessibility_observer_fix.jquery.js)

---

## Notes

- These scripts are derived from the original monolithic file and may include placeholder values (e.g., `"your alt text"`).
- Meta tag fixes are implemented as best-practice approximations where exact values were not explicitly defined.
- Google Translate fixes include both immediate remediation and a MutationObserver-based solution for dynamic content.

---

## Recommendation

For production use, consider:
- Auditing each script before deployment
- Replacing placeholder text with meaningful, contextual values
- Combining only necessary scripts into a single optimized bundle

---

## License

Refer to the main repository for licensing details.