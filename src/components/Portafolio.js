import React from "react";
import "./Portafolio.css";
import Covid from "./img/Covid.png"
import PortaAle from "./img/PortafolioAlejandraDuque.png";
import StoreOnline from "./img/StoreOnline.png";
import Generacionempreden from "./img/GeProyect.png";
import Mntn from "./img/mntn.png";
import djangoimg from "./img/django.png";
import BonikStore from "./img/ui-bonik.png";

function Portafolio(){
    return(
        <div id="portafolio" className="portafolio">
           <h2>Portafolio</h2>
           <h3>Project</h3>
           <div className="cajaportafolio">

           <div className="boxPorta">
               <div className="cajaImg">
                    <img src={BonikStore} />
                  </div>
                  <h4>Bonik Store</h4>
                  <p>UI E-commerce "In Development"</p>
                  <div className="componentes">
                    <div>
                        React
                    </div>
                    <div>
                        CSS
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/Bonik-Store/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>
             
               <div className="boxPorta">
               <div className="cajaImg">
                    <img src={djangoimg} />
                  </div>
                  <h4>Demo Restaurant</h4>
                  <p>Online very soon</p>
                  <div className="componentes">
                    <div>
                        Django
                    </div>
                    <div>
                        Bootstrap
                    </div>

                    <div>
                        JS
                    </div>
                    {/*<a href="#" target="_blank">
                    Preview
                    </a>*/}
                  </div>
               </div>

               <div className="boxPorta">
               <div className="cajaImg">
                    <img src={PortaAle} />
                  </div>
                  <h4>Demo Portafolio</h4>
                  <p>UI website</p>
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
                  <p>COVID 19 measurement (App)</p>
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
                    <img src={StoreOnline} />
                  </div>
                  <h4>Demo Ecommerce</h4>
                  <p>UI website</p>
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
           </div>
           
        </div>
    )
}

export default Portafolio;
