document.getElementById('tweet-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const tweetContent = event.target.querySelector('textarea').value;
    const tweetElement = document.createElement('div');
    tweetElement.textContent = tweetContent;
    document.getElementById('tweets').appendChild(tweetElement);
    event.target.reset();
});
