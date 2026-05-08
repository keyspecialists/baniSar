
// Mobile nav
const tg = document.getElementById('navToggle');
const nv = document.getElementById('mainNav');
if(tg && nv){ tg.addEventListener('click', () => nv.classList.toggle('open')); }

// Scroll header
const hd = document.getElementById('siteHeader');
if(hd){
  window.addEventListener('scroll', () => {
    hd.style.boxShadow = window.scrollY > 20 ? '0 8px 24px rgba(0,0,0,.08)' : '';
  });
}

// Fade-in observer
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
}, {threshold: .12});
document.querySelectorAll('.service-card, .feature, .review, .area-chip, .gal-item').forEach(el => {
  el.classList.add('fade-in'); io.observe(el);
});

// Contact form -> WhatsApp
function sendWA(e){
  e.preventDefault();
  const f = e.target;
  const msg = `طلب خدمة جديد:%0A
👤 الاسم: ${f.name.value}%0A
📞 الجوال: ${f.phone.value}%0A
🛠 الخدمة: ${f.service.value}%0A
📍 المنطقة: ${f.area.value}%0A
📝 ملاحظات: ${f.note.value || '-'}`;
  window.open('https://wa.me/966503791203?text=' + msg, '_blank');
  return false;
}
window.sendWA = sendWA;
