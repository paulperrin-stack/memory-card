import '../styles/GameMessage.css'

function GameMessage({ message, onClose }) {
    if (!message) return null
    
    return (
        <div className="overlay">
            <div className="message-box">
                <p>{message === 'gameover' ? '💀 Game Over!' : '🎉 Level Up!'}</p>
                <button onClick={onClose}>Continue</button>
            </div>
        </div>
    )
}

export default GameMessage