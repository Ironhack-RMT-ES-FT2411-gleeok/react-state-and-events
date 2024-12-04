
function Events() {

  const handleMouseOver = () => {
    console.log("cursor sobre el h1")
  }

  const handleMouseLeave = () => {
    console.log("cursor saliendo del h1")
  }

  const handleClick = () => {
    console.log("clickando boton")
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    // console.log("usuario escribiendo sobre el campo")
  }

  return (
    <div>
      
      <h1 onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>Events</h1>

      <button onClick={handleClick}>Click</button>

      <br />
      <br />

      <input type="text" onChange={handleInputChange}/>

    </div>
  )
}

export default Events