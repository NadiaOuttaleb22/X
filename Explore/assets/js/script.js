// Fonction pour charger dynamiquement le contenu d'une section
function loadContent(filePath) {
    const mainContent = document.getElementById("main-content");

    fetch(filePath)
        .then((response) => response.text())
        .then((html) => {
            mainContent.innerHTML = html;
        })
        .catch((error) => {
            mainContent.innerHTML = "<p>Error loading content.</p>";
            console.error("Error:", error);
        });
}
