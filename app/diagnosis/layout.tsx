import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'カードローン診断 | CashMatch - あなたに最適なカードローンを見つけよう',
    description: '7つの質問に答えるだけで、あなたの状況に最適なカードローンがわかります。',
};

export default function DiagnosisLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
