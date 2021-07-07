const removeFromArray = function() {

    let arr = Array.from(arguments)
    let result = arr[0]
    arr = arr.splice(1,arr.length-1);

    arr.forEach(item => {
        if (result.includes(item)) {
            result.splice(result.indexOf(item),1)
        }
    }) 

    return result
}

module.exports = removeFromArray
