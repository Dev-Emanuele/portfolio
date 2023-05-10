import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import '../styles/stylesP1.css'
import Artist from "./Artist"
import Album from "./Album"
import HowToP1 from "./HowToP1"
import { fetchData } from "./data"

function MainP1() {
	const [formData, setFormData] = useState({artistName: "", albumName: ""})
	const [searchArtist, setSearchArtist] = useState()
	const [searchAlbum, setSearchAlbum] = useState()
	const [artistData, setArtistData] = useState("")
	const [albumData, setAlbumData] = useState("")
	const [isLoading, setIsLoading] = useState(true)
	

	useEffect(()=>{
		searchArtist&&
		fetchData(searchArtist,searchAlbum)
			.then(data => {
				data.topalbums&&setArtistData(data)
				data.album&&setAlbumData(data)
				setIsLoading(false)
				setFormData({artistName: "", albumName: ""})})
			.catch(err => console.error(err))
	},[searchArtist, searchAlbum])

	function handleChange(event){
		const {name, value} = event.target
		setFormData(prevFormData => (
			{...prevFormData,
				[name]:value
			}
		))
	}
	
	function handleSubmit(event){
		event.preventDefault()
		setIsLoading(true)
		setSearchArtist(formData.artistName)
		setSearchAlbum(formData.albumName)
		setFormData({artistName: "", albumName: ""})
	}

	function viewAlbum(artist, album){
		setIsLoading(true)
		setSearchArtist(artist)
		setSearchAlbum(album)
		setFormData({artistName: "", albumName: ""})
	}

	return(
		<div className="project1">
			<h1 className="proj1-title">THE ALBUM RATER</h1>
			<form onSubmit={handleSubmit}>
				<div className="input">
				<input 
					type="text"
					placeholder="*insert artist name"
					onChange={handleChange}
					name="artistName"
					value={FormData.artistName}
				/>
				<input
					type="text"
					placeholder="insert album name"
					onChange={handleChange}
					name="albumName"
					value={FormData.albumName}
				/>
				</div>
				<div className="submit">
					<button className="buttons-p1" disabled={!formData.artistName}>Search</button>
				</div>				
			</form>
			<p><Link to="./myalbums">YOUR ALBUM LIST</Link></p>

			{searchAlbum&&!isLoading? 
				<Album
					key={albumData.album.id}
					artist={albumData.album.artist}
					name={albumData.album.name}
					img={albumData.album.image[3]["#text"]}
					tracks={albumData.album.tracks.track}
				/>	
			:!isLoading&&!artistData.error?
				<Artist
					key={artistData.topalbums.album}
					artist={artistData.topalbums["@attr"].artist}
					topalbums={artistData.topalbums.album}
					datas={viewAlbum}
				/>
			:<HowToP1/>}
		</div>
	)
}

export {MainP1}
