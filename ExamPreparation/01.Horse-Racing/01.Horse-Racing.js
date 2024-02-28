function solve(input) {
    let horses = input.shift().split("|");
    horses = horses.reduce((acc, curr, index) => {
        acc.push({name: curr, position: (horses.length - index)});
        return acc;
    }, [])
    // console.log(horses)
    const commands = input.reduce((acc, curr) => {
        const c = curr.split(" ");
        acc.push(c)
        return acc;
    }, [])
    // console.log(commands)

    commands.every(commandTokens => {
        switch (commandTokens[0]) {
            case "Retake":
                const overtaking = horses.find(h => h.name === commandTokens[1]);
                const overtaken = horses.find(h => h.name === commandTokens[2]);
                if (overtaking && overtaken && overtaking.position > overtaken.position) {
                    const temp = overtaking.position;
                    overtaking.position = overtaken.position;
                    overtaken.position = temp;
                    console.log(`${overtaking.name} retakes ${overtaken.name}.`)
                }
                return true;

            case "Rage":
                const raging = horses.find(h => h.name === commandTokens[1]);
                if (raging && raging.position === 2) {
                    const first = horses.find(h => h.position === 1);
                    if (first) {
                        first.position = 2;
                    }
                    raging.position = 1;
                } else if (raging && raging.position > 2) {
                    horses
                        .filter(h => h.position < raging.position && h.position >= raging.position - 2)
                        .forEach(h => h.position++);
                    raging.position -= 2;
                }
                console.log(`${raging.name} rages 2 positions ahead.`)
                return true;

            case "Trouble":
                const dropping = horses.find(h => h.name === commandTokens[1]);
                if (dropping && dropping.position < horses.length) {
                    const gaining = horses.find(h => h.position === dropping.position + 1)
                    dropping.position++;
                    gaining.position--;
                    console.log(`Trouble for ${dropping.name} - drops one position.`)
                }
                return true;

            case "Miracle":
                const miracle = horses.find(h => h.position === horses.length);
                horses.forEach(h => h.position++);
                miracle.position = 1;
                console.log(`What a miracle - ${miracle.name} becomes first.`)
                return true;

            case "Finish":
                console.log(horses.sort((a, b) => b.position - a.position).map(h => h.name).join("->"));
                console.log(`The winner is: ${horses.find(h => h.position === 1).name}`)
                return false;
        }
    })
}

// solve(['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish'])
//
// console.log("---------------")
//
// solve(['Onyx|Domino|Sugar|Fiona',
//     'Trouble Onyx',
//     'Retake Onyx Sugar',
//     'Rage Domino',
//     'Miracle',
//     'Finish'])
//
// console.log("---------------")
//
// solve(['Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'])

// solve(['Fancy|Domino|Sugar|Bella', 'Miracle', 'Miracle', "Miracle", 'Finish'])
// solve(['Fancy|Domino|Sugar|Bella', 'Miracle', 'Retake Bella Fancy', 'Retake Bella Domino', 'Retake Sugar Domino', "Miracle", 'Rage Bella', 'Finish'])