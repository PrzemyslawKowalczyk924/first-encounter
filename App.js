const fs = require('fs');
 const genders = ['m', 'f'];
 const maleNames = ['John', 'Paul', 'Hans', 'Mosh', 'Tom', 'Ben', 'Zenon', 'Tim', 'Owen', 'Xardas'];
 const femaleNames = ['Sara', 'Maria', 'Elizabeth', 'Andariel', 'Theodora', 'Melisa', 'Paula', 'Scarlet','Meliora', 'Dreka'];
 const lastNames = ['Doe', 'Smith', 'Kenobi', 'Biden', 'Gates', 'Hamadani', 'Cage', 'Lee', 'Braun', 'Freeman'];

 function randChoice(arr) {
    if (arr === genders) {
        return arr[Math.floor(Math.random() * 2)];    
    } else {
        return arr[Math.floor(Math.random() * 10)];
    }  
 };

 const people = [];
 let person = {};

 for (let index = 0; index < 20; index++){
    person[index] = {
      gender: sex = randChoice(genders),
      firstName: sex === 'm' ? randChoice(maleNames) : randChoice(femaleNames),
      lastName: randChoice(lastNames),
      age: Math.floor(Math.random() * (78 - 18 + 1) + 18),
    };
    people.push(person[index]); 
 }

 let arrayToString = JSON.stringify(Object.assign({}, person));
 let stringToJsonObject = JSON.parse(arrayToString);


fs.writeFile('outputfile.txt', arrayToString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
