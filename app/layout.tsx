import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900'], display: 'swap' });

export const metadata: Metadata = {
  title: 'CashMatch - あなたにピッタリのカードローンを30秒で診断',
  description: '30秒の無料診断であなたに最適なカードローンが見つかる。借入目的や返済計画に合わせて、大手5社からベストマッチを提案します。',
  openGraph: { title: 'CashMatch - あなたにピッタリのカードローンを30秒で診断', description: '30秒の無料診断であなたに最適なカードローンが見つかる。', type: 'website', locale: 'ja_JP' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}><Header />{children}<Footer /></body>
    </html>
  );
}
