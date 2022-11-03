/* Imports */
const headDropdown = document.getElementById('head-select');
const headImg = document.getElementById('head-img');
const headChangeCounter = document.getElementById('head-change-counter');
const bodyDropdown = document.getElementById('body-select');
const bodyImg = document.getElementById('body-img');
const bodyChangeCounter = document.getElementById('body-change-counter');
const bottomDropdown = document.getElementById('bottom-dropdown');
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
/* Events */
headDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    headImg.src = `./assets/${value}-head.png`;
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
