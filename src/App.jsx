import './App.css'

//Elements usually returns with one parent element.
function App() {
  
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is paragraph</p>
    </div>
  )
}

//Elements can be returned same as variables or constants.
function App2(){
  const element = <h2>Hello</h2>
  return element
}

function App3(){
  const e_1 = <h2>Hello</h2>
  const e_2 = <h2>World</h2>
  return [e_1 ,e_2]
}
//Multiple elements with no parent should be an array or use an empty element.
function App4(){
  return(
    <>
      <h2>Hello</h2>
      <h2>World</h2>
    </>
  )
}


export default App4
