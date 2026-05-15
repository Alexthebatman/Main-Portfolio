// sets up my constants

const gameinput = document.getElementById("gamename");
const addgame = document.getElementById("addgame");
const gamelist = document.getElementById("gamelist");


// this gets the game from local storage and returns it in an array. It returns an empty array if there are no games.

function getgames() {
    const games = localStorage.getItem("games");
    if (games) {
        return JSON.parse(games);
    }
    return [];
}

// this is what saves the games into the local storage. It saves the array as a string.

function savegames(games) {
    localStorage.setItem("games", JSON.stringify(games));
}

// this is the most important function, it renders the games onto the page. It also adds the delete and edit buttons to each game.

function rendergames() {
    const games = getgames();
    gamelist.innerHTML = "";
    games.forEach((game, index) => { // for each loop which creates a game item for each game and adds it to the game list.
        const gameitem = document.createElement("div");
        gameitem.textContent = game;
        gamelist.appendChild(gameitem);

        // delete button

        const deletebutton = document.createElement("button");
        deletebutton.textContent = "Delete";
        deletebutton.addEventListener("click", () => {
        const games = getgames();
        games.splice(index, 1);
        savegames(games);
        rendergames();
    });

        // edit button

        const editbutton = document.createElement("button");
        editbutton.textContent = "Edit";
        editbutton.addEventListener("click", () => {
        const newgamename = prompt("Enter new game name:", game);
        if (newgamename) {
            const games = getgames();
            games[index] = newgamename;
            savegames(games);
            rendergames();
        }
    });

        // button group to keep delete and edit together so they're spaced normally.
        const buttongroup = document.createElement("div");
        buttongroup.className = "game-buttons";
        buttongroup.appendChild(deletebutton);
        buttongroup.appendChild(editbutton);
        gameitem.appendChild(buttongroup);
    });
}

addgame.addEventListener("click", () => { // this adds the game to the list when the add game button is clicked. If the input is empty, it does nothing.
    const gamename = gameinput.value.trim();
    if (gamename) {
        const games = getgames();
        games.push(gamename);
        savegames(games);
        rendergames();
        gameinput.value = "";
    }
});

// allows you to press enter to add the game instead of having to click every time.

gameinput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addgame.click();
    }
});

// inital render
rendergames();