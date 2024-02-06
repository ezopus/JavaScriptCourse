function editElement(id, match, replacer) {
    while (id.textContent.includes(match)) {
        id.textContent = id.textContent.replace(match, replacer);
    }
}