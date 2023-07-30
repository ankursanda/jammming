import React,{useState} from 'react';
import styles from './SearchBar.module.css'

function SearchBar({onClick}){
    const [song, setSong] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        onClick(song);
        setSong('');
    }

    return(
        <div className={styles.main}>
            <form action="/submit" onSubmit={handleSubmit} className={styles.items}>
                <input className={styles.searchbar} type="text" placeholder='Search your song' value={song} onChange={(e)=>
                    { 
                        e.preventDefault();
                        setSong(e.target.value)
                    }
                    } />
                <button className={styles.button} type="submit"></button>
            </form>
        </div>
    )
}

export default SearchBar;