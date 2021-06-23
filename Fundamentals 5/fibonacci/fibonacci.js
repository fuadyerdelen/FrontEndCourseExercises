const fibonacci = function (num) {
    Number(num);
    let fibonacci = [0, 1];

    for (i = 1; i < num; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    return console.log(fibonacci[fibonacci.length - 1]);
}

module.exports = fibonacci