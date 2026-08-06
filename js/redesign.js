(function () {
  const isHome = /(^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith('/');

  if (isHome) {
    const hero = document.querySelector('.hero');
    const quickMenu = document.querySelector('.quick-menu');
    if (hero && quickMenu && !document.querySelector('.trip-now')) {
      const now = document.createElement('aside');
      now.className = 'trip-now';
      now.setAttribute('aria-label', '次の重要な予定');
      now.innerHTML = `
        <span class="trip-now__icon" aria-hidden="true">⚽</span>
        <div>
          <p class="trip-now__eyebrow">NEXT · AUG 11</p>
          <h2 class="trip-now__title">江原FC vs ガンバ大阪</h2>
          <p class="trip-now__meta">19:30 KICK OFF · 江陵総合運動場</p>
        </div>
        <a class="trip-now__arrow" href="#match" aria-label="試合情報を見る">→</a>`;
      hero.insertAdjacentElement('afterend', now);
    }
  }

  if (!document.querySelector('.app-bottom-nav')) {
    const nav = document.createElement('nav');
    nav.className = 'app-bottom-nav';
    nav.setAttribute('aria-label', 'メインナビゲーション');
    const homeHref = isHome ? '#top' : 'index.html#top';
    const scheduleHref = isHome ? '#schedule' : 'index.html#schedule';
    const mapHref = isHome ? '#hotel' : 'index.html#hotel';
    const ticketHref = isHome ? '#match' : 'index.html#match';
    nav.innerHTML = `
      <a href="${homeHref}" ${isHome ? 'aria-current="page"' : ''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/></svg><span>旅程</span></a>
      <a href="${scheduleHref}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4m8-4v4M4 10h16"/></svg><span>スケジュール</span></a>
      <a href="${mapHref}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>マップ</span></a>
      <a href="${ticketHref}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-3a2 2 0 0 0 0-4V7Z"/><path d="M13 5v14"/></svg><span>チケット</span></a>`;
    document.body.appendChild(nav);
  }
})();
