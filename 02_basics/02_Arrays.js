const Marvel_Heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// Marvel_Heros.push(dc)

// console.log(Marvel_Heros);
// console.log(Marvel_Heros.length)

// const allHero = Marvel_Heros.concat(dc)

// console.log(allHero)

const all_new_heros = [...Marvel_Heros, ...dc]
// console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);

console.log(Array.isArray("Priyanka"));
console.log(Array.from("Priyanka"));
console.log(Array.from({name : "Priyanka"})); // returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
