// Affiche l'alerte
function showAlert() {
    document.getElementById('alertBox').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Cache l'alerte
function hideAlert() {
    document.getElementById('alertBox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Vérifie le code de vérification
function verifyCode() {
    const code = document.getElementById('verification-code').value;
    if (code === '') {
        alert('Veuillez entrer le code de vérification.');
        return;
    }

    // Simule un processus de vérification
    if (code === '123456') {
        alert('Code vérifié avec succès!');
        window.location.href = 'passwordPage.html';
    } else {
        alert('Code de vérification incorrect. Veuillez réessayer.');
    }
}
