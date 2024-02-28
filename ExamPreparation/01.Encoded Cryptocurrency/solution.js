function solve(input) {
    let message = input.shift();
    const commands = input
        .reduce((acc, curr) => {
            const [command, ...tokens] = curr.split("?");
            acc.push({command, tokens});
            return acc;
        }, [])

    commands.forEach(c => {
        switch (c.command) {
            case "TakeEven":
                message = message
                    .split("")
                    .reduce((acc, curr, index) => {
                        if (index % 2 === 0) {
                            acc.push(curr);
                        }
                        return acc;
                    }, [])
                    .join("");
                console.log(message)
                break;

            case "ChangeAll":
                const substring = c.tokens[0];
                const replacement = c.tokens[1];
                while (message.includes(substring)) {
                    message = message.replace(substring, replacement);
                }
                console.log(message)
                break;

            case "Reverse":
                const reverseString = c.tokens[0];
                if (message.includes(reverseString)) {
                    message = message.replace(reverseString, "");
                    message += reverseString.split("").reverse().join("");
                    console.log(message)
                } else {
                    console.log("error")
                }
                break;

            case "Buy":
                console.log(`The cryptocurrency is: ${message}`)
                break;
        }
    })
}

solve([
    "z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"
])