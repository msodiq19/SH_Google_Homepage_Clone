import React, { useState } from 'react'
import logo from '../sidehustle-logo.png'

function MainContent() {
    // State: initial value of the state is an empty string
    const [text, setText] = useState('')

    // onChange Event: event fires whenever there is a change in the input field
    const textHandler = (e) =>{
        // setState: to change the value of the state to the inputed value
        setText(e.target.value)
    }

    return (
        <div className="main">
            {/* conditional rendering: logo displays whenever the input is empty else the inputed text shows up */}
            { text? <p>{text}</p>: <img src={logo} alt="sidehustle logo" /> }

            <input type="text" value={text} onChange={textHandler} />
        </div>
    )
}

export default MainContent
