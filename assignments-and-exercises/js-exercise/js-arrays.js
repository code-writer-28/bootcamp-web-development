// Exercise 1
var numbers = [22, 12, 34, 35, 12, 34];
console.log(numbers[numbers.length - 1]);

// Exercise 2
var friendsGroups = [
    ["satyam", "shivam", "sundaram"],
    ["preeti", "prakash", "thombre"],
    ["sonu", "monu", "vinu"]
];
console.log(friendsGroups[2][0]);

// Exercise 3
var todos = ["satam"];
var input = prompt("What you like to do?");

while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        var newToDo = prompt("Enter new To Do");
        todos.push(newToDo);
    }
    input = prompt("What you like to do?");
}
console.log("QUIT");

//Exercise 4
var nums = [1, 2, 4, 5, 6, 7, 8, 9, 10, 4, 3, 235, 2, 234, 234, 25212, 2354, 2366, 23, 232, 45234];
var colorss = ["red", "blues"];

nums.forEach(function (color) {
    if (color % 3 === 0) {
        console.log(color);
    }
});