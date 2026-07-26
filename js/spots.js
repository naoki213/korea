const SPOT_DETAILS = {
  gyeongpo: {
    emoji: "🏞️",
    name: "鏡浦湖・鏡浦台",
    address: "江原特別自治道 江陵市 鏡浦路365",
    timing: "日没〜夜の湖畔散策がおすすめ。楼閣見学20〜30分、湖畔一周(約4.3km)は1〜1.5時間",
    budget: "楼閣見学は基本無料。レンタサイクルは1時間数千ウォン程度",
    access: "江陵駅・バスターミナルからバスで20〜30分、最寄バス停から徒歩5分",
    tip: "湖畔一周路は自転車道も整備されているのでレンタサイクルが便利。夕方は混雑するので早めの時間帯も狙い目。",
  },
  ojukheon: {
    emoji: "🏯",
    name: "烏竹軒",
    address: "江原特別自治道 江陵市 栗谷路3139番길24（竹軒洞）",
    timing: "午前〜昼が快適。本堂・博物館・庭園込みで所要1時間程度",
    budget: "大人3,000ウォン／青少年2,000ウォン／子供1,000ウォン（65歳以上・6歳以下は無料）",
    access: "江陵駅からバスで25〜30分程度",
    tip: "5,000ウォン紙幣の肖像・絵柄ゆかりの地。元日・旧正月・秋夕は屋内展示室が休館になる点に注意。",
  },
  anmok: {
    emoji: "☕",
    name: "安木コーヒー通り",
    address: "江原特別自治道 江陵市 昌海路14番길付近（安木海岸一帯）",
    timing: "午後〜夕方、日没前後が特に人気。滞在目安1〜2時間",
    budget: "コーヒー1杯5,000〜8,000ウォン程度",
    access: "江陵駅から225-1番・314-1番バスで「安木コーヒー通り」下車すぐ",
    tip: "テイクアウトして砂浜やベンチで海を見ながら飲むのが定番の楽しみ方。",
  },
  gangmun: {
    emoji: "🏖️",
    name: "江門ビーチ",
    address: "江原特別自治道 江陵市 昌海路352",
    timing: "午前〜午後、夏の海水浴シーズンは特に賑わう。散策なら1時間程度",
    budget: "ビーチ利用は無料。隣接漁港の刺身店は数万ウォン程度〜",
    access: "鏡浦・安木エリアから徒歩または車で約10分圏内",
    tip: "すぐ隣の小さな漁港「江門港」で獲れたて刺身が味わえる。カラフルな壁画・オブジェも撮影スポット。",
  },
  jungangmarket: {
    emoji: "🍲",
    name: "江陵中央市場",
    address: "江原特別自治道 江陵市 金城路21",
    timing: "昼〜夕方（店舗により異なるが目安〜21時頃）。滞在1〜1.5時間",
    budget: "屋台グルメ1品3,000〜8,000ウォン程度",
    access: "江陵バスターミナル・江陵駅からバスかタクシーで10〜15分",
    tip: "名物は「ホットク＋アイス」と50年の歴史を持つ鶏の唐揚げ店。地下の水産コーナーでは刺身をその場でパック購入できる。",
  },
  chodang: {
    emoji: "🥘",
    name: "草堂スンドゥブ村",
    address: "江原特別自治道 江陵市 草堂洞一帯（店ごとに住所は異なる）",
    timing: "昼食時（11〜14時頃）がおすすめ。所要1時間程度",
    budget: "純豆腐定食1食8,000〜12,000ウォン程度",
    access: "江陵駅・バスターミナルからバスかタクシーで15〜20分、鏡浦湖からも近い",
    tip: "海水を天然凝固剤に使うため通常の豆腐よりなめらかで柔らかいのが特徴。店ごとに味が違うので食べ比べも楽しい。",
  },
  jumunjin: {
    emoji: "🐟",
    name: "注文津水産市場",
    address: "江原特別自治道 江陵市 注文津邑 市場길38",
    timing: "07:00〜22:00営業、鮮度重視なら午前がおすすめ。所要1〜1.5時間",
    budget: "刺身・干物まとめて数万ウォン〜（量・品目による）",
    access: "江陵市内から車で30〜40分。路線バスは本数が少なめなので要事前確認",
    tip: "1936年創業の老舗市場。買った刺身をその場の2階食堂で追加料金を払って食べる「買って上がって食べる」スタイルが人気。",
  },
  gyeongbokgung: {
    emoji: "🏯",
    name: "景福宮",
    address: "ソウル特別市 鍾路区 社稷路161",
    timing: "開門直後の午前中が比較的空いている。所要1.5〜2時間（守門将交代式は日中数回実施）",
    budget: "大人（19〜64歳）3,000ウォン。満24歳以下・65歳以上は無料",
    access: "地下鉄3号線 景福宮駅5番出口から徒歩2〜3分",
    tip: "月曜が定休日（休宮日）なので要注意。韓服をレンタルして着ていくと入場無料になる制度がある。",
  },
  bukchon: {
    emoji: "🏘️",
    name: "北村韓屋村",
    address: "ソウル特別市 鍾路区 桂洞キル一帯（景福宮と昌徳宮の間）",
    timing: "観光可能時間は10:00〜17:00に制限（住民保護のため、それ以外の観光目的立入りは過料対象）",
    budget: "散策自体は無料",
    access: "地下鉄3号線 安国駅2番出口から徒歩5〜10分",
    tip: "実際に住民が暮らすエリアのため、大声での会話や私有地への立入りは厳禁。「静かな観光」を心がけること。",
  },
  nseoultower: {
    emoji: "🗼",
    name: "Nソウルタワー",
    address: "ソウル特別市 龍山区 南山公園キル105",
    timing: "日没前後（夕景から夜景への切り替わりがベスト）。展望台込みで1.5〜2時間",
    budget: "展望台入場料：大人約21,000ウォン／子供約16,000ウォン（ケーブルカーは別料金）",
    access: "地下鉄4号線 明洞駅3番出口から徒歩約10分でケーブルカー乗り場",
    tip: "平日10:00〜22:30、週末〜23:00（チケットは終了30分前まで）。展望台テラスの「愛の南京錠」も撮影スポット。",
  },
  hongdae: {
    emoji: "🎨",
    name: "弘大・延南洞",
    address: "ソウル特別市 麻浦区 弘大入口駅周辺〜延南洞（京義線숲길沿い）",
    timing: "午後〜夜（弘大は週末夜が特に活気あり）。散策目安2〜3時間",
    budget: "カフェ・軽食で1人5,000〜15,000ウォン程度",
    access: "地下鉄2号線／空港鉄道／京義中央線 弘大入口駅3番出口から京義線숲길を歩いて延南洞へ、徒歩約20分",
    tip: "京義線숲길公園沿いにおしゃれなカフェ・雑貨店が集中。夕方以降はストリートパフォーマンスも楽しめる。",
  },
  myeongdongstreet: {
    emoji: "🍢",
    name: "明洞グルメストリート",
    address: "ソウル特別市 中区 明洞一帯（地下鉄4号線 明洞駅6番出口〜明洞聖堂の通り）",
    timing: "屋台は夕方〜夜にかけて賑わう。1〜2時間で一通り楽しめる",
    budget: "屋台グルメ1品3,000〜8,000ウォン程度",
    access: "地下鉄4号線 明洞駅6番出口すぐ",
    tip: "トッポッキ・チーズハットグ・鶏串など食べ歩きグルメが充実。屋台利用時は小額の現金があると便利。",
  },
  myeongdongbbq: {
    emoji: "🍖",
    name: "明洞の人気焼肉店（例：王妃家）",
    address: "ソウル特別市 中区 明洞エリア内（号店により異なる、明洞駅周辺に複数店舗あり）",
    timing: "夕食時（18〜20時頃）は混雑のため予約推奨。食事目安1〜1.5時間",
    budget: "1人3〜5万ウォン程度（牛肉・カルビ部位による）",
    access: "地下鉄4号線 明洞駅から徒歩数分圏内に複数店舗",
    tip: "名物は真鍮の器で提供される豚カルビ定食。同名店舗が複数あるため、予約時に住所・号店名を確認すると安心。",
  },
  tanghulu: {
    emoji: "🍡",
    name: "王家タンフル（弘大エリア）",
    address: "弘大（西橋洞）エリア周辺",
    timing: "午後のおやつ時に食べ歩きで15〜30分程度",
    budget: "1本3,000〜6,000ウォン程度",
    access: "地下鉄2号線 弘大入口駅から徒歩5〜10分圏内（弘大商圏内）",
    tip: "タンフルブーム沈静化により全国的に閉店が相次ぎ店舗数が減少中。訪問前にNaver地図等で営業状況の確認がおすすめ。",
  },
  insadong: {
    emoji: "🍚",
    name: "仁寺洞の韓定食・伝統茶屋（例：鮮泉家）",
    address: "ソウル特別市 鍾路区 仁寺洞14キル5",
    timing: "昼〜夕食時（11:00〜22:00営業）、食事目安1〜1.5時間",
    budget: "定食1人15,000ウォン〜、看板メニューの醤油ガニ漬けは38,000ウォン程度",
    access: "地下鉄3号線 安国駅から徒歩5〜10分、仁寺洞メイン通り沿い",
    tip: "1971年創業。名物は醤油ガニ漬けと季節のカキのチヂミ。食後は仁寺洞内の伝統茶屋で韓国伝統茶を楽しむのもおすすめ。",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const backdrop = document.getElementById("spotModalBackdrop");
  const modal = document.getElementById("spotModal");
  const closeBtn = document.getElementById("spotModalClose");
  const emojiEl = document.getElementById("spotModalEmoji");
  const titleEl = document.getElementById("spotModalTitle");
  const factsEl = document.getElementById("spotModalFacts");
  const tipEl = document.getElementById("spotModalTip");

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
    // Restore instantly: the page has "scroll-behavior: smooth" for anchor
    // nav, which would otherwise animate this jump and race with the next
    // lockScroll() reading window.scrollY mid-animation.
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, lockedScrollY);
    html.style.scrollBehavior = prevBehavior;
  }

  function openModal(key) {
    const data = SPOT_DETAILS[key];
    if (!data) return;

    emojiEl.textContent = data.emoji;
    titleEl.textContent = data.name;
    tipEl.textContent = "💡 " + data.tip;

    factsEl.innerHTML = "";
    const fields = [
      ["住所", data.address],
      ["訪問時間・所要", data.timing],
      ["目安予算", data.budget],
      ["アクセス", data.access],
    ];
    fields.forEach(([label, value]) => {
      const dt = document.createElement("dt");
      dt.textContent = label;
      const dd = document.createElement("dd");
      dd.textContent = value;
      factsEl.appendChild(dt);
      factsEl.appendChild(dd);
    });

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

  document.querySelectorAll(".spot-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.spot));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card.dataset.spot);
      }
    });
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });
});
