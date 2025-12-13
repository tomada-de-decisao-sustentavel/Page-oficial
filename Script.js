// Controle da música tema
const musicaTema = document.getElementById('musica-tema');

const somMenu = document.getElementById('som-menu');

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
    menuToggle.classList.toggle('active');
    somMenu.play();
});

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        somMenu.play();
    });
});

menuToggle.addEventListener('click', () => {
    somMenu.play();
});
// Ao carregar
if(localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
}

// Toggle
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        darkToggle.textContent = '☀️';
        localStorage.setItem('tema', 'dark');
    } else {
        darkToggle.textContent = '🌙';
        localStorage.setItem('tema', 'light');
    }
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registrado:', reg))
      .catch(err => console.log('Falha no registro do Service Worker:', err));
  });
}
