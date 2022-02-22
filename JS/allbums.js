function loadAllbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => allbumsDisplay(data))
}
loadAllbums()

function allbumsDisplay(albums) {
    const displayContainer = document.getElementById('allbum')
    for (const allbum of albums) {
        const p = document.createElement('p')
        p.innerText = allbum.title
        displayContainer.appendChild(p);
    }

}