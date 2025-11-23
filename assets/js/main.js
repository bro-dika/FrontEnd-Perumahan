(function(){
// === NAVIGATION TOGGLE ===
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  mainNav.classList.toggle("show");
});

  // Year stamps
  var years = [document.getElementById('year'),document.getElementById('year2'),document.getElementById('year3'),document.getElementById('year4'),document.getElementById('year5')];
  years.forEach(function(y){if(y) y.textContent = new Date().getFullYear()});

  // Modal quick view
  function openModal(id, content){
    var modal = document.getElementById(id);
    if(!modal) return;
    modal.setAttribute('aria-hidden','false');
    var body = modal.querySelector('.modal-content');
    if(body) body.innerHTML = content;
  }
  function closeModal(modal){ modal.setAttribute('aria-hidden','true'); }
  document.body.addEventListener('click', function(e){
    var t = e.target;
    if(t && t.dataset && t.dataset.open==='quickView'){
      var unitId = t.dataset.id || 'A';
      var content = '<h3>Preview Tipe '+unitId+'</h3><p>Detil singkat tipe '+unitId+' — luas, fasilitas, dan gallery.</p><p><strong>Harga mulai:</strong> Hubungi developer</p>';
      openModal('quickView', content);
    }
    if(t && t.dataset && t.dataset.close!==undefined){
      var modal = t.closest('.modal'); if(modal) closeModal(modal);
    }
    if(t && t.matches && t.matches('.modal-close')){ var modal = t.closest('.modal'); if(modal) closeModal(modal); }
  });

  // Close modal when clicking backdrop
  document.querySelectorAll('.modal').forEach(function(m){ m.addEventListener('click', function(e){ if(e.target===m) m.setAttribute('aria-hidden','true'); })});

  // Filters on type page
  var filter = document.getElementById('filterBedrooms');
  if(filter){ filter.addEventListener('change', function(){
    var val = this.value;
    var cards = document.querySelectorAll('#typeGrid .unit-card');
    cards.forEach(function(c){ if(val==='all') c.style.display='block'; else c.style.display = (c.dataset.beds===val)?'block':'none'; });
  })}

  // Simple contact form (no-backend) -> show success toast
  var contact = document.getElementById('contactForm');
  if(contact){ contact.addEventListener('submit', function(e){ e.preventDefault(); alert('Terima kasih! Pesan Anda telah dikirim (demo).'); contact.reset(); }); }

  // quick auto-rotate hero cards (basic)
  var rotators = document.querySelectorAll('[data-rotate]');
  if(rotators.length>0){ var i=0; setInterval(function(){ rotators.forEach(function(r,idx){ r.style.display = (idx===i)?'block':'none'; }); i=(i+1)%rotators.length; },4000); }

  // smooth scroll to anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(e){ e.preventDefault(); var id = this.getAttribute('href').slice(1); var el = document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}); }); });

})();
