const numbers =[ 1,2,3,12,3,5]

console.log(numbers.reduce((ans,item) => {
    return ans + item
},0));