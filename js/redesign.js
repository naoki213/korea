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

    if (quickMenu && !document.querySelector('.app-dashboard')) {
      const dashboard = document.createElement('section');
      dashboard.className = 'app-dashboard';
      dashboard.setAttribute('aria-label', '旅のダッシュボード');
      dashboard.innerHTML = `
        <a class="dash-card dash-card--transport" href="#flights">
          <span class="dash-card__visual" aria-hidden="true"><span>🚄</span></span>
          <span class="dash-card__body"><small>移動の予定</small><strong>16:11 ソウル駅 発</strong><span>18:22 江陵駅 着</span></span>
          <span class="dash-card__badge">KTX<br><small>約2時間</small></span>
        </a>
        <a class="dash-card dash-card--hotel" href="#hotel">
          <span class="dash-card__visual" aria-hidden="true"><span>🛏</span></span>
          <span class="dash-card__body"><small>今夜の宿泊先</small><strong>Gangneung<br>the Sharp Hotel</strong><span>江陵駅から車で約2分</span></span>
          <span class="dash-card__arrow">›</span>
        </a>
        <a class="dash-match" href="#match">
          <span class="dash-match__label">サッカー観戦</span>
          <strong>江原FC <i>vs</i> ガンバ大阪</strong>
          <span>8.11 火 · 19:30 KICK OFF</span>
          <span class="dash-match__place">⌖ 江陵総合運動場</span>
          <b>試合情報を見る <span>›</span></b>
        </a>
        <div class="dash-spots">
          <h2>おすすめグルメ＆スポット</h2>
          <div class="dash-spots__rail">
            <a href="spot-gwangjang.html" class="dash-spot"><img src="img/spot-gwangjang.jpg" alt="広蔵市場 ローカルグルメと活気あふれる市場" loading="lazy"></a>
            <a href="spot-dragoncity.html" class="dash-spot"><img src="img/spot-dragoncity.jpg" alt="ドラゴンシティカジノ ホテル内の本格カジノで特別な体験を" loading="lazy"></a>
            <a href="spot-seoultower.html" class="dash-spot"><img src="img/spot-seoultower.jpg" alt="ソウルタワー ソウルの絶景を一望できる人気スポット" loading="lazy"></a>
            <a href="spot-gyeongbokgung.html" class="dash-spot"><img src="img/spot-gyeongbokgung.jpg" alt="景福宮 朝鮮王朝の歴史を感じる美しい宮殿" loading="lazy"></a>
          </div>
        </div>`;
      quickMenu.insertAdjacentElement('afterend', dashboard);
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
