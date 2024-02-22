function attachEventsListeners() {
    document.querySelector("#convert").addEventListener("click", convertUnits);

    function convertUnits() {
        const inputField = document.querySelector("#inputDistance").value;
        const outputField = document.querySelector("#outputDistance");
        const input = document.querySelector("#inputUnits").value;
        const output = document.querySelector("#outputUnits").value;

        const inputToMeters = {
            "km": (value) => value * 1000,
            "m": (value) => value,
            "cm": (value) => value * 0.01,
            "mm": (value) => value * 0.001,
            "mi": (value) => value * 1609.34,
            "yrd": (value) => value * 0.9144,
            "ft": (value) => value * 0.3048,
            "in": (value) => value * 0.0254,
        }

        const metersToOutput = {
            "km": (value) => value / 1000,
            "m": (value) => value,
            "cm": (value) => value / 0.01,
            "mm": (value) => value / 0.001,
            "mi": (value) => value / 1609.34,
            "yrd": (value) => value / 0.9144,
            "ft": (value) => value / 0.3048,
            "in": (value) => value / 0.0254,
        }

       const meters = inputToMeters[input](inputField);

        outputField.value = metersToOutput[output](meters);
    }
}