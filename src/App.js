
// import { useState } from 'react';
// import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';

// let name = "rajat ";

function App() {
  const [mode, setmode] = useState('light'); //whtr dark mode is enabled or not 
  const [alert, setalert] = useState(null);

  const showalert = (message , type) =>{
    setalert({
        msg: message,
        type: type,
      })

      setTimeout(() => {
          setalert(null);
      }, 2000);

  }
  const toggleMode=() => {
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor ='grey';
      showalert("Dark mode Enabled", "success ");
      document.title = 'TextUtils | DARK'
      // setInterval(() => {
      //   document.title = 'TextUtils | AMAZING'
      // },2000);
      // setInterval(() => {
      //   document.title = 'TextUtils NWOWWWw | AMAZING'
      // }, 1000);
    }
    else
    {
      
      setmode('light');
      document.body.style.backgroundColor ='white';
      showalert("Light Mode Enabled", "success ");
      document.title = 'TextUtils | LIGHT'
      
    }

  }
  return (
    <>
  <Navbar title="TextUtils "
  mode ={mode} 
  toggleMode={toggleMode}/>

  <Alert alert={alert}/>

  <div className="container"   mode ={mode}>
  <TextForm showalert={showalert}/>
   {/* <About/> */}
    
  </div>
    </>
  );
}

export default App;
 