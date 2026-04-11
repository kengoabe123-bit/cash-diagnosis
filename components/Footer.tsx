import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">キャッシング診断</div>
        <p className="footer-text">
          あなたにぴったりのキャッシングサービスを見つけよう
        </p>
        <nav className="footer-nav">
          <Link href="/about">運営者情報</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Link href="/services">サービス一覧</Link>
        </nav>
        <p className="footer-disclaimer">
          ※ 本サイトはアフィリエイトプログラムに参加しています
          <br />※ 診断結果はあくまで参考情報です。ご利用は計画的にお願いいたします。
        </p>
      </div>
    </footer>
  );
}
