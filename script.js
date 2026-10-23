const gumb = document.querySelector('.hamburger');
const izbornik = document.querySelector('#izbornik');

gumb.addEventListener('click', () => {
  const otvoren = izbornik.classList.toggle('otvoren');
  gumb.setAttribute('aria-expanded', otvoren);
  gumb.setAttribute('aria-label', otvoren ? 'Zatvori izbornik' : 'Otvori izbornik');
});

// Termini po terapeutkinji (primjer)
const termini = {
  Petra: ['08:00', '09:00', '10:00', '11:00',  '12:00', '13:00'],
  Maja: ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
};

const terapeutkinja = document.querySelector('#terapeutkinja');
const vrijeme = document.querySelector('#vrijeme');
const drenaza = document.querySelector('#usluga option[value="limfna"]');

function osvjeziObrazac() {
  const odabrana = terapeutkinja.value;

  // 1. Vrijeme: pokaži samo termine odabrane terapeutkinje
  vrijeme.innerHTML = '';
  termini[odabrana].forEach(sat => {
    vrijeme.add(new Option(sat, sat));
  });

  // 2. Limfna drenaža samo kod Maje
  drenaza.disabled = odabrana !== 'Maja';
  if (drenaza.disabled && drenaza.selected) {
    document.querySelector('#usluga').selectedIndex = 0;
  }
}

if (terapeutkinja) {
  terapeutkinja.addEventListener('change', osvjeziObrazac);
  osvjeziObrazac(); // odmah pri učitavanju stranice
}

