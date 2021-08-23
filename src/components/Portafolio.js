/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Portafolio.css";
import PortafolioAleja from "./img/PortafolioAlejandraDuque.png";
import Tienda from "./img/Tienda1.png";
import CocaCola from "./img/LoadingCoca-Cola.png";
import Ecomerce from "./img/Eccomerce.png";
import Restarurante1 from "./img/Restaurante1.png";
import Covid from "./img/Covid.png";

export default function Portafolio(){
    return (
        <>
         <div className="portafolio py-4" id="row-portafolio">
           <div className="porta container text-center">
               <div className="row tituloportafolio">
                    <h1 className="text-primary font-weight-bold">Portafolio</h1>
                    <p>Proyectos</p>
                </div>

                <div className="row mt-4">

                   <div className=" col-md-3 proy">
                     <img className="card-img-top" src={Covid}/>
                     <h3>Covid- 19 | Rest API</h3>
                      <p>React, Material-UI, API</p>
                      <a href="https://abrahamgutierrez92.github.io/Covid-19-Rest-Apis/" className="btn" target="_blank">Vista Previa</a>
                    </div>  

                    <div className=" col-md-3 proy">
                     <img className="card-img-top" src={PortafolioAleja}/>
                     <h3>Portafolio AdDq</h3>
                      <p>HTML, CSS, JS</p>
                      <a href="https://abrahamgutierrez92.github.io/PortafolioAlendraDuque" className="btn" target="_blank">Vista Previa</a>
                    </div>

                    <div className=" col-md-3 proy">
                      <img className="card-img-top" src={Tienda}/>
                      <h3>Tienda</h3>
                      <p>Wordpress</p>
                      <a href="#" className="btn" target="_blank">En Mantenimiento</a>
                    </div>

                    <div className=" col-md-3 proy">
                     <img className="card-img-top" src={CocaCola}/>
                     <h3>LoadingPages</h3>
                      <p>HTML, CSS, JS</p>
                      <a href="https://abrahamgutierrez92.github.io/LoadingPages-CocaCola/" className="btn" target="_blank">Vista Previa</a>
                    </div>

                    

                </div>


                <div className="row mt-4">

                   <div className=" col-md-3 proy">
                      <img className="card-img-top" src={Ecomerce}/>
                      <h3>Ecommerce</h3>
                      <p>HTML, CSS, JS</p>
                      <a href="https://abrahamgutierrez92.github.io/eCommerce/" className="btn" target="_blank">Vista Previa</a>
                    </div>

                    <div className=" col-md-3 proy">
                     <img className="card-img-top" src={Restarurante1}/>
                     <h3>Restaurante</h3>
                      <p>HTML, CSS, JS</p>
                      <a href="https://abrahamgutierrez92.github.io/Restaurante1" className="btn" target="_blank">Vista Previa</a>
                    </div>

                    <div className=" col-md-3 proy">
                     
                    </div>

                    <div className=" col-md-3 proy">
                     
                    </div>
                </div>

           </div>
         </div>
        </>
    )
}