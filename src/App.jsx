import About from './About';
import Navbar from './Navbar';
import Baka from './TextBaka';
import Alert from './Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = "white";
    } else {
      setmode('dark');
      document.body.style.backgroundColor = "#212530";
    }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} togglemode={togglemode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-2 mt-5">
        <Routes>
        <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<Baka mode={mode} showalert={showalert} />} />
          {/* <Route exact path="/">
            <Baka mode={mode} showalert={showalert}></Baka>
          </Route> */}
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
