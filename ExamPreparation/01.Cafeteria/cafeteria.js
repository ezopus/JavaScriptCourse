function solve(input) {
    const count = input.shift();
    const baristas = input
        .splice(0, count)
        .reduce((acc, curr) => {
            const [name, shift, coffeeTypes] = curr.split(" ");
            acc.push({name, shift, coffeeTypes: coffeeTypes.split(",")});
            return acc;
        }, [])

    let isClosed = false;

    input.forEach(i => {
        const [command, barista, ...tokens] = i.split(" / ");
        switch (command) {
            case "Prepare":
                prepareDrink(barista, tokens[0], tokens[1]);
                break;
            case "Change Shift":
                changeShift(barista, tokens[0]);
                break;
            case "Learn":
                learnDrink(barista, tokens[0]);
                break;
            case "Closed":
                isClosed = true;
                break;
        }
        if (isClosed) {
            return;
        }
    })

    baristas.forEach(b => {
        console.log(`Barista: ${b.name}, Shift: ${b.shift}, Drinks: ${b.coffeeTypes.join(", ")}`)
    })

    function prepareDrink(barista, shift, drink) {
        const currentBarista = baristas.find(b =>
            b.name === barista
            && b.shift === shift
            && b.coffeeTypes.find(c => c === drink))
        if (currentBarista) {
            console.log(`${currentBarista.name} has prepared a ${drink} for you!`)
        } else {
            console.log(`${barista} is not available to prepare a ${drink}.`)
        }
    }
    function changeShift(barista, shift) {
        const currentBarista = baristas.find(b => b.name === barista)
        if (currentBarista) {
            currentBarista.shift = shift;
            console.log(`${currentBarista.name} has updated his shift to: ${shift}`)
        }
    }
    function learnDrink(barista, drink) {
        const currentBarista = baristas.find(b => b.name === barista)
        if (currentBarista) {
            if (currentBarista.coffeeTypes.find(c => c === drink)) {
                console.log(`${currentBarista.name} knows how to make ${drink}.`)
            } else {
                currentBarista.coffeeTypes.push(drink);
                console.log(`${currentBarista.name} has learned a new coffee type: ${drink}.`)
            }
        }
    }
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

solve([
    '4',
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
    'Closed'
]);