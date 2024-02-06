function encodeAndDecodeMessages() {
    const inputMessage = document.querySelector("#main div textarea");

    const outputMessage = document.querySelector("#main div:nth-of-type(2) textarea");

    document.querySelector("#main div button").addEventListener("click", encodeMessage)
    document.querySelector("#main div:nth-of-type(2) button").addEventListener("click", decodeMessage)

    function encodeMessage() {
        const encodedText = [];
        const text = Array.from(inputMessage.value);
        text.forEach((el,) => {
            encodedText.push(String.fromCharCode(el.charCodeAt(0) + 1));
        });
        outputMessage.value = encodedText.join("");
        inputMessage.value = "";
    }

    function decodeMessage() {
        const decodedText = [];
        const text = Array.from(outputMessage.value);
        text.forEach((el,) => {
            decodedText.push(String.fromCharCode(el.charCodeAt(0) - 1));
        });
        outputMessage.value = decodedText.join("");

    }
}