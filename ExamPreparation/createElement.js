function createElement(type, textContent, classes, id, src, parent) {
    const el = document.createElement(`${type}`);
    if (textContent) {
        el.textContent = textContent;
    }
    if (classes) {
        el.classList.add(...classes)
    }
    if (id) {
        el.id = id;
    }
    if (parent) {
        parent.appendChild(el);
    }
    if (src) {
        el.src = `${src}`;
    }
    return el;
}

console.log(Number(true))