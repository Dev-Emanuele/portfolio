import React from "react"

function Artist(props){
   
    return(
        <>           
            <div className="artist">
                <p>Artist: {props.artist}</p>
                {props.topalbums.map((item, index) =>(
                    <div className="artist-info" key={item.name}>
                        <img src={item.image[2]["#text"]} alt="album cover"/>
                        <div className="artist-name">
                            <p className="info-elem">{index+1} - {item.name}</p>
                            <p className="info-elem">Listeners: {item.playcount.toLocaleString("de-DE")}</p>
                            <button onClick={()=>props.datas(props.artist,item.name)} className="info-elem buttons-p1">view album</button>
                        </div>
                    </div>
                ))}
            </div>
        </>  
    )
}

export default Artist

