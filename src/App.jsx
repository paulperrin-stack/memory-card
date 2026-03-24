import Scoreboard from "./components/Scoreboard"
import GameMessage from "./components/GameMessage"
import CardGrid from "./components/CardGrid"
import { useState, useEffect } from 'react'

const LEVELS = [6, 10, 12, 16, 20]

function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [level, setLevel] = useState(0)
    const [clickedCards, setClickedCards] = useState([])
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [gameMessage, setGameMessage] = useState(null)

    useEffect(() => {
        async function fetchPokemon() {
            const count = LEVELS[level]

            const usedIds = new Set()
            const promises = Array.from({ length: count }, () => {
                let randomId
                do {
                    randomId = Math.floor(Math.random() * 150) + 1
                } while (usedIds.has(randomId))
                usedIds.add(randomId)
                return fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            })
            
            const responses = await Promise.all(promises)

            const data = await Promise.all(responses.map(r => r.json()))

            const pokemon = data.map(p => ({
                id: p.id,
                name: p.name,
                image: p.sprites.front_default
            }))
            
            setPokemonList(pokemon)
        }

        fetchPokemon()
    }, [level])

    useEffect(() => {
        if (currentScore > bestScore) {
            setBestScore(currentScore)
        }
    }, [currentScore])

    function handleCardClick(id) {
        if (clickedCards.includes(id)) {
            setGameMessage('gameover')
            setCurrentScore(0)
            setClickedCards([])
        }

        else if (clickedCards.length + 1 === LEVELS[level]) {
            setGameMessage('levelup')
            setLevel(level + 1)
            setCurrentScore(currentScore + 1)
            setClickedCards([])
        }

        else {
            setClickedCards([...clickedCards, id])
            setCurrentScore(currentScore + 1)
            setPokemonList(shuffleArray(pokemonList))
        }
    }

    return (
        <div>
            <h1>Memory Card</h1>
            <Scoreboard currentScore={currentScore} bestScore={bestScore} level={level} />
            <GameMessage message={gameMessage} onClose={() => setGameMessage(null)} />
            <CardGrid pokemon={pokemonList} onCardClick={handleCardClick} />
        </div>
    )
}

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5)
}

export default App