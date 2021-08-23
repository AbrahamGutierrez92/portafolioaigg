/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Conocimineto.css";
import { 
  FaLaptopCode,
  FaShieldAlt,
  FaRegWindowRestore 
} from "react-icons/fa";

export default function Conocimiento(){
  return(
      <div id="conocimiento" className="container conocimiento">
         <div className="row titulo-conocimiento">
            <h1 className="text-center text-primary font-weight-bold">Conocimientos</h1>
         </div>

        <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <span><FaLaptopCode/></span>
          <h5 className="card-title">Desarrollo Web</h5>
          <p className="card-text">En la actualidad el desarrollo y creación de sitios web se impone en el mundo como herramienta tecnológica para fortalecerse en el mercado, crear negocios.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <span><FaShieldAlt/></span>
          <h5 class="card-title">Seguridad Informatica</h5>
          <p className="card-text">Seguridad informática es la forma en que tu organización trabaja para reducir el riesgo de un ataque cibernético, y su efecto potencial en tu empresa, protegiendo los dispositivos y servicios que utilizas.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <span><FaRegWindowRestore/></span>
          <h5 class="card-title">Informatica IT</h5>
          <p className="card-text">Gestión de servicios de tecnologías de la información se ocupa de todas aquellas tareas que tienen que ver con integrar los servicios de IT..</p>
        </div>
      </div>
    </div>
  </div>
      </div>
    
  )
}