function showPage(page) {
  let pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
}

function applyFilters() {
  const selectedCat = document.querySelector('.filter input:checked').id.replace('cat-', '');
  const query = (document.getElementById('searchInput').value || '').toLowerCase().trim();
  const cards = document.querySelectorAll('#cardsContainer .card');
  let visible = 0;

  cards.forEach(card => {
    const matchCat = selectedCat === 'all' || card.dataset.cat === selectedCat;
    const nameText = (card.dataset.name || '').toLowerCase();
    const bodyText = card.querySelector('.text-body') ? card.querySelector('.text-body').textContent.toLowerCase() : '';
    const titleText = card.querySelector('.text-title') ? card.querySelector('.text-title').textContent.toLowerCase() : '';
    const matchSearch = !query || nameText.includes(query) || bodyText.includes(query) || titleText.includes(query);

    card.style.display = (matchCat && matchSearch) ? '' : 'none';
    if (matchCat && matchSearch) visible++;
  });

  document.getElementById('no-results').classList.toggle('hidden', visible > 0);
}
// connects the radio buttons to applyFilters
document.querySelectorAll('.filter input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', applyFilters)});



