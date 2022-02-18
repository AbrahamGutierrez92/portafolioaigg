import React from "react";
import "./Portafolio.css";
import Covid from "./img/Covid.png"
import PortaAle from "./img/PortafolioAlejandraDuque.png";
import TiendaWord from "./img/Tienda1.png";
import StoreOnline from "./img/StoreOnline.png";
import Generacionempreden from "./img/GeProyect.png";
import Mntn from "./img/mntn.png";

function Portafolio(){
    return(
        <div id="portafolio" className="portafolio">
           <h2>Portafolio</h2>
           <h3>Project</h3>
           <div className="cajaportafolio">
             
           <div className="boxPorta">
               <div className="cajaImg">
                    <img src={Generacionempreden} />
                  </div>
                  <h4>Generacion Emprende</h4>
                  <p>Class Online (Moodle)</p>
                  <div className="componentes">
                    <div>
                        WordPress
                    </div>
                    <div>
                        PHP
                    </div>
                    <a href="https://generacionemprende.net/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               <div className="boxPorta">
                  <div className="cajaImg">
                    <img src={StoreOnline} />
                  </div>
                  <h4>Store</h4>
                  <p>DEMO E-commerce</p>
                  <div className="componentes">
                    <div>
                        React.js
                    </div>
                    <div>
                        CSS
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/StoreOnline/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               <div className="boxPorta">
               <div className="cajaImg">
                    <img src={PortaAle} />
                  </div>
                  <h4>Portafolio</h4>
                  <p>Personal website</p>
                  <div className="componentes">
                    <div>
                        HTML
                    </div>
                    <div>
                        CSS
                    </div>
                    <div>
                        JS
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/PortafolioAlendraDuque/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               <div className="boxPorta">
               <div className="cajaImg">
                    <img src={Mntn} />
                  </div>
                  <h4>Mountains abd beyond</h4>
                  <p>Adventures</p>
                  <div className="componentes">
                    <div>
                        HTML
                    </div>
                    <div>
                        CSS
                    </div>
                    <div>
                        JS
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/webMNTN/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               <div className="boxPorta">
                  <div className="cajaImg">
                    <img src={Covid} />
                  </div>
                  <h4>Covid tracking website</h4>
                  <p>APPs COVID 19 measurement website</p>
                  <div className="componentes">
                    <div>
                        React.js
                    </div>
                    <div>
                        APIs
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/Covid-19-Rest-Apis/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

              

           </div>
           
        </div>
    )
}

export default Portafolio;
