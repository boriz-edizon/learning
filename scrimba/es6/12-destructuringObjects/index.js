const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
}

// const { name, club}  = player;
// console.log(`${name} plays for ${club}`);

// const { name, club, address: {city}} = player;
// console.log(`${name} lives in ${city}`)


const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name, age, projects: {diceGame}} = student;

console.log(name);
console.log(age);
console.log(diceGame);