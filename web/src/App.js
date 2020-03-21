import React, {useState} from 'react'
import Lixo from './Teste'

function App() {
  const [counter,setCounter] = useState(0)
  function incrementa(){
      setCounter(counter + 1)
  }
  return (
    <>
      <h1>Contador : {counter}</h1>
      <button onClick={incrementa}>Incrementar</button>
    </>
    )
}

export default App;
