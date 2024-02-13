function loadRepos() {
    const repos = fetch("https://api.github.com/users/testnakov/repos")
        .then((res) => res.text())
        .then((body) => {
            document.querySelector("#res").textContent = body;
        });

}