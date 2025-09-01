import { useEffect, useState} from 'react'

function App20() {
  const [counter, setCounter] = useState(0)

  useEffect(() => { console.log("Component mounted!")}, [])

  return (
    <div>
      <h1>You clicked {counter} times!</h1>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
    </div>
  )
}

export default App20