import { services, Service } from './services';

export interface Question { id: number; text: string; subtext?: string; icon: string; options: Option[]; }
export interface Option { label: string; icon: string; scores: Record<string, number>; }
export interface DiagnosisResult { service: Service; score: number; matchRate: number; reason: string; }
interface ConditionalReason { condition: (answers: number[]) => boolean; text: string; }

export const questions: Question[] = [
    {
        id: 1, text: 'お金が必要になった一番の理由は？', subtext: '最も当てはまるものを選んでください', icon: '💭',
        options: [
            { label: '急な出費（冠婚葬祭・医療費等）', icon: '🏥', scores: { promise: 5, acom: 4, mobit: 3, aiful: 4, lake: 3 } },
            { label: '生活費の補填', icon: '🏠', scores: { promise: 4, acom: 4, mobit: 3, aiful: 3, lake: 5 } },
            { label: '趣味・旅行・買い物', icon: '🎉', scores: { promise: 3, acom: 3, mobit: 4, aiful: 3, lake: 5 } },
            { label: '事業・ビジネス資金', icon: '💼', scores: { promise: 3, acom: 3, mobit: 4, aiful: 5, lake: 2 } },
        ],
    },
    {
        id: 2, text: '融資スピードはどれくらい重視しますか？', subtext: '', icon: '⚡',
        options: [
            { label: '今日中に必要！', icon: '🔥', scores: { promise: 5, acom: 5, mobit: 3, aiful: 5, lake: 3 } },
            { label: '2〜3日以内ならOK', icon: '📅', scores: { promise: 4, acom: 4, mobit: 4, aiful: 4, lake: 4 } },
            { label: '1週間くらいでも大丈夫', icon: '📆', scores: { promise: 3, acom: 3, mobit: 4, aiful: 3, lake: 4 } },
            { label: 'スピードより条件重視', icon: '🔍', scores: { promise: 2, acom: 2, mobit: 4, aiful: 2, lake: 5 } },
        ],
    },
    {
        id: 3, text: '借入で最も心配なことは？', subtext: '', icon: '😟',
        options: [
            { label: '家族や職場にバレないか', icon: '🤫', scores: { promise: 3, acom: 3, mobit: 5, aiful: 3, lake: 3 } },
            { label: '審査に通るかどうか', icon: '📋', scores: { promise: 3, acom: 3, mobit: 2, aiful: 5, lake: 3 } },
            { label: '利息がいくらかかるか', icon: '💸', scores: { promise: 5, acom: 3, mobit: 3, aiful: 3, lake: 5 } },
            { label: '信頼できる会社かどうか', icon: '🏦', scores: { promise: 4, acom: 5, mobit: 4, aiful: 2, lake: 4 } },
        ],
    },
    {
        id: 4, text: '借りたい金額はどれくらい？', subtext: '', icon: '💰',
        options: [
            { label: '5万円以下', icon: '💴', scores: { promise: 4, acom: 4, mobit: 3, aiful: 4, lake: 5 } },
            { label: '5〜30万円', icon: '💵', scores: { promise: 5, acom: 5, mobit: 4, aiful: 4, lake: 4 } },
            { label: '30〜100万円', icon: '💶', scores: { promise: 4, acom: 4, mobit: 5, aiful: 4, lake: 3 } },
            { label: '100万円以上', icon: '💎', scores: { promise: 3, acom: 3, mobit: 5, aiful: 3, lake: 2 } },
        ],
    },
    {
        id: 5, text: '返済期間はどれくらいを想定？', subtext: '', icon: '📅',
        options: [
            { label: '1ヶ月以内に全額返済', icon: '⚡', scores: { promise: 5, acom: 5, mobit: 2, aiful: 5, lake: 4 } },
            { label: '3ヶ月くらい', icon: '📆', scores: { promise: 4, acom: 4, mobit: 3, aiful: 4, lake: 5 } },
            { label: '半年〜1年', icon: '📅', scores: { promise: 3, acom: 3, mobit: 4, aiful: 3, lake: 4 } },
            { label: '1年以上かけてゆっくり', icon: '🐢', scores: { promise: 3, acom: 3, mobit: 4, aiful: 3, lake: 3 } },
        ],
    },
    {
        id: 6, text: 'カードローンの利用経験は？', subtext: '', icon: '📝',
        options: [
            { label: '今回が初めて', icon: '🔰', scores: { promise: 5, acom: 5, mobit: 3, aiful: 4, lake: 5 } },
            { label: '1〜2回程度ある', icon: '✌️', scores: { promise: 4, acom: 4, mobit: 4, aiful: 4, lake: 4 } },
            { label: '何度か利用している', icon: '🔄', scores: { promise: 3, acom: 3, mobit: 5, aiful: 4, lake: 3 } },
            { label: '他社で断られた経験がある', icon: '😰', scores: { promise: 2, acom: 2, mobit: 3, aiful: 5, lake: 2 } },
        ],
    },
    {
        id: 7, text: 'カードローン選びで最も重視するのは？', subtext: 'これだけは譲れない！というものを選んでください', icon: '⭐',
        options: [
            { label: '融資までのスピード', icon: '🚀', scores: { promise: 5, acom: 5, mobit: 3, aiful: 5, lake: 3 } },
            { label: '金利の低さ・無利息期間', icon: '📉', scores: { promise: 5, acom: 3, mobit: 2, aiful: 3, lake: 5 } },
            { label: 'バレないこと（プライバシー）', icon: '🔒', scores: { promise: 3, acom: 3, mobit: 5, aiful: 3, lake: 3 } },
            { label: '審査の通りやすさ', icon: '✅', scores: { promise: 3, acom: 3, mobit: 3, aiful: 5, lake: 3 } },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    promise: [
        { condition: (a) => a[1] === 0, text: '今日中にお金が必要なあなたに最適。プロミスは最短3分で融資可能。上限金利17.8%は大手消費者金融で最も低く、初回30日間は利息0円です。' },
        { condition: (a) => a[6] === 1, text: '金利の低さを重視するあなたに。プロミスの上限金利17.8%は大手消費者金融の中で最低水準。さらに初回30日間は無利息で借りられます。' },
        { condition: (a) => a[5] === 0, text: '初めてのカードローンなら安心のプロミス。初回30日間利息0円、最短3分融資、大手SMBCグループの安心感で初めてでも安心して利用できます。' },
        { condition: () => true, text: '最短3分融資×上限金利17.8%（大手最低）×初回30日間無利息。スピードと低金利を両立した、SMBCグループの消費者金融です。' },
    ],
    acom: [
        { condition: (a) => a[2] === 3, text: '信頼できる会社を重視するあなたに。アコムは三菱UFJフィナンシャル・グループ。大手銀行系列の確かな安心感で、初めての利用でも安心です。' },
        { condition: (a) => a[5] === 0, text: '初めてのカードローンなら「はじめてのアコム」。三菱UFJグループの安心感と初回30日間金利0円で、安心してスタートできます。' },
        { condition: (a) => a[1] === 0, text: '今すぐお金が必要なあなたに。アコムは最短20分で審査完了、楽天銀行なら最短10秒で振込。初回30日間は金利0円です。' },
        { condition: () => true, text: '三菱UFJグループの大手消費者金融。「はじめてのアコム」でおなじみ、初回30日間金利0円で安心して利用できます。' },
    ],
    mobit: [
        { condition: (a) => a[2] === 0 || a[6] === 2, text: 'バレない借入を最重視するあなたに最適。SMBCモビットのWEB完結申込なら、職場への電話連絡なし・郵送物なし。誰にも知られず利用できます。' },
        { condition: (a) => a[3] === 2 || a[3] === 3, text: 'まとまった金額の借入を考えているあなたに。SMBCモビットは大口融資にも対応し、WEB完結でプライバシーを守りながら利用できます。' },
        { condition: () => true, text: 'WEB完結なら電話連絡なし・郵送物なし。周囲に知られることなく利用でき、Tポイントも貯まる。SMBCグループの安心感も魅力です。' },
    ],
    aiful: [
        { condition: (a) => a[5] === 3 || a[6] === 3, text: '審査に不安のあるあなたに。アイフルは独立系消費者金融ならではの柔軟な審査基準が特徴。他社で断られた方にもチャンスがあります。' },
        { condition: (a) => a[1] === 0, text: '最速を求めるあなたに。アイフルは最短18分で融資可能。さらに審査優先サービスで通常より早く審査を進めてもらえます。' },
        { condition: (a) => a[0] === 3, text: 'ビジネス資金が必要なあなたに。アイフルは独立系ならではの柔軟な対応で、事業用の資金ニーズにも幅広く対応します。' },
        { condition: () => true, text: '独立系ならではの柔軟な審査と最短18分融資。初回30日間利息0円で、審査に不安がある方にもおすすめの消費者金融です。' },
    ],
    lake: [
        { condition: (a) => a[3] === 0, text: '5万円以下の少額借入なら断然レイク。「5万円まで180日間無利息」を選べば、半年間利息0円で借りられます。少額なら最もお得な選択肢です。' },
        { condition: (a) => a[6] === 1, text: '無利息期間を最大限活用したいあなたに。レイクは「60日間無利息」か「5万円まで180日間無利息」を選べる業界唯一のサービスが魅力です。' },
        { condition: (a) => a[0] === 1, text: '生活費の補填なら、無利息期間が長いレイクが最適。60日間無利息なら余裕を持って返済計画を立てられます。' },
        { condition: () => true, text: '選べる無利息サービスが最大の魅力。「60日間無利息」か「5万円まで180日間無利息」を選べる、SBI新生銀行グループのカードローンです。' },
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
            const option = question.options[optionIndex];
            Object.entries(option.scores).forEach(([serviceId, score]) => {
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
