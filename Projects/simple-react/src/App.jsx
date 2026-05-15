import Header from "./Header";
import GameList from "./GameList";
import Footer from "./Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const games = [
    { title: "The Legend of Zelda: Ocarina of Time", console: "Nintendo 64" },
    { title: "Super Mario Bros.", console: "NES" },
    { title: "Sonic the Hedgehog", console: "Sega Genesis" },
    { title: "Final Fantasy VII", console: "PlayStation" },
    { title: "Super Smash Bros.", console: "Nintendo 64" },
    { title: "Castlevania: Symphony of the Night", console: "PlayStation" },
  ];

  const [filter, setFilter] = useState("");

  // data manipulation with .filter()

  const filteredGames = filter === ""
  ? games: games.filter(game =>
    game.console === filter
  );
  
  return (
    <>
    
    <Header />
    <main>
      <label htmlFor="consolefilter">Filter by console:</label>
      <select
        id="consolefilter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="Nintendo 64">Nintendo 64</option>
        <option value="NES">NES</option>
        <option value="Sega Genesis">Sega Genesis</option>
        <option value="PlayStation">PlayStation</option>
      </select>

      <p>Showing {filteredGames.length} of {games.length} games</p>
      <GameList games={filteredGames} />
    </main>
    <Footer />
    </>
  );
}

export default App;