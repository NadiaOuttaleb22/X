document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filePath = event.target.getAttribute("onclick").match(/'(.*?)'/)[1];
            loadContent(filePath);
        });
    });
});
