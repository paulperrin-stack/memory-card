function GameMessage({ message, onClose }) {
    if (!message) return null
    
    return (
        <div>
            <p>{message === 'gameover' ? '💀 Game Over!' : '🎉 Level Up!'}</p>
            <button onClick={onClose}>Continue</button>
        </div>
    )
}

export default GameMessage