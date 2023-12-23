import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
      <h1>Fetching Jokes !</h1>
      <p>JOKES: {jokes.length}</p>

      <div className='flex w-full '>

      {
        jokes.map((joke)=>( 
          <div className='bg-blue-500 rounded-md text-left p-4 m-5 w-80' key={joke.id}>
            <p className='text-center font-medium bg-red-500 p-1 pl-2 rounded-full '>JOKE {joke.id}</p>
            <div className='bg-blue-700 rounded-sm font-mono mt-3 p-2 '>

            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
            </div>
          </div>
        ))
      }
      </div>
    </>
  )
}

export default App
