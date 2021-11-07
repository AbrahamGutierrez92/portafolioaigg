import React from "react";
import "./Portafolio.css";
import Covid from "./img/Covid.png"
import PortaAle from "./img/PortafolioAlejandraDuque.png";
import TiendaWord from "./img/Tienda1.png";
import TiendaRopa from "./img/Eccomerce.png";
import StoreOnline from "./img/StoreOnline.png";

function Portafolio(){
    return(
        <div id="portafolio" className="portafolio">
           <h2>Portafolio</h2>
           <h3>Project</h3>
           <div className="cajaportafolio">

           <div className="boxPorta">
               <div className="cajaImg">
                    <img src={TiendaWord} />
                  </div>
                  <h4>Accessories store</h4>
                  <p>E-commerce</p>
                  <div className="componentes">
                    <div>
                        WordPress
                    </div>
                    <div>
                        PHP
                    </div>
                    <a href="https://gutierrezabraham.com/" target="_blank">
                    Updating
                    </a>
                  </div>
               </div>

               <div className="boxPorta">
                  <div className="cajaImg">
                    <img src={StoreOnline} />
                  </div>
                  <h4>Store</h4>
                  <p>E-commerce</p>
                  <div className="componentes">
                    <div>
                        React.js
                    </div>
                    <div>
                        CSS
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/StoreOnline/" target="_blank">
                    Updating
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
                    <img src={Covid} />
                  </div>
                  <h4>Covid tracking website</h4>
                  <p>COVID 19 measurement website</p>
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

               <div className="boxPorta">
               <div className="cajaImg">
                    <img src={TiendaRopa} />
                  </div>
                  <h4>Clothing store</h4>
                  <p>E-commerce</p>
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
                    <a href="https://abrahamgutierrez92.github.io/eCommerce/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

           </div>
           
        </div>
    )
}

export default Portafolio;
