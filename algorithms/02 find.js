const products = [
    {name: "mandarin", price:145},
    {name: "pomidor", price:120},
    {name: "kivi", price:45},
    {name: "badyryn", price:15},
    {name: "kapusta", price:20}
]

const product = products.find((item)=> item.name === "kivi")

console.log(product);