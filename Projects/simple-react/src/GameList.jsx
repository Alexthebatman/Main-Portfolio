function GameList ({ games }) {
    return (
        <ul className="gamelist">
            {games.map((game, index) => (
                <li key={index}>
                    <strong>{game.title}</strong> ({game.console})
                </li>
            ))}
        </ul>
    );
}

export default GameList;