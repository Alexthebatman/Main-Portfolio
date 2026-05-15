// AHHHHHHHH SERVERRRR I WANT EXPRESS

// importing the goods and not shorthanding it

const http = require('http');
const fs = require('fs');

// html pages

const indexPg = fs.readFileSync('./index.html');
const aboutPg = fs.readFileSync('./about.html');
const errorPg = fs.readFileSync('./404.html');

// css files

const styles = fs.readFileSync('./styles.css');
const aboutStyles = fs.readFileSync('./aboutstyles.css');
const errorStyles = fs.readFileSync('./404styles.css');

// javascript files and JSON

const script = fs.readFileSync('./script.js');
const gamesData = fs.readFileSync('./games-data.json');

// images and our main star, that's right, the DUCK

const exitImg = fs.readFileSync('./exit.png');
const aboutImg = fs.readFileSync('./about.png');
const duckImg = fs.readFileSync('./duck.svg');
const bgImg = fs.readFileSync('./background.jpeg');
const borderImg = fs.readFileSync('./border.jpeg');
const emilyImg = fs.readFileSync('./stickynotes/emily.png');
const stockImg = fs.readFileSync('./stickynotes/stock.png');
const susanImg = fs.readFileSync('./stickynotes/susan.png');

// creating the server. not the restaraunt kind, albeit i am kind of hungry

const server = http.createServer((req, res) => {
    const url = req.url;

    // pages

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(indexPg);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(aboutPg);
        res.end();
    }
    // css
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(styles);
        res.end();
    } else if (url === '/aboutstyles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(aboutStyles);
        res.end();
    } else if (url === '/404styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(errorStyles);
        res.end();
    }
    // javascript and JSON

    else if (url === '/script.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(script);
        res.end();
    } else if (url === '/games-data.json') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.write(gamesData);
        res.end();
    }
    // images

    else if (url === '/exit.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(exitImg);
        res.end();
    } else if (url === '/about.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(aboutImg);
        res.end();
    } else if (url === '/duck.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(duckImg);
        res.end();
    } else if (url === '/background.jpeg') {
        res.writeHead(200, { 'content-type': 'image/jpeg' });
        res.write(bgImg);
        res.end();
    } else if (url === '/border.jpeg') {
        res.writeHead(200, { 'content-type': 'image/jpeg' });
        res.write(borderImg);
        res.end();
    } else if (url === '/stickynotes/emily.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(emilyImg);
        res.end();
    } else if (url === '/stickynotes/stock.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(stockImg);
        res.end();
    } else if (url === '/stickynotes/susan.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(susanImg);
        res.end();
    }
    // 404 for everything else
        
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write(errorPg);
        res.end();
    }
});

server.listen(8080);
console.log('Server running at http://localhost:8080/');