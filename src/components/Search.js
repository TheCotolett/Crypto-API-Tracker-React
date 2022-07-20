import React, {useState} from 'react'
import './Search.css'
import {SiLitecoin} from 'react-icons/si'

function Search(props) {
    const [input, setInput] = useState("");
    return (
        <div className='search-box'>
            <div className='h1-div'>
                <h1 className='search-h1'>  SEARCH</h1>
                <h1><SiLitecoin className='search-icon'/></h1>
            </div>
            <input className='search-bar' type="text" onChange={e => {
                setInput(e.target.value);
                props.filterNameHandler(e.target.value);
                }} value={input}/>
        </div>
    )
}

export default Search