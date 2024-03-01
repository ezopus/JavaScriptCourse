function solve(input) {
    const count = Number(input.shift());
    const pieces = input
        .splice(0, count)
        .reduce((acc, curr) => {
            const [name, composer, key] = curr.split("|");
            acc.push({name, composer, key});
            return acc;
        }, [])
    const commands = input.reduce((acc, curr) => {
        const [command, piece, ...tokens] = curr.split("|");
        acc.push({command, name: piece, tokens})
        return acc;
    }, [])

    commands.forEach(entry => {
        let currentPiece = pieces.find(p => p.name === entry.name);
        // console.log(currentPiece)
        switch (entry.command) {
            case "Add":
                if (currentPiece) {
                    console.log(`${entry.name} is already in the collection!`)
                } else {
                    pieces.push({name: entry.name, composer: entry.tokens[0], key: entry.tokens[1]})
                    console.log(`${entry.name} by ${entry.tokens[0]} in ${entry.tokens[1]} added to the collection!`)
                }
                break;
            case "Remove":
                if (currentPiece) {
                    let indexToRemove = pieces.indexOf(currentPiece);
                    pieces.splice(indexToRemove, 1);
                    console.log(`Successfully removed ${entry.name}!`)
                } else {
                    console.log(`Invalid operation! ${entry.name} does not exist in the collection.`)
                }
                break;
            case "ChangeKey":
                if (currentPiece) {
                    currentPiece.key = entry.tokens[0];
                    console.log(`Changed the key of ${entry.name} to ${entry.tokens[0]}!`)
                } else {
                    console.log(`Invalid operation! ${entry.name} does not exist in the collection.`)
                }
                break;
        }
    })

    pieces.forEach(p => {
        console.log(`${p.name} -> Composer: ${p.composer}, Key: ${p.key}`)
    })
}

// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])