const reverseString = function (strArgument) {

    let index = strArgument.length;
    let result = "";

    while (0 < index) {
        index--;
        result += strArgument.charAt(index);
    }
}

module.exports = reverseString
