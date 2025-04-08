import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const boxRef = useRef();

  useEffect(() => {

    const box = boxRef.current;
    const boxHeader = box.querySelector(".boxheader");
    
    if(!box || !boxHeader) return;

    let offsetX = 0;
    let offsetY = 0;

    const onMouseMove = (e) =>{
      box.style.left = `${e.clientX - offsetX}px`;
      box.style.top = `${e.clientY - offsetY}px`;
    }

    const onMouseDown = (e) =>{
      const rect = box.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      document.addEventListener("mousemove",onMouseMove)
      document.addEventListener("mouseup",onMouseUp)
    }

    const onMouseUp = () =>{
      document.removeEventListener("mousemove",onMouseMove);
      document.removeEventListener("mouseup",onMouseUp)
    }

    boxHeader.addEventListener("mousedown",onMouseDown)

    return () =>{
      boxHeader.removeEventListener("mousedown",onMouseDown);
      document.removeEventListener("mousemove",onMouseMove);
      document.removeEventListener("mouseup",onMouseUp);
    }
  }, []);

  return (
    <div className="App">
      <div className="box" ref={boxRef}>
        <div className="boxheader">Click here to move</div>
        <p>Move</p>
        <p>this</p>
        <p>DIV</p>
      </div>
    </div>
  );
}

export default App;
