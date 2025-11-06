//Typed animation
var typed = new Typed('#typed', {
    strings: ['Full-Stack Developer', 'Web Developer', 'App Developer', 'UI/UX Designer', 'SQL Database Specialist'],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 3000,
    showCursor: false,
    loop: true
});

// Theme toggle
function theme() {
  const darkBtn = document.getElementById('darkBtn');
  const lightBtn = document.getElementById('lightBtn');

  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    darkBtn.style.display = 'block';
    lightBtn.style.display = 'none';
  } else {
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
  }
}

// Navigation active state
const navItems = document.querySelectorAll('.box.nav .item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
