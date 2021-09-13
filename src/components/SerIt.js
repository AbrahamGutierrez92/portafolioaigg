import React from "react";
import "./SerIt.css";
import Servicio3 from "./img/servicio3.jpg";


const SerIt = () => {
    return(
        <div className="serweb">
           <div className="cajaWeb">
             <div className="boxWeb">
               <img src={Servicio3}/>
             </div>

             <div className="boxWeb">
                <div className="DescripWeb">
                  <h2>PC TECHNICAL SUPPORT.
                  PC REPAIR AND MAINTENANCE</h2>
                  <p>pc technical support and computer support, giving a comprehensive solution to your software, hardware, network or virus problems.</p>
                </div>

                <div className="DescripWeb">
                  <ul>
                      <li>Software y Hardware</li>
                      <li>Virus, Backups</li>
                      <li>Maintenance</li>
                      <li>Opreativo system windows</li>
                      <li>Opreativo system Linux</li>
                  </ul>
                </div>
                
             </div>
           </div>
        </div>
    )
}

export default SerIt;