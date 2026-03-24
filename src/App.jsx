import Scoreboard from "./components/Scoreboard";
import GameMessage from "./components/GameMessage";
import CardGrid from "./components/CardGrid";

function App() {
    return (
        <div>
            <h1>Memory Card</h1>
            <Scoreboard />
            <GameMessage />
            <CardGrid />
        </div>
    )
}

export default App