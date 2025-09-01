import { useState} from 'react'

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

export default App18