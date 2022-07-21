import filters from "./3.filtersModule.js"
let {filterEvens, filterOdds} = filters

let numberArray = [1, 2, 3, 4, 5,]


let evens = filterEvens(numberArray)
console.log('evens:', evens)


let odds = filterOdds(numberArray)
console.log('odds:', odds)



//console.log(numberArray)

/*
estas funciones se las lleva a: 3.filterModule.js
const filterEvens = arrayToFilter => {
    let result = arrayToFilter.filter(item => item %  2 === 0)
    return resultº
}

const filterOdds = arrayToFilter => {
    let result = arrayToFilter.filter(item => item %  2 !== 0)
    return result
}
*/

/*
let evens = filterEvens(numberArray)

console.log(evens)
*/

