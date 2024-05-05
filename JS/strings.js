// making user name genrator
let fullName = prompt("Enter your full name: ");

let numberOfChar = fullName.length;
let cleanName = fullName.toLowerCase().trim().replace(/ /g, '');

let username = `Your username is @${cleanName}${numberOfChar}`;

console.log(username);