function average(scores) {
    //add all scores together
    var total = 0;
    scores.forEach(function (score) {
        total += score;
    });

    //divide total by number of scores
    var average = total / scores.length;

    //round average
    return Math.round(average);
}

console.log("Average Score For Mathematics");
var scores = [100, 10, 10, 10, 100];
console.log(average(scores));


console.log("Average Score For Chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));