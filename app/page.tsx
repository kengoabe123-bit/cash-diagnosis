import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-icon">💰</div>
        <h1>あなたにピッタリの<br /><span className="gradient-text">カードローン無料診断</span></h1>
        <p>7つの質問に答えるだけで、あなたの状況に合った<br />最適なカードローンが見つかります。</p>
        <div className="features glass-card">
          <div className="feature-item"><div className="feature-icon">⏱️</div><div className="feature-label">たった30秒</div></div>
          <div className="feature-item"><div className="feature-icon">🎯</div><div className="feature-label">あなた専用の結果</div></div>
          <div className="feature-item"><div className="feature-icon">🔬</div><div className="feature-label">大手5社比較</div></div>
          <div className="feature-item"><div className="feature-icon">💯</div><div className="feature-label">完全無料</div></div>
        </div>
        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">💰 無料でカードローン診断を始める</Link>
      </div>
    </section>
  );
}
