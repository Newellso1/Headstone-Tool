
// Variables for the headstone shapes
const ogeeShape = document.querySelector('.ogee');
const pr9Shape = document.querySelector('.pr9');
const roundTopShape = document.querySelector('.roundTop');
const headstoneTemplate = document.querySelector('.headstone')
let templateCounter = 0;

// Variables & functions for gathering the information for the inscription

let userHeading = "";
let userFname = "";
let userBirthDate = "";
let userDeathDate = "";
let userDates = "";
let userSname = "";
let userFullName = "";
let userInscription = "";

function getHeading() {
    userHeading = document.querySelector('#headings').value;
}

function getFname() {
    userFname = document.querySelector('#fname').value;
}

function getSname() {
    userSname = document.querySelector('#sname').value;
}

function compileName() {
    userFullName = `${userFname} ${userSname}`;
}

function getBirthDate() {
    userBirthDate = document.querySelector('#birth').value;
}

function getDeathDate() {
    userDeathDate = document.querySelector('#death').value;
}

function compileDates() {
    userDates = `${userBirthDate.slice(8, 10)}.${userBirthDate.slice(5, 7)}.${userBirthDate.slice(0, 4)} - ${userDeathDate.slice(8, 10)}.${userDeathDate.slice(5, 7)}.${userDeathDate.slice(0, 4)}`;
}

function getInscription() {
    userInscription = document.querySelector('#text').value;
}

function getAll() {
    getHeading();
    getFname();
    getSname();
    compileName();
    getBirthDate();
    getDeathDate();
    compileDates();
    getInscription();
}

// Variables & Functions for pushing the information to the template

let headstoneHeading = document.querySelector('.headstoneHeading');
let headstoneName = document.querySelector('.headstoneName');
let headstoneDates = document.querySelector('.headstoneDates');
let headstoneInscription = document.querySelector('.headstoneInscription');

function pushHeading() {
    headstoneHeading.innerHTML = userHeading;
}

function pushName() {
    headstoneName.innerHTML = userFullName;
}

function pushDates() {
    headstoneDates.innerHTML = userDates;
}

function pushInscription() {
    headstoneInscription.innerHTML = userInscription;
}

function pushAll() {
    pushHeading();
    pushName();
    pushDates();
    pushInscription();
}
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
