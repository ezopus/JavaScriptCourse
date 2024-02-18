function attachEvents() {
    addEventListener("load", loadStudents);

    document.querySelector("#submit").addEventListener("click", submitStudent)
    const tableBody = document.querySelector("#results tbody");

    const firstName = document.querySelector('input[name="firstName"]');
    const lastName = document.querySelector('input[name="lastName"]');
    const facultyNumber = document.querySelector('input[name="facultyNumber"]');
    const grade = document.querySelector('input[name="grade"]');

    async function submitStudent() {
        tableBody.innerHTML = "";
        const newStudent = {
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value,
        }
        const addStudentResponse = await fetch("http://localhost:3030/jsonstore/collections/students",
            {
                method: "POST",
                body: JSON.stringify(newStudent),
            })
        await loadStudents();
    }

    async function loadStudents() {
        const studentResponse = await fetch("http://localhost:3030/jsonstore/collections/students");
        const students = await studentResponse.json();

        Object.values(students).forEach(entry => {
            console.log(entry);
            const firstName = document.createElement("td");
            firstName.textContent = entry.firstName;
            const lastName = document.createElement("td");
            lastName.textContent = entry.lastName;
            const facultyNumber = document.createElement("td");
            facultyNumber.textContent = entry.facultyNumber;
            const grade = document.createElement("td");
            grade.textContent = entry.grade;

            const row = document.createElement("tr");
            row.appendChild(firstName);
            row.appendChild(lastName);
            row.appendChild(facultyNumber);
            row.appendChild(grade);

            tableBody.appendChild(row);
        })
    }
}

attachEvents();