import React, {useEffect} from "react";
import "./ContForm.css";
import emailjs from "emailjs-com";

function ContForm(){

  function sendEmail(e) {
    e.preventDefault();
    
     emailjs.sendForm('service_proa3dh', 'template_qeiyl8s', e.target, 'user_wTq25AsiDG3XqlrosX68P')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  }

    return(
      <div className="contForm">    
        <div className="boxForm">
          
        <h2>It will be a pleasure to assist you</h2>

           <form id="formularioC" className="contact-form" onSubmit={sendEmail}>
              {/*<input type="hidden" name="contact_number" />*/}
              <label>Name</label>
              <input type="text" name="user_name" required/>
              <label>subject</label>
              <input type="text" name="user_asunto" required/>
              <label>Email</label>
              <input type="email" name="user_email" required/>
              <label>Message</label>
              <textarea className="sms" name="message" placeholder="Writes" required/>
              
              <input className="btnForm" type="submit" value="Send"/>
           </form>
        </div>
      </div>
    );
}

export default ContForm;