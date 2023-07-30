
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Playlist from './playlist/Playlist';
import SearchBar from './searchBar/SearchBar';
import SearchResults from './searchResults/SearchResults';
import Login from './login/Login';

function App() {
  //login and fetching accessToken 
  const [accesstoken, setAccesstoken] = useState('');
  const [expiresIn, setExpiresIn] = useState(10);
  
  useEffect(() => {
    if(window.location.hash)
    {
      const urlParams = new URLSearchParams(window.location.hash.substr(1));
      const accessToken = urlParams.get('access_token');
      const expiresIn = urlParams.get('expires_in');
      console.log(accessToken);
      setAccesstoken(accessToken);
      setExpiresIn(expiresIn);
      window.history.replaceState({}, document.title, '/');
    }

  }, []);
  
  setTimeout(() => setAccesstoken(''), expiresIn*10000);

  //end of login and fetching accessing token

  //Searching track using fetch api call:
  const onSearch = (songName) => {
    console.log(songName);
    requestSong(songName);
  }

  const [tracks, setTracks] = useState([]);


  const requestSong = async (songName) =>{
    const track = `track:${songName}`;
    const endpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(track)}&type=track,artist&limit=10`;
    try{
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${accesstoken}`} 
      });
      if(response.ok){
        const jsonResponse = await response.json();
        const songList = jsonResponse.tracks.items;
        setTracks(songList.map((item) => {

          return({name: item['name'], artists: item['artists'], id: item['id']})

        }));
        console.log(tracks);
        console.log(songList);
        console.log("inside the loop");
      
      }
      else{
        console.log("server said fuck you");
      }
    }catch(error){
      console.log(error)
    }
  }

  //end of the search and fetch call.
 
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [playlistItems, setPlaylistItems] = useState([]);

  const addItem = songId => {
    tracks.forEach((item) => {
      if(item['id'] === songId && !playlistItems.some((i) => i.id === item['id'])){
        setPlaylistItems((prev) => [...prev,{id: item['id'], song: item['name'], artist: item['artists']}])
      }
    })
  }
  const removeItem = songId => {
    setPlaylistItems(
      playlistItems.filter((item) => item.id !== songId)
    )
  }

  let user_id = ''

  const handleSave = async () =>{
    const endpoint = 'https://api.spotify.com/v1/me';
    try{
      const userResponse = await fetch(endpoint, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${accesstoken}`} 
      });
      if(userResponse.ok){
        const jsonResponse = await userResponse.json()
        user_id = jsonResponse['id']
        console.log(user_id);


        const endpointPlaylist = `https://api.spotify.com/v1/users/${user_id}/playlists`
        try{
          const response = await fetch(endpointPlaylist, {
            method: 'POST',
            headers: {"Authorization": `Bearer ${accesstoken}`, 'Content-Type': 'application/json'},
            data: JSON.stringify({"name": playlistTitle, "public": true}) 
          });
          if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
          }else{
            console.log("you fucking idoit try again")
          }  
          }catch(error){
            console.log(error)
          }
      }else{
        console.log('server said stick it in')
      }
    }catch(error){
      console.log(error)
    }
    setPlaylistItems([]);
    setPlaylistTitle('');

  }
  return (
    <div>
      <div className={styles.img}>
        <img src="https://images.unsplash.com/photo-1606586244129-0e16a162c159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
      </div>
      <div className={styles.main}>
      {accesstoken === '' ? <Login />:'' }
      <SearchBar onClick={onSearch}/>
      <div className={styles.blocks}>
      <SearchResults tracks={tracks} addItem={addItem}/>
      <Playlist title={playlistTitle} changeTitle={setPlaylistTitle} playlistItems={playlistItems} removeItem={removeItem} handleSave={handleSave}/>
      </div>
      </div>
    </div>
  );
  
    
}

export default App;
