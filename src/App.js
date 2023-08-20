import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light Mode Enabled", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title='TextUtility' aboutThing="About You" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter Text To Ananlyze Below" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}


export default App;
