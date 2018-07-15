
const isIsogram = (word) => {

    // [a],b,c,d,f,g,h,h,r,a

    for (let i = 0; i < word.length; i++) {
        const charOne = word[i];
        for (let j = i + 1; j < word.length; j++) {
            if (charOne === word[j]) {
                return false;
            }
        }
    }
    return true;
}

const result = isIsogram('aba')
console.log(result)