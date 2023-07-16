import React from 'react';

function SearchResults({songDetails}){
    return(
        <div>
            <h1>Search Results</h1>
            <ul>{songDetails.map((item) => 
            {return(<ul>
                <li key={item.id}>{item.song}</li>
                <li key={item.id}>{item.artist}</li>
                <li key={item.id}>{item.album}</li>
                </ul>)
        })}</ul>
        </div>
    )
}

export default SearchResults;