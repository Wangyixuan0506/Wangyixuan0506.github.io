const controls = document.querySelector('.project-controls');
const buttons = [...controls.querySelectorAll('button[data-filter]')];
const count = controls.querySelector('.project-count');
const projects = [...document.querySelectorAll('[data-project]')];
const cards = document.querySelector('.cards');

function filterProjects(activeButton) {
  const filter = activeButton.dataset.filter;
  let visibleCount = 0;

  for (const project of projects) {
    const matches = filter === 'all' || project.dataset.project === filter;
    project.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button === activeButton));
  }

  cards.hidden = !cards.querySelector('[data-project]:not([hidden])');
  count.textContent = visibleCount === 1 ? '1 project shown' : `${visibleCount} projects shown`;
}

for (const button of buttons) {
  button.addEventListener('click', () => filterProjects(button));
}
filterProjects(buttons[0]);
controls.hidden = false;
