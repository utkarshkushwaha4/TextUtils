
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3500)
  }

  const toggleMode =()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enable","success")
      document.title = "Textutils - Dark Mode";
      setInterval(()=> {
        document.title = "Textutil is good";
      },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title = "Textutils - Light Mode";
    }
  }

  return (
    <>
    <Router>
    <Navbar title = "Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
      <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
      <Route exact path='/About' element={<About/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;