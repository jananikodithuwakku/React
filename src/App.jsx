import { useEffect, useState } from 'react'
import { useRef } from "react"
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

//using a function inside a component to handle user actions.
function App7(){
  function myFunction(){
    alert("You Click me")
  }
  return(
    <div><button onClick={myFunction}>Click this</button></div>
  )
}

function MyComponent(){
  return(
    <div>Simple Text</div>
  )
}
function App8(){
  return(
    <div><h2>Reusing Components</h2>
      <MyComponent/>
      <MyComponent/>
    </div>
  )
}

function MyComponent1(props){
  return(
    <div><h1>Name: {props.Name}</h1>
    <p><h3>Age: {props.Age}</h3></p>
    </div>
  )
}
function App9(){
  return(
    <div>
      <MyComponent1 Name= "Jhon" Age = {32}/>
      <MyComponent1 Name= "Jack" Age = {24}/>
    </div>
  )
}


function MyComponent2(props) {
  return (
    <div>
      <h1>
        Name: {props.name}
      </h1>
      <button onClick={() => props.selectItem(props.id)}>
        Select
      </button>
    </div>
  )
}


function App10() {
  function select(id) {
    alert("You selected", id)
  }
  return (
    <div>
      <MyComponent2 id={10} name="John" selectItem={select} />
      <MyComponent2 id={15} name="Jack" selectItem={select} />
    </div>
  )
}

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

function App12(){
  return 1 === 2
  ? <h3>Hello</h3>
  : <h3>World</h3>

}

function App13(){
  const child = 1 === 2
  ? <h3>World</h3>
  : null

  return (
    <div><h3>Hello</h3>{child}</div>
  )

}

function App14(){
  return (
    <div><h1>Hello</h1>
      {
        1 === 2
          ? <h3>World</h3>
          : null
      }
    </div>
  )
}

function App15(){
  return(
    <div><h1>World</h1>
      {(1 === 2) && <h2>Hello</h2> }
    </div>
  )
}

function App16(){
  const [counter, setCounter] = useState(0)

  return (
    <div><h2>You clicked {counter} times</h2>
    <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  )
}

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

function App18(){
  const [name, setName] =useState("")
  const [age, setAge] =useState(18)
  const [gender, setGender] =useState("male")
  const [registerde, setRegistered] =useState("false")

  return(
    <form>
      <input type="text" value={name} onChange={event => setName(event.target.value)} />

      <input type="number" value={age} onChange={event => setAge(event.target.value)} />

      <select value={gender} onChange={event => setGender(event.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>
        <input type="checkbox" value={registerde} onChange={event => setRegistered(event.target.value)} />
      </label>

    </form>
  )
  
}

function App19(){
  const [counter, setCounter] = useState(0)

  useEffect(()=> { console.log("You click the button")}, [counter])

  return (
    <div><h2>You clicked {counter} times</h2>
    <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  )
}

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
