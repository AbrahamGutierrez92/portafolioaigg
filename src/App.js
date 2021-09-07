import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Bloc from "./components/pages/Bloc";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

import Error from "./components/Error404";


function App() {
  return (
    <Router>
        <Navbar/>
         <Switch>
           <Route exact path='/'>
            <Home/>
           </Route>

           <Route path='/bloc'>
            <Bloc/>
           </Route>

           <Route path='/services'>
            <Services/>
           </Route>

           <Route path='/contacto'>
            <Contact/>
           </Route>

           <Route path='/web'>
            <Error/>
           </Route>

           <Route path='/webDesing'>
           <Error/>
           </Route>

           <Route path='/it'>
            <Error/>
           </Route>
           
         </Switch>
         <Footer/>
      </Router>
  );
}
export default App;
