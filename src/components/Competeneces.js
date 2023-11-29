import React from 'react';
import SectionDivider from './SectionDivider';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

/*gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const SlindeinTop = (elem, dalay, duration) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            y: -200
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger:  {
                trigger: elem,
                start: "top center",
                end:"bottom center"
            }
        }
    )
}
*/



const Competeneces = () => {

    /*useEffect(()=>{
        SlindeinTop("competence")
    })*/
    
    return (
        <div className='competence'>
            
            <div className='title-competence'>
                <span></span>
                <h1>Compétences</h1>
            </div>
            <div className='all-competence'>
                
                <a className='flex-comp'>
                    <img src='logo_competence/Python.jpg'/>
                    <h3>Python</h3>
                    <div className='goge'><a>20%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/cs.jpg'/>
                    <h3>C#</h3>
                    <div className='goge'><a>50%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/linux.jpg'/>
                    <h3>Linux</h3>
                    <div className='goge'><a>70%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/PHP.jpg'/>
                    <h3>PHP</h3>
                    <div className='goge'><a>80%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/SQL.jpg'/>
                    <h3>SQL</h3>
                    <div className='goge'><a>60%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/CSS.jpg'/>
                    <h3>HTML/CSS</h3>
                    <div className='goge'><a>100%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/SCSS.jpg'/>
                    <h3>SCSS</h3>
                    <div className='goge'><a>70%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/js.jpg'/>
                    <h3>javascript</h3>
                    <div className='goge'><a>50%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/ra.jpg'/>
                    <h3>react</h3>
                    <div className='goge'><a>40%</a></div>
                </a>
                
                <a className='flex-comp'>
                    <img src='logo_competence/PS.jpg'/>
                    <h3>adobe Photoshop</h3>
                    <div className='goge'><a>70%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/EI.jpg'/>
                    <h3>adobe Illustrator</h3>
                    <div className='goge'><a>80%</a></div>
                </a>
                <a className='flex-comp'>
                    <img src='logo_competence/PE.jpg'/>
                    <h3>adobe premier Pro</h3>
                    <div className='goge'><a>60%</a></div>
                </a>
                
                
            </div>
            
        </div>
        
        
    );
    
};

export default Competeneces;




