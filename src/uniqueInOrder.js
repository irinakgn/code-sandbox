const _ = require('lodash')

const uniqueInOrder = function (iterable) {
    const arr = []
    let prev = ''
    for (let item of iterable) {

        if (prev !== item) {
            prev = item;
            arr.push(item)
        }
    }
    return arr;
}


const testOne = _.isEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
const testTwo = _.isEqual(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
const testThree = _.isEqual(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3])


console.log(testOne, testTwo, testThree)