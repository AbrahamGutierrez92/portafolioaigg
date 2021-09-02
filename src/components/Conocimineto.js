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
            <h1 className="text-center text-primary font-weight-bold">Knowledge</h1>
         </div>

        <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <span><FaLaptopCode/></span>
          <h5 className="card-title">Web development</h5>
          <p className="card-text">Currently the development and creation of websites is imposed in the world as a technological tool to strengthen in the market, create businesses.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <span><FaShieldAlt/></span>
          <h5 class="card-title">Computer Security</h5>
          <p className="card-text">Computer security is how your organization works to reduce the risk of a cyber attack, and its potential effect on your business, protecting the devices and services you use.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <span><FaRegWindowRestore/></span>
          <h5 class="card-title">Informatica-IT</h5>
          <p className="card-text">Information technology service management deals with all those tasks that have to do with integrating IT services.</p>
        </div>
      </div>
    </div>
  </div>
      </div>
    
  )
}