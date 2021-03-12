const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBornIn1500 = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year <= 1599;
});

//console.table(inventorsBornIn1500);
console.table(inventors);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

let invent = [];
inventors.map((inventor) => {
  invent = [...invent, { first: inventor.first, last: inventor.last }];
});

//console.log(invent);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

let sorted = inventors.sort(function (i1, i2) {
  if (i1.year < i2.year) {
    return -1;
  }
  if (i1.year > i2.year) {
    return 1;
  }
  return 0;
});

//console.log(sorted);

// Array.prototype.sort()
// 3.1 Sort the inventors by who lived the most

sorted = inventors.sort(function (i1, i2) {
  i1.age = i1.passed - i1.year;
  i2.age = i2.passed - i2.year;
  if (i1.passed - i1.year < i2.passed - i2.year) {
    return -1;
  }
  if (i1.passed - i1.year > i2.passed - i2.year) {
    return 1;
  }
  return 0;
});

//console.log(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived

sorted = inventors.sort(function (i1, i2) {
  i1.age = i1.passed - i1.year;
  i2.age = i2.passed - i2.year;
  if (i1.age < i2.age) {
    return 1;
  }
  if (i1.age > i2.age) {
    return -1;
  }
  return 0;
});

//console.log("lived", sorted);
