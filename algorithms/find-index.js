const person = [
    { name: "Asan", age: 23 },
    { name: "Uson", age: 27 },
    { name: "Aman", age: 19 },
    { name: "Askar", age: 17 },
    { name: "Hasan", age: 22 }
]

// const filterF = (person) => {
//     if (person.name === "Uson") {
//         return true
//     } else {
//         return false
//     }
// }

const index = person.findIndex((person) => person.name==="Uson")
console.log(index);