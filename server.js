// require express
const express = require('express');

// express server handling requests and responses
const app = express();

const port = 3000;

// make everything inside of public/ available
app.use(express.static('public'));

// route
app.get('/home', (request, response) => response.sendFile(__dirname + '/views/home-page.html'));

app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about-page.html'));

app.get('/works', (request, response) => response.sendFile(__dirname + '/views/works-page.html'));

app.get('/gallery', (request, response) => response.sendFile(__dirname + '/views/gallery-page.html'));

// server started
app.listen(port, () => {
  console.log(`My first app listening at http://localhost:${port}`);
});