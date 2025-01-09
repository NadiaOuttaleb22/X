const trendingContent = [
    { title: "#WorldCup", info: "1M posts" },
    { title: "#Oscars2024", info: "500K posts" },
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".trending-list");

    trendingContent.forEach((item) => {
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
