import './App.css';
import {useState,useRef} from 'react'

function App() {

  const [counter,setCounter] = useState(0)

  const inputRef = useRef(null)


  const onHandleReset = () =>{
    if (inputRef.current){
      inputRef.current.value = "";
    }
    setCounter(0)
  }

  const onHandleChange = () => {
    if(inputRef.current){
      const text = inputRef.current.value.replace(/\s/g, '')
      setCounter(text.length)
    }
  }

  return (
    <div className="App">
      <div className="container">
      <textarea ref={inputRef} onChange={onHandleChange} placeholder='Type here...' rows="4" cols="50"></textarea>
      <div>
        Character Counter :- {counter}
      </div>
      <button onClick={onHandleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
