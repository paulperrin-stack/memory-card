import '../styles/Scoreboard.css'

function Scoreboard({ currentScore, bestScore, level }) {
    return (
        <div className="scoreboard">
            <p>Level: <span>{level + 1}</span></p>
            <p>Score: <span>{currentScore}</span></p>
            <p>Best: <span>{bestScore}</span></p>
        </div>
    )
}

export default Scoreboard