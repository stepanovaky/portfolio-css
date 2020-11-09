import React from 'react';
import Selfie from './Images/Selfie.JPG'
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { GrMail } from 'react-icons/gr';
import './AboutMe.css';

function AboutMe() {

    return(
        <section id= 'aboutme' className="aboutme">
            <div className="middle">
       <h1 id="aboutme">Hi, I'm Katerina and I am a full-stack developer.</h1>
    
            <img src={Selfie} alt="Katerina" />
           
            <p>I am a web developer and student of the Engineering Flex bootcamp program at Thinkful. I enjoy coding because each project is a challenge and a puzzle for me.</p><br/>
            <p>I am looking forward to working with a team of developers and honing my technical skills even further.</p><br/>
            <p>When I am not coding, I am home with my small menagerie of animals. Outside of coding it is my goal to become a Court Appointed Special Advocate and help foster children.</p><br/>
            <footer>
                <address>
                    <a href="https://github.com/stepanovaky" target="_blank"><p><SiGithub /></p></a>
                    <a href="https://www.linkedin.com/in/katerinaystepanova/" target="_blank"><p><SiLinkedin /></p></a>
                    <a href="mailto:stepanovaky@gmail.com" target="_blank"><p><GrMail /></p></a>
                   

                </address>
            </footer>
            </div>
       </section>
    )
}

export default AboutMe;