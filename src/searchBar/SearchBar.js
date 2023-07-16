import React,{useState} from 'react';

function SearchBar(){
    const [song, setSong] = useState('');
    const handleSubmit = e =>{
        
    }
    return(
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder='Search your song' value={song} onChange={(e)=> setSong(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;