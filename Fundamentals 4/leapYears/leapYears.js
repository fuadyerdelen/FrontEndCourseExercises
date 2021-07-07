const leapYears = function(years) {

    if ( years%4 === 0) {

        return true

    }else {
        return false
    }
    
}

module.exports = leapYears
