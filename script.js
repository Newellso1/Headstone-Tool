const ogeeShape = document.querySelector('.ogee');
const pr9Shape = document.querySelector('.pr9');
const roundTopShape = document.querySelector('.roundTop');
const headstoneTemplate = document.querySelector('.headstone')
let templateCounter = 0;

// Functions that changes the template shape

function ogeeTemplate() {
    templateReset();
    templateCounter = 1;
    changeTemplate();
}

function pr9Template() {
    templateReset();
    templateCounter = 2;
    changeTemplate();

}

function roundTopTemplate() {
    templateReset();
    templateCounter = 3;
    changeTemplate();

}

function templateReset() {
    headstoneTemplate.className = 'headstone';
}


ogeeShape.addEventListener('click', ogeeTemplate);
pr9Shape.addEventListener('click', pr9Template);
roundTopShape.addEventListener('click', roundTopTemplate);

function changeTemplate() {
    if (templateCounter === 1) {
        headstoneTemplate.classList.add('ogeeBackground');
    } else if (templateCounter === 2) {
        headstoneTemplate.classList.add('pr9Background');
    } else if (templateCounter === 3) {
        headstoneTemplate.classList.add('roundTopBackground');
    }
}
