document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("ticketViewBtn");
  const backdrop = document.getElementById("ticketModalBackdrop");
  const closeBtn = document.getElementById("ticketModalClose");
  if (!btn || !backdrop || !closeBtn) return;

  let lastFocused = null;
  let lockedScrollY = 0;

  function lockScroll() {
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }

  function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, lockedScrollY);
    html.style.scrollBehavior = prevBehavior;
  }

  function openModal() {
    lastFocused = document.activeElement;
    backdrop.hidden = false;
    lockScroll();
    closeBtn.focus();
  }

  function closeModal() {
    if (backdrop.hidden) return;
    backdrop.hidden = true;
    unlockScroll();
    if (lastFocused) lastFocused.focus();
  }

  btn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });
});
