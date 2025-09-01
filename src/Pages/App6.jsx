//Much easier to generate list using mapping
function App6(){
  const array = ["cat", "Dog", "Elephant", "Deer"]
  return(
    <div><h3>Animal</h3>{
        array.map ((item, index) =>(
          <button key = {index}> {item} </button>
      ))
    }</div>

  )
}


export default App6