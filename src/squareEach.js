const _ = require('lodash')


const squareDigits = (num) => {
    let result = ''
    const arr = num.toString();
    for (let i = 0; i < arr.length; i++) {
        result += (parseInt(arr[i]) * parseInt(arr[i])).toString()
    }
    return parseInt(result)
}
const testValue = _.isEqual(squareDigits(9119), 811181)
console.log(testValue)