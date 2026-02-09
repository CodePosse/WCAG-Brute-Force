// Vanilla JavaScript WCAG Hot Fix //
/* select a method below that works for you */
// COPY AND PASTE WHAT YOU NEED INTO YOUR JS FILE or run it all at once

//force doctype and lang attribute
// this is only needed if the doctype is missing
if (document.doctype == null) {
    const doctype = document.implementation.createDocumentType('html', '', '')
    document.insertBefore(doctype, document.documentElement)
}

// declare a language in the html tag as US English by default
if (!document.documentElement.hasAttribute('lang')) {
    document.documentElement.setAttribute('lang', 'en-US')
}

// fixes missing alt and remove title attributes
// it is faster to grab the images and then filter them instead of going back to select all images again
window.onload = () => {
    const imgs = document.querySelectorAll("img")
    const iframes = document.querySelectorAll("iframe")
    const allElems = document.querySelectorAll("*")
    const aTag = document.querySelectorAll("a")
    const checkAttr = (el, attr) => {
        for (let i = 0; i < el.attributes.length; i++) {
            if (el.attributes.getNamedItem(attr)) return true
        }
        return false
    }

    imgs.forEach(img => {
        // fixes missing alt attributes
        if (!checkAttr(img, 'alt')) img.setAttribute('alt', 'Now I have an ALT tag')
        // fixes empty alt values
        if (checkAttr(img, 'alt') && img.alt === '') img.alt = 'Now I have an ALT text'
        //images should not have titles
        img.removeAttribute('title')
    })

    // fixes missing iframe titles
    iframes.forEach(ifrm => { if (!checkAttr(ifrm, 'title')) ifrm.setAttribute('title', 'Now I have a TITLE tag') })

    // fixes confusing layout tabindex but it is risky. We remove all tab indexes, then re-add to all a tags
    allElems.forEach(el => el.removeAttribute('tab-index'))
    aTag.forEach((a, i) => a.setAttribute('tabindex', i))
}


// forms need labels
// placeholders become label text, labels are bound to the input ID 

var inputs = document.querySelectorAll("input").forEach(function (el) {
    // grab the id
    let inputID = el.getAttribute("id");
    // grab the placeholder
    let ph = el.getAttribute("placeholder");
    // create label
    let newLabel = document.createElement("label");
    // insert label we created before the input
    el.before(newLabel);
    // remove redundant placeholder text
    el.removeAttribute("placeholder");
    // use 'for' to bind to input ID
    newLabel.setAttribute("for", inputID);
    // set a custom class to the label
    newLabel.className = "myclass";
    // make placeholder text the label value
    newLabel.append(ph);
    // lets see them in the console
    console.log("Placeholders: " + ph + " created for ID:" + inputID);
});

// Hidden content should be hidden from screen readers too
// DANGER ZONE: this is a brute force method that may cause issues if you have content that is visually hidden but should be read by screen readers. Use with caution and test thoroughly.
document.querySelectorAll('*').forEach(el => {
    const style = window.getComputedStyle(el);

    // 1. Check if the element is hidden
    if (style.display === 'none' || style.visibility === 'hidden') {

        // 2. Check if it has any ARIA attributes
        const hasAria = Array.from(el.attributes).some(attr =>
            attr.name.startsWith('aria-')
        );

        // 3. Only apply if no ARIA attribute exists
        if (!hasAria) {
            el.setAttribute('aria-hidden', 'true');
        }
    }
});

/// PDF files need to have a tag for screenreaders 
document.querySelectorAll("a[href$='.pdf']").forEach(a => {
    a.setAttribute("aria-label", "PDF file");
});

// Word documents need to have a tag for screenreaders
document.querySelectorAll("a[href$='.doc'], a[href$='.docx']").forEach(a => {
    a.setAttribute("aria-label", "Word document");
});
// Essential Open Graph Tags (for Social & Accessibility)
if (!document.querySelector('meta[property="og:title"]')) {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('property', 'og:title');
    metaTag.setAttribute('content', 'Your Page Title Here');
    document.head.appendChild(metaTag);
}
// Twitter Card Tags (for Social & Accessibility)
if (!document.querySelector('meta[name="twitter:card"]')) {
    const twitterMetaTag = document.createElement('meta');
    twitterMetaTag.setAttribute('name', 'twitter:card');
    twitterMetaTag.setAttribute('content', 'summary_large_image');
    document.head.appendChild(twitterMetaTag);
}
// Additional Accessibility Tags
if (!document.querySelector('meta[name="description"]')) {
    const descMetaTag = document.createElement('meta');
    descMetaTag.setAttribute('name', 'description');
    descMetaTag.setAttribute('content', 'Your Page Description Here');
    document.head.appendChild(descMetaTag);
}
// End of Vanilla JavaScript WCAG Hot Fix //