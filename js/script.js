document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".day-tab");
  const panels = document.querySelectorAll(".day-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const day = tab.dataset.day;

      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });

      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.dayPanel === day);
      });
    });
  });
});
