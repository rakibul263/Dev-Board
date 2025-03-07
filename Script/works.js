const buttons = document.querySelectorAll('.complete-btn');
let taskAssign = document.getElementById('task-assign').innerText;
let convertedTaskAssign = parseInt(taskAssign);

let count = 0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // event.defaultPrevented();
        // alert('You have completed the task!');
        this.disabled = true;
        alert('Board updated successfully!');
        count++;
        let sub = convertedTaskAssign - count;
        let increase = count;
        document.getElementById('increase_count').innerText = 23 + increase;
        document.getElementById('task-assign').innerText = sub;

        if (sub === 0) {
            alert('You have completed all the tasks!');
        }
    });
}

// current date
const currentDate = new Date();
const options = { month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
document.getElementById('current-date').textContent = formattedDate;
