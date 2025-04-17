import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar =()=>{
    const nav=useNavigate()
    const FormPage=()=>{
        
        nav('/post');
    }
    return (
        <div className="w-screen h-20 bg-amber-300 text-center  border-2 flex justify-between">
            <h1 className='m-4 text-4xl'>The Blogest Blogger!</h1>
            <button className='bg-red-500 m-4 rounded-2xl border-2 text-lg p-2' onClick={FormPage}>Submit form</button>
            </div>
    )
}


export default Navbar;