async function loadCommits() {
    // Try it with Fetch API
    const user = document.querySelector("#username").value;
    const repo = document.querySelector("#repo").value;

    const listOutput = document.querySelector("#commits");
    listOutput.innerHTML = "";

    const request = await fetch(`https://api.github.com/repos/${user}/${repo}/commits`);

    if (request.status === 200) {
        const commits = await request.json();
        for (let c of commits) {
            console.log(c)
            const listItem = document.createElement("li");
            listItem.textContent = `${c.commit.author.name}: ${c.commit.message}`;
            listOutput.appendChild(listItem);
        }

    } else {
        const outputError = document.createElement("li");
        outputError.textContent = `Error: ${request.status} (Not Found)`;
        listOutput.appendChild(outputError);
    }
}