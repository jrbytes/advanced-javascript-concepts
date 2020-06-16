// async function fetchUsers() {
//   const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await resp.json()
//   console.log(data)
// }

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(url => 
      fetch(url).then(resp => resp.json())  
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (error) {
    console.log(error)
  }
}