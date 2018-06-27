const _ = require('lodash')

function countVowels(listOfCharacters) {
    let count = 0
    const vowels = ['a', 'i', 'o', 'u', 'e', 'A', 'I', 'O', 'U', 'E']
    for (const char of listOfCharacters) {
        if (vowels.indexOf(char) !== -1) {
            count = count + 1
        }
    }

    return count;
}


const isEqual = _.isEqual(countVowels('abracadabra'), 5)

console.log(isEqual)