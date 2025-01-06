function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.scrollable-content').forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById(tabName + 'Content').style.display = 'block';
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

// Set default tab to 'For You'
document.addEventListener('DOMContentLoaded', function() {
    switchTab('forYou');
});


