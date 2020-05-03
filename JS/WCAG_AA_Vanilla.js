// Vanilla JavaScript WCAG Hot Fix //
/* select a method below that works for you */

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