function solve(input) {
    const taskCount = Number(input.shift());
    const tasks = input
        .splice(0, taskCount)
        .reduce((acc, curr) => {
            const [name, taskId, title, status, estimatedPoints] = curr.split(":");
            const task = {taskId, title, status, estimatedPoints: Number(estimatedPoints)};
            if (!acc.hasOwnProperty(name)) {
                acc[name] = [];
            }
            acc[name].push(task);
            return acc;
        }, {});
    const commands = input.reduce((acc, curr) => {
        const [command, assignee, ...params] = curr.split(":");
        acc.push({command, assignee, params});
        return acc;
    }, [])

    commands.forEach((c) => {
        switch (c.command) {
            case "Add New": {
                const [taskId, title, status, estimatedPoints] = c.params;
                if (!tasks[c.assignee]) {
                    console.log(`Assignee ${c.assignee} does not exist on the board!`)
                    break;
                }
                tasks[c.assignee].push({taskId, title, status, estimatedPoints: Number(estimatedPoints)});
                break;
            }
            case "Change Status": {
                const [taskId, newStatus] = c.params;
                if (!tasks[c.assignee]) {
                    console.log(`Assignee ${c.assignee} does not exist on the board!`)
                    break;
                }
                const currentTask = tasks[c.assignee].find(t => t.taskId === taskId);
                if (!currentTask) {
                    console.log(`Task with ID ${taskId} does not exist for ${c.assignee}!`)
                    break;
                }
                currentTask.status = newStatus;
                break;
            }
            case "Remove Task":
                const indexToRemove = Number(c.params);
                if (!tasks[c.assignee]) {
                    console.log(`Assignee ${c.assignee} does not exist on the board!`)
                    break;
                }
                if (tasks[c.assignee].length <= indexToRemove || indexToRemove < 0) {
                    console.log("Index is out of range!");
                    break;
                }
                tasks[c.assignee].splice(indexToRemove, 1);
                break;
        }
    })

    // console.log(tasks)
    let toDoPoints = 0;
    let inProgressPoints = 0;
    let codeReviewPoints = 0;
    let donePoints = 0;
    Object.values(tasks).forEach(e => {
        e.forEach(t => {
            switch (t.status) {
                case "ToDo":
                    toDoPoints += t.estimatedPoints;
                    break;
                case "In Progress":
                    inProgressPoints += t.estimatedPoints;
                    break;
                case "Code Review":
                    codeReviewPoints += t.estimatedPoints;
                    break;
                case "Done":
                    donePoints += t.estimatedPoints;
                    break;
            }
        })
    })
    console.log(`ToDo: ${toDoPoints}pts`)
    console.log(`In Progress: ${inProgressPoints}pts`)
    console.log(`Code Review: ${codeReviewPoints}pts`)
    console.log(`Done Points: ${donePoints}pts`)

    if (donePoints < (inProgressPoints + codeReviewPoints + toDoPoints)) {
        console.log("Sprint was unsuccessful...")
    } else {
        console.log("Sprint was successful!")
    }
}


// solve([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ]);

solve([
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
)