import React from "react";
import "./SerDesing.css";
import Servicio2 from "./img/servicio2.jpg";

const SerDesing = () => {
    return(
        <div className="serweb">
           <div className="cajaWeb">
             <div className="boxWeb">
               <img src={Servicio2}/>
             </div>

             <div className="boxWeb">
                <div className="DescripWeb">
                  <h2>Web design</h2>
                  <p>Mockup comes from the term mockup. It is a model, usually to scale, of a certain design. Although many identify them with the term prototype</p>
                </div>

                <div className="DescripWeb">
                  <ul>
                      <li>Website</li>
                      <li>Mobile</li>          
                  </ul>
                </div>
                
             </div>
           </div>
        </div>
    )
}

export default SerDesing;