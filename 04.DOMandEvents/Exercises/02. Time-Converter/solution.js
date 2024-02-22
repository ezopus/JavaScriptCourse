function attachEventsListeners() {

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    });

    hoursBtn.addEventListener('click', () => {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    });

    minutesBtn.addEventListener('click', () => {
        let minutes = minutesInput.value;
        hoursInput.value = minutes / 60;
        daysInput.value = minutes / 60 / 24;
        secondsInput.value = minutes * 60;
    });

    secondsBtn.addEventListener('click', () => {
        let seconds = secondsInput.value;
        hoursInput.value = seconds / 60 / 60;
        minutesInput.value = seconds / 60;
        daysInput.value = seconds / 60 / 60 / 24;
    });

    // const convertButtons = Array.from(document.querySelectorAll("input[type=\"button\"]"));
    // const inputFields = Array.from(document.querySelectorAll("input[type=\"text\"]"));
    //
    // convertButtons.forEach(b => {
    //     b.addEventListener("click", convertTime)
    // })
    //
    // function convertTime() {
    //     const input = inputFields.filter(f => f.value !== "")[0];
    //     let time = {};
    //     switch (input.id) {
    //         case "days":
    //             time = convertFromDays(input.value);
    //             break;
    //         case "hours":
    //             time = convertFromHours(input.value);
    //             break;
    //         case "minutes":
    //             time = convertFromMinutes(input.value);
    //             break;
    //         case "seconds":
    //             time = convertFromSeconds(input.value);
    //             break;
    //     }
    //     inputFields.forEach(field => {
    //         field.value = time[field.id];
    //     })
    // }
    //
    // function convertFromDays(input) {
    //     return {
    //         days: input,
    //         hours: 24 * input,
    //         minutes: 1440 * input,
    //         seconds: 86400 * input
    //     };
    // }
    //
    // function convertFromHours(input) {
    //     return {
    //         days: input / 24,
    //         hours: input,
    //         minutes: 60 * input,
    //         seconds: 3600 * input
    //     };
    // }
    //
    // function convertFromMinutes(input) {
    //     return {
    //         days: input / 1440,
    //         hours: input / 60,
    //         minutes: input,
    //         seconds: 60 * input,
    //     }
    // }
    //
    // function convertFromSeconds(input) {
    //     return {
    //         days: input / 86400,
    //         hours: input / 1440,
    //         minutes: input / 60,
    //         seconds: input,
    //     }
    // }

}
