import {useRef } from 'react'

function App21() {
  const counter = useRef(0)
  
  function clickEvent() {
    counter.current += 1 
    console.log("You clicked ", counter.current, "times")
  }

  return (
    <div>
      <button onClick={clickEvent}>Click Me</button>
    </div>
  )
}

export default App21