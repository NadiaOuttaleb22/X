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

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.style.color = 'white';
    searchResultsContainer.style.marginTop = '10px';
    searchInput.parentNode.appendChild(searchResultsContainer);

    // Handle typing in the search bar
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim();

        if (query) {
            searchResultsContainer.textContent = `Searching for "${query}"...`;
        } else {
            searchResultsContainer.textContent = '';
        }
    });

    // Handle Enter key press in the search bar
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim();

            if (!query) {
                searchResultsContainer.textContent = 'There is nothing.';
            } else {
                searchResultsContainer.textContent = `No results found for "${query}".`;
            }
            event.preventDefault(); // Prevent default form submission behavior
        }
    });
});


function handleIconClick(icon) {
    // Remove 'clicked' class from all icons
    document.querySelectorAll('.sidebar .icon').forEach(el => {
        el.classList.remove('clicked');
    });

    // Add 'clicked' class to the clicked icon
    icon.classList.add('clicked');
}

// Add click event listener to each icon
document.querySelectorAll('.sidebar .icon').forEach(icon => {
    icon.addEventListener('click', () => handleIconClick(icon));
});



document.querySelector('.post-button').addEventListener('click', function() {
    let textarea = document.querySelector('.post-textarea');
    let content = textarea.value.trim();

    if (content !== '') {
        // Create a new post element
        let newPost = document.createElement('div');
        newPost.classList.add('post');

        let profileImage = document.querySelector('.profile-image').outerHTML;
        let postAuthor = '<p class="post-author"></p>';

        let newPostContent = `
            ${profileImage}
            ${postAuthor}
            <p>${content}</p>
            <div class="post-bar">
                <div class="bar-item">
                    <img src="/Home/public/heart.png" alt="Heart" />
                    <span class="bar-number">0</span>
                </div>
                <div class="bar-item">
                    <img src="/Home/public/commet-removebg-preview.png" alt="Comment" />
                    <span class="bar-number">0</span>
                </div>
                <!-- Other bar items... -->
            </div>
        `;

        newPost.innerHTML = newPostContent;

        // Append the new post to the content section
        document.querySelector('.scrollable-content').prepend(newPost);

        // Clear the textarea after posting
        textarea.value = '';
    }
});



function handleIconClick(icon) {
    // Remove 'clicked' class from all icons
    document.querySelectorAll('.sidebar .icon').forEach(el => {
        el.classList.remove('clicked');
    });

    // Add 'clicked' class to the clicked icon
    icon.classList.add('clicked');

    // Handle showing comments if the comment icon is clicked
    if (icon.querySelector('img').alt === 'Comment') {
        showComments(icon);
    }
}

