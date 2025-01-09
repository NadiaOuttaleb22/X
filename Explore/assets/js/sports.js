document.addEventListener("DOMContentLoaded", () => {
    const sportsItems = document.querySelectorAll(".sports-item");
    sportsItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on: ${item.querySelector("h2").textContent}`);
        });
    });
});
