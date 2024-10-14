// Write a function that checks a car's speed. If the speed is 70 km/h or below, return "OK". For every 5 km/h over 70, assign 1 point, but ignore speeds between 71-74 km/h (still return "OK"). If the driver accumulates more than 12 points, return "License suspended

// Solution
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        return "OK";
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12) {
        return "License suspended";
    } else {
        return `Points: ${points}`;
    }
}

console.log(checkSpeed(72)); // Output: OK



