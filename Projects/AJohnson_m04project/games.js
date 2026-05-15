// imports

const https = require('https');
const fs = require('fs');
const _ = require('lodash');
const figlet = require('figlet');

// API Key for my reviews

const API_KEY = '122241539d6f4e3caf835bf5ad59c871';

// figlet header for ASCII art

figlet('Rocket\'s Games!', function(err, data) {
    if (err) {
        console.log('Figlet is broken...');
        console.dir(err);
        return;
    }

    console.log(data);
    console.log('Fetching games');

    // url const for the API request

    const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&ordering=-rating&dates=1970-01-01,1999-12-31&platforms=49,43,26`;

    https.get(url, (res) => {
        let rawdata = '';

        // for the data that arrives, add it to rawdata

        res.on('data', (chunk) => {
            rawdata += chunk;
        });

        // when the response ends, parse the data and write it to a file
        res.on('end', () => {
            const data = JSON.parse(rawdata);
            const games = data.results;

            console.log('Got ' + games.length + ' games');

            // lodash for filtering rating

            const topgames = _.filter(games, (g) => g.rating >= 4.5);

            // sorting the games by rating

            const sorted = _.orderBy(topgames, ['rating'], ['desc']);

            // return the cleaned data
            
            const cleaned = _.map(sorted, (g) => {
                return {
                    name: g.name,
                    rating: g.rating,
                    released: g.released,
                    genres: g.genres.length > 0 ? _.map(g.genres, 'name').join(', ') : 'N/A' // If no genre is found, say N/A so there are no blanks
                };
            });

            // show result in console

            console.log(cleaned);

            // write the cleaned data to a file

            fs.writeFileSync('games-data.json', JSON.stringify(cleaned, null, 2));
            console.log('Data written to games-data.json');
        });
    });
});