function solution() {
    const mainElement = document.querySelector("#main");

    getArticles().then();

    async function getArticles() {
        const response = await fetch("http://localhost:3030/jsonstore/advanced/articles/list")
        const articles = await response.json();
        Object.values(articles).forEach((value) => {
            mainElement.appendChild(createArticle(value._id, value.title))
        })
    }

    function createArticle(id, title) {
        const articleWrapper = document.createElement("div");
        articleWrapper.classList.add("accordion");

        const articleHead = document.createElement("div");
        articleHead.classList.add("head");

        const articleTitle = document.createElement("span");
        articleTitle.textContent = title;

        const articleButton = document.createElement("button");
        articleButton.id = id;
        articleButton.classList.add("button");
        articleButton.textContent = "More";
        articleButton.addEventListener("click", toggleArticleInfo)

        articleHead.appendChild(articleTitle);
        articleHead.appendChild(articleButton);

        articleWrapper.appendChild(articleHead);
        return articleWrapper;
    }

    async function toggleArticleInfo(e) {
        const button = e.target;
        const parent = button.parentNode.parentNode;
        if (button.textContent === "More") {
            button.textContent = "Less";

            if (!parent.querySelector(".extra")) {
                const res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`)
                const articleExtraInfo = await res.json();

                button.parentNode.parentNode.appendChild(createExtraInfo(articleExtraInfo));
            }
            button.parentNode.parentNode.querySelector(".extra").style.display = "block";

        } else {
            button.textContent = "More";
            button.parentNode.parentNode.querySelector(".extra").style.display = "none";
        }
    }

    function createExtraInfo(articleExtraInfo) {
        const extraWrapper = document.createElement("div");
        extraWrapper.classList.add("extra");

        const info = document.createElement("p")
        info.textContent = articleExtraInfo.content;

        extraWrapper.appendChild(info);
        return extraWrapper;
    }
}

solution();