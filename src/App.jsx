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
  const [localInputValue, setLocalInputValue] = useState({name:"",age:""});

  const handleChange = (evt) => {
    const val = evt.target.value

    // console.log(val)
    // setLocalInputValue(val);

    const targetName = evt.target.name;
    console.log(targetName);
    setLocalInputValue({...localInputValue, [targetName]:val});

  }

  const handleClick = () => {
    // setPerson({...person, name:localInputValue});
    setPerson({...localInputValue})
  }

  return (
  <>
  <p>Inside Input</p>
  <input type="text" name="name" placeholder="skrive navn her" value={localInputValue.name} onChange={handleChange}/>
  <input type="text" name="age" placeholder="skrive alder her" value={localInputValue.age} onChange={handleChange}/>
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
