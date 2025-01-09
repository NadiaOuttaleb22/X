const forYouContent = [
    { title: "#stockmarketcrash", info: "7,311 posts" },
    { title: "#Italie", info: "Trending in Morocco" },
    { title: "#HudutsuzSevda", info: "6,633 posts" },
    { title: "La France", info: "152K posts" },
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".trending-list");

    forYouContent.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.className = "trending-item";

        listItem.innerHTML = `
            <div>
                <span class="trending-title">${item.title}</span>
                <span class="trending-info">${item.info}</span>
            </div>
            <span class="ellipsis">...</span>
        `;

        container.appendChild(listItem);
    });
});
