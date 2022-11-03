/* Imports */
const headDropdown = document.getElementById('head-select');
const headImg = document.getElementById('head-img');
const headChangeCounter = document.getElementById('head-change-counter');
const bodyDropdown = document.getElementById('body-select');
const bodyImg = document.getElementById('body-img');
const bodyChangeCounter = document.getElementById('body-change-counter');
const accessorySelect = document.getElementById('accessory-select');
const accessoryImg = document.getElementById('accessory-img');
const accessoryChangeCounter = document.getElementById('accessory-change-counter');
const sloganList = document.getElementById('name-list');
const addButton = document.getElementById('name-button');
const sloganInput = document.getElementById('name-input');
/* Get DOM Elements */

/* State */
let headCounter = 0;
let bodyCounter = 0;
let accessoryCounter = 0;
let slogans = [];
/* Events */
headDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    headImg.src = `./assets/${value}-head.png`;
    headCounter++;
    displayStats();
});

bodyDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    bodyImg.src = `./assets/${value}-body.png`;
    bodyCounter++;
    displayStats();
});

accessorySelect.addEventListener('change', (e) => {
    const value = e.target.value;
    accessoryImg.src = `./assets/${value}-accessory.png`;
    accessoryCounter++;
    displayStats();
});

addButton.addEventListener('click', () => {
    slogans.push(sloganInput.value);
    displaySlogans();

    sloganInput.value = '';
});

/* Display Functions */
function displayStats() {
    headChangeCounter.textContent = `you changed heads ${headCounter} times`;
    bodyChangeCounter.textContent = `you changed the body ${bodyCounter} times`;
    accessoryChangeCounter.textContent = `you have changed the accessory ${accessoryCounter} times`;
}

function displaySlogans() {
    sloganList.textContent = '';
    for (let slogan of slogans) {
        const ul = document.createElement('ul');
        ul.textContent = slogan;
        sloganList.append(ul);
    }
}

// (don't forget to call any display functions you want to run on page load!)
