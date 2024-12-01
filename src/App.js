import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState,useEffect } from 'react';
import Alert from './Components/Alert';
import React from 'react';
import { BrowserRouter as Router, 
         Routes, 
         Route} from 'react-router-dom';




function App() {
  // New Version
  // Retrieve mode from localStorage or default to "light"
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  // Old Version
  // const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(()=>{
         setAlert(null);
      },1500);
  }

  // New Version
  useEffect(() => {
    // Apply the mode to the body when the component mounts
    document.body.classList.add(mode === 'dark' ? 'dark-mode' : 'light-mode');
    document.body.style.backgroundColor = mode === 'dark' ? '#363535' : 'white';
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(newMode === 'dark' ? 'dark-mode' : 'light-mode');
    document.body.style.backgroundColor = newMode === 'dark' ? '#363535' : 'white';
    localStorage.setItem('mode', newMode); // Save the mode to localStorage
    showAlert(
      `${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`,
      'success'
    );
  };



  // Old Version
  // const toggleMode = ()=>{
  //     if(mode==="light"){
  //       setMode("dark");
  //       document.body.style.backgroundColor = "#363535";
  //       document.body.classList.add('dark-mode');
  //       showAlert("Dark mode has been enabled","success");
  //     }else{
  //       setMode("light");
  //       document.body.style.backgroundColor = "white";
  //       document.body.classList.remove('dark-mode');
  //       showAlert("Light mode has been enabled","success");
  //     }
  // }



  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}></Alert>
    <div className='container my-3'>
    
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        <Route exact path="/about" element={<About showAlert={showAlert} mode={mode}/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
