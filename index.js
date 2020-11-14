'use strict';

let Choice = document.querySelectorAll('.tlac');

for (let i = 0; i < Choice.length; i++){
 Choice[i].addEventListener('click', (event) => event.target.classList.toggle("vybrano"));
};






