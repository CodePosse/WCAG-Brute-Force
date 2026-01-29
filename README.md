# WCAG-Brute-Force

![GitHub package.json dynamic](https://img.shields.io/github/package-json/description/codeposse/WCAG-Brute-Force)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/codeposse/WCAG-Brute-Force)
![Gulp](https://img.shields.io/badge/dynamic/json?color=green&label=gulp&logo=gulp&url=https%3A%2F%2Fraw.githubusercontent.com%2FCodePosse%2FWCAG-Brute-Force%2Fmaster%2Fpackage-lock.json&query=%24.packages%5B%22node_modules%2Fgulp%22%5D.version)
![Cheerio](https://img.shields.io/badge/dynamic/json?color=green&label=cheerio&url=https%3A%2F%2Fraw.githubusercontent.com%2FCodePosse%2FWCAG-Brute-Force%2Fmaster%2Fpackage-lock.json&query=%24.packages%5B%22node_modules%2Fcheerio%22%5D.version)

Brute force WCAG AA patching to pass [wave tool] tests. _Updated: January 27 2026_ more updates as I recognize opportunities.

## Overview

This is a file I ([tim hunold]) am making using CSS and jQuery :poop: (plus vanilla JS) to help patch a site quickly for the purpose of attempting 508 WCAG AA compliance. It is unlikely to fix everything, but it can help a ton. As I age, my eyesight is starting to let me know that I am doiung this for future me as much as everyone else out there.

Please let me know if you'd like to contribute to this [repo], this is based mainly on what I currently deal with.

## WCAG Considerations

- "Pretty" is often the mortal enemy of usable or functional when dealing with limited vision. As you age, you'll appreciate this far more
- Images require `alt` or `role` with a value, do not use `title` because some out of touch _MBA_ shouts "SEO!" it doesn't work like that anymore
- `Iframe` requires `title` for context
- `abbr` elements for abbreviations and explanations are a good idea, be semantic, it's there for a reason!
- Specifying a max character width helps wrap text
- tab key navigation can be reset to respect the linear DOM order and should have a focus bg color (see TOC generator below)
- All links need to be visually distinct, _ie underlined or made to look like a CTA_ and not cloaked because "pretty"
- Browsers use a default font size of 16px, never go below 11px for AA and AAA demands smallest can be 16px
- Try to avoid area wraps with `a` tags aka "[block links](https://css-tricks.com/block-links-are-a-pain-and-maybe-just-a-bad-idea/)"
- Never use `content:` in CSS, screen readers can't see it and don't use clickable icons without some hidden text
- PDF files are their own issue, but links to them should tell users there is a PDF file
- Docs should have `doctype` and `lang` declared
- Add Opengraph and Twittercard support as it seems some new technology might consider it especially from linked sites
- [My TOC Generator](https://github.com/CodePosse/WCAG-Brute-Force/tree/master/TOC%20creator) is pretty similar to the [Skip-to method spec](https://codepen.io/matuzo/pen/RZBNjP#content) where it grabs and makes a TOC or you can use it to lig directly to the console for debugging.
- [My Style Switcher](https://github.com/CodePosse/WCAG-Brute-Force/tree/master/Style%20Switcher) is similar to the [Style switcher idea](https://www.w3.org/TR/WCAG20-TECHS/C29.html) where you can have a "normal" one, and then an "enhanced" one for those that might have vision issues.
- [Form Resource spec](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript) Good info
- Future consideration: "read more" and "next" are AWFUL to screenreaders. Tab navigation may jump to a link with _zero_ context.

### Indemnification

I make no warranty that this will fix everything, but there is a lot it can help with.

## CSS

In CSS I am adding a lot of generic, obvious things, there are comments to what a line is and does, and I use plenty of advanced selectors and pseudo classes. I don't always provide the actual use samples, but you should be able to understand from the comments.

### What it does

We define and leverage root and simple variables. Also, there are font-handling methods that are often overlooked. It also calls out that links need to have underlines unless they get a visually dominant treatment like a CTA (call to action)

## JavaScript

The [JS directory](https://github.com/CodePosse/WCAG-Brute-Force/tree/master/JS) has its own README file.

Ok, [jQuery] is used, it is ubiquitous so it is easy to use. Most of what I do here are attribute manipulations and those generally work from early versions on to the modern releases.

Vanilla JavaScript has been added as well.

Gulp with NPM was added as well. You can point it to files and folders to rapidly fix compoinents or static files. Gulp.js comments explain it all. I know it's ancient, but as a task runner, it works fast locally, better than GREP statements.

## Live Demos

[WCAG CSS reset](https://codeposse.github.io/WCAG-Brute-Force/CSS/)
[Brute-force JS patcher](https://codeposse.github.io/WCAG-Brute-Force/JS/)
[TOC Creator from Headings](https://codeposse.github.io/WCAG-Brute-Force/TOC%20creator/)
[Style Switcher](https://codeposse.github.io/WCAG-Brute-Force/Style%20Switcher/)

### What it does

We add missing alt attributes with a value and alts without values, plus a default role. The next thing it does is remove titles from images.

We also remove tabindexes and then re-add to clickable links in the order from the DOM tree in a linear fashion.

There is also a way to add titles to iframes. This helps when you embed third party code like from Vimeo. I will add an advanced way to detect the domain it is calling and then use it to have contextual titles.

## License

FREEEEEEEEEE

###### More of me

[Weaponized UX](https://timhunold.medium.com/weaponized-ux-ui-sniping-your-way-to-higher-conversions-def0d62f22df) | [Dev.to](https://dev.to/codeposse) | [Medium](https://medium.com/@timhunold) | [LinkedIn](https://www.linkedin.com/in/itssobig/) | [StackOverflow](https://stackoverflow.com/users/4071647/codeposse) | [Insta](https://www.instagram.com/pup90210/) | [I actually race](https://scca.com/beverlyhills)

[repo]: https://github.com/CodePosse/WCAG-Brute-Force.git
[tim hunold]: http://www.itssobig.com/
[node.js]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[wave tool]: https://wave.webaim.org/
