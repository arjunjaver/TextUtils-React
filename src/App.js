import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import React from 'react';
// import { BrowserRouter as Router, 
//          Routes, 
//          Route} from 'react-router-dom';




function App() {

  const [mode,setMode] = useState("light");
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

  const toggleMode = ()=>{
      if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor = "#363535";
        showAlert("Dark mode has been enabled","success");
      }else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled","success");
      }
  }



  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}></Alert>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        <Route exact path="/about" element={<About showAlert={showAlert} mode={mode}/>} /> */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
