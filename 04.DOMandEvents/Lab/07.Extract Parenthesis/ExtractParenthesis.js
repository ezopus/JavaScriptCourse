function extract(content) {
    const text = document.querySelector(`#${content}`).textContent.match(/\(.*?\)/g)
        .map(w => w.replace("(", ""))
        .map(w => w.replace(")", ""));

    return text.join("; ");
}