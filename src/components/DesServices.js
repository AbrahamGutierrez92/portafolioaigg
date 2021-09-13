import React from "react";
import { Link } from "react-router-dom";
import "./DesServices.css";
import Servicio1 from "./img/servicio1.jpg";
import Servicio2 from "./img/servicio2.jpg";
import Servicio3 from "./img/servicio3.jpg";

function DesServices(){
    return(
        <div className="desService">
            <div className="descripcionServivio">
             <p>my skills and services that I offer you are technical support, development and web design adacted to your business, contact me </p>
            </div>

            <div className="desBox">
              <div className="boxImg">
                 <div>
                   <img src={Servicio1}/>
                 </div>
                 <h2>Web Developer</h2>
                 <p>Currently the development and creation of websites is imposed in the world as a technological tool to strengthen in the market, create businesses.</p>
                 <Link to="/web" className="btnDesSER">Click</Link>
              </div>

              <div className="boxImg">
                 <div>
                   <img src={Servicio2}/>
                 </div>
                 <h2>Web Desing</h2>
                 <p>modern design adapted to your business need</p>
                 <Link to="/webDesing" className="btnDesSER">Click</Link>
              </div>

              <div className="boxImg">
                 <div>
                   <img src={Servicio3}/>
                 </div>
                 <h2>Informatica IT</h2>
                 <p>Information technology service management deals with all those tasks that have to do with integrating IT services.</p>
                 <Link to="/it" className="btnDesSER">Click</Link>
              </div>
            </div>
        </div>
    )
}

export default DesServices;