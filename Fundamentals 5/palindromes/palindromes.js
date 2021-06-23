const palindromes = function(word) {
    let wordArray = word.split('');
    let result = [];
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'ı', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    wordArray.forEach(char => {
        if (chars.includes(char)) result.push(char);
    });


    if (result.toString() === result.reverse().toString()) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
