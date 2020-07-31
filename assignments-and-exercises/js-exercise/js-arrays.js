// // Exercise 1
// var numbers = [22, 12, 34, 35, 12, 34];
// console.log(numbers[numbers.length - 1]);

// // Exercise 2
// var friendsGroups = [
//     ["satyam", "shivam", "sundaram"],
//     ["preeti", "prakash", "thombre"],
//     ["sonu", "monu", "vinu"]
// ];
// console.log(friendsGroups[2][0]);

// Exercise 3
var todos = ["satyam"];
var input = prompt("What you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listItems();
    } else if (input === "new") {
        newItem();
    } else if (input === "delete") {
        deleteItem();
    }
    input = prompt("What you like to do?");
}
console.log("QUIT");

function listItems() {
    console.log("List of Items");
    console.log("**********");
    todos.forEach(function (todo, i) {
        console.log(i + " : " + todo);
    })
    console.log("**********");
}

function newItem() {
    var newToDo = prompt("Enter new To Do");
    todos.push(newToDo);
    console.log("Added New Item");
}

function deleteItem() {
    var index = prompt("Enter index to delete?");
    todos.splice(index, 1);
    console.log("Item Deleted from index " + index);
}

//Exercise 4
// var nums = [1, 2, 4, 5, 6, 7, 8, 9, 10, 4, 3, 235, 2, 234, 234, 25212, 2354, 2366, 23, 232, 45234];
// var colorss = ["red", "blues"];

// nums.forEach(function (color) {
//     if (color % 3 === 0) {
//         console.log(color);
//     }
// });