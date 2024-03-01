function solve(input) {
    const count = Number(input.shift());
    const astronauts = input
        .splice(0, count)
        .reduce((acc, curr) => {
            const [name, oxygen, energy] = curr.split(" ");
            acc.push({name, oxygen: Number(oxygen), energy: Number(energy)});
            return acc;
        }, [])
    const commands = input.reduce((acc, curr) => {
        const [command, name, token] = curr.split(" - ");
        acc.push({command, name, token})
        return acc;
    }, [])

    commands.forEach(entry => {
        let currentAstronaut = astronauts.find(a => a.name === entry.name);
        if (currentAstronaut) {
            switch (entry.command) {
                case "Explore":
                    if (currentAstronaut.energy >= Number(entry.token)) {
                        currentAstronaut.energy -= Number(entry.token);
                        console.log(`${currentAstronaut.name} has successfully explored a new area and now has ${currentAstronaut.energy} energy!`)
                    } else {
                        console.log(`${currentAstronaut.name} does not have enough energy to explore!`)
                    }
                    break;
                case "Refuel":
                    const currentEnergy = Number(entry.token);
                    const energyDifference = currentAstronaut.energy + currentEnergy - 200;
                    if (currentAstronaut.energy + currentEnergy > 200) {
                        console.log(`${currentAstronaut.name} refueled their energy by ${currentEnergy - energyDifference}!`)
                        currentAstronaut.energy = 200;
                    } else {
                        currentAstronaut.energy += currentEnergy;
                        console.log(`${currentAstronaut.name} refueled their energy by ${currentEnergy}!`)
                    }
                    break;
                case "Breathe":
                    const currentOxygen = Number(entry.token);
                    const oxygenDifference = currentAstronaut.oxygen + currentOxygen - 100;
                    if (currentAstronaut.oxygen + currentOxygen > 100) {
                        console.log(`${currentAstronaut.name} took a breath and recovered ${currentOxygen - oxygenDifference} oxygen!`)
                        currentAstronaut.oxygen = 100
                    } else {
                        currentAstronaut.oxygen += currentOxygen;
                        console.log(`${currentAstronaut.name} took a breath and recovered ${currentOxygen} oxygen!`)
                    }
                    break;
            }
        }
    })
    astronauts.forEach(a => {
        console.log(`Astronaut: ${a.name}, Oxygen: ${a.oxygen}, Energy: ${a.energy}`)
    })
}

// solve([
//     '3',
//     'John 50 120',
//     'Kate 80 180',
//     'Rob 70 150',
//     'Explore - John - 50',
//     'Refuel - Kate - 30',
//     'Breathe - Rob - 20',
//     'End'
// ])

solve([
    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End'
])