import React from "react";
import "./SerWeb.css";
import Servicio1 from "./img/servicio1.jpg";


const SerWeb = () => {
    return(
        <div className="serweb">
           <div className="cajaWeb">
             <div className="boxWeb">
               <img src={Servicio1}/>
             </div>

             <div className="boxWeb">
                <div className="DescripWeb">
                  <h2>WEB DEVELOPMENT</h2>
                  <p>Development of projects with the best technologies available in the market, websites for your business:</p>
                </div>

                <div className="DescripWeb">
                  <ul>
                      <li>Restaurants</li>
                      <li>Portfolio</li>
                      <li>E-commerce</li>
                      <li>Shops</li>
                      <li>More...</li>
                  </ul>
                </div>
                
             </div>
           </div>
        </div>
    )
}

export default SerWeb;