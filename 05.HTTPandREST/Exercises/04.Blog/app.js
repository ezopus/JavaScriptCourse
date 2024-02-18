function attachEvents() {
    document.querySelector("#btnLoadPosts").addEventListener("click", loadPosts);
    document.querySelector("#btnViewPost").addEventListener("click", getPost);
    const optionsSelect = document.querySelector("#posts");

    async function loadPosts() {
        const posts = await getPosts();

        async function getPosts() {
            const postsResponse = await fetch("http://localhost:3030/jsonstore/blog/posts");
            return await postsResponse.json();
        }

        Object.keys(posts).forEach(post => {
            const option = document.createElement("option");
            option.value = `${post}`;
            option.textContent = `${posts[post].title.toUpperCase()}`;
            optionsSelect.appendChild(option);
        })
    }

    async function getPost() {
        const postId = document.querySelector("#posts option:checked");

        const commentResponse = await fetch("http://localhost:3030/jsonstore/blog/comments");
        const comments = await commentResponse.json();
        const postComments = Object.values(comments).filter(value => value.postId === postId.value);


        //add post title and body
        const currentPostResponse = await fetch(`http://localhost:3030/jsonstore/blog/posts/${postId.value}`);
        const currentPost = await currentPostResponse.json();

        document.querySelector("#post-title").textContent = currentPost.title;
        document.querySelector("#post-body").textContent = currentPost.body;


        //add comments
        const commentWrapper = document.querySelector("#post-comments");
        commentWrapper.innerHTML = "";

        postComments.forEach(comment => {
            const commentElement = document.createElement("li");
            commentElement.textContent = comment.text;
            commentWrapper.appendChild(commentElement);
        })
    }
}

attachEvents();