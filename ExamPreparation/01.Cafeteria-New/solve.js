function solve(input) {
    class Employee {
        constructor(name, shift, drinks) {
            this.name = name;
            this.shift = shift;
            this.drinks = drinks;
        }
    }

    let employees = [];
    const countOfEmployees = input.shift();
    for (let i = 0; i < countOfEmployees; i++) {
        let tokens = input.shift();
        let [name, shift, drinks] = tokens.split(" ");
        drinks = drinks.split(",");
        employees.push(new Employee(name, shift, drinks))
    }

    while (input[0] !== "Closed") {
        const [command, currentBaristaName, ...tokens] = input.shift().split(" / ");
        let currentBarista = employees.find(e => e.name === currentBaristaName);
        switch (command) {
            case "Learn":
                if (currentBarista !== null) {
                    if (currentBarista.drinks.includes(tokens[0])) {
                        console.log(`${currentBarista.name} knows how to make ${tokens[0]}.`)
                    }
                    else {
                        currentBarista.drinks.push(tokens[0]);
                        console.log(`${currentBarista.name} has learned a new coffee type: ${tokens[0]}.`)
                    }
                }
                break;
            case "Prepare":
                if (currentBarista === null || currentBarista.shift !== tokens[0]) {
                    console.log(`${currentBaristaName} is not available to prepare a ${tokens[1]}.`)
                } else {
                    if (currentBarista.drinks.includes(`${tokens[1]}`)){
                        console.log(`${currentBarista.name} has prepared a ${tokens[1]} for you!`);
                    }
                    else
                    {
                        console.log(`${currentBaristaName} is not available to prepare a ${tokens[1]}.`)
                    }
                }
                break;
            case "Change Shift":
                if (currentBarista !== null) {
                    currentBarista.shift = tokens[0];
                    console.log(`${currentBarista.name} has updated his shift to: ${tokens[0]}`);
                }
                break;
        }
    }

    employees.forEach(e => {
        console.log(`Barista: ${e.name}, Shift: ${e.shift}, Drinks: ${e.drinks.join(", ")}`);
    })
}

// solve([
//     '3',
//     'Alice day Espresso,Cappuccino',
//     'Bob night Latte,Mocha',
//     'Carol day Americano,Mocha',
//     'Prepare / Alice / day / Espresso',
//     'Change Shift / Bob / night',
//     'Learn / Carol / Latte',
//     'Learn / Bob / Latte',
//     'Prepare / Bob / night / Latte',
//     'Closed'
// ]);

solve (['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']);