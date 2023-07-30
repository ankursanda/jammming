import React from 'react';
import styles from './SearchResults.module.css';

function SearchResults({tracks, addItem}){
    return(
        <div className={styles.main}>
            <h1>Search Results</h1>
            <div id={styles.list}>
            <ul>{tracks.map((item,i) => 
            {return(<ul key={i} className={styles.items}>
                <li><strong>{item['name']}</strong></li>
                <ul className={styles.artists}>{item['artists'].map((item,i) => <li key={i}>{item['name']}</li>)}</ul>
                <button className={styles.button} onClick={() => addItem(item['id'])}></button>
                </ul>)
        })}</ul>
            </div>
        </div>
    )
}

export default SearchResults;