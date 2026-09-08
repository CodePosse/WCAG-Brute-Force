
# WCAG-Brute-Force :wheelchair:

  

![GitHub package.json dynamic](https://img.shields.io/github/package-json/description/codeposse/WCAG-Brute-Force) ![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/codeposse/WCAG-Brute-Force) ![jQuery](https://img.shields.io/badge/jQuery-3.7.1-orange) ![Gulp](https://img.shields.io/badge/dynamic/json?color=green&label=gulp&logo=gulp&url=https%3A%2F%2Fraw.githubusercontent.com%2FCodePosse%2FWCAG-Brute-Force%2Fmaster%2Fpackage-lock.json&query=%24.packages%5B%22node_modules%2Fgulp%22%5D.version) ![Cheerio](https://img.shields.io/badge/dynamic/json?color=green&label=cheerio&url=https%3A%2F%2Fraw.githubusercontent.com%2FCodePosse%2FWCAG-Brute-Force%2Fmaster%2Fpackage-lock.json&query=%24.packages%5B%22node_modules%2Fcheerio%22%5D.version) ![Cheerio](https://img.shields.io/badge/dynamic/json?color=green&label=gutil&url=https%3A%2F%2Fraw.githubusercontent.com%2FCodePosse%2FWCAG-Brute-Force%2Fmaster%2Fpackage-lock.json&query=%24.packages%5B%22node_modules%2Fgutil%22%5D.version)

  

Hotfix WCAG/AA patching to comply/pass, [wave tool] and [Lighthouse] tests. <u>*Updated: September 9 2026*</u> more updates as I recognize opportunities. <u>**All this stuff HELPS SEO!!!**</u>

  #### Table of Contents

[Overview](#overview) | [Instructions](#instructions) | [WCAG Considerations](#wcag-considerations-children_crossing) | [AAA Notes](#aaa-notes-bug) | [Live Demos](#my-live-demos-tada) | [CSS](#css) | [JavaScript](#javascript) | [TODO](#todo-construction) | [License](#license)


## Overview

  

This is a repo I ([tim hunold]) am making in CSS, [jQuery] 3.7.1 :poop: and VanillaJS (option) to help patch a site quickly for the purpose of 508 WCAG AA 2, 2.1, 2.2 compliance triage. It is unlikely to fix everything, but it can help a ton.

Please let me know if you'd like to contribute to this [repo], this is based mainly on what I currently deal with, your experience may vary.

Remember this key phrase: *"if we ship to design spec then who owns the _legal_ liability because engineering have raised compliance concerns"* Your greatest enemy to compliance are design and marketing/product. They tend to choose "pretty" instead of the law and it has gotten my clients sued. Touch target sizes need to be WCAG 2.2 Standard (Legal Baseline): Interactive elements must be at least 24px × 24px, this is the most common design flaw.

### _Warning_ :bricks: :boom: :bug:
  
Sometimes users have JavaScript or ebven CSS disabled, this is going to be a problem for everything I made here but might be fine if your HTML is in order. I will try to make a better CSS file that needs no JavaScript, but nobody can guarantee what the user has on their side.


## Instructions

Directly link the JavaScript files to your pages with `<script>` tags, it'll do a lot, but make sure you review them to make sure you are not adding things you don't need. Same for the CSS reset of sorts. Copy-paste as needed is the best way. If you have a static site you want to update en-masse, try using the [Gulp] task. It'll scour your HTML files, and using [jQuery], it will rewrite things in the DOM directly and then spit them out.

  

## WCAG Considerations :children_crossing:

  

- :white_check_mark: TOC Generator [(SRC)](https://github.com/CodePosse/WCAG-Brute-Force/tree/master/TOC%20creator) and [(DEMO)](https://codeposse.github.io/WCAG-Brute-Force/TOC%20creator/) are similar to a [Skip-to method](https://codepen.io/matuzo/pen/RZBNjP#content) where it grabs and makes a TOC in the DOM or you can use in thes console for debugging. It makes elements become navigable # anchors.

- :white_check_mark: Style Switcher [(SRC)](https://github.com/CodePosse/WCAG-Brute-Force/tree/master/Style%20Switcher) or [(DEMO)](https://codeposse.github.io/WCAG-Brute-Force/Style%20Switcher/) is similar to the [Style switcher idea](https://www.w3.org/TR/WCAG20-TECHS/C29.html) where you can have a "normal" one, and then an "enhanced" one for those that might have vision issues.

- :link: [Form Resource spec](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript) Good reference info.

- :white_check_mark: Images require `alt` or `role` with a value, do not use `title` because some out of touch _MBA_ shouts "SEO!" it doesn't work like that anymore.

- :white_check_mark: `Iframe` requires `title` for context.

- :white_check_mark: Google translate free version adds some voting (depricated?) inputs without labels so we fix that with a label and ARIA hide.

-  `abbr` elements for abbreviations and explanations are a good idea, be semantic, it's there for a reason!

- Specifying a max character width helps wrap text.

- tab key navigation can be reset to respect the linear DOM order and should have a focus bg color (see TOC generator above).

- All links need to be visually distinct, _ie underlined or made to look like a CTA_ and not cloaked because it's "pretty".

- Browsers use a default font size of 16px, never go below 11px for AA and AAA demands smallest can be 16px, plus after you turn 40, you'll appreciate why.

- Try to avoid area wraps with `a` tags aka "[block links](https://css-tricks.com/block-links-are-a-pain-and-maybe-just-a-bad-idea/)"

- Never use `content:` in CSS, screen readers can't see it and don't use clickable icons without some hidden text.

- :white_check_mark: PDF/Doc files are their own issue, but links to them should tell users there is a PDF/Doc file, though some services like SiteImprove still ding you because the label should not only mention the presence of a doc, but the name of the doc.

- :white_check_mark: Pages should have `doctype` and `lang` declared.

- :white_check_mark: Adding Opengraph and Twittercard support as it seems some new technology might consider it especially from linked sites.

- Future consideration: "read more" and "next" are AWFUL to screenreaders. Tab navigation may jump to a link with _zero_ context.


## AAA notes :bug:

As I find more people seeking AAA compliance, I will probably create new directories to specifically tackle this because it will break designs and if you use a CMS, _***you are probably going to fail***_ as they all add in bloat that makes it hard to predict.   

### Indemnification

  

I make no warranty that this will fix everything, but there is a lot it can help with.

  

## My Live Demos :tada:

  

[WCAG CSS reset](https://codeposse.github.io/WCAG-Brute-Force/CSS/) | [Brute-force JS/jQ patcher](https://codeposse.github.io/WCAG-Brute-Force/JS/) | [TOC Creator from Headings](https://codeposse.github.io/WCAG-Brute-Force/TOC%20creator/) | [Style Switcher](https://codeposse.github.io/WCAG-Brute-Force/Style%20Switcher/)

  

## CSS

  

In CSS I am adding a lot of generic, obvious things, there are comments to what a line is and does, and I use plenty of advanced selectors and pseudo classes. I don't always provide the actual use samples, but you should be able to understand from the comments.

  

### What it does

  

We define and leverage root and simple variables. Also, there are font-handling methods that are often overlooked. It also calls out that links need to have underlines unless they get a visually dominant treatment like a CTA (call to action). We avoid animation/transiotions as they ar lost on screen readers and for those with flashing sensativity, they can cause seizures.

  

## JavaScript

  

The [JS directory](https://github.com/CodePosse/WCAG-Brute-Force/tree/master/JS) has its own README file and the names tell you what they do.

  

Vanilla JavaScript has been added as well as [jQuery], it is ubiquitous so it is easy to use. Most of what I do here are DOM attribute manipulations and those generally work from early versions on to the modern releases.  

Gulp with NPM was added as well. You can point it to files and folders to rapidly fix compoinents or static files. Gulp.js comments explain it all. I know it's ancient, but as a task runner, it works fast locally, better than GREP statements.

  

### What it does

  
- Add missing alt attributes with a value and alts without values, plus a default role. 
- The next thing it does is remove titles from images.
- We also remove tabindexes and then re-add to clickable links in the order from the DOM tree in a linear fashion.
- Add titles to iframes. This helps when you embed third party code like maps/media. I will add an advanced way to detect the domain it is calling and then use it to have contextual titles.
- Lots more in the files including SEO/metadata stuff.

  

### TODO: :construction:

  

- [ ] Update to [jQuery] v4

- [ ] Proper "jump to" nav

- [x] Update Gulp task

- [ ] Gulp alternative

  

## License

  

FREEEEEEEEEE

  

###### More of me

  

[Weaponized UX](https://timhunold.medium.com/weaponized-ux-ui-sniping-your-way-to-higher-conversions-def0d62f22df) | [Dev.to](https://dev.to/codeposse) | [Medium](https://medium.com/@timhunold) | [LinkedIn](https://www.linkedin.com/in/itssobig/) | [StackOverflow](https://stackoverflow.com/users/4071647/codeposse) | [Insta](https://www.instagram.com/pup90210/) | [I actually race](https://scca.com/beverlyhills)

  

[repo]: https://github.com/CodePosse/WCAG-Brute-Force.git

[tim hunold]: https://www.itssobig.com/

[node.js]: https://nodejs.org

[twitter bootstrap]: https://twitter.github.com/bootstrap/

[jQuery]: https://jquery.com

[wave tool]: https://wave.webaim.org/

[Gulp]:https://gulpjs.com/

[Lighthouse]:https://developer.chrome.com/docs/lighthouse/accessibility/scoring