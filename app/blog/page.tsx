import type { Metadata } from 'next';
import { getAllArticles } from '@/content/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { BlogCTA } from '@/components/BlogCTA';

export const metadata: Metadata = {
  title: 'お役立ち記事 | CashMatch キャッシング診断',
  description: 'キャッシングの選び方、審査対策、金利比較、返済のコツなど、初めてのキャッシング利用に役立つ記事をまとめました。',
  openGraph: {
    title: 'お役立ち記事 | CashMatch キャッシング診断',
    description: 'キャッシングの選び方、審査対策、金利比較、返済のコツまで。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <h1>キャッシングのお役立ち記事</h1>
        <p>審査対策・金利比較・返済計画まで、安心してキャッシングを利用するための情報をお届けします。</p>
      </section>

      <section className="blog-list">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
            category={article.category}
          />
        ))}
      </section>

      <BlogCTA />
    </main>
  );
}
