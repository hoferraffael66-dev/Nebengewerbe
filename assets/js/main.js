// Mobiles Menü
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Jahr im Footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Bilder groß anzeigen
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const close = () => lightbox.classList.remove('open');
  document.querySelectorAll('.gallery figure.single').forEach(fig => {
    fig.addEventListener('click', () => {
      const img = fig.querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', e => { if (e.target !== lbImg) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// Kontaktformular ohne Seitenwechsel absenden (FormSubmit AJAX).
// Ohne JavaScript funktioniert das Formular trotzdem ganz normal.
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (form._honey && form._honey.value) return; // Spam-Bot
    button.disabled = true;
    button.textContent = 'Wird gesendet …';
    status.className = 'form-status';
    try {
      const endpoint = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error(data.message || 'Fehler');
      form.reset();
      status.textContent = 'Vielen Dank! Ihre Anfrage ist angekommen – ich melde mich schnellstmöglich bei Ihnen.';
      status.className = 'form-status ok';
    } catch (err) {
      status.innerHTML = 'Leider ist etwas schiefgelaufen. Bitte schreiben Sie mir direkt an <a href="mailto:hofer360service@gmail.com">hofer360service@gmail.com</a> oder per WhatsApp.';
      status.className = 'form-status err';
    } finally {
      button.disabled = false;
      button.textContent = 'Anfrage absenden';
    }
  });
}

// Vorher/Nachher-Regler
document.querySelectorAll('.ba-frame').forEach(frame => {
  const input = frame.querySelector('input');
  input.addEventListener('input', () => frame.style.setProperty('--pos', input.value + '%'));
});
