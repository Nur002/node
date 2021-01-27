// const products = [
//     {name: "mandarin", price:145},
//     {name: "pomidor", price:120},
//     {name: "kivi", price:45},
//     {name: "badyryn", price:15},
//     {name: "kapusta", price:20}
// ]

// const cheapProducts = products.filter((item)=> item.price < 70)

// console.log(cheapProducts);


// const cars = [
//     {marka:"bmw",year:2001},
//     {marka:"toyota",year:2003},
//     {marka:"honda",year:2004},
//     {marka:"mers",year:2001},
//     {marka:"audi",year:2005}
// ]

// const car = cars.find((item)=> item.marka === "toyota")

// console.log(car.year);


const cars = [
    {marka:"bmw",year:2001},
    {marka:"toyota",year:2003},
    {marka:"honda",year:2004},
    {marka:"mers",year:2001},
    {marka:"audi",year:2005}
]

const car = cars.filter((item)=> item.year === 2001)

console.log(car.length);