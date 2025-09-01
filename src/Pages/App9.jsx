function MyComponent1(props){
  return(
    <div>
      <h1>Name: {props.Name}</h1>
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


export default App9