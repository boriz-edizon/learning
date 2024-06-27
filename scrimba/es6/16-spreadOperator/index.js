let contacts = ["Mary", "Joel", "Danny"]

let personalFriends = contacts; // reference
let personalFriends1 = ["David",...contacts, "Lily"] //copy

contacts.push("John")

console.log(personalFriends)

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,                     // copy
    position: "Software Developer"
}

console.log(employee)