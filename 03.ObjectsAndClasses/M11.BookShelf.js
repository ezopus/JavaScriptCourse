function bookshelf(arr) {
    class Shelf {
        constructor(id, genre) {
            this.id = id;
            this.genre = genre;
        }

        books = [];
    }

    const bookshelves = [];
    arr.forEach(entry => {
        if (entry.includes("->")) {
            const [id, genre] = entry.split(" -> ");
            if (bookshelves.find(bs => bs.id === Number(id)) === undefined) {
                bookshelves.push(new Shelf(bookshelves.length + 1, genre));
            }
        }
        else {
            const[tokens, genre] = entry.split(", ");
            const[title, author] = tokens.split(": ");
            const currentShelf = bookshelves.find(bs => bs.genre === genre);
            if (currentShelf !== undefined) {
                currentShelf.books.push({title, author});
            }
        }
    })

    bookshelves.sort((a,b) => b.books.length - a.books.length).forEach(bs => {
        console.log(`${bs.id} ${bs.genre}: ${bs.books.length}`);
        bs.books.sort((a,b) => a.title.localeCompare(b.title)).forEach(b => {
            console.log(`--> ${b.title}: ${b.author}`)
        })
    })
}

bookshelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);