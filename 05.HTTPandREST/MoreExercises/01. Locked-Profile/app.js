function lockedProfile() {
    const mainWrapper = document.querySelector("#main");

    mainWrapper.innerHTML = "";

    getUsers();

    async function getUsers() {
        const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
        const users = await response.json();

        Object.values(users)
            .forEach((user, index) => {
                mainWrapper.appendChild(createUser(user, index))
            })
    }

    function createUser(user, index) {
        const userWrapper = document.createElement("div");
        userWrapper.classList.add("profile");

        const userImage = createImage();
        userWrapper.appendChild(userImage);

        const lockLabel = createLabel("Lock");
        const lockInput = createInput("radio", index, "Locked", "lock", true, false, false);
        userWrapper.appendChild(lockLabel);
        userWrapper.appendChild(lockInput);

        const unlockLabel = createLabel("Unlock");
        const unlockInput = createInput("radio", index, "Locked", "unlock", false, false, false);
        userWrapper.appendChild(unlockLabel);
        userWrapper.appendChild(unlockInput);
        userWrapper.appendChild(document.createElement("hr"));

        const userLabel = createLabel("Username");
        const userNameInput = createInput("text", index, "Username", `${user.username}`, false, true, true);
        userWrapper.appendChild(userLabel);
        userWrapper.appendChild(userNameInput);

        const infoWrapper = document.createElement("div");
        infoWrapper.appendChild(document.createElement("hr"));
        infoWrapper.appendChild(createLabel("Email:"));
        infoWrapper.appendChild(createInput("email", index, "Email", `${user.email}`, false, true, true));
        infoWrapper.appendChild(createLabel("Age:"));
        infoWrapper.appendChild(createInput("email", index, "Age", `${user.age}`, false, true, true));

        infoWrapper.style.display = "none";
        userWrapper.appendChild(infoWrapper);

        const buttonShowMore = document.createElement("button");
        buttonShowMore.textContent = "Show more";
        buttonShowMore.addEventListener("click", showUserInfo)
        userWrapper.appendChild(buttonShowMore);

        return userWrapper;
    }

    function showUserInfo(e){
        const lock = e.target.parentNode.querySelector("input:nth-of-type(1)");
        const hiddenInfo = e.target.parentNode.querySelector("div");
        let isLocked = lock.checked === true;
        if (!isLocked) {
            hiddenInfo.style.display === "none"
                ? hiddenInfo.style.display = "block"
                : hiddenInfo.style.display = "none";
            e.target.textContent === "Show more"
                ? e.target.textContent = "Hide it"
                : e.target.textContent = "Show more";
        }
    }
    function createImage() {
        const userImage = document.createElement("img");
        userImage.src = "./iconProfile2.png";
        userImage.classList.add("userIcon");
        return userImage;
    }
    function createInput(type, userIndex, name, value, isChecked, isDisabled, isReadonly) {
        const input = document.createElement("input");
        input.type = `${type}`;
        input.name = `user${userIndex+1}${name}`;
        input.value = `${value}`;
        input.checked = isChecked;
        input.disabled = isDisabled;
        input.readOnly =  isReadonly;
        return input;
    }

    function createLabel(text) {
        const label = document.createElement("label");
        label.textContent = text;
        return label;
    }
}