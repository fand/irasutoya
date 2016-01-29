'use strict';

const axios   = require('axios');
const cheerio = require('cheerio');
const request = require('request');
const p       = require('@fand/promisify');

const opts = {
  xmlMode             : true,
  withDomLvl1         : false,
  normalizeWhitespace : true,
};

function run (query) {
  p(request)(`http://www.irasutoya.com/search?q=${encodeURIComponent(query)}`).then((res) => {
    const $ = cheerio.load(res.body, opts);
    return $('.boxim > a').map((i, e) => $(e).attr('href'));
  })
  .then((urls) => {
    if (urls.length === 0) {
      throw new Error('No illusts found');
    }

    const entryUrl = urls[Math.floor(Math.random() * urls.length)];
    return p(request)(entryUrl);
  })
  .then((res) => {
    const $ = cheerio.load(res.body, opts);
    const imageUrl = $('.entry .separator a').attr('href');

    console.log(imageUrl);
  })
  .catch((e) => {
    console.log(e);
  });
}

module.exports = run;
