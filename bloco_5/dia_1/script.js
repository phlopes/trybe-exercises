document.querySelector('#header-container').style.backgroundColor = 'green';

document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';

document.getElementById('footer-container').style.backgroundColor = 'darkgreen';

let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = 'purple';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
    for (let i = 0; i < noEmergencyTasks.length; i += 1) {
        noEmergencyTasks[i].style.backgroundColor = 'black';
    }