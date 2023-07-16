
import { useState } from 'react';
import './App.css';
import Playlist from './playlist/Playlist';
import SearchBar from './searchBar/SearchBar';
import SearchResults from './searchResults/SearchResults';

function App() {
  const songDetails = [{
    id: 1,
    song: 'song1',
    artist: 'artist1',
    album: 'album1',
  },{
    id: 2,
    song: 'song2',
    artist: 'artist2',
    album: 'album2',
  },{
    id: 3,
    song: 'song3',
    artist: 'artist3',
    album: 'album3',
  }]
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [playlistItems, setPlaylistItems] = useState([]);

  const addItem = songId => {
    songDetails.forEach((item) => {
      if(item.id === songId && !playlistItems.some((i) => i.id === item.id)){
        setPlaylistItems((prev) => [...prev,{id: item.id, song: item.song, artist: item.artist, album: item.artist}])
      }
    })
  }
  const removeItem = songId => {
    setPlaylistItems(
      playlistItems.filter((item) => item.id !== songId)
    )
  }
  return (
    <div>
    <SearchBar />
    <SearchResults songDetails={songDetails} addItem={addItem}/>
    <Playlist title={playlistTitle} changeTitle={setPlaylistTitle} playlistItems={playlistItems} removeItem={removeItem}/>
    </div>
  );
  
    
}

export default App;
