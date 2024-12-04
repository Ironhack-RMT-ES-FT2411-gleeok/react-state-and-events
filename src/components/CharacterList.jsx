
import { useState } from "react"
import allCharactersArr from "../data/characters.json"
// console.log(allCharactersArr)

function CharacterList() {

  const [ randomCharInfo, setRandomCharInfo ] = useState(null)
  const [ favoriteChars, setFavoriteChars ] = useState([])

  const handleRandomChar = () => {
    // console.log("funcionando :)")

    const randomCharIndex = Math.floor(Math.random() * allCharactersArr.length)
    console.log(allCharactersArr[randomCharIndex])

    // randomCharInfo = allCharactersArr[randomCharIndex] //! NUNCA PODEMOS MUTAR O MODIFICAR DIRECTAMENTE UN ESTADO

    setRandomCharInfo(allCharactersArr[randomCharIndex])

  }

  const handleAddToFav = () => {
    console.log("intentando añadir a fav")

    console.log(randomCharInfo)

    // como agregamos ese elemento al array?
    // favoriteChars.push(randomCharInfo) //! NUNCA PODEMOS MUTAR O MODIFICAR DIRECTAMENTE UN ESTADO

    // como agregamos ese elemento al estado sin mutar el estado directamente?
    const stateClone = favoriteChars.slice(0) // crea un clon
    stateClone.push(randomCharInfo)

    setFavoriteChars( stateClone )

  }

  const handleRemoverFav = (indexParaBorrar) => {
    console.log("removiendo de favoritos", indexParaBorrar)

    const stateClone = favoriteChars.slice(0)
    stateClone.splice(indexParaBorrar, 1)

    setFavoriteChars(stateClone)
  }

  return (
    <div>
      
      <h2>Personajes de Harry Potter</h2>

      <button onClick={handleRandomChar}>Buscar un personaje aleatorio</button>

      {randomCharInfo !== null ? (
        <div>
          <h3>Nombre: {randomCharInfo.name}</h3>
          <p>Descripción: {randomCharInfo.description}</p>
          <button onClick={handleAddToFav}>Agregarlo a mis Fav</button>
        </div>) : (<p>Abracadabra</p>)}

        <hr />

        <h4>Lista de Favoritos</h4>

        {favoriteChars.map((eachChar, index) => {
          return (
            <div key={index}>
              <h3>Nombre: {eachChar.name}</h3>
              <p>Descripción: {eachChar.description}</p>
              <button onClick={() => handleRemoverFav(index)}>remover de fav</button>
              {/* como yo le puedo pasar argumentos a una funcion de eventos */}
            </div>
          )
        })}

    </div>
  )
}

export default CharacterList