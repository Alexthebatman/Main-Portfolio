// this fetches the data file made by the fetch command which fetches the game from the API

fetch('games-data.json')
    .then(res => res.json())
    .then(games => {
        const gamebox = document.querySelector('.gamebox');

        // this puts each game into the slide by filling each property with the correct data

        games.forEach(game => {
            gamebox.innerHTML += `
                <div class="gameslide">
                    <p class="gamename">${game.name}</p>
                    <p class="gamegenre">${game.genres}</p>
                    <p class="gamerating">Rating: ${game.rating}/5</p>
                </div>
            `;
        });
    });

    // this is for a loop that cycles through the coupons on the site
const coupons = [
    "20% OFF ALL NINTENDO GAMES!",
    "BUY 2 GET 1 FREE - ATARI",
    "50% OFF SEGA CLASSICS!",
    "FREE RENTAL WITH PURCHASE!",
    "CLEARANCE: NES GAMES $5"
];

// this sets it to the first option in the array

let currentCoupon = 0;

// this sets the cycling up, it takes the current coupon and switches it to the next one
setInterval(() => {
    currentCoupon = currentCoupon + 1; // This sets the cycling up, it takes the current coupon and switches it to the next one, 
    
    if (currentCoupon >= coupons.length) {
        currentCoupon = 0;
    }
    
    document.querySelector('.coupon-text').textContent = coupons[currentCoupon]; // this changes the text content to whatever the new coupon is
}, 5000);