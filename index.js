// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const newDrivers = drivers.slice(0, 2)
    return newDrivers;
}

function returnLastTwoDrivers(drivers) {
    const newDrivers = drivers.slice(2, 4)
    return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function () {
        const newAmount = multiplier * multiplier;
        return newAmount
    }
}

function fareDoubler(fare) {
    const newFare = fare * 2;
    return newFare;
}

function fareTripler(fares) {
    const newFares = fares * 3;
    return newFares;
}

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}