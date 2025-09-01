function App5(){
  const array = ["cat", "Dog", "Elephant", "Deer"]
  const elements = []
  for (let i= 0; i < array.length; i++){
    elements.push(
      <button key = {i}>  {array[i]} </button>
    )
  }
  return (
    <div> <h3> Animal </h3> {elements} </div>
  )
}

export default App5