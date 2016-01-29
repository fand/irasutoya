'use strict';

const Nightmare = require('nightmare');
const vo        = require('vo');

const run = function* (query) {
  const n = Nightmare();
  yield n.goto(`http://www.irasutoya.com/search?q=${query}`);

  const urls = yield n.evaluate((selector) => {
    const as = document.querySelectorAll(selector);
    return [].map.call(as, (a) => a.getAttribute('href'));
  }, '.boxim > a');

  const entryUrl = urls[Math.floor(Math.random() * urls.length)];

  const imageUrl = yield n.goto(entryUrl).evaluate((selector) => {
    return document.querySelector(selector).getAttribute('href');
  }, '.entry > .separator > a');

  console.log(imageUrl);

  yield n.end();
};

module.exports = function (query) {
  vo(run)(query, (err, result) => {
    if (err) { throw err; }
  });
};
