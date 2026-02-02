// Basic interactivity: mobile menu, accordion, driver filter, contact form demo, dynamic year

document.addEventListener('DOMContentLoaded', function () {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.hidden = !mobileMenu.hidden;
    });
  }

  // Accordion
  document.querySelectorAll('.accordion .accordion-item').forEach(item => {
    const btn = item.querySelector('.accordion-btn');
    const panel = item.querySelector('.accordion-panel');
    if (!btn || !panel) return;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });

  // Driver filter
  const filterInput = document.getElementById('driver-filter');
  const driverGrid = document.getElementById('driver-grid');
  if (filterInput && driverGrid) {
    filterInput.addEventListener('input', () => {
      const q = filterInput.value.trim().toLowerCase();
      const cards = driverGrid.querySelectorAll('.driver-card');
      cards.forEach(card => {
        const text = (card.textContent || '').toLowerCase();
        if (!q || text.includes(q) || (card.dataset.category || '').includes(q)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Contact form (demo only)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = '';
      // Basic client-side validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      if (!name || !email || !msg) {
        status.textContent = 'Please complete all fields.';
        status.style.color = 'crimson';
        return;
      }
      // Demo: show success and reset. Replace with real request to your server or a form service.
      status.textContent = 'Message sent (demo). Replace this with a real backend or form provider to receive messages.';
      status.style.color = 'green';
      form.reset();
    });
  }
});