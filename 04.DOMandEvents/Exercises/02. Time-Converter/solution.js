function attachEventsListeners() {

    const convertButtons = Array.from(document.querySelectorAll("input[type=\"button\"]"));
    const inputFields = Array.from(document.querySelectorAll("input[type=\"text\"]"));

    convertButtons.forEach(b => {
        b.addEventListener("click", convertTime)
    })

    function convertTime(e) {

        const input = inputFields.filter(f => f.value !== "")[0];
        console.log(input);
        let time = {};
        switch (input.id) {
            case "days":
                time = convertFromDays(input.value);
                break;
            case "hours":
                time = convertFromHours(input.value);
                break;
            case "minutes":
                time = convertFromMinutes(input.value);
                break;
            case "seconds":
                time = convertFromSeconds(input.value);
                break;
        }
        inputFields.forEach(field => {
            field.value = time[field.id];
        })
    }

    function convertFromDays(input) {
        return {
            days: input,
            hours: 24 * input,
            minutes: 24 * 60 * input,
            seconds: 24 * 60 * 60 * input
        };
    }

    function convertFromHours(input) {
        return {
            days: Number((input / 24).toFixed(2)),
            hours: input,
            minutes: 60 * input,
            seconds: 60 * 60 * input
        };
    }

    function convertFromMinutes(input) {
        return {
            days: Number((input / 24 / 60).toFixed(2)),
            hours: Number((input / 60).toFixed(2)),
            minutes: input,
            seconds: 60 * input,
        }
    }

    function convertFromSeconds(input) {
        return {
            days: Number((input / 24 / 60 / 60).toFixed(2)),
            hours: Number((input / 24 / 60).toFixed(2)),
            minutes: Number((input / 60).toFixed(2)),
            seconds: input,
        }
    }

}
