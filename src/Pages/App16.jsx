import { useState } from 'react'

//React Hooks
//useState
function App16(){
  const [counter, setCounter] = useState(0)

  return (
    <div><h2>You clicked {counter} times</h2>
    <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  )
}

export default App16