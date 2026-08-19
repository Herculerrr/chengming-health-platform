import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="app-shell">
    <header class="topbar">
      <a class="brand" href="#home" aria-label="澄明首页"><span class="brand-mark">C</span><span>澄明</span><small>家庭健康中枢</small></a>
      <nav class="main-nav" aria-label="主导航">
        <a class="active" href="#home">总览</a><a href="#appointments">预约</a><a href="#records">健康档案</a><a href="#care">照护计划</a>
      </nav>
      <div class="top-actions"><button class="icon-btn" aria-label="搜索">⌕</button><button class="icon-btn" aria-label="通知">◌<i></i></button><button class="profile-btn"><span class="avatar">林</span><span class="profile-name">林晓宁</span><span class="chevron">⌄</span></button></div>
    </header>

    <main id="home">
      <section class="hero container">
        <div class="hero-copy"><p class="eyebrow">周三 · 6月12日 <span class="live-dot"></span> 数据已同步</p><h1>你好，晓宁。<br><em>今天也照顾好自己。</em></h1><p class="hero-sub">把复杂的健康信息，整理成此刻最需要的一个小步。</p><div class="hero-actions"><button class="primary-btn" data-action="预约咨询">预约一次咨询 <span>↗</span></button><button class="text-btn" data-action="查看健康档案">查看我的档案 <span>→</span></button></div></div>
        <div class="hero-visual"><div class="orbital"><div class="orbital-ring ring-a"></div><div class="orbital-ring ring-b"></div><div class="orbital-core"><span class="core-label">今日状态</span><strong>良好</strong><span class="core-meta">心率 72 <b>·</b> 睡眠 7h 42m</span></div><span class="orbit-dot dot-one"></span><span class="orbit-dot dot-two"></span></div><div class="visual-caption"><span>连续记录</span><strong>第 28 天</strong><span class="caption-line"></span><span>较上周 <b class="up">+12%</b></span></div></div>
      </section>

      <section class="container quick-grid" aria-label="重点事项">
        <article class="next-card"><div class="card-top"><span class="section-kicker">下一步</span><span class="status-pill">待完成</span></div><div class="appointment-date"><span class="date-num">14</span><span><b>六月 · 周五</b><small>下午 15:30 · 视频问诊</small></span></div><div class="doctor-row"><div class="doctor-avatar">周</div><div><b>周予安 医生</b><small>全科 · 复诊</small></div><button class="round-arrow" aria-label="查看预约">↗</button></div><button class="outline-btn" data-action="进入视频问诊">进入视频问诊 <span>↗</span></button></article>
        <article class="focus-card"><div class="card-top"><span class="section-kicker">本周关注</span><span class="more-link">全部记录 →</span></div><div class="focus-title"><strong>睡眠质量</strong><span class="trend-badge">↗ 8%</span></div><div class="chart-wrap"><svg viewBox="0 0 360 100" role="img" aria-label="过去七天睡眠趋势"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f4a48b" stop-opacity=".42"/><stop offset="1" stop-color="#f4a48b" stop-opacity="0"/></linearGradient></defs><path class="gridline" d="M0 75H360M0 43H360M0 12H360"/><path class="area" d="M0 67 C22 69 25 54 47 57 S77 78 96 61 S126 35 145 47 S176 66 194 53 S220 23 241 36 S274 53 290 33 S325 25 360 10 V100 H0Z"/><path class="line" d="M0 67 C22 69 25 54 47 57 S77 78 96 61 S126 35 145 47 S176 66 194 53 S220 23 241 36 S274 53 290 33 S325 25 360 10"/><circle cx="290" cy="33" r="4"/><circle cx="360" cy="10" r="4"/></svg><div class="chart-labels"><span>周四</span><span>周五</span><span>周六</span><span>周日</span><span>周一</span><span>周二</span><span>今天</span></div></div><div class="focus-foot"><span>平均入睡</span><strong>23:18</strong><span>平均时长</span><strong>7h 24m</strong></div></article>
      </section>

      <section class="container content-grid" id="records">
        <div class="section-heading"><div><p class="eyebrow">我的健康</p><h2>把每一份记录，<br>变成更好的决定。</h2></div><button class="text-btn" data-action="打开档案">打开健康档案 <span>→</span></button></div>
        <div class="records-grid"><button class="record-card" data-action="查看检查结果"><span class="record-icon icon-coral">⌁</span><span><b>检查结果</b><small>2 份报告已更新</small></span><span class="record-arrow">↗</span></button><button class="record-card" data-action="查看用药计划"><span class="record-icon icon-green">＋</span><span><b>用药计划</b><small>今日 2 项待服用</small></span><span class="record-arrow">↗</span></button><button class="record-card" data-action="查看家庭成员"><span class="record-icon icon-blue">⌂</span><span><b>家庭成员</b><small>管理 3 位家人档案</small></span><span class="record-arrow">↗</span></button></div>
      </section>

      <section class="care-section" id="care"><div class="container care-inner"><div><p class="eyebrow light">照护计划 · 进行中</p><h2>给身体一点时间，<br><em>改变会发生。</em></h2><p class="care-copy">周医生为你设定了 4 周血压管理计划。你已经完成了第一周，保持这个节奏。</p><button class="light-btn" data-action="查看照护计划">查看完整计划 <span>↗</span></button></div><div class="progress-panel"><div class="progress-head"><span>第 1 周 / 共 4 周</span><strong>25%</strong></div><div class="progress-track"><span></span></div><div class="milestones"><span class="done">建立基线</span><span class="current">规律记录</span><span>复诊评估</span></div><div class="quote">“小小的记录，是身体给你的回信。”<small>周予安医生 · 6月08日</small></div></div></div></section>

      <section class="container community" id="appointments"><div class="community-head"><div><p class="eyebrow">澄明精选</p><h2>今天，听懂你的身体。</h2></div><button class="filter-btn">探索全部 <span>→</span></button></div><div class="article-grid"><article class="article featured"><div class="article-image image-breath"><span class="image-label">呼吸练习</span><div class="breath-orb"></div></div><div class="article-body"><span class="article-type">3 分钟练习</span><h3>当焦虑到来时，先和呼吸待在一起</h3><p>一套由临床心理师设计的呼吸练习，帮你找回当下的稳定感。</p><a href="#" data-action="开始练习">开始练习 <span>↗</span></a></div></article><article class="article"><div class="article-image image-food"><span class="image-label">营养笔记</span><span class="food-mark">膳</span></div><div class="article-body"><span class="article-type">营养师 · 5 分钟</span><h3>晚餐吃什么，睡得更好？</h3><p>从今天的餐桌开始，给睡眠多一点支持。</p><a href="#" data-action="阅读文章">阅读文章 <span>↗</span></a></div></article><article class="article"><div class="article-image image-walk"><span class="image-label">轻运动</span><span class="walk-mark">步</span></div><div class="article-body"><span class="article-type">康复师 · 8 分钟</span><h3>不必跑很远，走路也能改善心肺</h3><p>适合忙碌日常的低门槛运动建议。</p><a href="#" data-action="阅读文章">阅读文章 <span>↗</span></a></div></article></div></section>
    </main>
    <footer class="footer"><div class="container footer-inner"><div class="brand footer-brand"><span class="brand-mark">C</span><span>澄明</span><small>家庭健康中枢</small></div><span>你的健康，值得被认真对待。</span><div class="footer-links"><a href="#">隐私与安全</a><a href="#">帮助中心</a><a href="#">联系我们</a></div></div></footer>
    <div class="toast" role="status" aria-live="polite"></div>
    <div class="modal-backdrop" aria-hidden="true"><section class="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title"><button class="modal-close" aria-label="关闭">×</button><p class="eyebrow">预约咨询</p><h2 id="booking-title">选择一个适合你的时间</h2><p class="modal-sub">周予安医生 · 全科复诊 · 视频问诊</p><div class="date-options"><button class="date-option selected"><b>14</b><small>周五</small></button><button class="date-option"><b>15</b><small>周六</small></button><button class="date-option"><b>17</b><small>周一</small></button><button class="date-option"><b>18</b><small>周二</small></button></div><div class="time-label">可选时段</div><div class="time-options"><button class="time-option selected">15:30</button><button class="time-option">16:00</button><button class="time-option">17:30</button></div><button class="primary-btn confirm-booking">确认预约 <span>↗</span></button></section></div>
    <aside class="record-drawer" aria-hidden="true"><button class="drawer-close" aria-label="关闭">×</button><p class="eyebrow">健康档案</p><h2>林晓宁的健康摘要</h2><p class="drawer-sub">最近更新于今天 09:42</p><div class="drawer-stat"><span>当前关注</span><strong>睡眠质量</strong><b>↗ 8%</b></div><div class="drawer-stat"><span>近期检查</span><strong>2 份报告</strong><b class="neutral">均已查看</b></div><div class="drawer-stat"><span>用药依从</span><strong>96%</strong><b>本周稳定</b></div><button class="outline-btn">下载完整档案 <span>↓</span></button></aside>
  </div>`;

const toast = document.querySelector(".toast");
const modal = document.querySelector(".modal-backdrop");
const drawer = document.querySelector(".record-drawer");
const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
};
const closeOverlays = () => {
  modal.classList.remove("open");
  drawer.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  drawer.setAttribute("aria-hidden", "true");
};
document.querySelectorAll("[data-action]").forEach((el) =>
  el.addEventListener("click", (event) => {
    event.preventDefault();
    const action = el.dataset.action;
    if (action.includes("预约") || action.includes("视频问诊")) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      return;
    }
    if (action.includes("档案")) {
      drawer.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      return;
    }
    showToast(`${action} · 已为你准备好下一步`);
  }),
);
document.querySelector(".modal-close").addEventListener("click", closeOverlays);
document
  .querySelector(".drawer-close")
  .addEventListener("click", closeOverlays);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeOverlays();
});
document.querySelectorAll(".date-option,.time-option").forEach((el) =>
  el.addEventListener("click", () => {
    const group = el.classList.contains("date-option")
      ? ".date-option"
      : ".time-option";
    document
      .querySelectorAll(group)
      .forEach((item) => item.classList.remove("selected"));
    el.classList.add("selected");
  }),
);
document.querySelector(".confirm-booking").addEventListener("click", () => {
  closeOverlays();
  showToast("预约已暂存 · 周五 15:30 视频问诊");
});
document.querySelectorAll(".main-nav a").forEach((link) =>
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".main-nav a")
      .forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  }),
);
