//docs: https://www.last.fm/api/intro

function fetchData(artist, album){

  const url = `https://ws.audioscrobbler.com/2.0/?method=
  ${album?"album.getinfo":"artist.gettopalbums"}
  &artist=${artist}${album?`&album=${album}`:"&limit"}
  &api_key=1d77ec8069b9fd474d76e7cd3dafc8d9
  &autocorrect[1]
  &format=json`    
  
  const options = {headers:
  {"Content-Type": "application/json"}
}

return fetch(url, options)
  .then(res => res.json())
  .then(data => data)            
  .catch(err => console.error(err))
} 

export {fetchData}
