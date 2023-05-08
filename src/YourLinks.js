import './styles/App.css'

function YourLinks() {
    return (
        <div className="yourlinks">
            <div className="yourlinks-box">
                <h1>YourLinks Chrome Extension</h1>
                <p>With YourLinks chrome extension you can save and comment any url. <br/>
                    It has two funcionality: <br/>
                    - save the url of your current tab<br/>
                    - paste any url into the input field<br/>
                    Your data is saved as long as you use the same browser.            
                </p>
                <p>here a video demostration of the extension:</p>
                <iframe 
                    width="728"     //original 560
                    height="409.5"   //original 315
                    src="https://www.youtube.com/embed/M_1nBjiEals" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
        
    )
}

export default YourLinks

//https://www.youtube.com/watch?v=M_1nBjiEals