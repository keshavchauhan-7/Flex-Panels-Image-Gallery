// const panels = document.querySelectorAll('.panel');

// function toggleOpen() {
//     panels.forEach(panel => panel.classList.remove('open'));
//     this.classList.add('open');
// }

// panels.forEach(panel => panel.addEventListener('click', toggleOpen));


const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    panels.forEach(panel => {
        panel.classList.remove('open');
        panel.classList.remove('scattered');
    });
    this.classList.add('open');
    this.classList.add('scattered');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
