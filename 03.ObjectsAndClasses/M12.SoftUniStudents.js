function softuniStudents(arr) {
    class Course {
        constructor(name, capacity) {
            this.name = name;
            this.capacity = capacity;
        }

        students = [];
    }

    const courses = [];
    arr.forEach(entry => {
        if (entry.includes(":")) {
            const [name, capacity] = entry.split(": ").filter(el => el);
            const currentCourse = courses.find(c => c.name === name);
            if (!currentCourse) {
                courses.push(new Course(name, capacity));
            } else
                currentCourse.capacity += Number(capacity);
        } else {
            const tokens = entry.split(" ").filter(el => el);
            let [username, credits] = tokens[0].split(/\W+/);
            credits = Number(credits);
            const email = tokens[3];
            const courseName = tokens[5];
            const currentCourse = courses.find(c => c.name === courseName);
            if (currentCourse && currentCourse.capacity > 0) {
                currentCourse.students.push({username, credits, email});
                currentCourse.capacity--;
            }
        }
    })

    courses.sort((a, b) => b.students.length - a.students.length).forEach(c => {
        console.log(`${c.name}: ${c.capacity} places left`)
        c.students.sort((a, b) => b.credits - a.credits).forEach(st => {
            console.log(`--- ${st.credits}: ${st.username}, ${st.email}`)
        })
    })

}

softuniStudents([
    "JavaBasics: 2",
    "user1[25] with email user1@user.com joins C#Basics",
    "C#Advanced: 3",
    "JSCore: 4",
    "user2[30] with email user2@user.com joins C#Basics",
    "user13[50] with email user13@user.com joins JSCore",
    "user1[25] with email user1@user.com joins JSCore",
    "user8[18] with email user8@user.com joins C#Advanced",
    "user6[85] with email user6@user.com joins JSCore",
    "JSCore: 2",
    "user11[3] with email user11@user.com joins JavaBasics",
    "user45[105] with email user45@user.com joins JSCore",
    "user007[20] with email user007@user.com joins JSCore",
    "user700[29] with email user700@user.com joins JSCore",
    "user900[88] with email user900@user.com joins JSCore",
]);