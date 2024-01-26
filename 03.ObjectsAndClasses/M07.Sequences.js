function sequenceArray(arr) {
    const input = arr.reduce((acc, curr) => {
        acc.push(JSON.parse(curr).sort((a, b) => b - a));
        return acc;
    }, []);

    const result = []

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        let isUnique = true
        for (let j = 0; j < i; j++) {
            if (!compareTwoArrays(current, input[j])) {
                isUnique = false
            }
        }

        if (isUnique) {
            result.push(current)
        }
    }

    result.sort((a, b) => a.length - b.length).forEach(el => {
        console.log(`[${el.join(", ")}]`)
    })

    function compareTwoArrays(arrOne, arrTwo) {
        let areDifferent = false;
        for (let i = 0; i < arrOne.length; i++) {
            if (arrOne[i] !== arrTwo[i]) {
                areDifferent = true;
            }
        }
        return areDifferent;
    }
}


sequenceArray([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]",
]);


