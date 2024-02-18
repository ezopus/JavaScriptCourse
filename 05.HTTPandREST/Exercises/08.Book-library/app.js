function attachEvents() {
    document.querySelector("#loadBooks").addEventListener("click", loadBooks)
    const tableBody = document.querySelector("body table tbody");
    const submitForm = document.querySelector("#form");
    const submitButton = document.querySelector("#form button");
    submitButton.addEventListener("click", submitBook);

    const titleField = document.querySelector('input[name="title"]');
    const authorField = document.querySelector('input[name="author"]');

    async function loadBooks() {
        tableBody.innerHTML = "";

        const getBooksResponse = await fetch("http://localhost:3030/jsonstore/collections/books");
        const books = await getBooksResponse.json();

        Object.entries(books).forEach(([key, entry]) => {
            const title = document.createElement("td");
            title.textContent = entry.title;
            const author = document.createElement("td");
            author.textContent = entry.author;

            const rowButtons = document.createElement("td");
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.setAttribute("data-book-id", key);
            editButton.addEventListener("click", editBook)

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", deleteBook)

            rowButtons.appendChild(editButton);
            rowButtons.appendChild(deleteButton)

            const row = document.createElement("tr");
            row.appendChild(title);
            row.appendChild(author);
            row.appendChild(rowButtons);
            tableBody.appendChild(row);
        })
    }

    async function submitBook() {
        const isEditing = document.querySelector("#form button").textContent.includes("Save");
        isEditing ? await editBook() : await createBook();
    }

    async function createBook() {
        submitButton.textContent = "Submit";
        const newBook = {
            title: titleField.value,
            author: authorField.value,
        }
        await fetch("http://localhost:3030/jsonstore/collections/books", {
            method: "POST",
            body: JSON.stringify(newBook),
        })
        await loadBooks();
        titleField.value = "";
        authorField.value = "";
    }

    async function editBook(e) {
        document.querySelector("#form h3").textContent = "Edit FORM";
        submitButton.textContent = "Save";

        const editTitle = e.currentTarget.parentNode.parentNode.querySelector("td:first-of-type").textContent;
        const editAuthor = e.currentTarget.parentNode.parentNode.querySelector("td:nth-of-type(2)").textContent;

        titleField.value = editTitle;
        authorField.value = editAuthor;
        submitButton.setAttribute("data-book-id", e.currentTarget.getAttribute("data-book-id"));
        submitButton.removeEventListener("click", submitBook);
        submitButton.addEventListener("click", saveBook)
    }

    async function saveBook(e) {
        document.querySelector("#form h3").textContent = "FORM";
        submitButton.textContent = "Submit";
        const editBookId = e.currentTarget.getAttribute("data-book-id");
        await fetch(`http://localhost:3030/jsonstore/collections/books/${editBookId}`,
            {
                method: "PUT",
                body: JSON.stringify({title: titleField.value, author: authorField.value}),
            })
        submitButton.removeAttribute("data-book-id");
        submitButton.removeEventListener("click", saveBook);
        submitButton.addEventListener("click", submitBook)
        titleField.value = "";
        authorField.value = "";
        await loadBooks();
    }

    async function deleteBook(e) {
        const deleteBookId = e.currentTarget.parentNode.querySelector("button:first-child").getAttribute("data-book-id");
        await fetch(`http://localhost:3030/jsonstore/collections/books/${deleteBookId}`, {
            method: "DELETE"
        })
        await loadBooks();
    }
}

attachEvents();