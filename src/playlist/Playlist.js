import React from 'react';

function Playlist({title, changeTitle, playlistItems, removeItem}){
    return(
        <div>
            <form action="#">
                <input type="text" value={title} onChange={(e) => changeTitle(e.target.value)}/>
                <ul>{playlistItems ? playlistItems.map((item) => {
                return(<ul>
                    <li>{item.song}</li>
                    <li>{item.artist}</li>
                    <li>{item.album}</li>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                    </ul>)
                }):"empty list"}</ul>
                <button>Save To Spotify</button>
            </form>
        </div>
    )
}

export default Playlist;