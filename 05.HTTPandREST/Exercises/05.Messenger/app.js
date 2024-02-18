function attachEvents() {
    document.querySelector("#submit").addEventListener("click", sendMsg);
    document.querySelector("#refresh").addEventListener("click", refreshMsgs);

    async function sendMsg() {
        const name = document.querySelector('input[name="author"]');
        const messageContent = document.querySelector('input[name="content"]');
        const messageObject = {author: name.value, content: messageContent.value}

        await fetch("http://localhost:3030/jsonstore/messenger", {
                method: "POST",
                body: JSON.stringify(messageObject),
            }
        )
    }

    async function refreshMsgs() {

        const messageResponse = await fetch("http://localhost:3030/jsonstore/messenger");
        const messages = await messageResponse.json();

        const messagesJoined = [];
        Object.values(messages).forEach(msg => {
            messagesJoined.push(`${msg.author}: ${msg.content}`)
        })

        document.querySelector("#messages").textContent = messagesJoined.join("\n");
    }
}

attachEvents();