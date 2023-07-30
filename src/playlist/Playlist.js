import React from 'react';
import styles from './Playlist.module.css';

function Playlist({title, changeTitle, playlistItems, removeItem, handleSave}){
    return(
        <div className={styles.main}>
            <form action="/submit" className={styles.form}>
                <input placeholder='Choose a name' className={styles.search} type="text" value={title} onChange={(e) =>{ 
                    e.preventDefault();
                    changeTitle(e.target.value)
                    }}/>
                <ul>{playlistItems !== [] ? playlistItems.map((item) => {
                return(<ul key={item.id} className={styles.items} >
                    <li><strong>{item.song}</strong></li>
                    <ul className={styles.artists}>{item.artist.map((item,i) =>  <li key={i}>{item['name']}</li>)}</ul>
                    <button className={styles.button} onClick={(e) =>{
                        e.preventDefault(); 
                        removeItem(item.id)
                        }}></button>
                    </ul>)
                }): <li> EMPTY LIST </li> }</ul>
                <button className={styles.submit} type='submit' onClick={(e) => {
                    e.preventDefault();
                    handleSave()
                    }}>Save To Spotify</button>
            </form>
        </div>
    )
}

export default Playlist;