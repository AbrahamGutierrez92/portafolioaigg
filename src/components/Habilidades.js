import React from "react";
import "./Habilidades.css";
import { 
    FaHtml5,
    FaCss3,
    FaReact,
    FaWordpress,
    FaGithubSquare,
    FaAdobe,
    FaPython
 } from 'react-icons/fa';

export default function Habilidades(){
    return(
        <div id="habilidades" className="habilidades">
            <div className="container">
                <div className="row">
                   <h1 className="titulohabilidad text-center text-primary">Skills</h1>
                </div>
            <div className=" iconoCono row text-center d-flex justify-content-center">
                <div className="col">
                   <span className="iconoCono"><FaHtml5/></span>
                   <h3 className="tituloporcentaje">HTML</h3>
                   
                </div>

                <div className="col">
                   <span className="iconoCono"><FaCss3/></span>
                   <h3 className="tituloporcentaje">CSS</h3>
                   
                </div>

                <div className="col">
                  <span className="iconoCono font-weight-bold">JS</span>
                  <h3 className="tituloporcentaje">JavaScript</h3>
                 
                </div>

                <div className="col">
                  <span className="iconoCono"><FaReact/></span>
                  <h3 className="tituloporcentaje">React.js</h3>
                  
                </div>
            </div>
             <br/>
            <div className=" iconoCono row text-center d-flex justify-content-center">
                <div className="col">
                   <span className="iconoCono"><FaWordpress/></span>
                   <h3 className="tituloporcentaje">WordPress</h3>
                  
                </div>

                <div className="col">
                   <span className="iconoCono"><FaGithubSquare/></span>
                   <h3 className="tituloporcentaje">GitHub</h3>
                   
                </div>

                <div className="col">
                  <span className="iconoCono"><FaAdobe/></span>
                  <h3 className="tituloporcentaje">AdobeXD</h3>
                  
                </div>

                <div className="col">
                  <span className="iconoCono"><FaPython/></span>
                  <h3 className="tituloporcentaje">Python</h3>
                  <p className="porcentaje"></p>
                </div>

            </div>
            </div>
             
        </div>
    )
}