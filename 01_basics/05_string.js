const Name = "Priyanka"
const repoCount = 50

// console.log(Name +  repoCount + " value") ;
console.log(`Hello my name is ${Name} and my repocount is ${repoCount}`)

const gameName = new String('priyanka-bg')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('i'));

// slicing
const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "      Priyanka    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://priyanka.com/priyanka%20gaikwad"
console.log(url);


console.log(url.replace('%20', '_'));
console.log(url.includes("priyanka"));

console.log(gameName.split('_'));
