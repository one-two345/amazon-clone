import React from "react";
import './App.css';
import Header from "./pages/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
//import  { useReducer, useContext } from "react";
//import axios from "axios";


function App() {
  
  return (
    <Router>
     
        <div className="App">
          <Header/>   
          <Switch >
            <Route path="/Checkout">
              <Checkout/>
            </Route>

            <Route path="/">
              <Home/>
            </Route>

          </Switch>
             
        </div> 

    </Router>
      
  );
}

export default App;
