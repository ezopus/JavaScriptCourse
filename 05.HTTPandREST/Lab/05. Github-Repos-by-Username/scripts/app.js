async function loadRepos() {
    const user = document.querySelector("#username").value;
    const listOutput = document.querySelector("#repos");
    listOutput.innerHTML = "";

    const userRepos = await fetch(`https://api.github.com/users/${user}/repos`);

    if (userRepos.status === 200) {
        const repos = await userRepos.json();
        createRepoList(repos);
    } else {
        listOutput.textContent = "Error";
    }

    function createRepoList(repos) {
        for (el of repos) {
            const link = document.createElement("a");
            const listItem = document.createElement("li");
            link.href = el["html_url"];
            link.textContent = el["full_name"];
            listItem.appendChild(link)
            listOutput.appendChild(listItem);
        }
    }
}