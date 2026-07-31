// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Update current year dynamically
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Modals Management
  const modalImpressum = document.getElementById('modalImpressum');
  const modalDatenschutz = document.getElementById('modalDatenschutz');

  const openImpressumBtn = document.getElementById('openImpressum');
  const openDatenschutzBtn = document.getElementById('openDatenschutz');

  const closeImpressumBtn = document.getElementById('closeImpressum');
  const btnCloseImpressum = document.getElementById('btnCloseImpressum');

  const closeDatenschutzBtn = document.getElementById('closeDatenschutz');
  const btnCloseDatenschutz = document.getElementById('btnCloseDatenschutz');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event Listeners for Impressum
  openImpressumBtn?.addEventListener('click', () => openModal(modalImpressum));
  closeImpressumBtn?.addEventListener('click', () => closeModal(modalImpressum));
  btnCloseImpressum?.addEventListener('click', () => closeModal(modalImpressum));

  // Event Listeners for Datenschutz
  openDatenschutzBtn?.addEventListener('click', () => openModal(modalDatenschutz));
  closeDatenschutzBtn?.addEventListener('click', () => closeModal(modalDatenschutz));
  btnCloseDatenschutz?.addEventListener('click', () => closeModal(modalDatenschutz));

  // Close modals on clicking overlay backdrop
  [modalImpressum, modalDatenschutz].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(modalImpressum);
      closeModal(modalDatenschutz);
    }
  });
});
