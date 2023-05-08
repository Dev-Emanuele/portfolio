import React from "react"
import '../styles/App.css'
import flag from "../images/spain-flag-icon.png"

function Contact(){
    return (
    <div className="contact-page">
        <div className="contact-box">
            <p>Currently I'm interested in any internship and work opportunities. </p>
            <div className="send-message">
                <a href="mailto:spada-e@outlook.com">send me a message now!</a>
            </div>
            <p>or a PM on my <a className="in-link" href="https://www.linkedin.com/in/emanuele-spada/" target="_blank" rel="noreferrer">LinkedIn page.</a></p>
            <div className="location-name">
                <p>I'm located in Valencia, Spain</p>
                <img src={flag} alt="spanish flag"/>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197293.81276166244!2d-0.5259739367030198!3d39.407934757047904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia!5e0!3m2!1sen!2ses!4v1683477047608!5m2!1sen!2ses" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Valencia on google maps"
            ></iframe>
        </div>
    </div>)
}

export default Contact