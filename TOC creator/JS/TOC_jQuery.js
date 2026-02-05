/* Table of Contents (TOC) generator using jQuery */
// WARNING!!!
// this adds IDs to tags based on their text content if they don't already have one
// be careful running this on production content without testing first!

$(document).ready(function () {
    const $tocRoot = $("#toc ul");
    if (!$tocRoot.length) return;

    const headings = $("h1, h2, h3, h4, h5, h6");

    // If you want to skip headings inside the TOC itself:
    // const headings = $("h1,h2,h3,h4,h5,h6").not("#toc h1,#toc h2,#toc h3,#toc h4,#toc h5,#toc h6");

    let $currentList = $tocRoot;
    let currentLevel = 1;

    // Helper: make a stable-ish slug from heading text (fallback if no id)
    function slugify(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/['"]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    function ensureUniqueId(baseId) {
        let id = baseId || "heading";
        let unique = id;
        let i = 2;
        while (document.getElementById(unique)) {
            unique = `${id}-${i++}`;
        }
        return unique;
    }

    headings.each(function (i) {
        const $h = $(this);
        const tag = this.tagName.toLowerCase(); // "h1"..."h6"
        const level = parseInt(tag.substring(1), 10);

        // Get text for TOC label
        const title = $h.text().trim();
        if (!title) return; // skip empty headings

        // Ensure heading has an id
        let id = $h.attr("id");
        if (!id) {
            const base = slugify(title) || `heading-${i + 1}`;
            id = ensureUniqueId(base);
            $h.attr("id", id);
        }

        // Adjust list nesting based on heading level changes
        if (level > currentLevel) {
            for (let l = currentLevel; l < level; l++) {
                const $lastLi = $currentList.children("li").last();
                const $newUl = $("<ul></ul>");
                if ($lastLi.length) {
                    $lastLi.append($newUl);
                    $currentList = $newUl;
                } else {
                    // If there's no previous li to attach to, attach directly
                    $currentList.append($newUl);
                    $currentList = $newUl;
                }
            }
        } else if (level < currentLevel) {
            for (let l = currentLevel; l > level; l--) {
                // climb up to the parent <ul>
                const $parentUl = $currentList.closest("ul").parent().closest("ul");
                if ($parentUl.length) $currentList = $parentUl;
            }
        }
        console.log(`Found ${headings.length} headings for TOC generation.`);
        currentLevel = level;

        // Build list item + link
        const $li = $("<li></li>");
        const $a = $("<a></a>", {
            href: `#${id}`,
            text: title,
        });

        // Optional: add a class reflecting heading level
        $li.addClass(`toc-${tag}`);

        $li.append($a);
        $currentList.append($li);
    });
});


// console.log the same code for testing in Node.js environment

$(document).ready(function () {
    const headingsArray = [];
    // Collect heading info into an array for console.table
    $("h1, h2, h3, h4, h5, h6").each(function (index) {
        headingsArray.push({
            tab_index: index + 1,
            actual_tag: this.tagName.toLowerCase(), // h1–h6
            text: $(this).text().trim(),
            id: this.id || null
        });
    });
    // Log the headings in a table format for easy inspection
    console.group("Headings Index (h1-h6)");
    console.table(headingsArray);
    console.groupEnd();

    // Optional: also expose globally for inspection
    window.__headingsIndex = headingsArray;
});
