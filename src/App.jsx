import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Posts from './Posts'

function App() {

  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')

  useEffect(
    () => {
      axios(`https://jsonplaceholder.typicode.com/posts?title_like=${input}`)
        .then(({ data }) => setPosts(data))
        .catch((err) => console.log(err))
    }, [input]
  )
  const onChangeInput = (e) =>{
    setInput(e.target.value)
  }
  return (
    <div>
    <input onChange={onChangeInput}/>
    {
      posts.length !== 0
      ? <Posts posts={posts}/>
      : <p>posts are not found</p>
    }
      
    </div>
  )
}

export default App
