function verifyPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.querySelector('.error-message');

    if (password.length < 8) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Votre mot de passe doit contenir au moins 8 caractères. Veuillez en saisir un plus long.';
    } else if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Les mots de passe ne correspondent pas. Veuillez réessayer.';
    } else {
        errorMessage.style.display = 'none';
        // Rediriger vers la page suivante ou effectuer une autre action
        const specialAlert = document.createElement('div');
        specialAlert.textContent = 'Mot de passe vérifié avec succès!';
        specialAlert.style.position = 'fixed';
        specialAlert.style.top = '50%';
        specialAlert.style.left = '50%';
        specialAlert.style.transform = 'translate(-50%, -50%)';
        specialAlert.style.padding = '20px';
        specialAlert.style.backgroundColor = '#4CAF50';
        specialAlert.style.color = 'white';
        specialAlert.style.fontSize = '18px';
        specialAlert.style.borderRadius = '10px';
        specialAlert.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        specialAlert.style.zIndex = '1000';
        document.body.appendChild(specialAlert);

        setTimeout(() => {
            specialAlert.style.display = 'none';
        }, 10000);
        window.location.href = 'changeProfil.html'; // Redirige vers la page d'accueil
    }
}

function showAlert() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('alertBox').style.display = 'block';
}

function hideAlert() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('alertBox').style.display = 'none';
}

function resendEmail() {
    alert('Email de vérification renvoyé!');
    hideAlert();
}

function usePhone() {
    alert('Utilisation du téléphone pour la vérification!');
    hideAlert();
}


