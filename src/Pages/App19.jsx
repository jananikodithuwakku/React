import { useEffect, useState} from 'react'

//useEffect
function App19(){
  const [counter, setCounter] = useState(0)

  useEffect(()=> { console.log("You click the button")}, [counter])

  return (
    <div><h2>You clicked {counter} times</h2>
    <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  )
}

export default App19