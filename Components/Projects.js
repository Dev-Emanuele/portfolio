import React from "react"
import '../styles/App.css'
import {Link} from "react-router-dom"
import imgProj1 from "../images/proj1-top.png"
import imgProj2 from "../images/proj2-top.png"

function Projects(){
    return (
        <div className="projects">
            <div className="projects-box">
                <Link to="./project1">
                <div className="project-div">
                    <p>The Album Rater</p>
                    <img src={imgProj1} className="projects-img" alt="project1 preview"/>
                </div>
                </Link>
                <Link to="./yourlinks">
                <div className="project-div">
                     <p>YourLinks Chrome Extension</p>
                    <img src={imgProj2} className="projects-img" alt="project2 preview"/>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Projects

