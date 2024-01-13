function findMatching(drivers, name) {
    let upperCaseName = name.toUpperCase();
    return drivers.filter(function (driver) {
        return driver.toUpperCase() === upperCaseName
    });
};

function fuzzyMatch(drivers, firstLetters) {
    return drivers.filter(function (driver) {
        return driver.startsWith(firstLetters)
    });
};

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name === name
    });
};