import React from "react";
import "./Skills.css";
import { 
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaGitSquare,
    FaBootstrap,
    FaWordpress,
    FaPython,
    FaLessThan,
    FaPhp,
    FaLaptopCode,
    FaAdobe,
    FaGithub,
    FaFileCode,
    FaRegFileCode   
} from "react-icons/fa";

function Skills(){
    return(
        <div className="skills">
            <h2>Skills</h2>

            <div>
                <h3>Front-end</h3>
              <div className="containerSkills">
                  <div>
                      <FaHtml5 className="iconSkills"/>
                      <strong>Html</strong>
                  </div>
                  <div>
                      <FaCss3Alt className="iconSkills"/>
                      <strong>Css</strong>
                  </div>
                  <div>
                     <FaNodeJs className="iconSkills"/>
                     <strong>JavaScript</strong>
                  </div>
                  <div>
                    <FaReact className="iconSkills"/>
                    <strong>React</strong>
                  </div>
                  <div>
                    <FaBootstrap className="iconSkills"/>
                    <strong>Bootstrap</strong>
                  </div>

              </div>
            </div>

            <div>
                <h3>Back-end</h3>
              <div className="containerSkills">
                  <div>
                      <FaPython className="iconSkills"/>
                      <strong>Python</strong>
                  </div>
                  <div>
                      <FaLessThan className="iconSkills"/>
                      <strong>Django</strong>
                  </div>
                  <div>
                     <FaPhp className="iconSkills"/>
                     <strong>PHP</strong>
                  </div>
                  <div>
                    <FaFileCode className="iconSkills"/>
                    <strong>MySql</strong>
                  </div>
                  <div>
                    <FaRegFileCode className="iconSkills"/>
                    <strong>SQL</strong>
                  </div>

              </div>
            </div>

            <div>
                <h3>General</h3>
              <div className="containerSkills">
                  <div>
                      <FaWordpress className="iconSkills"/>
                      <strong>WordPress</strong>
                  </div>
                  <div>
                      <FaAdobe className="iconSkills"/>
                      <strong>Adobe XD</strong>
                  </div>
                  <div>
                     <FaGitSquare className="iconSkills"/>
                     <strong>Git</strong>
                  </div>
                  <div>
                    <FaGithub className="iconSkills"/>
                    <strong>GitHub</strong>
                  </div>
                  <div>
                    <FaLaptopCode className="iconSkills"/>
                    <strong>VS Code</strong>
                  </div>

              </div>
            </div>



        </div>
    )
}

export default Skills;