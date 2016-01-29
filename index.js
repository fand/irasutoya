'use strict';

const axios   = require('axios');
const cheerio = require('cheerio');

function run (query) {
  axios.get(`http://www.irasutoya.com/search?q=${query}`).then((html) => {
    const $ = cheerio.load(html);
    return $('.boxim > a').map((i, e) => $(e).attr('href'));
  })
  .then((urls) => {
    if (urls.length === 0) {
      throw new Error('No illusts found');
    }

    const entryUrl = urls[Math.floor(Math.random() * urls.length)];
    return axios.get(entryUrl);
  })
  .then((html) => {
    const $ = cheerio.load(html);
    const imageUrl = $('.entry > .separator > a').attr('href');

    console.log(imageUrl);
  })
  .catch((e) => {
    console.log(e);
  });
}

module.exports = run;
