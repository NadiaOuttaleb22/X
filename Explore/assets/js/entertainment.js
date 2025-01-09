document.addEventListener("DOMContentLoaded", () => {
    const entertainmentItems = document.querySelectorAll(".entertainment-item");
    entertainmentItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on: ${item.querySelector("h2").textContent}`);
        });
    });
});

