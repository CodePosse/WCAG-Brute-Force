# CSS

I am trying to add some of the obvious and not-so-obvious things here. Remember that you

## USAGE

In each file there is way more code than you need, so cut-and-paste accordingly. Two things a lot of people overlook are tabular navigation and screen reader only context. BootStrap uses `.sr-only` as a way fo things showing up for that screnario, and given what it is, I may be a bit rough, but white text on a dark background can do a lot.

Remember that `content:` in CSS to hide content is not avaiable to screen readers. It may allow you some slick content insertion, but you cannot trust a screen reader will understand what the heck it is.

## Coverage

As of this writing (June 21 2020) both jQuery and VanillaJS have fixes for form labels, tab index, adds titles to iframes, and adding missing alt attributes.

## Notes

Bootstrap has some things to consider around screen readers. [Bootstrap Accessibility](https://getbootstrap.com/docs/4.0/getting-started/accessibility/)
