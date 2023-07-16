
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
  return (<div>
    <SearchBar />
    <SearchResults songDetails={songDetails}/>
    <Playlist />
    </div>
  );
  
    
}

export default App;
