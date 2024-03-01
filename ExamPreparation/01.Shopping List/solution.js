function solve(input) {
    const groceries = input.shift().split("!");
    for (let c of input) {
        let isDone = false;
        const [command, ...tokens] = c.split(" ");
        let item = groceries.find(i => i === tokens[0]);
        let indexToRemove = groceries.indexOf(item);
        switch (command) {
            case "Urgent":
                if (!item) {
                    groceries.unshift(tokens[0])
                }
                break;
            case "Unnecessary":
                if (item) {
                    groceries.splice(indexToRemove, 1);
                }
                break;
            case "Correct":
                if (item) {
                    groceries.splice(indexToRemove, 1, tokens[1])
                }
                break;
            case"Rearrange":
                if (item) {
                    groceries.splice(indexToRemove, 1);
                    groceries.push(item);
                }
                break;
            case "Go Shopping!":
                isDone = true;
                break;
        }
        if (isDone) {
            break;
        }
    }
    console.log(groceries.join(", "));
}

solve([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
])

solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
])
