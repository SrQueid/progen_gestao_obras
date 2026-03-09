// ===== NAVIGATION (Multi-page app - links use href) =====
// Navigation now handled by href attributes in HTML links
// App structure is multi-page (each feature is a separate HTML file)

// ===== TABS =====
function switchTab(tabGroupId, targetId, event) {
  const group = document.getElementById(tabGroupId);
  group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  // Find sibling tab-contents
  let sibling = group.nextElementSibling;
  while(sibling && sibling.classList.contains('tab-content')) {
    sibling.classList.remove('active');
    sibling = sibling.nextElementSibling;
  }
  document.getElementById(targetId).classList.add('active');
}

// ===== MODALS =====
function openModal(id) {
  document.getElementById(id).classList.add('show');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

// ===== SIDEBAR (MOBILE) =====
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ===== NOTIFICATIONS =====
function toggleNotif() {
  document.getElementById('notifPanel').classList.toggle('show');
}

// ===== PRODUCT FILTER =====
function filterProducts(type, el) {
  document.querySelectorAll('.pill-nav .pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.product-card').forEach(c => {
    if (type === 'all') {
      c.style.display = '';
    } else {
      c.style.display = c.dataset.type === type ? '' : 'none';
    }
  });
  document.querySelectorAll('.prod-section-title').forEach(t => {
    if (type === 'all') {
      t.style.display = '';
    } else {
      t.style.display = t.classList.contains(type) ? '' : 'none';
    }
  });
}

// ===== MEDICAO CALCULATOR =====
function calcMedicao() {
  const pu = parseFloat(document.getElementById('calcPu').value) || 0;
  const qc = parseFloat(document.getElementById('calcQc').value) || 0;
  const imrVal = parseFloat(document.getElementById('calcImr').value);
  const imr = isNaN(imrVal) ? 100 : imrVal;
  const vm = pu * qc * (imr / 100);
  document.getElementById('calcResult').textContent = 'R$ ' + vm.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

// ===== EVENT LISTENERS (on DOM ready) =====
document.addEventListener('DOMContentLoaded', function() {
  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('show');
    });
  });

  // Close notif on click outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.btn-icon') && !e.target.closest('.notif-panel')) {
      document.getElementById('notifPanel').classList.remove('show');
    }
  });

  // Auto-highlight current page in sidebar navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a[href]').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Pill navigation (generic - make pills clickable)
  document.querySelectorAll('.pill-nav').forEach(nav => {
    nav.querySelectorAll('.pill').forEach(pill => {
      pill.addEventListener('click', function() {
        if (!this.onclick) {
          nav.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  });

  // Checklist interaction
  document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', function() {
      if (this.checked) {
        this.parentElement.classList.add('checked');
      } else {
        this.parentElement.classList.remove('checked');
      }
    });
  });
});
