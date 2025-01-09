document.addEventListener("DOMContentLoaded", () => {
    const newsItems = document.querySelectorAll(".news-item");
    newsItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on: ${item.querySelector("h2").textContent}`);
        });
    });
});
