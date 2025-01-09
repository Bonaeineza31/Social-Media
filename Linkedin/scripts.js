document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.querySelector('.post-btn');
    const postInput = document.querySelector('.post-input');
    const feed = document.querySelector('.feed');

    postButton.addEventListener('click', () => {
        const newPostText = postInput.value;
        if (newPostText.trim()) {
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `
                <h3>NSABIMANA Issa</h3>
                <p>${newPostText}</p>
            `;
            feed.appendChild(newPost);
            postInput.value = '';
        }
    });
});