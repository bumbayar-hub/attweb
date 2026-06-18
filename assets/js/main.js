// ATT Website Main JS
// Ерөнхий функциялууд

document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Сайт ачаалагдлаа');
  
  // Mobile menu functionality
  const menuBtn = document.querySelector('[data-icon="menu"]');
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      console.log('📱 Мобайл меню нээх');
      alert('Мобайл меню: Навигация товчлуурууд дээр дарна уу');
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Page load animation
window.addEventListener('load', function() {
  console.log('✅ Бүх ресурс ачаалагдлаа');
  document.body.classList.add('loaded');
});

console.log('🚀 Авто Терминал Трейд - Ажилтан портал');