function calculateDemeritPoints(speed) {
    let speedLimit = 70;
    let kmPerPoint = 5;
    let maxpoints = 12;

    if (speed < speedLimit) {
        return ("Ok");
    }

    let speedExceeded = speed - speedLimit;

    let demeritPoints = Math.floor(speedExceeded / kmPerPoint);{

    return (`Points: ${demeritPoints}`);
    }
    if (demeritPoints > maxpoints) {
        return ("License suspended");
    }
}