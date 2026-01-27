# Table Of Contents to understand tab-based navigation

## Why

This is a way of creating a Table Of Contents (TOC) based on the structure of your page. It will tell you what is a clickable order on the page for tab based navigation. This is HUGE to understand WHY you nest `H1` - `H6` and not just because a designer thinks it's pretty to mess with logical orders.

## How

Ok, there are a few methods you should copy-paste and use on your own. One is of course VanillaJS and the othjer jQuery BUT you have the option to log to console or generate one on the fly and maybe make it hidden navigation for a screen reader to see what the page regions are. I'll just dump it on the top of the page as a list with `id="toc"`

## DANGER

I STRONGLY advise you use headings, but if you must, add in your own `data-attribute` but AVOID trying `id`s as they are often tied to JavaScript functions that can make a user have a very bad day with your naming conventions! This said, if you copy-paste the script blindly, the TOC generator adds an `id` to each heading to make it a "scroll-to" anchor and will be reflected in the console's table output.
