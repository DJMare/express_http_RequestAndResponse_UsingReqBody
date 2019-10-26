var express = require('express');
var router = express.Router();

//add an array string
let characters = ['Daenerys Targaryen', 'Arya Stark', 'Jon Snow', 'Sansa Stark',  'Sandor Clegane', 'Bran Stark', 'Missandei',  'Tyrion Lannister', 'Khal Drogo'];

/* GET home page. */
//update to match with array
router.get('/', function(req, res, next) {
  let queryCharacter = req.query.character;
//if the query is in the array then check in the string
  if (characters.includes(queryCharacter)) {
    res.send('Yep, we have  ' + queryCharacter + '.');
  } else {
    res.send('Nope, no ' + queryCharacter + ' here.');
  }
});

//use req.body in the POST route for a user to input a new character.
router.post('/', function(req, res, next) {
  let bodyCharacter = req.body;
//If the inputted character already exists within the array, it will return a string with that.
  if (characters.includes(bodyCharacter.character)) {
    res.send('Already have ' + bodyCharacter.character + ' thanks.');
//If it does not exist, the else statement will push the new character into the array and send back the updated array
  } else {
    characters.push(bodyCharacter.character);
    res.send(characters);
  }
});

module.exports = router;
