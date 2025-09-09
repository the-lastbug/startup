document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById('searchBox');
  const cardsContainer = document.getElementById('startupCards');
  const form = document.getElementById('startupForm');

  // Search functionality
  searchBox.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const name = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });

  // Add new startup card
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('startupName').value;
    const logo = document.getElementById('startupLogo').value;
    const desc = document.getElementById('startupDesc').value;
    const link = document.getElementById('startupLink').value;

    // Create card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = 
      `<img src="${logo}" alt="${name} Logo">
      <h2>${name}</h2>
      <p>${desc}</p>
      <a href="${link}" target="_blank">Visit</a>`
    ;

    // Append to container
    cardsContainer.appendChild(card);

    // Reset form
    form.reset();
  });
});