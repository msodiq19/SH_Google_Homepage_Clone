import React, { useState } from 'react'
import logo from '../sidehustle-logo.png'
import mic from '../mic.svg'
import Button from './Button'
import Search from './Search'

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
            { text? <h1>{text}</h1>: <img src={logo} alt="logo" className="logo" /> }

            {/* Search Component */}
            <Search mic={mic} text={text} textHandler={textHandler} />
            
            <div className="btns">
                <Button text='google search' />
                <Button text="I'm feeling lucky" />
            </div>
        </div>
    )
}

export default MainContent
