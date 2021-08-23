/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Info.css";
import Infoimg from "./img/fo.png";

export default function Info(){
 return(
     <div className="row text-white" id="info">
         <div className="container">
             <div className="row text-center titulo-Info">
               <h1 className="text-primary font-weight-bold">Acerca de Mi</h1>
             </div>
             <div className="row justify-content-center align-item-center">
                 <div className="col-md-6">
                    <img className="card-img-top" src={Infoimg} />
                 </div>

                 <div className="col-md-6 align-item-center">
                    <p>Soy Abraham Gutierrez Ing en Sistema, con conocimientos en desarrollo web y habilidades en Informatica IT, La implementacion e innovacion tecnologicas ha transformado el comercio actual, es por esto que la inversion en nuevas tecnologia te habrira mayor oportunidad en el mercado en esta era Digital. </p>

                    <h3><strong>Email:</strong></h3>
                    <p>gutierrezabraham2018@outlook.com</p>
                     <br/>
                    <h3><strong>GitHub:</strong></h3>
                    <p>AbrahamGutierrez92</p>
                     <br/>
                    <h3><strong>Pais:</strong></h3>
                    <p>Managua - Nicaragua</p>
                    <br/>
                    <hr className="lineaInfo"/>
                 </div>
             </div>
         </div>
     </div>
 )
}