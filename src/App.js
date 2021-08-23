import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Portafolio  from "./components/Portafolio";
import Info from "./components/Info";
import Conocimineto from "./components/Conocimineto";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";*/

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Header/>
       <Portafolio/>
       <Info/>  
       <Conocimineto/>
       <Habilidades/>
       <Footer/>
    </div>
  );
}

export default App;
