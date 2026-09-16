import { useEffect, useState } from "react"
import Card from "./Card"
import "./App.css"

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => {
        const requests = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )

        Promise.all(requests).then((data) => {
          setPokemon(data)
        })
      })
  }, [])

  return (
    <div className="app">
      <h1>Pokémon Cards</h1>

      <div className="cards">
        {pokemon.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        ))}
      </div>
    </div>
  )
}

export default App
