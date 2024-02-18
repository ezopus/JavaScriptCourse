function getInfo() {
    const stopId = document.querySelector("#stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const busList = document.querySelector("#buses");
            busList.innerHTML = "";

    fetch(url)
        .then((res) => res.json())
        .then((stop) => {
            document.querySelector("#stopName").textContent = stop.name;
            for (b in stop.buses) {
                const listElement = document.createElement("li");
                listElement.textContent = `Bus ${b} arrives in ${stop.buses[b]} minutes`;
                busList.appendChild(listElement);
            }
        })
        .catch(() => {
            document.querySelector("#stopName").textContent = "Error"
        });

}