//Conditional Rendering
function App11(){
  const element_1 = <h2>Hello</h2>
  const element_2 = <h2>World</h2>

  if (1 === 2) {
    return element_1
  }
  else{
    return element_2
  }
}

export default App11