import React from "react"
import '../styles/App.css'
import gitIcon from "../images/github-mark-white.png"

function About(){

      return (
    <div className="about-page">
        <div className="about-box">
            <div onClick={() => window.open("https://github.com/Emanuele707?tab=repositories")}>
                <h3>I'm Emanuele Spada, and this is my Front-End developer portfolio.</h3>
                <div className="github-link">
                    <img src={gitIcon} alt="GitHub's icon"/>
                    <p>my GitHub repositories</p>
                </div>
            </div>
            <p>The portfolio is composed of three parts:<br/>- the portfolio site itself<br/>- The Album Rater project<br/>- YourLinks Chrome Extension project</p>
            <h3>The portfolio site:</h3>
            <p>Code:<br/>For the portfolio site I used JavaScript React and React Router. This is more of a CSS-centered work, with plenty of different elements. The site is optimized for desktop yet totally responsive for different devices and font sizes. There are several effects triggered when interacting with the elements.<br/><br/>Design:<br/> I chose a bold, retro, 80's-inspired look. The design pays homage to the early days of computers while channeling a futuristic aura for all the people who grew up during the 80's and 90's. Neon, space and RGB 3D colors, and not-too-subtle references to computer programming. It's all about the "old times" with the newest approach.</p>
            <h3>The Album Rater:</h3>
            <p>Code:<br/>I created this project specifically to work with an external API. The last.fm API has a big database of music artists and albums. The page is nested inside the main portfolio site and is navigated with a mix of React Router and plain JSX conditional rendering. This is a React project focused on functional components and hooks.<br/><br/>Design:<br/> A minimal and very clean design for a practical page. With an energetic yet warm yellow background, the music cassette on desktop background is another nod to the 80's. I can see myself using The Album Rater while reading reviews and listening to my favorite artists.</p>
            <h3>YourLinks Chrome Extension:</h3>
            <p>Code:<br/>I wanted to do a vanilla JavaScript project that wasn't another web page. This Chrome Extension is an alternative take on the classic "To-do list" project. The user can save and comment on URLs in the current tab or paste them in the input field and save. The data is stored in browser's Local Storage, the HTML elements are added with appendChild, and rendered with a forEach loop. Simple and effective.<br/><br/>Design:<br/>The color palette follows the guidelines of the portfolio. Dark gray background contrasts well with the white background of the majority of web sites. Big buttons with intuitive colors, and a small window for minimal view obstruction. A very useful tool for any research, the comment function makes it better than Chrome's favorites if the user need to quickly consult short notes.</p>













        </div>            
    </div>
    )
}

export default About