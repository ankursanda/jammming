import React from 'react';

function SearchResults({songDetails, addItem}){
    return(
        <div>
            <h1>Search Results</h1>
            <ul>{songDetails.map((item) => 
            {return(<ul>
                <li key={item.id}>{item.song}</li>
                <li key={item.id}>{item.artist}</li>
                <li key={item.id}>{item.album}</li>
                <button key={item.id} onClick={() => addItem(item.id)}>Add</button>
                </ul>)
        })}</ul>
        </div>
    )
}

export default SearchResults;