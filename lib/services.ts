export interface Service {
    id: string;
    slug: string;
    name: string;
    nameEn: string;
    tagline: string;
    description: string;
    category: string;
    target: string;
    targetAge: string[];
    features: string[];
    pros: string[];
    cons: string[];
    recommended: string[];
    affiliateUrl: string;
    ctaText: string;
    color: string;
}

export const services: Service[] = [
    {
        id: 'promise',
        slug: 'promise',
        name: 'プロミス',
        nameEn: 'PROMISE',
        tagline: '最短3分融資！初回30日間利息0円',
        description: 'SMBCグループの消費者金融。Web完結で最短3分で融資可能。初回利用時は30日間無利息。アプリローンでカードレス利用も。上限金利17.8%は大手の中でも最低水準。',
        category: 'スピード融資',
        target: '急いで借りたい人',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '最短3分でスピード融資',
            '初回30日間無利息',
            '上限金利17.8%（大手最低水準）',
            'Web完結・カードレスOK',
        ],
        pros: [
            '融資スピードが業界最速クラス',
            '上限金利が大手消費者金融で最も低い',
            '初回30日間利息0円',
            'アプリで借入・返済が完結',
        ],
        cons: [
            '銀行カードローンより金利は高い',
            '総量規制の対象（年収の1/3まで）',
            '利用限度額は最大500万円',
        ],
        recommended: [
            '今すぐお金が必要な人',
            '初めてカードローンを使う人',
            '少しでも低い金利で借りたい人',
            'スマホだけで手続きを完結させたい人',
        ],
        affiliateUrl: 'https://example.com/promise',
        ctaText: '公式サイトで申し込む',
        color: '#0ea5e9',
    },
    {
        id: 'acom',
        slug: 'acom',
        name: 'アコム',
        nameEn: 'ACOM',
        tagline: '「はじめてのアコム」初回30日間金利0円',
        description: '三菱UFJフィナンシャル・グループ。「はじめてのアコム」でおなじみの大手消費者金融。最短20分で審査完了。初回30日間金利0円で、楽天銀行なら最短10秒で振込可能。',
        category: '大手安心カードローン',
        target: '初めてで安心感を重視する人',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '三菱UFJグループの安心感',
            '最短20分で審査完了',
            '初回30日間金利0円',
            '楽天銀行なら最短10秒振込',
        ],
        pros: [
            '大手グループの信頼性と安心感',
            '審査スピードが速い',
            '初回30日間利息なし',
            '全国の提携ATMが豊富',
        ],
        cons: [
            '上限金利18.0%は標準的',
            '総量規制の対象',
            '専業主婦は利用不可',
        ],
        recommended: [
            '大手の安心感を重視する人',
            '初めてカードローンを利用する人',
            'ATMでの借入・返済を重視する人',
            '審査から融資まで速さを求める人',
        ],
        affiliateUrl: 'https://example.com/acom',
        ctaText: '公式サイトで申し込む',
        color: '#ef4444',
    },
    {
        id: 'mobit',
        slug: 'smbc-mobit',
        name: 'SMBCモビット',
        nameEn: 'SMBC MOBIT',
        tagline: 'WEB完結なら電話連絡なし！バレない借入',
        description: 'SMBCグループのカードローン。WEB完結申込なら電話連絡なし・郵送物なしで申し込み可能。周囲にバレずに利用したい方に最適。Tポイントも貯まる。',
        category: 'プライバシー重視',
        target: '周囲にバレたくない人',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            'WEB完結で電話連絡なし',
            '郵送物なしでバレない',
            'SMBCグループの安心感',
            'Tポイントが貯まる・使える',
        ],
        pros: [
            '職場への電話連絡なし（WEB完結時）',
            '郵送物がないので家族にもバレない',
            'Tポイントで返済もできる',
            '大手グループの信頼性',
        ],
        cons: [
            '初回無利息サービスがない',
            '上限金利18.0%は標準的',
            '即日融資は時間帯による',
        ],
        recommended: [
            '職場や家族にバレたくない人',
            '電話連絡を避けたい人',
            'Tポイントを活用したい人',
            'WEBで全て完結させたい人',
        ],
        affiliateUrl: 'https://example.com/mobit',
        ctaText: '公式サイトで申し込む',
        color: '#6366f1',
    },
    {
        id: 'aiful',
        slug: 'aiful',
        name: 'アイフル',
        nameEn: 'AIFUL',
        tagline: '最短18分融資！独立系ならではの柔軟審査',
        description: '独立系消費者金融として柔軟な審査が特徴。最短18分での融資も可能。初回30日間利息0円。Web申込後にフリーダイヤルに電話すると審査時間を短縮できるサービスも。',
        category: '柔軟審査',
        target: '審査に不安がある人',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '最短18分でスピード融資',
            '独立系ならではの柔軟な審査',
            '初回30日間利息0円',
            '審査優先サービスあり',
        ],
        pros: [
            '独立系で審査基準が柔軟',
            '融資スピードが速い',
            '初回30日間利息なし',
            '電話で審査を優先してもらえる',
        ],
        cons: [
            '上限金利18.0%は標準的',
            '銀行系に比べ金利が高め',
            '総量規制の対象',
        ],
        recommended: [
            '他社で審査が不安な人',
            'とにかく早く借りたい人',
            '初めての利用で無利息を活用したい人',
            '独立系の柔軟さを求める人',
        ],
        affiliateUrl: 'https://example.com/aiful',
        ctaText: '公式サイトで申し込む',
        color: '#f59e0b',
    },
    {
        id: 'lake',
        slug: 'lake-alsa',
        name: 'レイク',
        nameEn: 'LAKE',
        tagline: '選べる無利息！60日間 or 5万円まで180日間',
        description: 'SBI新生銀行グループのカードローン。初回利用時に「60日間無利息」か「5万円まで180日間無利息」を選べる業界唯一のサービス。Web申込で最短25分融資。',
        category: '無利息特化',
        target: '無利息期間を最大限活用したい人',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '60日間無利息 or 5万円まで180日間無利息',
            'SBI新生銀行グループ',
            'Web申込で最短25分融資',
            '選べる無利息サービス',
        ],
        pros: [
            '業界最長クラスの無利息期間',
            '少額なら180日間無利息が超お得',
            '銀行グループの安心感',
            '無利息の選択肢が2つある',
        ],
        cons: [
            '上限金利18.0%は標準的',
            '融資スピードは他社にやや劣る',
            '総量規制の対象',
        ],
        recommended: [
            '無利息期間を長く使いたい人',
            '少額の借入を考えている人',
            '銀行グループの安心感が欲しい人',
            '初回利用で利息を最小限にしたい人',
        ],
        affiliateUrl: 'https://example.com/lake',
        ctaText: '公式サイトで申し込む',
        color: '#10b981',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
