import React, { useState } from 'react';

function Playlist(){
    const [playlist, setPlaylist] = useState('');
    const [itemPlaylist, setItemPlaylist] = useState(['item1', 'item2', 'item3']);
    return(
        <div>
            <form action="#">
                <input type="text" value={playlist} onChange={(e) => setPlaylist(e.target.value)}/>
                <ul>{itemPlaylist.map((item) => <li>{item}</li>)}</ul>
                <button>Save To Spotify</button>
            </form>
        </div>
    )
}

export default Playlist;