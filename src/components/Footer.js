/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";
import { 
    FaUserAlt,
    FaVoicemail,
    FaLinkedin,
    FaGithub,
    FaInstagram
 } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
              <div className="row">
                  
                  <div className="col">
                      <h3 className="titulosociales text-primary">Social Media</h3>
                    <div className="iconosFooter">
                        <a href="https://www.linkedin.com/in/abraham-gutierrez-168586a5/" target="_blank"><FaLinkedin/></a>

                        <a href="https://github.com/AbrahamGutierrez92" target="_blank"><FaGithub/></a>

                        <a href="https://www.instagram.com/devabraham2020/" target="_blank"><FaInstagram/></a>
                        
                        
                    </div>
                    <p className="descripCont">Contácteme: </p>
                    <p className="descripcion">gutierrezabraham2018@outlook.com</p>
                  </div>

                 {/*<div className="col-md-6">
                      <form className="row row-cols-lg-auto g-3 align-items-center">

                        <div className="col-12">
                          <div className="input-group">
                            <div className="input-group-text"><FaUserAlt/></div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Nombre" />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="input-group">
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Asunto" />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="input-group">
                            <div className="input-group-text"><FaVoicemail/></div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Correo" />
                          </div>
                        </div>

                        <div className="col-12">
                           <div className="input-group">
                              <textarea className="form-control" aria-label="With textarea" placeholder="Mensaje"></textarea>
                           </div>
                        </div>

                        <div className="col-12 boton">
                          <button type="submit" className="btn btn-primary ">Enviar</button>
                        </div>

                      </form>
                  </div> */} 

              </div>
            </div>
        </div>
    )
}