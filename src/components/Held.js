import React from "react";
import "./Held.css";
import Im from "./img/helpIcono.gif";

function Held(){
    return(
        <div className="held">
          <h1>I can help you</h1>

          <div className="containerHeld">
             <div className="cajaHeld">
                <img src={Im} />
             </div>

             <div className="cajaHeld">
              <div>
                  <h2>1. Website that Works</h2>
                  <p>You want a website. It must look great and you want it to work... All the time. Well, that's why I'm here! I help you by designing, building, and hosting a beautiful site that'll grow your business.</p>
              </div>

              <div>
                  <h2>2. SEO</h2>
                  <p>Google ranking means more people see your fantastic blog post or revolutionary product. I ensure you have a leading ranking with best SEO practices. Give your content the audience it deserves!.</p>
              </div>
              
              <div>
                  <h2>3. Control the Features</h2>
                  <p>Do you feel restricted by all the drag-and-drop web builders out there? I provide a powerful custom code solution that fits your exact needs. At the end, you'll own a fast, great looking site.</p>
              </div>

              <div>
                  <h2>4. Sell Your Stuff Online</h2>
                  <p>You have an idea. You want to turn it into an online business without all the hassle. Perfect! I'm here to help you set up an e-commerce store that looks amazing and makes you money.</p>
              </div>
             </div>
          </div>
        </div>
    )
}

export default Held;