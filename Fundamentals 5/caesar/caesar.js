const caesar = function () {
    let alfabe = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'ı', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let alfabe2 = ['A', 'B', 'C', 'D', 'E', 'f', 'g', 'h', 'ı', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let wordArray = word.split('');
    // let newArray = abc.split('');
    let result = '';
    wordArray.forEach(char => {
        if (alfabe.includes(char)) {
            result += alfabe[(alfabe.indexOf(char) + number) % alfabe.length]
        } else if (alfabe2.includes(char)) {
            result += alfabe2[(alfabe2.indexOf(char) + number) % alfabe2.length]
        }
    });
    return result;
    // alfabe[alfabe.indexOf(newArray[0]) + number]

}

module.exports = caesar
