import React, {useState} from "react";
import './App.css';
import Alert from "./components/Alert";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled","success");
      // document.title = 'TextUtils Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now'
      // }, 1500);
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");
      // document.title = 'TextUtils Light Mode'
    }
  }
  return (
    <>
    <Router>
     <Navbar title = "TextUtils" mode={mode} toggleMode ={toggleMode}/>
     <Alert alert = {alert}/>
     <div className="container my-3">
     
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert = {showAlert} heading = "Try TextUtils - Word Counter and Manipulator" mode={mode}/>
            </Route>
          </Switch>
      </div>
    </Router>
    </>
  ); 
}

export default App;

// working:
// it is a text analyser 
// converts upper case to lowercase and lowercase to upper case
// gives text summary