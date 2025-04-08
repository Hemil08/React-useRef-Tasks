import React,{useEffect, useRef} from 'react'
import '../App.css';


const Forms = () => {

    const inputRef = useRef(null)

    const focusInput = () =>{
        inputRef.current.focus()
        inputRef.current.value = ""
        inputRef.current.style.backgroundColor = "blue"
    }

    const removeBgColor = () =>{
        inputRef.current.style.backgroundColor = ""
    }
    

  return (
    <div className='forms'>
        <h1>My Form</h1>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
        <button onClick={removeBgColor}>Remove BG</button>
    </div>
  )
}

export default Forms