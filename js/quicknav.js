(function () {
  var toggle = document.getElementById('quickNavToggle');
  var panel = document.getElementById('quickNavPanel');
  if (!toggle || !panel) return;

  function closePanel() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openPanel() {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (panel.hidden) {
      openPanel();
    } else {
      closePanel();
    }
  });

  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) closePanel();
  });

  document.addEventListener('click', function (e) {
    if (!panel.hidden && !panel.contains(e.target) && e.target !== toggle) {
      closePanel();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) {
      closePanel();
      toggle.focus();
    }
  });
})();
