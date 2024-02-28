function solve(input) {
    const [count, ...rest] = input;
    const riders = rest.splice(0, count).reduce((acc, curr) => {
        const [name, fuel, position] = curr.split("|");
        acc[name] = {fuel: Number(fuel), position: Number(position), isDNF: false};
        return acc;
    }, {});

    const commands = rest.reduce((acc, curr) => {
        const [command, driver, ...action] = curr.split(" - ");
        acc.push({command, driver, action});
        return acc;
    }, []);

    commands.forEach(c => {
        switch (c.command) {
            case "StopForFuel":
                fuelStop(c.driver, c.action[0], c.action[1]);
                break;
            case "Overtaking":
                overtake(c.driver, c.action[0]);
                break;
            case "EngineFail":
                engineFail(c.driver, c.action[0]);
                break;
            case "Finish":
                finishRace(riders);
                return;
        }
    })
    function fuelStop(name, fuelCheck, changedPosition) {
        if (riders[name].fuel < fuelCheck) {
            riders[name].position = changedPosition;
            console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`)
        } else {
            console.log(`${name} does not need to stop for fuel!`)
        }
    }

    function overtake(riderOne, riderTwo) {
        if (riders[riderOne].position < riders[riderTwo].position) {
            const temp = riders[riderOne].position;
            riders[riderOne].position = riders[riderTwo].position;
            riders[riderTwo].position = temp;
            console.log(`${riderOne} overtook ${riderTwo}!`)
        }
    }

    function engineFail(name, lapsLeft) {
        riders[name].isDNF = true;
        const position = riders[name].position;
        console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
    }

    function finishRace(riders) {
        Object.keys(riders)
            .filter(r => !riders[r].isDNF)
            .forEach(key => {
                console.log(`${key}\n  Final position: ${riders[key].position}`)
            })
    }
}


solve(["3",
    "Valentino Rossi|40|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 4",

    "EngineFail - Marc Marquez - 10",
    "Finish"])

// solve((["4",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|3",
//     "Jorge Lorenzo|80|4",
//     "Johann Zarco|80|2",
//     "StopForFuel - Johann Zarco - 90 - 5",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"]))