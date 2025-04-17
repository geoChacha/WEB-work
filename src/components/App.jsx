import React from 'react';
import Card from './Databox/Card';
import CardTwo from './Databox/CardTwo';
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import Combined from './Aboutme/Combined';
import { useState } from 'react';
import Skills from './Databox/Skills';

const App = () => {

  const [isDark, setIsDark] = useState(false);

  function setIsDarkMode() {
    setIsDark(!isDark);
  }
  return(
    <div style={{backgroundColor:isDark?"black":"white"}} >
      < button className='relative left-225 border-t-neutral-500 rounded-4xl bg-blue-200 hover:bg-blue-500 p-4 m-4 text-lg' onClick={setIsDarkMode}>Dark Mode</button>
      < Navbar /> 
      <Combined/>
      <Skills/>
      <Card />
      <CardTwo />
      <Footer/>
      
      
    </div>
  )

}

export default App