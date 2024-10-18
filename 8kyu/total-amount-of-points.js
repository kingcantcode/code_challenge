// Write a function that takes an array of match results in the format ["x:y", ...] and returns the total points earned, where:

// Win (x > y): 3 points
// Loss (x < y): 0 points
// Tie (x = y): 1 point

// Solution
function points(games) {
    return games.reduce((points, game) => {
        const [x, y] = game.split(":").map(Number)
        if (x > y) return points + 3
        if (x < y) return points
        return points + 1
    }, 0)
}


console.log(points(["3:1", "2:2", "0:1"])); // Output: 4