# WCAG-Brute-Force
Brute force WCAG AA patching to pass [wave tool] tests.

## Overview
This is a file I ([tim hunold]) am making using CSS and jQuery :poop: to help patch a site quickly for the purpose of attempting 508 WCAG AA compliance. It is unlikely to fix everything, but it can help a ton.

Please let me know if you'd like to contribute to this [repo], this is based mainly on what I currently deal with.

### Indemnification
I make no warranty that this will fix everything, but there is a lot it can help with.

## CSS
In CSS I am adding a lot of things, there are comments to what a line is and does, and I use plenty of advanced selectors and pseudo classes. I don't always peovide the actual use samples, but you should be able to understand from the comments.

### What it does
We define and leverage root and simple variables. Also there are font-handling methods that are often overlooked. It also calls out that links need to have underlines unless they get a visually dominant treatment like a CTA (call to action)

## JavaScript
Ok, [jQuery] is used, it is ubiquitous so it is easy to use. Most of what I do here are attribute manipulations and those generally work from early versions on to the modern releases.

Vanilla JavaScript has been added as well.

Gulp with NPM was added as well. You can point it to files and folders to rapidly fix compoinents or static files. Gulp.js comments explain it all.

### What it does
We add missing alt attributes with a value and alts without values, plus a default role. The next thing it does is remove titles from images.

We also remove tabindexes and then re-add to clickable links in the order from the DOM tree in a linear fashion.

There is also a way to add titles to iframes. This helps when you embed third party code like from Vimeo. I will add an advanced way to detect the domain it is calling and then use it to have contextual titles.

License
----

FREEEEEEEEEE


   [repo]: <https://github.com/CodePosse/WCAG-Brute-Force.git>
   [tim hunold]: <http://www.itssobig.com/>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [wave tool]: <https://wave.webaim.org/>