/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import "./Header.css";
import { 
FaLinkedin,
FaGithub,
FaInstagram
} from "react-icons/fa";

export default function Header(){
    return(
        <>
         <header>
             
             <div className="container">
                <div className="row">
                <div className="col-2">
                    <div className="title font-weight-bold">
                        <div className="iconos">
                        <a href="https://www.linkedin.com/in/abraham-gutierrez-168586a5/" target="_blank"><FaLinkedin/></a>

                        <a href="https://github.com/AbrahamGutierrez92" target="_blank"><FaGithub/></a>

                        <a href="https://www.instagram.com/devabraham2020/" target="_blank"><FaInstagram/></a>
                        
                        </div>
                       <h2 className="nombre">Abraham Gutierrez</h2>
                       <h3 className="profesion">Systems Engineer</h3>
                       <p className="descrip">Web Developer</p>
                    </div>
                 </div>

                </div>
                 
             </div>
         </header>
        </>
    )
}