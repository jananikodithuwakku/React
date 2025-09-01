import { useState } from 'react'

function App17(){
  const [counter, setCounter] = useState(0)
  const [time, setTime] = useState(0)
  function clickEvent(){
    setCounter(counter + 1)
    setTime(Date.now())
  }

  return(
    <div>
      <h2>You clicked {counter} times</h2>
      <h3>Last Clicked time: {time}</h3>
      <button onClick={clickEvent}>Click me</button>
    </div>
  )
}

export default App17