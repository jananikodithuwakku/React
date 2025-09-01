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

export default App10