//20
//3,6,9,12,15,18
//5,10,15
//35
//3,6,9,12,15,18,21,24,27,30,33
//5,10,15,20,25,30

function countMultiplies(num) {
    let sum = 0
    if (num < 3) {
        return null
    }
    // get multiples of 3 
    for (let i = 3; i <= num; i += 3) {
        if (i % 5 !== 0) {
            sum += i
        }
    }
    for (let i = 5; i <= num; i += 5) {
        sum += i
    }

    return sum
}

const result = countMultiplies(33)
console.log(result)