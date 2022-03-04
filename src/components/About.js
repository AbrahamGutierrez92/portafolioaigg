import React from "react";
import "./About.css";
import { 
    FaLinkedin, 
    FaGithub,
    FaLocationArrow,
    FaVoicemail
} from 'react-icons/fa';

export default function About(){
    return(
     
          <div id="about" className="about">
          <div className="aboutContainer">
            <h1 className="tituloAbout">About me</h1>

            <div className="boxdescripcion">
              <p>I am Abraham Gutierrez, systems engineer, with knowledge in web development and skills in Informatics IT, The implementation and technological innovation has transformed the current trade, that is why the investment in new technology will open you greater opportunity in the market in this Digital era.</p>
            </div>
            
           
           <div className="descripcionContacto">          
             <div className="socialContacto">
               <div>
                 <a href="https://www.linkedin.com/in/abraham-gutierrez-168586a5/" target="_blank"> <FaLinkedin/> Linkedin</a>
               </div>

               <div>
                   gutierrezabraham2018@outlook.com
               </div>

               <div>
                   <FaLocationArrow/> Managua - Nicaragua
               </div>
             </div>
           </div>

          </div>
        </div>
    )
}