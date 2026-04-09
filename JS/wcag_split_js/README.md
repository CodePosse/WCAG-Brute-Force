# WCAG AA Vanilla Split Files

These files were split from the repository's `JS/WCAG_AA_Vanilla.js` source into individual, semantically named scripts.

## Included Files

- [doctype_fix.js](doctype_fix.js)
- [lang_fix.js](lang_fix.js)
- [image_alt_title_fix.js](image_alt_title_fix.js)
- [iframe_title_fix.js](iframe_title_fix.js)
- [tabindex_fix.js](tabindex_fix.js)
- [input_placeholder_label_fix.js](input_placeholder_label_fix.js)
- [hidden_content_aria_hidden_fix.js](hidden_content_aria_hidden_fix.js)
- [hidden_content_aria_hidden_inline_fix.js](hidden_content_aria_hidden_inline_fix.js)
- [pdf_link_label_fix.js](pdf_link_link_label_fix.js)
- [word_doc_link_label_fix.js](word_doc_link_label_fix.js)
- [og_title_meta_fix.js](og_title_meta_fix.js)
- [twitter_card_meta_fix.js](twitter_card_meta_fix.js)
- [description_meta_fix.js](description_meta_fix.js)
- [google_translate_accessibility_fix.js](google_translate_accessibility_fix.js)
- [google_translate_accessibility_observer_fix.js](google_translate_accessibility_observer_fix.js)

## Notes

- The original source combines several behaviors in one file.
- These split files are written to run independently.
- Where the original file used a single `window.onload`, these versions use `DOMContentLoaded` listeners so they can coexist without overwriting each other.
- Placeholder and default text values were preserved from the original script.
