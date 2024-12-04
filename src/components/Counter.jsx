import { useState } from "react"

function Counter() {

  // let counterValue = 0;
  const [ counterValue, setCounterValue ] = useState(0)
  // 1. siempre es el estado. Puede tener cualquier nombre
  // 2. siempre la funcion que actualiza el estado. Puede tener cualquier nombre. Normalmente tiene el nombre set + nombre del estado

  const handleIncrementar = () => {
    // console.log("sumando al numero")

    // counterValue = counterValue + 1
    // console.log(counterValue)
    //! NUNCA DEBEMOS MANIPULAR EL ESTADO DIRECTAMENTE

    setCounterValue( counterValue + 1 )
    // 1. actualiza el valor el estado con lo que haya dentro de los parentesis
    // 2. causa una nueva renderización del componente

  }

  const handleDisminuir = () => {
    setCounterValue( counterValue - 1 )
  }


  const [ storedNumber, setStoredNumber] = useState("sin valor")

  const handleNumberGuardar = () => {
    // counterValue
    // storedNumber = counterValue //! NO

    setStoredNumber( counterValue )
  }

  return (
    <div>
      
      <h2>Counter</h2>

      <h1>{counterValue}</h1>

      <button onClick={handleDisminuir}>-</button>
      <button onClick={handleIncrementar}>+</button>


      <p>Valor almacenado: {storedNumber}</p>

      <button onClick={handleNumberGuardar}>Almacenar valor previo</button>

    </div>
  )
}

export default Counter