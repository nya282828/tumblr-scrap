import '../styles/main.css';

const grid = document.querySelector('.l-grid');

if (grid) {
  // グリッドポストのクリックをイベントデリゲーションで処理
  // querySelectorAll だと InfiniteScroll で追加された要素に効かないため
  grid.addEventListener('click', (e) => {
    const post = e.target.closest('.post[data-permalink]');
    if (post && !e.target.closest('a')) {
      window.location.href = post.dataset.permalink;
    }
  });

  // Infinite Scroll
  // InfiniteScroll は header.ejs の CDN スクリプトでグローバルに読み込まれている
  const infScroll = new InfiniteScroll(grid, {
    path: '.pager-next',         // 次ページリンクのセレクタ
    append: '.post',             // 追加するポスト要素
    hideNav: '.pagenation-index', // ページネーションUIを非表示
    status: '.page-load-status', // ローディング表示要素
    history: false,              // スクロール中のURL書き換えを無効化
  });
}
