const fs = require('fs');
const genders = ['m', 'f'];
const maleNames = ['John', 'Paul', 'Hans', 'Mosh', 'Tom', 'Ben', 'Zenon', 'Tim', 'Owen', 'Xardas'];
const femaleNames = ['Sara', 'Maria', 'Elizabeth', 'Andariel', 'Theodora', 'Melisa', 'Paula', 'Scarlet','Meliora', 'Dreka'];
const lastNames = ['Doe', 'Smith', 'Kenobi', 'Biden', 'Gates', 'Hamadani', 'Cage', 'Lee', 'Braun', 'Freeman'];
const email = '@gmail.com';

  function randChoice(arr) {
    if (arr === genders) {
      return arr[Math.floor(Math.random() * 2)];    
    } else {
      return arr[Math.floor(Math.random() * 10)];
    }  
  };

  function generateEmail(name, sureName, email) {
    let newString = (name + '.' + sureName + email).toLocaleLowerCase();
    return newString;
  };

  function generatePhone(person) {
    let homePhone = [];
    let mobilePhone = [];
    mobilePhone.push(Math.floor(100000000 + Math.random() * 900000000));
  
    for (let index = 0; index < 9; index++) {
      homePhone.push(Math.floor(Math.random() * 9 + 1));
    }
  
    function createPhoneNumber(randomNumber) {
      let mask = '(0xx) xxx-xx-xx';
  
      randomNumber.forEach(item => {
        mask = mask.replace('x', item);
      });
  
      return mask;
    }
    
    if(person === 'm') {
      return createPhoneNumber(homePhone);
    } else {
      return mobilePhone.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "-");
    }
  }

 const people = [];
 let person = {};

  for (let index = 0; index < 20; index++){
    person[index] = {
      gender: sex = randChoice(genders),
      firstName: sex === 'm' ? nameOfMen = randChoice(maleNames) : nameOfFemale = randChoice(femaleNames),
      lastName: sureNameOf = randChoice(lastNames),
      age: Math.floor(Math.random() * (78 - 18 + 1) + 18),
      mail: sex === 'm' ? emailOf = generateEmail(nameOfMen, sureNameOf, email) : emailOf = generateEmail(nameOfFemale, sureNameOf, email),
      phone: sex === 'm' ? generatePhone('m') : generatePhone('f')  
    };
    people.push(person[index]); 
  }

 let arrayToString = JSON.stringify(Object.assign({}, person));

fs.writeFile('outputfile.txt', arrayToString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
