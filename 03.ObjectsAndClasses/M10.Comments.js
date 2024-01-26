function solve(arr) {
    class Article {
        constructor(name) {
            this.name = name;
            this.comments = [];
        }
    }

    const userList = [];
    const articleList = [];
    arr.forEach(token => {
        if (token.includes("user")) {
            const [_, username] = token.split("user ");
            userList.push(username);
        } else if (token.includes("article")) {
            const [_, article] = token.split("article ");
            articleList.push(new Article(article));
        } else {
            let tokens = token.split(": ");
            const [username, articleName] = tokens[0].split(" posts on ");
            const [commentTitle, commentContent] = tokens[1].split(", ");
            const currentArticle = articleList.find(a => a.name === articleName);
            if (userList.find(u => u === username) !== null
                && currentArticle) {
                currentArticle.comments.push({username: username, title: commentTitle, content: commentContent});
            }
        }
    })

    articleList.sort((a, b) => b.comments.length - a.comments.length).forEach((article) => {
        console.log(`Comments on ${article.name}`)
        article.comments.sort((a, b) => a.username.localeCompare(b.username)).forEach((el) => {
            console.log(`--- From user ${el.username}: ${el.title} - ${el.content}`);
        })
    })
}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);
