// Vanilla JavaScript WCAG Hot Fix //
/* select a method below that works for you */




//add to images without alt//

/*all images get the same alt, overwrites existing alts*/
function init() {
    imgs = document.images;
    for (i = 0; i < imgs.length; i++) {
        imgs[i].alt = "my alt text";
    }
}
init();

/*add to first specific image without alt*/
document.querySelector('img[src="missingalt.gif"]').setAttribute('alt', 'my alt text')

/*add alt to first image without an alt*/
document.querySelector('img:not([alt])').setAttribute('alt', 'my alt text');

/*add alt to first image with an alt but no value*/
document.querySelector("img:not([alt=''])").setAttribute('alt', 'my alt text');

/*add to all images, computationally heavy*/
var y = document.querySelectorAll("img");
var i;
for (i = 0; i < y.length; i++) {
  y[i].setAttribute("alt", "my alt text");
}

/*same but for missing tag*/
var y = document.querySelectorAll('img:not([alt])');
var i;
for (i = 0; i < y.length; i++) {
  y[i].setAttribute("alt", "my alt text");
}

/*add to a specific img with an ID*/
var x = document.getElementById("myAnchor"); 
if (!x.hasAttribute("alt")) {      
    x.setAttribute("alt", "my alt text");
}

/*add to the first image on a page, and it doesn't have an alt*/
var x = document.getElementsByTagName("img")[0]; 
if (!x.hasAttribute("alt")) {      
    x.setAttribute("alt", "my alt text");
}


//EMBEDED MEDIA//
/*add to iframes without titles*/
var y = document.querySelectorAll('iframe:not([title])');
var i;
for (i = 0; i < y.length; i++) {
  y[i].setAttribute("title", "my title text");
}