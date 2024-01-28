#!/usr/bin/node

const request = require('request');
const args = process.argv;

request.get(`${args[2]}`, '', (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const films = JSON.parse(body);
  const amount = films.results.filter(film => film.characters.includes('https://swapi-api.hbtn.io/api/people/18/'));
  console.log(amount.length);
});
