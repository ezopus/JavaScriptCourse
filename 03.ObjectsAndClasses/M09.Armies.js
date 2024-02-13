function armyCommands(arr) {
    class General {
        constructor(name) {
            this.name = name;
            this.armies = {};
            this.totalArmy = 0;
        }
    }

    const result = arr.reduce((acc, curr) => {
        if (curr.includes("arrives")) {
            const [leader, _] = curr.split(" arrives");
            acc.push(new General(leader));
        } else if (curr.includes("defeated")) {
            const [leaderDefeated, _] = curr.split(" defeated");
            const deleteIndex = acc.findIndex((g) => g.name === leaderDefeated);
            acc.splice(deleteIndex, 1);
        } else if (curr.includes(":")) {
            let [leader, armyName, armyCount] = curr.split(/[:,]/g);
            armyName = armyName.trim();
            armyCount = Number(armyCount);

            const currentGeneral = acc.find((g) => g.name === leader);
            if (currentGeneral) {
                currentGeneral.armies[armyName] = armyCount;
                currentGeneral.totalArmy += Number(armyCount);
            }
        } else if (curr.includes("+")) {
            let [armyName, armyCount] = curr.split(" + ");
            armyCount = Number(armyCount);

            let currentGeneral = acc.find((g) => g.armies[armyName]);
            if (currentGeneral) {
                currentGeneral.armies[armyName] += armyCount;
                currentGeneral.totalArmy += Number(armyCount);
            }
        }
        return acc;
    }, []);

    result
        .sort((a, b) => b.totalArmy - a.totalArmy)
        .forEach((leader) => {
            console.log(`${leader.name}: ${leader.totalArmy}`);
            Object.keys(leader.armies)
                .sort((x, y) => leader.armies[y] - leader.armies[x])
                .forEach((a) => {
                    console.log(`>>> ${a} - ${leader.armies[a]}`);
                });
        });
}

armyCommands([
    "Rick Burr arrives",
    "Fergus: Wexamp, 30245",
    "Rick Burr: Juard, 50000",
    "Findlay arrives",
    "Findlay: Britox, 34540",
    "Wexamp + 6000",
    "Juard + 1350",
    "Britox + 4500",
    "Porter arrives",
    "Porter: Legion, 55000",
    "Legion + 302",
    "Rick Burr defeated",
    "Porter: Retix, 3205",
]);

armyCommands([
    "Rick Burr arrives",
    "Findlay arrives",
    "Rick Burr: Juard, 1500",
    "Wexamp arrives",
    "Findlay: Wexamp, 34540",
    "Wexamp + 340",
    "Wexamp: Britox, 1155",
    "Wexamp: Juard, 43423",
]);
