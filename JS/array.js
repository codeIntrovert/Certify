// Create Arrays
let heroes = ["ironman", "hulk", "thor", "batman"];
let marks = [96, 75, 48, 83, 66];
let info = ["rahul", 86, "Delhi"];

// Accessing Array Elements
console.log(heroes[0]); // Output: ironman
console.log(marks[2]); // Output: 48
console.log(info[1]); // Output: 86

// Looping over an Array
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// Find the average marks of the entire class
let classMarks = [85, 97, 44, 37, 76, 60];
let total = 0;
for (let mark of classMarks) {
  total += mark;
}
let average = total / classMarks.length;
console.log("Average marks:", average);

// Applying a 10% discount to all prices
let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
  prices[i] *= 0.9; // Applying 10% discount
}
console.log("Prices after discount:", prices);

// Array Methods
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove the first company
companies.shift();
console.log("After removing first company:", companies);

// Remove Uber and add Ola in its place
let uberIndex = companies.indexOf("Uber");
companies.splice(uberIndex, 1, "Ola");
console.log("After replacing Uber with Ola:", companies);

// Add Amazon at the end
companies.push("Amazon");
console.log("After adding Amazon:", companies);
