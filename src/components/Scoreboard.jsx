function Scoreboard({ currentScore, bestScore, level }) {
    return (
        <div>
            <p>Level: {level + 1}</p>
            <p>Score: {currentScore}</p>
            <p>Best: {bestScore}</p>
        </div>
    )
}

export default Scoreboard