function filterMenu(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const people = document.getElementById('people').value;
    const message = document.getElementById('message');
    message.textContent = `Thank you, ${name}! Your table for ${people} people has been booked.`;
    this.reset();
  });
}
