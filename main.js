const path = require('path');
const express = require('express');
const axios = require('axios');
const Cheerio = require('cheerio');
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

const contractAddress = `0x856aA6Db02B14b159ED3EACAaa70Eb9e34811d24`;
const _account = `0x64bF23663F23dC5f452F9f00d7BeAe08072f978C`;

let url = `https://etherscan.io/token/generic-tokenholder-inventory?&contractAddress=${contractAddress}&a=${_account}&pUrl=token`;
  axios.get(url).then((data) => { 
    const $ = Cheerio.load(data.data);
    let str = $('#body > div.d-md-flex.justify-content-between.mb-4 > p').text().trim().match(/\d+/)[0];
    // console.log(str);
    count = parseInt(str);
    console.log(count);
  })