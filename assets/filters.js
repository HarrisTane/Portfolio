const filters = document.querySelector('.filters');
const buttons = [...filters.querySelectorAll('button')];
const cards = document.querySelectorAll('[data-category]');
const status = document.querySelector('[data-filter-status]');

filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected || selected.getAttribute('aria-pressed') === 'true') return;

  const category = selected.dataset.filter;
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button === selected));
  }
  for (const card of cards) {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  }
  status.textContent = status.dataset.prefix + ' — ' + selected.textContent;
});

filters.hidden = false;
