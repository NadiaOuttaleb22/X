function showExploreSections() {
    const exploreContent = `
        <div class="top-nav">
            <div class="nav-item active" onclick="loadSectionContent('content/sections/for-you.html', this)">For You</div>
            <div class="nav-item" onclick="loadSectionContent('content/sections/trending.html', this)">Trending</div>
            <div class="nav-item" onclick="loadSectionContent('content/sections/news.html', this)">News</div>
            <div class="nav-item" onclick="loadSectionContent('content/sections/sports.html', this)">Sports</div>
            <div class="nav-item" onclick="loadSectionContent('content/sections/entertainment.html', this)">Entertainment</div>
        </div>
        <div id="explore-section-content">
            <h2>Welcome to Explore</h2>
            <p>Click on a tab to view its content.</p>
        </div>
    `;
    document.getElementById("main-content").innerHTML = exploreContent;
}

function loadSectionContent(url, element) {
    // Ajouter la classe active au lien sélectionné
    const navItems = document.querySelectorAll(".top-nav .nav-item");
    navItems.forEach((item) => item.classList.remove("active"));
    element.classList.add("active");

    // Charger le contenu de la section via fetch
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("explore-section-content").innerHTML = data;
        })
        .catch((error) => console.error("Erreur lors du chargement du contenu :", error));
}
