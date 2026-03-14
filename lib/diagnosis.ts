import { services, Service } from './services';

export interface Question { id: number; text: string; subtext?: string; icon: string; options: Option[]; }
export interface Option { label: string; icon: string; scores: Record<string, number>; }
export interface DiagnosisResult { service: Service; score: number; matchRate: number; reason: string; }
interface ConditionalReason { condition: (answers: number[]) => boolean; text: string; }

// IDs: skyoffice, arco, nichiden, arrow, futaba, quick39, hello-happy, central, plan

export const questions: Question[] = [
    {
        id: 1, text: 'お金が必要になった一番の理由は？', subtext: '最も当てはまるものを選んでください', icon: '💭',
        options: [
            { label: '急な出費（冠婚葬祭・医療費等）', icon: '🏥', scores: { skyoffice: 4, arco: 3, nichiden: 3, arrow: 4, futaba: 3, quick39: 5, 'hello-happy': 3, central: 4, plan: 4 } },
            { label: '生活費の補填', icon: '🏠', scores: { skyoffice: 3, arco: 4, nichiden: 3, arrow: 3, futaba: 4, quick39: 3, 'hello-happy': 5, central: 4, plan: 3 } },
            { label: '趣味・旅行・買い物', icon: '🎉', scores: { skyoffice: 3, arco: 3, nichiden: 4, arrow: 3, futaba: 3, quick39: 3, 'hello-happy': 4, central: 3, plan: 4 } },
            { label: '事業・ビジネス資金', icon: '💼', scores: { skyoffice: 3, arco: 3, nichiden: 3, arrow: 5, futaba: 2, quick39: 3, 'hello-happy': 4, central: 3, plan: 3 } },
        ],
    },
    {
        id: 2, text: '融資スピードはどれくらい重視しますか？', subtext: '', icon: '⚡',
        options: [
            { label: '今日中に必要！', icon: '🔥', scores: { skyoffice: 5, arco: 3, nichiden: 3, arrow: 4, futaba: 3, quick39: 5, 'hello-happy': 2, central: 3, plan: 4 } },
            { label: '2〜3日以内ならOK', icon: '📅', scores: { skyoffice: 4, arco: 4, nichiden: 4, arrow: 4, futaba: 4, quick39: 4, 'hello-happy': 4, central: 4, plan: 4 } },
            { label: '1週間くらいでも大丈夫', icon: '📆', scores: { skyoffice: 3, arco: 4, nichiden: 4, arrow: 3, futaba: 4, quick39: 3, 'hello-happy': 4, central: 4, plan: 3 } },
            { label: 'スピードより条件重視', icon: '🔍', scores: { skyoffice: 2, arco: 4, nichiden: 3, arrow: 3, futaba: 5, quick39: 2, 'hello-happy': 5, central: 4, plan: 3 } },
        ],
    },
    {
        id: 3, text: '借入で最も心配なことは？', subtext: '', icon: '😟',
        options: [
            { label: '家族や職場にバレないか', icon: '🤫', scores: { skyoffice: 4, arco: 3, nichiden: 5, arrow: 3, futaba: 3, quick39: 3, 'hello-happy': 3, central: 5, plan: 5 } },
            { label: '審査に通るかどうか', icon: '📋', scores: { skyoffice: 3, arco: 5, nichiden: 3, arrow: 5, futaba: 3, quick39: 3, 'hello-happy': 4, central: 3, plan: 3 } },
            { label: '返済のしやすさ', icon: '💸', scores: { skyoffice: 3, arco: 3, nichiden: 3, arrow: 3, futaba: 5, quick39: 3, 'hello-happy': 5, central: 3, plan: 3 } },
            { label: '信頼できる会社かどうか', icon: '🏦', scores: { skyoffice: 4, arco: 4, nichiden: 4, arrow: 3, futaba: 4, quick39: 3, 'hello-happy': 4, central: 4, plan: 3 } },
        ],
    },
    {
        id: 4, text: '借りたい金額はどれくらい？', subtext: '', icon: '💰',
        options: [
            { label: '5万円以下', icon: '💴', scores: { skyoffice: 4, arco: 4, nichiden: 4, arrow: 4, futaba: 5, quick39: 5, 'hello-happy': 3, central: 3, plan: 4 } },
            { label: '5〜30万円', icon: '💵', scores: { skyoffice: 5, arco: 4, nichiden: 4, arrow: 4, futaba: 4, quick39: 4, 'hello-happy': 4, central: 4, plan: 4 } },
            { label: '30〜100万円', icon: '💶', scores: { skyoffice: 3, arco: 3, nichiden: 3, arrow: 4, futaba: 3, quick39: 3, 'hello-happy': 5, central: 4, plan: 3 } },
            { label: '100万円以上', icon: '💎', scores: { skyoffice: 2, arco: 2, nichiden: 2, arrow: 3, futaba: 2, quick39: 2, 'hello-happy': 4, central: 3, plan: 2 } },
        ],
    },
    {
        id: 5, text: '申し込み方法はどれが希望？', subtext: '', icon: '📱',
        options: [
            { label: 'ネット（PC・スマホ）で完結', icon: '💻', scores: { skyoffice: 5, arco: 3, nichiden: 5, arrow: 3, futaba: 3, quick39: 4, 'hello-happy': 3, central: 5, plan: 5 } },
            { label: '電話で相談しながら', icon: '📞', scores: { skyoffice: 3, arco: 4, nichiden: 2, arrow: 4, futaba: 5, quick39: 3, 'hello-happy': 5, central: 3, plan: 3 } },
            { label: '来店して対面で', icon: '🏢', scores: { skyoffice: 2, arco: 3, nichiden: 2, arrow: 4, futaba: 4, quick39: 3, 'hello-happy': 4, central: 2, plan: 2 } },
            { label: 'どの方法でも構わない', icon: '🤷', scores: { skyoffice: 4, arco: 4, nichiden: 4, arrow: 4, futaba: 4, quick39: 4, 'hello-happy': 4, central: 4, plan: 4 } },
        ],
    },
    {
        id: 6, text: 'あなたの性別は？', subtext: '', icon: '👤',
        options: [
            { label: '男性', icon: '👨', scores: { skyoffice: 4, arco: 4, nichiden: 4, arrow: 4, futaba: 3, quick39: 4, 'hello-happy': 4, central: 4, plan: 4 } },
            { label: '女性', icon: '👩', scores: { skyoffice: 3, arco: 3, nichiden: 3, arrow: 3, futaba: 5, quick39: 3, 'hello-happy': 4, central: 3, plan: 3 } },
            { label: '回答しない', icon: '🙂', scores: { skyoffice: 3, arco: 4, nichiden: 4, arrow: 3, futaba: 3, quick39: 3, 'hello-happy': 4, central: 4, plan: 4 } },
        ],
    },
    {
        id: 7, text: 'キャッシング選びで最も重視するのは？', subtext: 'これだけは譲れない！というものを選んでください', icon: '⭐',
        options: [
            { label: '融資までのスピード', icon: '🚀', scores: { skyoffice: 5, arco: 3, nichiden: 3, arrow: 4, futaba: 3, quick39: 5, 'hello-happy': 2, central: 3, plan: 4 } },
            { label: '審査の通りやすさ', icon: '✅', scores: { skyoffice: 3, arco: 5, nichiden: 3, arrow: 5, futaba: 3, quick39: 3, 'hello-happy': 4, central: 3, plan: 3 } },
            { label: 'バレない（プライバシー）', icon: '🔒', scores: { skyoffice: 4, arco: 3, nichiden: 5, arrow: 3, futaba: 3, quick39: 3, 'hello-happy': 3, central: 5, plan: 5 } },
            { label: '丁寧なサポート・安心感', icon: '🤝', scores: { skyoffice: 3, arco: 4, nichiden: 3, arrow: 3, futaba: 5, quick39: 2, 'hello-happy': 5, central: 3, plan: 3 } },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    skyoffice: [
        { condition: (a) => a[1] === 0, text: '今すぐお金が必要なあなたに。スカイオフィスは来店不要でスピーディーなキャッシング。ネットで申し込んですぐに審査が進みます。' },
        { condition: (a) => a[4] === 0, text: 'ネットで全て完結させたいあなたに最適。スカイオフィスは来店不要、ネット申し込みでスピーディーに融資を受けられます。' },
        { condition: () => true, text: '来店不要のスピードキャッシング。ネットで簡単申し込み、全国どこからでも利用できます。' },
    ],
    arco: [
        { condition: (a) => a[2] === 1 || a[6] === 1, text: '審査に不安があるあなたに。アルコシステムは新規のお客様を大歓迎。柔軟な審査対応で、初めての方も安心して利用できます。' },
        { condition: (a) => a[5] === 1, text: '女性のあなたにも安心のアルコシステム。丁寧なカスタマーサポートで、初めてのキャッシングも安心です。' },
        { condition: () => true, text: '新規のお客様大歓迎！柔軟な審査対応と丁寧なサポートで、初めてのキャッシングも安心して利用できます。' },
    ],
    nichiden: [
        { condition: (a) => a[4] === 0, text: 'ネットで完結したいあなたにぴったり。ニチデンは24時間ネット申し込みOK。来店不要でスマホからも手軽に利用できます。' },
        { condition: (a) => a[2] === 0, text: 'バレたくないあなたに。ニチデンはネット完結で、人目を気にせず申し込めます。簡単・便利がモットーのキャッシングです。' },
        { condition: () => true, text: '簡単・便利なネットキャッシング。24時間いつでもネットで申し込みOK、来店不要でスマホからも手軽に利用できます。' },
    ],
    arrow: [
        { condition: (a) => a[2] === 1 || a[6] === 1, text: '審査が心配なあなたに最適。アローは独自の審査基準で柔軟に対応。一人ひとりの状況に合わせて親身に相談に乗ってくれます。' },
        { condition: (a) => a[0] === 3, text: 'ビジネス資金が必要なあなたに。アローは独自の柔軟な審査で、様々な資金ニーズに対応します。' },
        { condition: () => true, text: '独自審査で柔軟対応。大手で断られた方にもチャンスあり。一人ひとりの状況に合わせた審査でサポートします。' },
    ],
    futaba: [
        { condition: (a) => a[5] === 1, text: '女性のあなたに最適。フタバはレディースキャッシング対応で、女性スタッフが丁寧にサポート。安心して相談できます。' },
        { condition: (a) => a[2] === 2 || a[6] === 3, text: '返済のしやすさ・安心感を重視するあなたに。フタバは「借りやすくて返しやすい」がコンセプト。丁寧な対応で安心です。' },
        { condition: () => true, text: '借りやすくて返しやすい！レディースキャッシングにも対応し、女性スタッフによる丁寧なサポートが好評です。' },
    ],
    quick39: [
        { condition: (a) => a[1] === 0, text: '今すぐお金が必要なあなたに最適。QUICK39はクイック審査でスピード融資。急な出費にもすぐに対応します。' },
        { condition: (a) => a[3] === 0, text: '少額の急な出費に。QUICK39はスピーディーな審査で、必要な分だけ素早く借りられます。' },
        { condition: () => true, text: 'クイック審査でスピード融資！急な資金ニーズに素早く対応。シンプルな手続きで必要な時にすぐ借りられます。' },
    ],
    'hello-happy': [
        { condition: (a) => a[0] === 1, text: '生活費の補填なら、用途自由のハローハッピー。フリーローンなので使い道を問わず、安心のサポート体制で丁寧に対応します。' },
        { condition: (a) => a[6] === 3, text: '安心感を重視するあなたに。ハローハッピーは「安心できるパートナー」をモットーに、丁寧なサポートで借入をサポートします。' },
        { condition: () => true, text: '安心できるパートナー。フリーローンで用途自由、柔軟な審査対応と丁寧なカスタマーサービスが魅力です。' },
    ],
    central: [
        { condition: (a) => a[2] === 0, text: 'バレたくないあなたに最適。セントラルは来店不要の振込キャッシング。郵送物も配慮があり、プライバシーを守りながら利用できます。' },
        { condition: (a) => a[4] === 0, text: 'ネットで完結したいあなたに。セントラルは来店不要で全国振込対応。地方在住でも手軽に利用できます。' },
        { condition: () => true, text: '来店不要の全国振込キャッシング。どこに住んでいても振込で受け取れる、便利なキャッシングサービスです。' },
    ],
    plan: [
        { condition: (a) => a[2] === 0, text: 'バレずに借りたいあなたに。プランは24時間ネット申し込みで、人目を気にせず好きなタイミングで手続きできます。' },
        { condition: (a) => a[1] === 0, text: '今すぐ申し込みたいあなたに。プランは24時間いつでも申し込み可能。深夜でも早朝でも、思い立った時にすぐ手続きできます。' },
        { condition: () => true, text: '24時間いつでも簡単契約。全国どこからでも時間を気にせず申し込めるキャッシングサービスです。' },
    ],
};

function selectReason(serviceId: string, answers: number[], fallbackReason: string): string {
    const reasons = conditionalReasons[serviceId];
    if (reasons) { for (const r of reasons) { if (r.condition(answers)) return r.text; } }
    return fallbackReason;
}

export function calculateResults(answers: number[]): DiagnosisResult[] {
    const scoreMap: Record<string, number> = {};
    services.forEach((s) => { scoreMap[s.id] = 0; });
    answers.forEach((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.options[optionIndex]) {
            Object.entries(question.options[optionIndex].scores).forEach(([serviceId, score]) => {
                if (scoreMap[serviceId] !== undefined) { scoreMap[serviceId] += score; }
            });
        }
    });
    const results: DiagnosisResult[] = services
        .map((service) => ({ service, score: scoreMap[service.id] || 0, matchRate: 0, reason: selectReason(service.id, answers, service.tagline) }))
        .sort((a, b) => b.score - a.score);
    const top3 = results.slice(0, 3);
    const topScore = top3[0]?.score || 1;
    return top3.map((r, i) => {
        const scoreRatio = topScore > 0 ? r.score / topScore : 0.5;
        let displayRate: number;
        if (i === 0) displayRate = 73 + Math.round(scoreRatio * 12);
        else if (i === 1) displayRate = 67 + Math.round(scoreRatio * 11);
        else displayRate = 60 + Math.round(scoreRatio * 12);
        return { ...r, matchRate: displayRate };
    });
}
