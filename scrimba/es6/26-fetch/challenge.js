// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((response) => response.json())
//     .then((data) => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments',{
    method: 'POST',
    body: JSON.stringify({
        name: 'comment 105',
        email: 'dylansemail310@gmail.com',
        body: 'Dopes coments in teh game',
        postID: 1
    })
})
.then((response) => response.json())
.then((data) => console.log(data))