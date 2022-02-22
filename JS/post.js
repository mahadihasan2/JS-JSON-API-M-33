function loadpost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displaypost(data))
}
loadpost()

function displaypost(post) {
    const postContainer = document.getElementById('posts')
    for (const posts of post) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `<h3>New Post</h3>
      <p>This is a Dynamic Web${posts.body}</p>
      `;
        postContainer.appendChild(div)


    }

}