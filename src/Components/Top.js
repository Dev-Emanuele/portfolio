import React, {useState} from "react"
import '../styles/App.css'
import { Link } from "react-router-dom"
import house from "../images/icons8-earth.png"
import menu from "../images/menu-icon.png"

function Top(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu(){
        setIsMenuOpen(prevIsOpen => !prevIsOpen)
        
    }

    return (
        <div className="top">
            {isMenuOpen?<div className="menu-box">
                <p className="menu-text"><Link to="/about">// ABOUT</Link></p>
                <p className="menu-text"><Link to="/projects">// PROJECTS</Link></p>
                <p className="menu-text"><Link to="/contact">// CONTACT</Link></p>
            </div>:null}
            <div className="burger-menu" onClick={toggleMenu}>
                <img src={menu}/>
                <p>menu</p>
            </div>     
            <Link to="/">  
                <div className="home">                
                    <img src={house}/>
                    <p>home</p>
                </div>
            </Link>
        </div>
    )
}

export default Top