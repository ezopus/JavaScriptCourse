function attachEvents() {
    const person = document.querySelector('#person');
    const phone = document.querySelector("#phone");
    document.querySelector("#btnLoad").addEventListener("click", loadPhones)
    document.querySelector("#btnCreate").addEventListener("click", addNewPhone);

    async function loadPhones() {
        const loadResponse = await fetch("http://localhost:3030/jsonstore/phonebook");
        const phones = await loadResponse.json();
        const phoneWrapper = document.querySelector("#phonebook");
        phoneWrapper.innerHTML = "";

        Object.values(phones).forEach(entry => {
            const phonePair = document.createElement("li");
            phonePair.textContent = `${entry.person}: ${entry.phone}`;

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.name = "btnDelete";
            deleteButton.textContent = "Delete";
            deleteButton.id = entry._id;
            deleteButton.addEventListener("click", deleteEntry);

            phonePair.appendChild(deleteButton);
            phoneWrapper.appendChild(phonePair);
        })

    }
    async function addNewPhone() {
        const newPhone = {
            person: person.value,
            phone: phone.value,
        }
        const result = await fetch("http://localhost:3030/jsonstore/phonebook", {
                method: "POST",
                body: JSON.stringify(newPhone),
            }
        )
        await loadPhones();
    }

    async function deleteEntry(e) {
        const phoneToDelete = e.target.id;
        const result = await fetch(`http://localhost:3030/jsonstore/phonebook/${phoneToDelete}`,
            {
                method: "DELETE",
            });
        await loadPhones();
    }
}

attachEvents();