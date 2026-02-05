/* Table of Contents (TOC) generator using VanillaJS */
// WARNING!!!
// this adds IDs to tags based on their text content if they don't already have one
// be careful running this on production content without testing first!
document.addEventListener("DOMContentLoaded", function () {
    const tocRoot = document.querySelector("#toc ul");
    if (!tocRoot) return;
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    let currentList = tocRoot;
    let currentLevel = 1;
    const headingsArray = [];
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
    // Main loop to process each heading
    headings.forEach((heading, index) => {
        const tag = heading.tagName.toLowerCase();
        const level = parseInt(tag.substring(1), 10);
        const title = heading.textContent.trim();
        if (!title) return;
        let id = heading.id;
        if (!id) {
            const base = slugify(title) || `heading-${index + 1}`;
            id = ensureUniqueId(base);
            heading.id = id;
        }
        if (level > currentLevel) {
            for (let l = currentLevel; l < level; l++) {
                const lastLi = currentList.lastElementChild;
                const newUl = document.createElement("ul");
                if (lastLi) {
                    lastLi.appendChild(newUl);
                    currentList = newUl;
                }
            }
        } else if (level < currentLevel) {
            for (let l = currentLevel; l > level; l--) {
                const parentUl = currentList.parentElement.closest("ul");
                if (parentUl) currentList = parentUl;
            }
        }
        currentLevel = level;
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${id}`;
        a.textContent = title;
        li.appendChild(a);
        currentList.appendChild(li);
        headingsArray.push({
            tab_index: index + 1,
            actual_tag: tag,
            text: title,
            id: id
        });
    });
    // Log the headings in a table format for easy inspection
    console.group("Headings Index (h1-h6)");
    console.table(headingsArray);
    console.groupEnd();
    // Expose the headings array globally for further inspection if needed
    window.__headingsIndex = headingsArray;
}); 
