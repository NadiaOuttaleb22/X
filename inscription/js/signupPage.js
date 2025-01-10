function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var month = document.getElementById('month');
    var day = document.getElementById('day');
    var year = document.getElementById('year');
    var isValid = true;

    if (!name.value) {
        name.style.border = '2px solid red';
        isValid = false;
    } else {
        name.style.border = '';
    }

    if (!email.value) {
        email.style.border = '2px solid red';
        isValid = false;
    } else if (!validateEmail(email.value)) {
        email.style.border = '2px solid red';
        alert('Le champ doit contenir un email valide.');
        isValid = false;
    } else {
        email.style.border = '';
    }

    if (!month.value) {
        month.style.border = '2px solid red';
        isValid = false;
    } else {
        month.style.border = '';
    }

    if (!day.value) {
        day.style.border = '2px solid red';
        isValid = false;
    } else {
        day.style.border = '';
    }

    if (!year.value) {
        year.style.border = '2px solid red';
        isValid = false;
    } else {
        year.style.border = '';
    }

    if (isValid) {
        var email = document.getElementById("email").value;
        window.location.href = 'verifycode.html?email=' + encodeURIComponent(email);
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}