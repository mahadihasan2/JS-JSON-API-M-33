 function loadData() {
     fetch('https://jsonplaceholder.typicode.com/todos/1')
         .then(response => response.json())
         .then(json => console.log(json))
 }

 function loadUser() {
     fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => displyUser(data))
 }

 function loadPost() {
     fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(data => console.log(data))
 }

 function loadAlbums() {
     fetch('https://jsonplaceholder.typicode.com/albums')
         .then(res => res.json())
         .then(data => console.log(data))
 }

 function displyUser(data) {
     const ul = document.getElementById('users')
     for (const user of data) {
         const li = document.createElement('li')
         li.innerText = `Name:${user.name},E-main:${user.email}`
         ul.appendChild(li)


     }
 }