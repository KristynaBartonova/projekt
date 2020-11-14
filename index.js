'use strict';
let Answer = 'Špatně';
let Choice = document.querySelectorAll('.tlac');

for (let i = 0; i < Choice.length; i++) {
  Choice[i].addEventListener('click', (event) => {
    if (Choice[i] === Choice[3]) {
      event.target.classList.toggle('vybrano');
      document.getElementById('div1').textContent =
        'Výborně, tohle je správná odpověď';
    } else {
      event.target.classList.toggle('vybrano');
      document.getElementById('div1').textContent = 'Tohle není správně';
    }
  });
}
