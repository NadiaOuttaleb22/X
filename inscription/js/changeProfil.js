function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.querySelector('.profile-pic img');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
