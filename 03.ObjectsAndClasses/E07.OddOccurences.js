function printOddOccurences(str) {
    const result = str
        .toLowerCase()
        .split(" ")
        .reduce((acc, curr) => {
            if (!acc.hasOwnProperty(curr)) {
                acc[curr] = 0;
            }
            acc[curr]++;
            return acc;
        }, {});

    console.log(
        Object.keys(result)
            .filter((word) => result[word] % 2 !== 0)
            .join(" ")
    );
}

printOddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

printOddOccurences("Cake IS SWEET is Soft CAKE sweet Food");
