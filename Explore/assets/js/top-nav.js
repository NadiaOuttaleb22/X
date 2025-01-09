function loadSectionContent(section, element) {
    // Charger le contenu dynamiquement (optionnel)
    document.getElementById('main-content').innerHTML = `Welcome to the "${section.split('.')[0]}" section.`;

    // Gérer les classes actives
    const navItems = document.querySelectorAll('.top-nav .nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}
