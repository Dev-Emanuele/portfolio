import React, {useState } from "react"

function Album(props){
    const [formData, setFormData] = useState({})
    const [tracksArr, setTracksArr] = useState(props.tracks)
    
    const storage = JSON.parse(localStorage.getItem("albumsArr"))

    //save button hidden if album is already saved    
    const isSaved = storage&&storage.map(obj=>(obj.album.includes(props.name)))
    const saveButton = storage&&isSaved.includes(true)?null: 
        <button className="buttons-p1" onClick={()=>saveLocal()}>save album</button>
    
    //vote form input
    function handleFormChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => (
            {...prevFormData,
            [name]:value}            
        ))
    }
    
    function addVote(event,index,track){
        event.preventDefault()
        setTracksArr(prevArr => {
            prevArr[index] = {...prevArr[index], vote: formData[track]}
            return [...prevArr]
        })
        
        setTimeout(()=>{saveLocal()}, 500) 
        
    }

    function saveLocal(){
        const albumObj = {artist:props.artist, album: props.name, imgUrl: props.img, tracks: tracksArr}
        const condUpdate = storage? [...storage, albumObj] : [albumObj] 
        localStorage.setItem("albumsArr", JSON.stringify(condUpdate))
       
    }

    return(
        <div className="album-page">
            <div className="album-name">
                <div className="album-title">
                    <p>artist</p>
                    <h3>{props.artist}</h3>  
                </div>
                <div className="album-title">
                    <p>album</p>
                    <h3>{props.name}</h3>
                </div>
                {saveButton}
            </div>            
            <div className="album-info">
                <img src={props.img} alt="album cover"/>
                <div>
                {tracksArr&&tracksArr.map((obj, index) =>(
                    <div className="single-track">
                        <p key={index}>{obj["@attr"].rank} - {obj.name}</p>
                        <form onSubmit={(event)=>addVote(event, index, obj.name)}>
                            <input
                                type="number"
                                placeholder="0-100"
                                onChange={handleFormChange}
                                name={obj.name}
                                value={formData.vote}
                            />
                            <button className="buttons-p1">rate</button>
                        </form>
                        {obj.vote&&<p>rating: {obj.vote} / 100</p>}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Album
