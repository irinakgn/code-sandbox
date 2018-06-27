const _ = require('lodash')

const validatePin = function (pin) {
    if (!(pin.length === 4 || pin.length === 6)) {
        return false;
    }

    for (const n of pin) {
        if (isNaN(Number(n)) === true) {
            return false
        }
    }

    return true;
}

const testOne = _.isEqual(validatePin('1234'), true)
const testTwo = _.isEqual(validatePin('12345'), false)
const testThree = _.isEqual(validatePin('a2345'), false)
const testFour = _.isEqual(validatePin('aaaa'), false)


console.log(testOne, testTwo, testThree, testFour)