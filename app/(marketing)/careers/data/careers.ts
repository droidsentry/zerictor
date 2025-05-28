import { Career } from "@/lib/microcms/types";

export const careers: Career[] = [
  // エンジニア・技術系
  {
    careerId: "frontend-engineer",
    title: "フロントエンドエンジニア",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["frontend", "engineer"],
      othersIds: ["annual-salary"],
    },
    jobDescription:
      "主に社内向けWebサイトのフロントエンドを担当します。（スキルに合わせて）バックエンドやCI、テスト、開発環境の改善まで幅広くご担当いただきます。",
    mustSkills: [
      "Reactを使った開発の実務経験3年以上",
      "Material-UI、Tailwind CSS等を用いた開発経験",
      "TypeScriptの設定やlinter(eslint, prettier等)の導入等、開発環境の継続的な改善が可能な方",
    ],
    welcomeSkills: [
      "CIやテスト自動化の経験がある方",
      "サーバーサイド開発やインフラ開発（AWS、GCP、Varnish、Fastly）のご経験がある方",
      "品質全般（パフォーマンス、アクセシビリティ、セキュリティ、SEO）",
      "UI/UXの構築ができるデザイナー経験があり、フロントエンドに興味がある方",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "主体的に課題を見つけ、技術的な解決策を提案・実行できる方",
      "チーム全体の成長を意識し、メンバーを技術面でサポートできる方",
      "細部にまでこだわり、誠実かつ丁寧に業務に取り組める方",
    ],
  },
  {
    careerId: "backend-engineer",
    title: "バックエンドエンジニア",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["backend-engineer", "engineer"],
      othersIds: ["tech-lead"],
    },
    jobDescription: `次世代のWebサービス開発において、高スケーラブルなバックエンドシステムの設計・構築をご担当いただきます。認証基盤の刷新やプロダクトの成長（グロース）をリードしていただきます。`,
    mustSkills: [
      "Webサービス、アプリケーションのアーキテクチャ設計・開発経験",
      "チームリードまたはテックリードとしてのプロジェクト推進経験",
      "各種リレーショナルデータベースを用いた開発経験",
    ],
    welcomeSkills: [
      "大規模Webサービスのアーキテクチャ開発経験",
      "大規模Webサービス（アプリを含む）開発のチームマネージメント経験",
      "Golangを用いた開発経験",
      "アカウントサービスまたは認証認可サービスの開発経験",
      "AWSまたはGCP上でのインフラ構築、運用経験",
      "パフォーマンスチューニングやスケーラビリティ向上に関する実績",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "主体的に課題を見つけ、技術的な解決策を提案・実行できる方",
      "チーム全体の成長を意識し、メンバーを技術面でサポートできる方",
      "細部にまでこだわり、誠実かつ丁寧に業務に取り組める方",
    ],
  },

  {
    careerId: "mobile-app-engineer",
    title: "モバイルアプリエンジニア",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["mobile-app-engineer"],
      othersIds: ["ios", "android"],
    },
    jobDescription:
      "弊社のモバイルアプリケーション開発チームにて、iOS・Androidアプリの設計・開発・運用をご担当いただきます。ユーザー体験の向上を目指し、高品質なモバイルアプリの提供に貢献していただきます。",
    mustSkills: [
      "SwiftまたはKotlinを使用したモバイルアプリ開発の実務経験3年以上",
      "iOS/Androidアプリのリリース・運用経験",
      "RESTful APIを使用したサーバー連携の実装経験",
    ],
    welcomeSkills: [
      "React Native、Flutterなどのクロスプラットフォーム開発経験",
      "CI/CDパイプラインの構築・運用経験",
      "Unit TestやUI Testの実装経験",
      "Firebase、AWS等のクラウドサービス利用経験",
      "アプリストア最適化（ASO）の経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "ユーザー体験を重視し、品質にこだわりを持てる方",
      "新しい技術やトレンドに対して学習意欲が高い方",
      "チーム開発における協調性とコミュニケーション能力を持つ方",
    ],
  },

  {
    careerId: "qa-engineer",
    title: "QAエンジニア",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["qa-engineer"],
      othersIds: ["quality-assurance"],
    },
    jobDescription:
      "Webサービス・モバイルアプリの品質保証業務全般をご担当いただきます。テスト設計・実行、自動テストの構築、品質管理プロセスの改善を通じて、高品質なプロダクトの提供に貢献していただきます。",
    mustSkills: [
      "Webアプリケーションまたはモバイルアプリのテスト設計・実行経験3年以上",
      "テストケース作成、バグレポート作成の経験",
      "手動テストおよび自動テストの実施経験",
    ],
    welcomeSkills: [
      "Selenium、Cypress、Playwright等の自動テストツールの使用経験",
      "API テスト（Postman、REST Assured等）の経験",
      "性能テスト、セキュリティテストの実施経験",
      "CI/CDパイプラインでのテスト自動化の構築経験",
      "JSTQB、ISTQB等のテスト関連資格",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "品質に対して高い意識と責任感を持てる方",
      "細部への注意力と論理的思考力を持つ方",
      "開発チームとの連携を重視し、建設的なフィードバックができる方",
    ],
  },
  {
    careerId: "game-engineer",
    title: "ゲームエンジニア",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["game-engineer"],
      othersIds: ["unity"],
    },
    jobDescription:
      "モバイルゲーム・Webゲームの企画から開発・運用まで幅広くご担当いただきます。ゲームエンジンを活用したゲーム開発、サーバーサイドの実装、ゲーム内経済システムの設計など、ゲーム開発の様々な領域に携わっていただきます。",
    mustSkills: [
      "Unity、Unreal Engine等のゲームエンジンを使用したゲーム開発経験3年以上",
      "C#、C++、JavaScript等のプログラミング言語の実務経験",
      "ゲームのリリース・運用経験",
    ],
    welcomeSkills: [
      "3Dグラフィックス、シェーダー、アニメーション実装の経験",
      "マルチプレイヤーゲームの開発経験",
      "ゲーム内課金システム、ガチャシステムの実装経験",
      "パフォーマンス最適化、メモリ管理の経験",
      "VR/AR技術を活用したゲーム開発経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "ゲームに対する情熱と深い理解を持つ方",
      "ユーザー体験を重視し、面白さを追求できる方",
      "技術的な制約の中で創造的な解決策を見つけられる方",
    ],
  },

  {
    careerId: "sre-engineer",
    title: "SREエンジニア",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["sre-engineer"],
      othersIds: ["reliability-engineering"],
    },
    jobDescription:
      "サービスの信頼性・可用性向上のためのシステム設計・運用、パフォーマンス監視・改善、障害対応・予防、SLI/SLO設定・運用をご担当いただきます。開発チームと協力してサービスの品質向上を推進していただきます。",
    mustSkills: [
      "大規模Webサービスの運用・監視経験3年以上",
      "Linux系OSでのシステム管理・トラブルシューティング経験",
      "プログラミング言語（Python、Go、Shell Script等）の実務経験",
    ],
    welcomeSkills: [
      "Prometheus、Grafana、Datadog等の監視ツールの運用経験",
      "Kubernetes、Docker等のコンテナ技術の運用経験",
      "Terraform、Ansible等のIaCツールの使用経験",
      "SLI/SLO設定・運用、エラーバジェット管理の経験",
      "ポストモーテム（振り返り）プロセスの運用経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "サービスの安定性・信頼性に対して強い責任感を持てる方",
      "障害時に冷静かつ迅速に対応できる方",
      "継続的改善に対して積極的に取り組める方",
    ],
  },

  // アルバイト
  {
    careerId: "part-time-assistant",
    title: "事務アシスタント（アルバイト）",
    tag: {
      employmentTypeIds: ["part-time"],
      jobCategoryIds: ["corporate-staff"],
      othersIds: ["no-experience-required"],
    },
    jobDescription:
      "書類作成、データ入力、電話応対、来客対応など、一般的な事務作業のサポートをお願いします。簡単なPC操作ができれば未経験でも大丈夫です。週3日・1日4時間から勤務可能です。",
    mustSkills: [
      "基本的なPC操作（Word、Excel、メール）ができる方",
      "丁寧かつ正確に業務に取り組める方",
      "コミュニケーションを取りながら業務を進められる方",
    ],
    welcomeSkills: [
      "事務職経験者",
      "電話応対経験者",
      "タッチタイピングが得意な方",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "明るく元気に業務に取り組める方",
      "チームワークを大切にできる方",
    ],
  },
  // 業務委託
  {
    careerId: "freelance-ui-designer",
    title: "UIデザイナー（業務委託）",
    tag: {
      employmentTypeIds: ["contractor"],
      jobCategoryIds: ["designer"],
      othersIds: ["remote-work-ok", "portfolio-required"],
    },
    jobDescription:
      "新規WebサービスまたはモバイルアプリのUIデザインをご担当いただきます。Figma等のデザインツールを使用し、ユーザーにとって魅力的で使いやすいインターフェースを設計・提案していただきます。フルリモートでの業務も可能です。",
    mustSkills: [
      "Figma、Adobe XD等のデザインツールを使用したUIデザインの実務経験3年以上",
      "Webサービスまたはモバイルアプリのデザイン経験",
      "ポートフォリオをご提出いただける方",
      "論理的なデザイン説明ができる方",
    ],
    welcomeSkills: [
      "UXリサーチの経験",
      "プロトタイピングツールの使用経験",
      "HTML/CSSの基礎知識",
      "アジャイル開発環境での業務経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "常にユーザー視点でデザインを考えられる方",
      "納期を意識し、責任感を持って業務を遂行できる方",
      "円滑なコミュニケーションを取り、チームと連携できる方",
    ],
  },
  // 契約社員
  {
    careerId: "contract-web-developer",
    title: "Webエンジニア（契約社員）",
    tag: {
      employmentTypeIds: ["contract-employee"],
      jobCategoryIds: ["web-engineer"],
      othersIds: ["frontend", "permanent-employment-available"],
    },
    jobDescription:
      "自社Webサービスのフロントエンド開発を中心にご担当いただきます。React、Next.jsなどのモダンな技術スタックを用いた開発業務です。契約期間は1年（双方合意の上で更新、または正社員登用の可能性あり）となります。",
    mustSkills: [
      "Webアプリケーションのフロントエンド開発実務経験2年以上",
      "React、Vue.js、Angularいずれかのフレームワーク利用経験",
      "HTML、CSS、JavaScript（ES6+）の深い知識",
      "Gitを用いたバージョン管理システムの利用経験",
    ],
    welcomeSkills: [
      "TypeScriptの利用経験",
      "Next.js、Nuxt.js等のSSRフレームワーク利用経験",
      "バックエンド開発経験（Node.js、Python、Goなど）",
      "UI/UXデザインに関する知見",
      "テストコード作成、CI/CD環境構築経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "新しい技術の習得に意欲的で、積極的にアウトプットできる方",
      "チームメンバーと協力してプロダクト開発を進められる方",
      "品質を意識し、ユーザーに価値を提供することに喜びを感じる方",
    ],
  },
  // ディレクター
  {
    careerId: "web-director",
    title: "Webディレクター",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["web-director"],
      othersIds: ["progress-management"],
    },
    jobDescription:
      "WebサイトやWebアプリケーションの企画、設計、制作ディレクション、品質管理、運用までの一連の業務をご担当いただきます。クライアントや社内チームと連携し、プロジェクトを成功に導きます。",
    mustSkills: [
      "WebサイトまたはWebアプリケーションのディレクション経験3年以上",
      "ワイヤーフレーム、画面設計書の作成経験",
      "プロジェクトの進行管理、品質管理の経験",
      "クライアントや制作チームとの円滑なコミュニケーション能力",
    ],
    welcomeSkills: [
      "アクセス解析（Google Analytics等）の経験と改善提案スキル",
      "SEOに関する知識・経験",
      "WebデザインまたはWeb開発の基礎知識",
      "大規模プロジェクトのディレクション経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "目標達成に向けて主体的に行動できる方",
      "複数タスクを効率的に管理できる方",
      "新しいWeb技術やトレンドに対する学習意欲が高い方",
    ],
  },
  // タレントマネージャー
  {
    careerId: "talent-manager",
    title: "タレントマネージャー",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["talent-manager"],
      othersIds: ["training"],
    },
    jobDescription:
      "所属タレントの育成、スケジュール管理、プロモーション活動、メディア対応など、タレント活動全般をサポートします。タレントの才能を最大限に引き出し、活躍の場を広げることがミッションです。",
    mustSkills: [
      "エンターテイメント業界での実務経験2年以上（マネージャー、A&R、プロモーター等）",
      "タレントやアーティストとのコミュニケーション能力",
      "スケジュール管理、交渉力",
    ],
    welcomeSkills: [
      "メディアリレーションの経験",
      "SNS運用やデジタルプロモーションの知識",
      "契約関連の知識",
      "イベント企画・運営経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "タレントの成長を心から願い、サポートできる方",
      "フットワークが軽く、臨機応変に対応できる方",
      "高い倫理観と責任感を持って業務に取り組める方",
    ],
  },
  // プロデューサー
  {
    careerId: "content-producer",
    title: "コンテンツプロデューサー",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["content-producer"],
      othersIds: ["video-production", "event-planning"],
    },
    jobDescription:
      "映像、Webコンテンツ、イベントなど、様々なメディアにおけるコンテンツの企画立案から制作進行、予算管理、品質管理までトータルでプロデュースしていただきます。新しい価値を生み出すコンテンツ制作をリードします。",
    mustSkills: [
      "コンテンツ（映像、Web、イベント等）のプロデュースまたはディレクション経験3年以上",
      "企画立案、プレゼンテーション能力",
      "予算管理、スケジュール管理のスキル",
      "社内外の多様な関係者との調整・交渉能力",
    ],
    welcomeSkills: [
      "特定ジャンル（音楽、アニメ、ゲーム等）の専門知識・経験",
      "デジタルマーケティングの知識",
      "新規事業立ち上げ経験",
      "著作権や契約に関する知識",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "創造力と実行力を兼ね備えている方",
      "トレンドに敏感で、新しいアイデアを発想できる方",
      "困難な状況でも前向きに解決策を見つけ出せる方",
    ],
  },
  // カスタマーサポート
  {
    careerId: "customer-support-specialist",
    title: "カスタマーサポートスペシャリスト",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["customer-support-specialist"],
      othersIds: ["technical-support"],
    },
    jobDescription:
      "自社サービスに関する顧客からの問い合わせ対応（メール、電話、チャット）、問題解決支援、FAQの作成・更新など、顧客満足度向上に繋がる業務全般を担当します。",
    mustSkills: [
      "カスタマーサポートまたはテクニカルサポートの実務経験1年以上",
      "高いコミュニケーション能力（傾聴力、説明力）",
      "顧客の問題を正確に把握し、適切な解決策を提示できる能力",
      "基本的なPC操作スキル",
    ],
    welcomeSkills: [
      "IT業界、SaaS業界でのサポート経験",
      "Zendesk、Salesforce Service Cloud等のサポートツール利用経験",
      "FAQやマニュアル作成経験",
      "英語での顧客対応経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "顧客の課題解決に真摯に取り組める方",
      "忍耐強く、丁寧な対応ができる方",
      "チームと協力して業務改善に取り組める方",
    ],
  },
  // プロジェクトマネージャー
  {
    careerId: "it-project-manager",
    title: "ITプロジェクトマネージャー",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["it-project-manager"],
      othersIds: ["system-development", "requirements-definition"],
    },
    jobDescription:
      "システム開発プロジェクトにおけるプロジェクト計画の策定、進捗管理、品質管理、コスト管理、リスク管理など、プロジェクト全体のマネジメント業務をご担当いただきます。",
    mustSkills: [
      "ITプロジェクトマネジメントの実務経験3年以上",
      "システム開発ライフサイクル（要件定義、設計、開発、テスト、導入）全般の知識・経験",
      "進捗管理、課題管理、リスク管理のスキル",
      "ステークホルダーとの折衝・調整能力",
    ],
    welcomeSkills: [
      "PMP等のプロジェクトマネジメント関連資格",
      "アジャイル開発（Scrum、Kanban等）の経験",
      "クラウド（AWS、Azure、GCP）関連プロジェクトの経験",
      "大規模プロジェクトまたは複数プロジェクトの管理経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "リーダーシップを発揮し、プロジェクトを推進できる方",
      "論理的思考力と問題解決能力が高い方",
      "プレッシャーの中でも冷静に判断し、行動できる方",
    ],
  },
  // IP /ライセンスビジネス
  {
    careerId: "ip-licensing",
    title: "IPライセンス担当",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["ip-licensing"],
      othersIds: ["contract-negotiation"],
    },
    jobDescription:
      "自社または他社のIP（キャラクター、ブランド等）を活用したライセンスビジネスの企画、交渉、契約締結、監修業務をご担当いただきます。IP価値の最大化を目指します。",
    mustSkills: [
      "IPライセンスビジネスまたは関連業務（商品化、版権管理等）の実務経験2年以上",
      "契約書に関する基礎知識と交渉力",
      "市場調査、事業企画の経験",
    ],
    welcomeSkills: [
      "エンターテイメント業界（ゲーム、アニメ、出版等）での実務経験",
      "海外ライセンスビジネスの経験、語学力（英語等）",
      "法務関連の知識（著作権法、商標法等）",
      "ブランドマネジメント経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "IPに対して深い愛情と理解を持てる方",
      "粘り強く交渉し、Win-Winの関係を築ける方",
      "新しいビジネスチャンスを積極的に開拓できる方",
    ],
  },
  // プラットフォームビジネス
  {
    careerId: "platform-business-planning",
    title: "プラットフォーム事業企画",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["platform-business-planning-manager"],
      othersIds: ["business-strategy", "new-service-planning"],
    },
    jobDescription:
      "自社プラットフォームサービスのグロース戦略立案、新規機能・サービスの企画開発、アライアンス推進、KPI管理など、プラットフォーム事業全体の推進をご担当いただきます。",
    mustSkills: [
      "Webサービスまたはアプリの事業企画、プロダクト企画、マーケティング等の実務経験3年以上",
      "データ分析に基づく戦略立案、施策実行の経験",
      "競合分析、市場調査のスキル",
      "社内外の関係者との高いコミュニケーション能力、調整能力",
    ],
    welcomeSkills: [
      "プラットフォームビジネス（EC、SNS、SaaS等）の経験",
      "新規事業立ち上げ、マネタイズ戦略の立案・実行経験",
      "エンジニアリングやデザインに関する基礎知識",
      "アライアンス、パートナーシップ構築の経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "事業全体を俯瞰し、戦略的に思考できる方",
      "変化を恐れず、新しいチャレンジを楽しめる方",
      "目標達成意欲が高く、結果にコミットできる方",
    ],
  },
  // SCM
  {
    careerId: "scm-specialist",
    title: "SCMスペシャリスト",
    tag: {
      employmentTypeIds: ["full-time"],
      jobCategoryIds: ["scm-specialist"],
      othersIds: ["logistics-planning", "inventory-management"],
    },
    jobDescription:
      "製品の需要予測、生産計画、在庫管理、物流企画・管理など、サプライチェーン全体の最適化と効率化をご担当いただきます。コスト削減とリードタイム短縮を目指します。",
    mustSkills: [
      "SCM（サプライチェーンマネジメント）関連業務の実務経験3年以上",
      "需要予測、生産計画、在庫管理、物流管理いずれかの専門知識・経験",
      "データ分析スキル、問題解決能力",
      "関連部署や取引先との調整・交渉能力",
    ],
    welcomeSkills: [
      "製造業、小売業、EC業界等でのSCM経験",
      "SCM関連システム（ERP、WMS、TMS等）の導入・運用経験",
      "貿易実務、国際物流の知識",
      "プロジェクトマネジメント経験",
    ],
    humanResources: [
      "当社のMISSION/VALUEに共感いただける方",
      "全体最適の視点で物事を考え、行動できる方",
      "継続的な改善意識を持ち、業務に取り組める方",
      "数字に強く、論理的な思考ができる方",
    ],
  },
];

export const allEmploymentTypeTags = [
  { id: "full-time", label: "正社員" },
  { id: "part-time", label: "アルバイト" },
  { id: "contractor", label: "業務委託" },
  { id: "contract-employee", label: "契約社員" },
] as const;

export type EmploymentTypeId = (typeof allEmploymentTypeTags)[number]["id"];

export const allJobCategoryTags = [
  { id: "frontend", label: "フロントエンド" },
  { id: "engineer", label: "エンジニア" },
  { id: "backend-engineer", label: "バックエンドエンジニア" },
  { id: "mobile-app-engineer", label: "モバイルアプリエンジニア" },
  { id: "qa-engineer", label: "QAエンジニア" },
  { id: "game-engineer", label: "ゲームエンジニア" },
  { id: "sre-engineer", label: "SREエンジニア" },
  { id: "corporate-staff", label: "コーポレート事務" },
  { id: "designer", label: "デザイナー" },
  { id: "web-engineer", label: "Webエンジニア" },
  { id: "web-director", label: "Webディレクター" },
  { id: "talent-manager", label: "タレントマネージャー" },
  { id: "content-producer", label: "コンテンツプロデューサー" },
  {
    id: "customer-support-specialist",
    label: "カスタマーサポートスペシャリスト",
  },
  { id: "it-project-manager", label: "ITプロジェクトマネージャー" },
  { id: "ip-licensing", label: "IPライセンス担当" },
  {
    id: "platform-business-planning-manager",
    label: "プラットフォーム事業企画マネージャー",
  },
  { id: "scm-specialist", label: "SCMスペシャリスト" },
] as const;

export type JobCategoryId = (typeof allJobCategoryTags)[number]["id"];

export const allOtherTags = [
  { id: "annual-salary", label: "年俸制" },
  { id: "tech-lead", label: "テックリード" },
  { id: "ios", label: "iOS" },
  { id: "android", label: "Android" },
  { id: "quality-assurance", label: "品質保証" },
  { id: "unity", label: "Unity" },
  { id: "reliability-engineering", label: "信頼性エンジニアリング" },
  { id: "no-experience-required", label: "未経験者歓迎" },
  { id: "remote-work-ok", label: "リモートワーク可" },
  { id: "portfolio-required", label: "ポートフォリオ必須" },
  { id: "frontend", label: "フロントエンド" },
  { id: "permanent-employment-available", label: "正社員登用あり" },
  { id: "progress-management", label: "進行管理" },
  { id: "training", label: "育成" },
  { id: "video-production", label: "映像制作" },
  { id: "event-planning", label: "イベント企画" },
  { id: "technical-support", label: "テクニカルサポート" },
  { id: "system-development", label: "システム開発" },
  { id: "requirements-definition", label: "要件定義" },
  { id: "contract-negotiation", label: "契約交渉" },
  { id: "business-strategy", label: "事業戦略" },
  { id: "new-service-planning", label: "新規サービス企画" },
  { id: "logistics-planning", label: "物流企画" },
  { id: "inventory-management", label: "在庫管理" },
] as const;

export type OtherTagId = (typeof allOtherTags)[number]["id"];
