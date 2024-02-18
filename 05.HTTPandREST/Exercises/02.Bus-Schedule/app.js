function solve() {
    const departButton = document.querySelector("#depart");
    const arriveButton = document.querySelector("#arrive");
    const resultField = document.querySelector("#info span");
    let currentStop = {
        name: "",
        next: "depot",
    }

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`)
            .then(res => res.json())
            .then((busStop) => {
                currentStop = busStop;
                resultField.textContent = `Next stop ${currentStop.name}`
                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(() => {
                resultField.textContent = "Error";
                departButton.disabled = true;
                arriveButton.disabled = true;
            });
    }

    async function arrive() {
        resultField.textContent = `Arriving at ${currentStop.name}`
        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();