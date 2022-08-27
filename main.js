const path = require('path');
const ethers  = require("ethers");
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const apiKey = 'QU339WY2ZB4P5STB2GFPQJTSSAYPJC1KAR';
// var provider = new ethers.providers.EtherscanProvider("homestead", apiKey);
// provider.get
// console.log(provider);