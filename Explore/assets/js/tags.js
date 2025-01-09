function loadTagContent(tagName) {
    const tagContent = {
        "Jordan Love": "Jordan Love is trending with 4,938 posts.",
        "Man United": "Man United is trending with 79.3K posts.",
    };

    const container = document.getElementById("main-content");
    container.innerHTML = `<p>${tagContent[tagName] || "No content available."}</p>`;
}
