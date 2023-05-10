import React from "react"
import '../styles/App.css'
import {Link} from "react-router-dom"


function Main(){

    function linkedin(){
        const link = document.createElement('a');
        link.href = "https://www.linkedin.com/in/emanuele-spada/";
        link.target = "_blank";
        link.click();
    }
    
    return (
        <div className="main">
            <div className="title">
                <h1>Hi, my name is<br/><span className="name-span">Emanuele Spada</span></h1>
                <p>I'm a <span className="dev-span">Front-end Developer.</span> </p>
            </div>
            <div className="menu">
                <p className="menu-text"><Link to="/about">// ABOUT</Link></p>
                <p className="menu-text"><Link to="/projects">// PROJECTS</Link></p>
                <p className="menu-text"><Link to="/contact">// CONTACT</Link></p>
            </div>
                <div className="row1">
                <Link to="/about">
                <div className="about box">
                    <div className="about-top box-top">
                    </div>
                    <div className="box-bottom">
                        <p>01.ABOUT</p>
                    </div>
                </div>
                </Link>
                <Link to="/contact">  
                <div className="contact box">
                    <div className="contact-top box-top">
                    </div>
                    <div className="box-bottom">
                        <div className="contactCall">CONTACT ME!</div>
                    </div>
                </div>                    
                </Link>
                <div className="linkedin box" onClick={linkedin} >
                    <div className="linkedin-top box-top">
                    </div>
                    <div className="box-bottom">
                        <p>02.LINKEDIN</p>
                    </div>
                </div>
            </div>
            <div className="row2">
                <Link to="/projects/project1">    
                <div className="proj1 box">
                    <div className="proj1-top box-top">
                    </div>
                    <div className="box-bottom">
                        <p>03.PROJ1</p>
                    </div>
                </div>
                </Link>
                <Link to="/projects/yourlinks"> 
                <div className="proj2 box">
                <div className="proj2-top box-top">
                    </div>
                    <div className="box-bottom">
                        <p>04.PROJ2</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Main