import Card from './Card'
import '../styles/CardGrid.css'

function CardGrid({ pokemon, onCardClick }) {
    return (
        <div className="card-grid">
            {pokemon.map(p => (
                <Card key={p.id} pokemon={p} onCardClick={onCardClick} />
            ))}
        </div>
    )
}

export default CardGrid