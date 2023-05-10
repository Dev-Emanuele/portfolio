import React, {useState } from "react"
import {Link} from "react-router-dom"
import Album from "./Album"

function MyAlbums(){

    const [isClicked, setIsClicked] = useState(false)
    const [albumData, setAlbumData] = useState()
        
    const storage = JSON.parse(localStorage.getItem("albumsArr"))
      
    //filter out double albums, keeping most recent (highest index)
    const onlyUnique = storage&&storage.filter((obj, index, arr) => {
            return index === arr.length - 1 || arr.slice(index + 1).every(item => item.album !== obj.album);
    })
    
    onlyUnique&&localStorage.setItem("albumsArr", JSON.stringify([...onlyUnique]))
   

    //conditional render Album and save props to state
    function viewAlbum(obj){
        setIsClicked(prevIsClicked => !prevIsClicked)
        setAlbumData(obj)
    }

    //add votes and return the average
    function getVotes(obj) {
        const total = obj.tracks.reduce((acc, track) => {
            return acc + parseInt(track.vote || 0)
        }, 0);
        const average = (total/obj.tracks.length).toFixed(2)
        return average > 0? average:"not rated"
    }

    function removeAlbum(album){
        const updatedStorage = storage.filter(obj => {
            return obj.album !== album
        })
        updatedStorage.length>0?localStorage.setItem("albumsArr", JSON.stringify(updatedStorage)):
        localStorage.removeItem("albumsArr")
        window.location.reload()
    }

    return(
        <div className="myAlbums-page">
            <h1 className="proj1-title">THE ALBUM RATER</h1>
            <p className="returnSearch"><Link to="/projects/project1/">Return to Search</Link></p>
            {isClicked?
                <>
                    <p className="myAlbums-list" onClick={()=>setIsClicked(prevIsClicked => !prevIsClicked)}>YOUR ALBUM LIST</p> 
                    <Album
                        artist={albumData.artist}
                        name={albumData.album}
                        img={albumData.imgUrl}
                        tracks={albumData.tracks}
                    />
                 </>:<>
                         {onlyUnique?
                            onlyUnique.map(obj => (
                            <div className="myAlbums-info" key={obj.album}>
                                <img src={obj.imgUrl} alt="album cover"/>
                                <div>
                                    <div className="info-elem">
                                        <p>artist</p>
                                        <h3>{obj.artist}</h3>
                                    </div>
                                    <div className="info-elem">
                                        <p>album</p>
                                        <h3>{obj.album}</h3>
                                    </div>
                                    <p className="info-elem">Rating: {getVotes(obj)} / 100</p>
                                    <div className="myAlbums-buttons info-elem" >
                                    <button className="buttons-p1" onClick={()=>viewAlbum(obj)}>rate album</button>
                                    <button className="buttons-p1" onClick={()=>removeAlbum(obj.album)}>remove</button>
                                </div>
                                </div>
                            </div>
                        )):<p>no albums saved!</p>
                        }
                    </>
            } 
        </div>
    )
}

export default MyAlbums

