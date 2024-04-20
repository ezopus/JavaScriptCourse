function solve(input) {
    let count = input.shift();
    let heroes = [];
    for (let i = 0; i < count; i++) {
        let [name, hp, bullets] = input.shift().split(" ");
        if (hp > 100) {
            hp = 100;
        }
        heroes.push({name: name, hp, bullets});
    }

    while (input[0] !== 'Ride Off Into Sunset') {
        const [command, hero, ...tokens] = input.shift().split(" - ");
        const currentHero = heroes.find(h => h.name === hero);
        switch (command) {
            case "FireShot":
                if (currentHero.bullets > 0) {
                    currentHero.bullets--;
                    console.log(`${currentHero.name} has successfully hit ${tokens[0]} and now has ${currentHero.bullets} bullets!`)
                } else {
                    console.log(`${currentHero.name} doesn't have enough bullets to shoot at ${tokens[0]}!`)
                }
                break;
            case "TakeHit":
                currentHero.hp -= Number(tokens[0]);
                if (currentHero.hp > 0) {
                    console.log(`${currentHero.name} took a hit for ${tokens[0]} HP from ${tokens[1]} and now has ${currentHero.hp} HP!`)
                } else {
                    console.log(`${currentHero.name} was gunned down by ${tokens[1]}!`)
                    let indexOfCurrentHero = heroes.findIndex(i => i.name === currentHero.name);
                    heroes.splice(indexOfCurrentHero, 1);
                }
                break;
            case "Reload":
                if (currentHero.bullets < 6) {
                    console.log(`${currentHero.name} reloaded ${6 - currentHero.bullets} bullets!`);
                    currentHero.bullets = 6;
                } else {
                    console.log(`${currentHero.name}'s pistol is fully loaded!`)
                }
                break;
            case "PatchUp":
                if (currentHero.hp < 100) {
                    console.log(`${currentHero.name} patched up and recovered ${tokens[0]} HP!`);
                    if (currentHero.hp + Number(tokens[0]) > 100) {
                        currentHero.hp = 100;
                    } else {
                        currentHero.hp += Number(tokens[0]);
                    }
                } else {
                    console.log(`${currentHero.name} is in full health!`)
                }
                break;
        }
    }

    for (let hero of heroes.filter(h => h.hp > 0)) {
        console.log(`${hero.name}`)
        console.log(` HP: ${hero.hp}`)
        console.log(` Bullets: ${hero.bullets}`)
    }
}

// solve(["2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"])

solve(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"])

// solve(["2",
//     "Gus 100 4",
//     "Walt 100 5",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Walt - 100 - Bandit",
//     "Reload - Gus",
//     "Ride Off Into Sunset"])