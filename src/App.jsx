import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({name:"Holger",age:23})
  return (
    <>
    <h1>Lifting State Demo</h1>
    <Input setPerson={setPerson} person={person}/>
    <Output person={person}/>

    </>
  )
}
export default App

// ####################################################################

const Input = ({person, setPerson}) => { 
  const [localInputValue, setLocalInputValue] = useState("");
  const handleChange = (evt) => {
    const val = evt.target.value
    console.log(val)
    setLocalInputValue(val);
  }

  const handleClick = () => {
    setPerson({...person, name:localInputValue});
  }

  return (
  <>
  <p>Inside Input</p>
  <input type="text" placeholder="skrive her" value={localInputValue} onChange={handleChange}/>
  <button onClick={handleClick}>Send input text</button>
  </>
)
}

// ####################################################################

const Output = ({person}) => {
  return (
  <>
  <h4>Inside Output</h4>
  <code>
    {person.name} age {person.age}
  </code>
  </>
)
}

// ####################################################################
