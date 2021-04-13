const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//----------------------- FOR VS FOR EACH -----------------------/
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]); //{ name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// }

// companies.forEach((company) => console.log(company)); // { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },

// companies.forEach((company) => console.log(company.name)); // Company Four

//----------------------- FOR VS FILTER -----------------------/
// const twentyOneAndOver = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     twentyOneAndOver.push(ages[i]);
//   }
// }

// const twentyOneAndOver = ages.filter((age) => age >= 21);
// console.log(twentyOneAndOver); // [33, 54, 21, 44, 61, 45, 25, 64, 32]

// const retailCompanies = [];

// for (let i = 0; i < companies.length; i++) {
//   if (companies[i].category === "Retail") {
//     retailCompanies.push(companies[i]);
//   }
// }

// const retailsCompanies = companies.filter(company=> company.category==='Retail')

// console.log(retailsCompanies);
// 0: {name: "Company Two", category: "Retail", start: 1992, end: 2008}
// 1: {name: "Company Four", category: "Retail", start: 1989, end: 2010}
// 2: {name: "Company Nine", category: "Retail", start: 1981, end: 1989}

// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start <= 1990
// );

// console.log(eightiesCompanies);

// const tenYearsAndOlderCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );

// console.log(tenYearsAndOlderCompanies)

//----------------------- MAP -----------------------/
// creates new array from a current array unlike filter and forEach

// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);  // returns undefined!
// //["Company One", "Company Two", "Company Three", "Company Four", "Company Five", "Company Six", "Company Seven", "Company Eight", "Company Nine"]

// const companyNamesForEach = companies.forEach((company) => company.name);
// console.log(companyNamesForEach);  // returns undefined!

// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// const ageSqRt = ages.map((age) => Math.sqrt(age));
// console.log(ageSqRt);

// const ageDouble = ages.map((age) => age * 2);
// console.log(ageDouble);

// const moreMath = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(moreMath)

//----------------------- SORT -----------------------/
// const sortedByDate = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedByDate);

// const lowestToHighestAge = ages.sort((a, b) => a - b);
// console.log(lowestToHighestAge);

// const highestToLowest = ages.sort((a, b) => b - a);
// console.log(highestToLowest);

//----------------------- REDUCE -----------------------/
// let ageSumFromForEach = 0;
// ages.forEach((age) => (ageSum += age));
// console.log(ageSum); //460

// let ageFromReduce = ages.reduce((total, age) => total + age, 0);
// console.log(ageFromReduce); //460

// let totalRangeOfAllCompanies = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalRangeOfAllCompanies); //118

//----------------------- COMBINED -----------------------/
const combined = ages
  .map((age) => age * 2) // [66, 24, 40, 32, 10, 108, 42, 88, 122, 26, 30, 90, 50, 128, 64] => 15 elements
  .filter((age) => age >= 40) //  [66, 40, 108, 42, 88, 122, 90, 50, 128, 64] => 10 elements
  .sort((a, b) => a - b) // [40, 42, 50, 64, 66, 88, 90, 108, 122, 128] =>  10 elements
  .reduce((total, age) => total + age, 0) // 798

console.log(combined);
