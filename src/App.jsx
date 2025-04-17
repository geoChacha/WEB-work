import './App.css'
import React from 'react'
import Navbar from './components/blog/Navbar'
import PostCard from './components/blog/PostCard'
import Form from './components/form/Form'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
const App = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(posts.data);
      return null;
    };

    
    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap justify-center'>

      <Navbar />
      <Routes>
        <Route path='/' element={

          data.map((element,index)=>{
            return <PostCard  key={index} title={element.title} para={element.body}/>
          })
        } />
        <Route path='/post' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
