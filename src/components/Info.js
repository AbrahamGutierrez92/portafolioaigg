/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Info.css";
import Infoimg from "./img/fo.png";

export default function Info(){
 return(
     <div className="row text-white" id="info">
         <div className="container">
             <div className="row text-center titulo-Info">
               <h1 className="text-primary font-weight-bold">About me</h1>
             </div>
             <div className="row justify-content-center align-item-center">
                 <div className="col-md-6">
                    <img className="card-img-top" src={Infoimg} />
                 </div>

                 <div className="col-md-6 align-item-center">
                    <p>I am Abraham Gutierrez Ing in System, with knowledge in web development and skills in Informatics IT, The implementation and technological innovation has transformed the current trade, that is why the investment in new technology will open you greater opportunity in the market in this Digital era. </p>

                    <h3><strong>Email:</strong></h3>
                    <p>gutierrezabraham2018@outlook.com</p>
                     <br/>
                    <h3><strong>GitHub:</strong></h3>
                    <p>AbrahamGutierrez92</p>
                     <br/>
                    <h3><strong>Country:</strong></h3>
                    <p>Managua - Nicaragua</p>
                    <br/>
                    <hr className="lineaInfo"/>
                 </div>
             </div>
         </div>
     </div>
 )
}