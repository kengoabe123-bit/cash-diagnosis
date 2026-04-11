import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WebsiteSchema } from '@/components/StructuredData';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const SITE_NAME = 'キャッシング診断';
const SITE_URL = 'https://cash-diagnosis.vercel.app';

export const metadata: Metadata = {
  title: 'CashMatch - あなたにピッタリのキャッシングを30秒で診断',
  description: '30秒の無料診断であなたに最適なキャッシングが見つかる。あなたの状況に合わせて、安心して利用できるサービスを提案します。',
  verification: {
    google: 'KvzKu39UZd83_x3idpa06ZQbeXzlo5J-Mn1ACXskPf0',
  },
  openGraph: {
    title: 'CashMatch - あなたにピッタリのキャッシングを30秒で診断',
    description: '30秒の無料診断であなたに最適なキャッシングが見つかる。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <WebsiteSchema
          siteName={SITE_NAME}
          siteUrl={SITE_URL}
          description="あなたにぴったりのキャッシングサービスが見つかる無料診断テストです。質問に答えるだけで、あなたのニーズに最適なサービスをご提案します。"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
