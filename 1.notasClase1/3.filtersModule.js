

// este modulo solo va a contener funciones que me permitan filtrar



const filterEvens = arrayToFilter => {
    let result = arrayToFilter.filter(item => item %  2 === 0)
    return resultº
}

const filterOdds = arrayToFilter => {
    let result = arrayToFilter.filter(item => item %  2 !== 0)
    return result
}



export default {filterEvens,filterOdds}


/*
el objeto
{
    filterEvens: arrayToFilter => {
    let result = arrayToFilter.filter(item => item %  2 === 0)
    return result
    }
    filterOdds: arrayToFilter => {
    let result = arrayToFilter.filter(item => item %  2 !== 0)
    return result
    }
}


