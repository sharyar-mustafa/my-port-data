import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar';
import Hedding from './componets/Hedding';
import Circle from './componets/progressbox/Circle';
import Down from './componets/Downlod/Down';
import Footer from './componets/Footer/Foot';
import React from "react";
import Projects from './pages/Projects';
import About from "./pages/Aboutus"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (
    <Router>
      <div >
     
        <Switch>

          <Route path="/project">
          <Navbar />
            <Projects />
          </Route>

          <Route path="/Aboutus">
            <About/>
          </Route>
          
          <Route path="/"> 
          <Navbar />
             <Hedding />
            <Projects/>
            <Circle />
          
            <Footer /> 
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
