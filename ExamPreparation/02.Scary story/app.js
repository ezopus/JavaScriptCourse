window.addEventListener("load", solve);

function solve() {
  const inputs = Array.from(
    document.querySelectorAll(
      ".inner-wrap input, .inner-wrap select, .inner-wrap textarea"
    )
  );
  const previewBtn = document.querySelector("#form-btn");
  const previewListElement = document.querySelector("#preview-list");

  previewBtn.addEventListener("click", handlePreviewClick);

  function handlePreviewClick(e) {
    e.preventDefault();
    if (inputs.filter((i) => i.value === "").length > 0) {
      return;
    }
    previewStory();
  }
  function previewStory() {
    const storyWrapper = createElement("li", "", "story-info", "", previewListElement);
    const article = createElement("article", "", "", "", storyWrapper);
    createElement("h4", `Name: ${inputs[0].value} ${inputs[1].value}`, "", "", article);
    createElement("p", `Age: ${inputs[2].value}`, "", "", article);
    createElement("p", `Title: ${inputs[3].value}`, "", "", article);
    createElement("p", `Genre: ${inputs[4].value}`, "", "", article);
    createElement("p", `${inputs[5].value}`, "", "", article);

    const saveBtn = createElement("button", "Save Story", "save-btn", "", storyWrapper);
    const editBtn = createElement("button", "Edit Story", "edit-btn", "", storyWrapper);
    const deleteBtn = createElement(
      "button",
      "Delete Story",
      "delete-btn",
      "",
      storyWrapper
    );

    previewBtn.disabled = true;
    inputs.forEach((i) => (i.value = ""));

    saveBtn.addEventListener("click", saveStory);
    editBtn.addEventListener("click", editStory);
    deleteBtn.addEventListener("click", deleteStory);
  }

  function saveStory(e) {
    const main = document.querySelector("#main");
    main.innerHTML = "";
    createElement("h1", "Your scary story is saved!", "", "", main);
  }
  function editStory(e) {
    const wrapper = e.target.parentNode;
    wrapper.remove();
    const buttons = Array.from(wrapper.querySelectorAll("button"));
    inputs[0].value = wrapper.children[0].children[0].textContent.split(" ")[1];
    inputs[1].value = wrapper.children[0].children[0].textContent.split(" ")[2];
    inputs[2].value = wrapper.children[0].children[1].textContent.split("Age: ")[1];
    inputs[3].value = wrapper.children[0].children[2].textContent.split("Title: ")[1];
    inputs[4].value = wrapper.children[0].children[3].textContent.split("Genre: ")[1];
    inputs[5].value = wrapper.children[0].children[4].textContent;

    previewBtn.disabled = false;
    buttons.forEach((b) => (b.disabled = true));
  }
  function deleteStory(e) {
    const story = e.target.parentNode;
    story.remove();
    previewBtn.disabled = false;
  }

  function createElement(type, text, classLabel, id, parent) {
    const el = document.createElement(`${type}`);
    if (text) {
      el.textContent = text;
    }
    if (classLabel) {
      if (Array.isArray(classLabel)) {
        classLabel.forEach((cl) => {
          el.classList.add(`${cl}`);
        });
      } else {
        el.classList.add(`${classLabel}`);
      }
    }
    if (id) {
      el.id = id;
    }
    if (parent) {
      parent.appendChild(el);
    }
    return el;
  }
}
