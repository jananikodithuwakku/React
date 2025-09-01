//using a function inside a component to handle user actions.
function App7(){
  function myFunction(){
    alert("You Click me")
  }
  return(
    <div><button onClick={myFunction}>Click this</button></div>
  )
}


export default App7