let findTheOldest = function() {
    const people = [{
            name: 'Carly',
            yearOfBirth: 1942,
            yearOfDeath: 1970,
        },
        {
            name: 'Ray',
            yearOfBirth: 1962,
            yearOfDeath: 2011
        },
        {
            name: 'Jane',
            yearOfBirth: 1912,
            yearOfDeath: 1941
        },
    ]

    people.forEach(person => {
        person.age = person.yearOfDeath - person.yearOfBirth;
    })


    people.sort(function (a, b) {
        return b.age - a.age
    });

    return people[0].name;
}

module.exports = findTheOldest

