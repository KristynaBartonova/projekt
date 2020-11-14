'use strict';
let Choice = document.querySelectorAll('.tlac');

for (let i = 0; i < Choice.length; i++) {
  Choice[i].addEventListener('click', (event) => {
    if (Choice[i] === Choice[3]) {
      event.target.classList.toggle('vybrano');
      document.getElementById('div1').textContent =
        'Výborně, tohle je správná odpověď';
    } else if (Choice[i] === Choice[1]) {
      event.target.classList.toggle('vybrano');
      document.getElementById('div1').textContent = 'Nene, to není dobře';
    } else if (Choice[i] === Choice[2]) {
      event.target.classList.toggle('vybrano');
      document.getElementById('div1').textContent = 'Tohle také není správná možnost';
    } else {
      event.target.classList.toggle('vybrano');
      document.getElementById('div1').textContent = 'Tohle není správně';
    }
  });
}
