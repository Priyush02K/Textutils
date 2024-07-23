import './App.css';
 import About from './Components/About';
import Navbar from './Components/Navbar'
import TextFrom from './Components/TextFrom';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);



    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled", "success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

     
    }
  }

  return (
   <>

    
  
<Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/" element={<TextFrom heading="Enter the text to analyze below :-" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>

        </Router>
        <Footer/>

</>
  );
}

export default App;
