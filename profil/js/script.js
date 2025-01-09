// Synchronize scrolling between profile-center and sidebar-right
const profileCenter = document.getElementById('profile-center');
const sidebarRight = document.getElementById('sidebar-right');

profileCenter.addEventListener('scroll', () => {
    sidebarRight.scrollTop = profileCenter.scrollTop;
});

sidebarRight.addEventListener('scroll', () => {
    profileCenter.scrollTop = sidebarRight.scrollTop;
});


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".profile-tabs button");
    const contents = document.querySelectorAll(".profile-content");

    // Fonction pour activer un onglet et afficher son contenu correspondant
    function activateTab(index) {
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add("active");
                contents[i].style.display = "block";
            } else {
                tab.classList.remove("active");
                contents[i].style.display = "none";
            }
        });
    }

    // Ajouter un gestionnaire de clic pour chaque onglet
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            activateTab(index);
        });
    });

    // Activer le premier onglet par défaut
    activateTab(0);
});
