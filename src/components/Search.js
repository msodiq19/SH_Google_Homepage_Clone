import React from 'react'

function Search(props) {

    return <div className="search"><input type="text" value={props.text} onChange={props.textHandler} /> <img src={props.mic} alt="speech" className="mic" /></div>
}

export default Search
