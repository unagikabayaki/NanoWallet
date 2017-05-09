function JapaneseProvider($translateProvider) {
    'ngInject'

    $translateProvider.translations('jp', {

      // HEADER COMPONENT
      WALLET_NAME_1: 'nano',
      WALLET_NAME_2: 'Wallet',
      APP_NAME_SUB: "NEM プラットフォームに接続するための安全な方法\n(ボランティアによる日本語翻訳版)",
      HEADER_LOGIN_BUTTON: "ログイン",
      HEADER_SIGNUP_BUTTON: "アカウントの作成",
      HEADER_DASHBOARD: 'ダッシュボード',
      HEADER_WALLET: 'ウォレット',
      HEADER_SERVICES: 'サービス',
      HEADER_EXPLORER: 'エクスプローラー',
      HEADER_NODE: 'ノード',
      HEADER_ACCOUNT: 'アカウント',
      HEADER_LANG_TITLE: "言語",
      HEADER_LANG_SELECT: "言語選択",
      HEADER_NODE_BLOCK_HEIGHT: "ブロック高",
      HEADER_NODE_CURRENT_NODE: "現在のノード",
      HEARDER_NODE_LIST: "ノードリスト",
      HEADER_NODE_SELECT: "ノード選択",
      HEADER_NODE_CUSTOM: "カスタムノード",
      HEADER_NODE_CONNECT: "接続",
      HEADER_NODE_CUSTOM_INFO: "ノードの IP もしくは、ドメイン",
      HEADER_NODE_CUSTOM_TOOLTIP: 'あなた自身のNISノードを入力',
      HEADER_PURGE: "アカウントデータの削除(パージ)",
      HEADER_PURGE_MESSAGE: "必ずバックアップを行った上で実行して下さい。OK をクリックすると、ローカルストレージに登録されているすべてのウォレットが削除(パージ)されます。すべてのウォレットをバックアップしていた場合、残高は安全です（回復にはバックアップファイルの再読み込みが必要です）。",

      // FOOTER COMPONENT
      FOOTER_POWERED_BY_1: 'Powered by',
      FOOTER_POWERED_BY_2: 'NEM technology.',
      FOOTER_VERSION: "Version",

      // DASHBOARD MODULE
      DASHBOARD_TITLE: "ダッシュボード",
      DASHBOARD_UNCONFIRMED: "未承認",
      DASHBOARD_CONFIRMED: "承認済",
      DASHBOARD_HARVEST_INCOME_TITLE: "直近 25 ブロックのハーベスト収入",
      DASHBOARD_HARVEST_INCOME_NOTE: "ハーベスト報酬0を除いたブロック",
      DASHBOARD_HARVEST_INCOME_MESSAGE: "直近 25 ブロックの手数料は見つかりませんでした",
      DASHBOARD_NEWS_TITLE: "最新情報",
      DASHBOARD_HARVESTED_BLOCKS_TITLE: "ハーベストしたブロック",
      DASHBOARD_HARVESTED_BLOCKS_TH: "ハーベスト報酬",
      DASHBOARD_MARKET_INFO_TITLE: "相場情報",
      DASHBOARD_MARKET_INFO_CAP: "時価総額",
      DASHBOARD_MARKET_INFO_PRICE: "価格",
      DASHBOARD_MARKET_INFO_VOLUME: "24時間の出来高",
      DASHBOARD_MARKET_INFO_CHANGES: "24時間の変動率",
      DASHBOARD_MARKET_INFO_CHANGES_1H: "1時間",
      DASHBOARD_MARKET_INFO_CHANGES_24H: "24時間",
      DASHBOARD_MARKET_INFO_CHANGES_7D: "7日間",
      DASHBOARD_MARKET_INFO_NOTE: "<a href=\"http://coinmarketcap.com/\" target=\"_blank\">CoinMarketCap</a> CoinMarketCapのデータは 5 分毎に更新されます。",
      DASHBOARD_NOTICE_1: 'Nano Wallet Beta にようこそ！',
      DASHBOARD_NOTICE_2: '問題の報告は<a href="https://github.com/NemProject/NanoWallet" target="_blank">こちら</a>へお願いします。',
      DASHBOARD_NOTICE_3: 'NEM チームは、メインネットを利用する前に、最初にテストネットにて NanoWallet の操作を行い、利用方法を習得する事をお勧めします。利用者は自身の資金を管理し、秘密鍵をバックアップしてください。NEM チームは、メインネット上でこのアプリケーションを利用することに起因する、資金の消失について責任を負いません。',
      DASHBOARD_NOTICE_4: '紙に秘密鍵を書き留めて、安全な場所に保存することをお勧めします。また、あなたのアカウントをAndroid 及び iOS アプリにインポートして、バックアップする事もできます。',
      DASHBOARD_NOTICE_5: 'Thanks for your participation!', //すまねぇ、ここどう訳すか迷ってそのままｗｗ
      
      // GENERAL
      GENERAL_BLOCK: "ブロック",
      GENERAL_BLOCKS: 'ブロック',
      GENERAL_NO_RESULTS: "なし",
      GENERAL_ACCOUNT: "アカウント",
      GENERAL_ACCOUNTS: 'アカウント',
      GENERAL_MULTISIG_ACCOUNT: "マルチシグアカウント",
      GENERAL_AMOUNT: "量",
      GENERAL_MESSAGE: "メッセージ",
      GENERAL_DATE: "日時",
      GENERAL_TAB_NORMAL: "ノーマル", // こちらは現在使われてない模様
      GENERAL_TAB_SEND: 'ノーマル', //GENERAL_TAB_NORMAL:だったのが新規にこちらが使われる様になった
      GENERAL_TAB_MULTISIG: "マルチシグ",
      GENERAL_TOTAL: "トータル",
      GENERAL_REMOVE: "削除",
      GENERAL_MOSAIC: "モザイク",
      GENERAL_FEE: "手数料",
      GENERAL_LEVY: "徴収",
      GENERAL_LEVY_TYPES: "徴収タイプ",
      GENERAL_LEVY_TYPES_NOTE: "I - コンスタント型手数料; II - パーセンタイル型手数料",
      GENERAL_LEVY_TYPE_1: 'コンスタント型手数料',
      GENERAL_LEVY_TYPE_2: 'パーセンタイル型手数料',
      GENERAL_SEND: "送信",
      GENERAL_TO: "宛先",
      GENERAL_HASH: "ハッシュ",
      GENERAL_HASH_FUNCTION: 'ハッシュ関数',
      GENERAL_NAME: "名前",
      GENERAL_INFORMATION: "情報",
      GENERAL_ADDRESS: "アドレス",
      GENERAL_PUBLIC_KEY: "公開鍵",
      GENERAL_PRIVATE_KEY: "秘密鍵",
      GENERAL_CLEAR_ALL: "全て消去",
      GENERAL_CLOSE: "閉じる",
      GENERAL_COMING_SOON: "近日公開",
      GENERAL_NONE: "なし",
      GENERAL_DROPBOX: "ファイルをここへドラッグ & ドロップするか、ファイル選択ウィンドウを開いてください。",
      GENERAL_NETWORK_FEE: "ネットワーク手数料",
      GENERAL_YES: "はい",
      GENERAL_NO: "いいえ",
      GENERAL_TAGS: "タグ",
      GENERAL_SINK: "シンク（受信側）",
      GENERAL_SINK_ADDRESS: 'アドレス（受信側）',
      GENERAL_STORAGE: '保管先',
      GENERAL_REASON: "理由",
      GENERAL_TRANSACTION_HASH: "トランザクションハッシュ",
      GENERAL_TRANSACTION_ID: "トランザクション ID",
      GENERAL_OWNER: "オーナー",
      GENERAL_RESULTS: "結果",
      GENERAL_RESULT: "結果",
      GENERAL_STATUS: "状態",
      GENERAL_LOCATION: "場所",
      GENERAL_ACTION: "アクション",
      GENERAL_ACTIONS: "アクション",
      GENERAL_ADD: "追加",
      GENERAL_ADDED: "追加済",
      GENERAL_REMOVED: "削除済",
      GENERAL_COSIGNATORY: "署名者",
      GENERAL_COSIGNATORIES: "複数署名者",
      GENERAL_PROCESSING: "処理中",
      GENERAL_ACCOUNT_LABEL: "アカウントラベル",
      GENERAL_OPTIONAL: "（オプション）",
      GENERAL_ERROR: "エラー",
      GENERAL_EXAMPLE: "例",
      GENERAL_PUBLIC: "パブリック",
      GENERAL_NAMESPACES: "ネームスペース",
      GENERAL_NAMESPACE: "ネームスペース",
      GENERAL_SUB_NAMESPACES: "サブネームスペース",
      GENERAL_SUB_NAMESPACE: "サブネームスペース",
      GENERAL_MOSAICS: "モザイク",
      GENERAL_VALUE: "値",
      GENERAL_CONNECTION_ERROR: "エラーが発生しました。ノードが停止しているかオフラインになっています。",
      GENERAL_HISTORY: "履歴",
      GENERAL_REVEAL: "公開",
      GENERAL_QR: 'QR コード',
      GENERAL_UPDATE: 'アップデート',
      GENERAL_UNKNOWN: '不明',
      GENERAL_IMPORTANCE: 'インポータンス',
      GENERAL_TRANSACTIONS: 'トランザクション',
      GENERAL_REGISTER: '登録',
      GENERAL_CREATE: '作成',
      GENERAL_RENEW: '更新',
      GENERAL_CHARACTERS_LEFT: '残り文字数',
      GENERAL_CURRENCY: '通貨',
      GENERAL_EDIT: '編集',
      GENERAL_SEND_XEM: 'XEMの送金',
      GENERAL_ACTIVE: '有効',
      GENERAL_INACTIVE: '無効',
      GENERAL_ACTIVATING: "有効化中",
      GENERAL_DEACTIVATING: "無効化中",
      GENERAL_REMOTE: "リモート",
        
      // HOME MODULE
      HOME_UNSUPPORTED_BROWSER: '申し訳ありません。このブラウザでは安全に NanoWallet を使用する事ができません。',
      HOME_RECOMMENDED_BROWSERS: '推奨ブラウザ：',

      // TRANSFER TRANSACTION MODULE
      TRANSFER_TRANSACTION_TITLE: "送金と請求",
      TRANSFER_TRANSACTION_NAME: "トランスファートランザクション", //画面崩れ防止の為短く変更："トランスファートランザクション（通常トランザクション）"
      TRANSFER_TRANSACTION_MULTISIG_NAME: "マルチシグトランスファートランザクション", //画面崩れ防止の為短く変更："マルチシグトランスファートランザクション（通常トランザクション）"
      TRANSFER_TRANSACTION_INVOICE: "請求書を作成",
      TRANSFER_TRANSACTION_TAB_INVOICE: "請求書",
      TRANSFER_TRANSACTION_MOSAIC_TRANSFER: "モザイクを送信",
      TRANSFER_TRANSACTION_ATTACH_MOSAIC: "モザイクを添付",
      TRANSFER_TRANSACTION_ATTACH: "添付",
      TRANSFER_TRANSACTION_MOSAICS_ATTACHED: "添付するモザイク",
      TRANSFER_TRANSACTION_ENCRYPT_MESSAGE: "メッセージを暗号化",
      TRANSFER_TRANSACTION_ENCRYPT_TOOLTIP: 'ネットワーク上に受信者の公開鍵がありません',
      TRANSFER_TRANSACTION_ENCRYPT_TOOLTIP_MULTISIG: "マルチシグアカウントを介した暗号化メッセージはありません",

      // TRANSACTION LINES
      LINE_TX_DETAILS_FROM: "送り主（From）",
      LINE_TX_DETAILS_FROM_MULTISIG: "マルチシグ（From）",
      LINE_TX_DETAILS_WAITING: "認証中のトランザクション",
      LINE_TX_DETAILS_NEED_SIG: "複数署名を要求",
      LINE_TX_DETAILS_NEED_SIG_2: "このトランザクションはあなたの署名を必要としています。",
      LINE_TX_DETAILS_MESS_ENC: "暗号化されている",
      LINE_TX_DETAILS_MESS_DEC: "復号化する",
      LINE_TX_DETAILS_HASH: "ハッシュ",
      LINE_TX_DETAILS_DEC_MESS: "メッセージを復号化",
      LINE_TX_DETAILS_MOS_ATTACHED: "添付されたモザイク",
      LINE_TX_DETAILS_LEVY_TYPE_1: "コンスタント（定額）",
      LINE_TX_DETAILS_LEVY_TYPE_2: "パーセンタイル",
      LINE_TX_DETAILS_ISSUER: "発行者",
      LINE_TX_DETAILS_MULTISIG_FEE: "マルチシグ手数料",
      LINE_TX_DETAILS_MULTISIG_HASH: "マルチシグハッシュ",
      LINE_TX_DETAILS_COSIGN: "複数署名トランザクション",
      LINE_TX_DETAILS_SIGNATURES: "署名",
      LINE_TX_DETAILS_COSIGNATORY: "複数署名",
      LINE_TX_DETAILS_TIMESTAMP: "タイムスタンプ",
      LINE_TX_DETAILS_MOS_CREATE: "モザイクを作成",
      LINE_TX_DETAILS_MOS_EDIT: "モザイクを編集",
      LINE_TX_DETAILS_NS_CREATE: "ネームスペースを作成",
      LINE_TX_DETAILS_NS_NEW_SUB: "新規サブネームスペースを作成",
      LINE_TX_DETAILS_NS_ROOT: "ルートネームスペース",
      LINE_TX_DETAILS_RECIPIENT: "受信者",
      LINE_TX_DETAILS_MULTISIG_CREATE: "マルチシグアカウントを作成",
      LINE_TX_DETAILS_MULTISIG_EDIT: "マルチシグアカウントを編集",
      LINE_TX_DETAILS_MULTISIG_MOD: "変更点",
      LINE_TX_DETAILS_MULTISIG_MIN_COSIG: "最小署名者数",
      LINE_TX_DETAILS_MULTISIG_AFFECTED: "影響するアカウント",

      // IMPORTANCE MODULE
      IMPORTANCE_TRANSFER_NAME: "インポータンストランスファートランザクション",//長すぎて崩れる："インポータンストランスファートランザクション（委任モード操作等）"
      IMPORTANCE_TRANSFER_MULTISIG_NAME: "マルチシグインポータンストランスファートランザクション",//長すぎて崩れる："マルチシグインポータンストランスファートランザクション（委任モード操作等）"
      IMPORTANCE_TRANSFER_MODE: "モード選択",
      IMPORTANCE_TRANSFER_MODE_1: "委任有効化（Activate）",
      IMPORTANCE_TRANSFER_MODE_2: "委任無効化（Deactivate）",
      IMPORTANCE_TRANSFER_TITLE: "デリゲートアカウント(委任アカウント)管理",
      IMPORTANCE_TRANSFER_MULTISIGNATURE_TITLE: "マルチシグデリゲートアカウント(委任アカウント)の管理",
      IMPORTANCE_TRANSFER_CUSTOM_KEY: "カスタムされた公開鍵を使用",
      IMPORTANCE_TRANSFER_MODE_SELECT: "モード選択",
      IMPORTANCE_TRANSFER_REMOTE_ACCOUNT: "リモートアカウント",
      IMPORTANCE_TRANSFER_REMOTE_PUBLIC: "リモート公開鍵",
      IMPORTANCE_TRANSFER_INFO_PART_1: "インポータンストランザクションがブロックに入れられてから有効になるまで6時間かかります。6時間の後、ノードの選択や起動/停止を行うことができます。",
      IMPORTANCE_TRANSFER_INFO_PART_2: "既に委任アクティベート要求済のアカウントを NanoWallet にインポートした場合は、一旦過去の委任公開鍵を停止させてから再度要求して下さい。\n",
      IMPORTANCE_TRANSFER_INFO_PART_MULTISIG: "マルチシグの場合、インポータンストランスファートランザクションを実施した連署者のみハーベストの開始停止が可能です。その他の連署人が処理を行う場合は Deactivate → Activate が必要になります。",
      IMPORTANCE_TRANSFER_NO_BLOCKS_HARVESTED: "収穫ブロック無し",
      IMPORTANCE_TRANSFER_HARVESTING_PANEL: "収穫パネル",
      IMPORTANCE_TRANSFER_REMOTE_ACTIVATING: "委任収穫を開始するためにはリモートステータスがアクティブになるまで待つ必要があります。",
      IMPORTANCE_TRANSFER_REMOTE_INACTIVE: "リモートアカウントをアクティブにするために左パネルからインポータンストランスファートランザクションを送信する必要があります。",
      IMPORTANCE_TRANSFER_MULTISIG_NOT_INITIATOR: "あなたは、インポータンストランスファートランザクションを開始した連署者ではありません。従って委任収穫を開始または停止することができません。収穫操作権限を取り戻す方法をタブから確認してください。",
      IMPORTANCE_TRANSFER_MULTISIG_SELECT: "マルチシグアカウントを選択",
      IMPORTANCE_TRANSFER_MULTISIG_SELECT_MESSAGE: "ステータスを表示するマルチシグアカウントを選択してください。",
      IMPORTANCE_TRANSFER_PRIVATE_KEY_PLACEHOLDER: '委任秘密鍵の参照',
      IMPORTANCE_TRANSFER_DELEGATED_KEYS: 'デリゲートアカウントキー',
      IMPORTANCE_TRANSFER_HARVESTING_STATUS: 'ハーベストの状況',
      IMPORTANCE_TRANSFER_START_HARVESTING: 'デリゲートハーベスティングの開始',
      IMPORTANCE_TRANSFER_STOP_HARVESTING: 'デリゲートハーベスティングの停止',

      // CREATE MOSAIC MODULE
      MOSAIC_DEFINITION_TITLE: "モザイクを作成",
      MOSAIC_DEFINITION_NAME: "モザイクディフィニショントランザクション",
      MOSAIC_DEFINITION_MULTISIG_NAME: "マルチシグモザイクディフィニショントランザクション",
      MOSAIC_DEFINITION_QUANTITY: "数量",
      MOSAIC_DEFINITION_DIV: "可分性（小数点の有無）",
      MOSAIC_DEFINITION_TOTAL_SUPPLY: '総供給量',
      MOSAIC_DEFINITION_FINAL_NAME: 'フルネーム',
      MOSAIC_DEFINITION_DESCRPITION: "説明",
      MOSAIC_DEFINITION_INITIAL_SUPPLY: "初期供給量",
      MOSAIC_DEFINITION_MUTABLE_SUPPLY: "供給量変更可",
      MOSAIC_DEFINITION_TRANSFERABLE: "譲渡許可（チェック有で自由送信許可)",
      MOSAIC_DEFINITION_PROPERTIES: "プロパティ",
      MOSAIC_DEFINITION_MOSAIC_PROPERTIES: "モザイクのプロパティ",
      MOSAIC_DEFINITION_REQUIRES_LEVY: "徴収を要求",
      MOSAIC_DEFINITION_LEVY_LIMITATION: "UI制限：現在はモザイク作成者のみ徴収設定が可能です。",
      MOSAIC_DEFINITION_LEVY_SELECT_MOSAIC: "徴収するモザイクを選択",
      MOSAIC_DEFINITION_LEVY_ADDRESS: "徴収モザイク送信先アドレス",
      MOSAIC_DEFINITION_LEVY_FEE_TYPE: "手数料タイプ",
      MOSAIC_DEFINITION_LEVY_FEE_TYPE_1: "固定徴収方式",
      MOSAIC_DEFINITION_LEVY_FEE_TYPE_2: "パーセンタイル徴収方式",
      MOSAIC_DEFINITION_LEVY_FEE_TYPE_1_NOTE: "固定徴収方式を選択すると、固定の徴収が発生します。",
      MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE: "パーセンタイル徴収方式を選択すると、送信量により徴収量が変動します。",
      MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE_2: "送信モザイク",
      MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE_3: "の場合、徴収されるモザイクは",
      MOSAIC_DEFINITION_PARENT: "親ネームスペース（名前空間）",
      MOSAIC_DEFINITION_INFORMATION_TITLE: 'モザイクの作成',
      MOSAIC_DEFINITION_INFORMATION: 'モザイクについての詳細',
      MOSAIC_DEFINITION_INFORMATION_1: "モザイク名は32文字が最長です。使用できる文字は以下の通りです。",
      MOSAIC_DEFINITION_INFORMATION_2: "最初の文字はアルファベットから始めて下さい。",
      MOSAIC_DEFINITION_INFORMATION_3: "「説明」は512文字以内で記述できます。使用できる文字の制限はありません。",
      MOSAIC_DEFINITION_INFORMATION_4: "モザイクの動作は、プロパティ設定によってカスタマイズする事ができます：",
      MOSAIC_DEFINITION_INFORMATION_5: "供給量はモザイク全体の単位で、最小のサブユニットではありません。\n設定できる最小供給量の範囲は 0～90 億です。",
      MOSAIC_DEFINITION_INFORMATION_6: "可分性の変更はモザイクを小数点以下のどこまで分割できるかを決定する事です。可分性を 3 に設定した場合はモザイクを 0.001 まで分割できます。可分性は 0～6 の範囲でなければなりません。",
      MOSAIC_DEFINITION_INFORMATION_7: "チェックすると、後からモザイク供給量を変更できます。チェックしない場合、供給量は後から変更できません。",
      MOSAIC_DEFINITION_INFORMATION_8: "モザイク作成者以外でもモザイク送信は可能です。\nしかし、作成時、プロパティ内の譲渡可能（transferable）の項目にチェックをしなかった場合は、モザイク作成者のみ送信が可能となります。\nチェックがある場合はモザイク所有者の任意で送受信できます。",
      MOSAIC_DEFINITION_INFORMATION_9: "モザイク作成者はモザイクの利用者に対して徴収料を要求することができます。（送信時に指定したアドレスに徴収料が送られます)\n徴収のためのデータは次の通りです。",
      MOSAIC_DEFINITION_INFORMATION_10: "手数料として徴収されるモザイク: 既存の任意のモザイクを指定する事ができます。",
      MOSAIC_DEFINITION_INFORMATION_11: "徴収の受信者: 任意のアカウントを指定できます。",
      MOSAIC_DEFINITION_INFORMATION_12: "徴収量: 手数料の種類（fee type）により異なります。以下を参照ください。",
      MOSAIC_DEFINITION_INFORMATION_13: "手数料の種類: 固定徴収方式とパーセンタイル徴収方式の2種類があります。",
      MOSAIC_DEFINITION_INFORMATION_14: "固定徴収方式の場合、徴収額は転送される量に依存しません。",
      MOSAIC_DEFINITION_INFORMATION_15: "パーセンタイル徴収方式の場合、徴収額は送信するモザイクの量に従って変化します。",
      MOSAIC_DEFINITION_INFORMATION_16: "モザイクを NEM ブロックチェーンに送信するには手数料がかかります。実際の手数料はそのモザイクの総量と送信量に依存します。<b>スモールビジネスモザイク</b>は割引が適用され、一回の送信あたり1XEMが定額手数料となります。",

      // EDIT MOSAIC MODULE
      MOSAIC_SUPPLY_CHANGE_TITLE: "モザイク供給量を変更",
      MOSAIC_SUPPLY_CHANGE_NAME: "モザイクサプライチェンジトランザクション",
      MOSAIC_SUPPLY_CHANGE_MULTISIG_NAME: "マルチシグモザイクサプライチェンジトランザクション",
      MOSAIC_SUPPLY_CHANGE_SELECT: "モザイクを選択",
      MOSAIC_SUPPLY_CHANGE_TYPE: "変更タイプ",
      MOSAIC_SUPPLY_CHANGE_TYPE_1: "作成",
      MOSAIC_SUPPLY_CHANGE_TYPE_2: "削除",
      MOSAIC_SUPPLY_CHANGE_SUPPLY: "供給量",
      MOSAIC_SUPPLY_CHANGE_CURRENT_SUPPLY: "現在の供給量",
      MOSAIC_SUPPLY_CHANGE_AMOUNT: "変更する供給量",
      MOSAIC_SUPPLY_CHANGE_RES_SUPPLY: "変更後の供給量",

      // NAMESPACE MODULE
      NAMESPACE_PROVISION_TITLE: "ネームスペース & サブネームスペースを作成",
      NAMESPACE_PROVISION_NAME: "プロビジョンネームスペーストランザクション",
      NAMESPACE_PROVISION_MULTISIG_NAME: "マルチシグプロビジョンネームスペーストランザクション",
      NAMESPACE_PROVISION_PARENT: "親（上位側）ネームスペース（レベル3を除く）",
      NAMESPACE_PROVISION_NEW_ROOT: "新規ルート",
      NAMESPACE_PROVISION_NS: 'ネームスペース',
      NAMESPACE_PROVISION_NS_NAME: "ネームスペースの名前",
      NAMESPACE_PROVISION_RESTRICTIONS: 'ネームスペースの制限',
      NAMESPACE_PROVISION_INFORMATION_1: "ネームスペースには制約があります。ルートネームスペースは16字以内で、ルート以下のネームスペースは64文字までです。使用できる文字は以下の通りです。",
      NAMESPACE_PROVISION_INFORMATION_2: "ネームスペースの頭文字はアルファベットで始めて下さい。’alice’はルートネームスペースとしては妥当ですが、'1alice'では作成できません。予約語（システムとして既に使われている文字列）もネームスペースとしては認められません。許可されない語は以下の通りです。",
      NAMESPACE_PROVISION_INFORMATION_3: 'このリストは最終的なものではなく、将来拡張される事があります。 したがって、\'user.alice\' または \'alice.user\' はNEMのネームスペースでは使用できません。ネームスペースには最大3つの部分で構成されるので、\'gimre.metals.silver\'は有効ですが、\'gimre.metals.silver.coin\' は有効ではありません。',

      // RENEW NAMESPACE MODULE
      RENEW_NS_TITLE: 'ネームスペースの更新',
      RENEW_NS_NONE: '更新するネームスペースがありません',
      RENEW_NS_INFORMATION_TITLE: 'ネームスペースの更新',
      RENEW_NS_INFORMATION_TITLE_1: '手数料',
      RENEW_NS_INFORMATION_TITLE_2: 'ルートネームスペース',
      RENEW_NS_INFORMATION_TITLE_3: '更新期間',
      RENEW_NS_INFORMATION_1: 'ネームスペースを更新すると、新しいネームスペースを取得するのと同額のコストがかかります（５０００XEM）.',
      RENEW_NS_INFORMATION_2: 'ルートネームスペースのみを更新する必要があります。すべてのサブネームスペースは、ルートネームスペースの更新時に自動的に更新されます。',
      RENEW_NS_INFORMATION_3: 'ネームスペース契約は、1年間有効なレンタル契約です。契約は有効期限の1ヶ月前から更新することができます。',
      RENEW_NS_INFORMATION_4: '期限内に更新されない場合は、その下に作成されたすべてのサブネームスペースとモザイクが失われます。',
      RENEW_NS_ALERT_PART_1: '<b>注意!</b> ネームスペース:',
      RENEW_NS_ALERT_PART_2: '1ヶ月以内に有効期限が切れます！',
      RENEW_NS_ALERT_PART_3: '詳細は、<b>ネームスペースの更新</b>ページを参照してください。',

      // ACCOUNT MODULE
      ACCOUNT_TITLE: "アカウント",
      ACCOUNT_ACCOUNT_INFORMATION: "アカウント情報",
      ACCOUNT_IMPORTANCE_SCORE: "重要性スコア",
      ACCOUNT_VESTED_BALANCE: "既得バランス",
      ACCOUNT_HARVESTING: "ハーベスティング",
      ACCOUNT_REMOTE_STATUS: "リモートステータス",
      ACCOUNT_DELEGATED_PUBLIC: "委任公開鍵",
      ACCOUNT_HARVESTED_BLOCKS: "ハーベストされたブロック",
      ACCOUNT_START_STOP_HARVESTING: "デリゲートハーベスティングを開始 / 停止",
      ACCOUNT_HARVESTING_NOTE: "もし既に <b>NanoWallet を使用して</b>ハーベスティングを行っており、その状態でローカルストレージを消去した場合、アプリの状態を復元する為に使用しているノードを選択してください。（ハーベスティングは停止されません）",
      ACCOUNT_HARVESTING_NOTE: "このアカウントでハーベストに利用したノードは、<b>ブラウザのローカルストレージ</b>に保存されます。ブラウザのローカルストレージが削除されると、NanoWallet はどのノードを利用していたのかわからない為、<b>ハーベストの状況</b>に<b>無効</b>と表示されます。この場合、使用していたノードを再度選択すると、収穫情報が自動的に復元されます。ステータスが復元されない場合は、正しいノードが選択されているかを確認してください。それ以外の場合は、ノードが再起動されたために、このアカウントでハーベストされていないことを意味します。",
      ACCOUNT_HARVESTING_NODE_SELECT: "ハーベストを行うノードを選択",
      ACCOUNT_HARVESTING_START: "デリゲートハーベスティング（委任収穫）を開始",
      ACCOUNT_HARVESTING_STOP: "デリゲートハーベスティング（委任収穫）を停止",
      ACCOUNT_HARVESTING_NO_SLOTS: "選択したノードが接続制限に達しているので、別のノードを指定してください。",
      ACCOUNT_HARVESTING_BELOW_THRESHOLD: "デリゲートハーベスティングを開始する為には既得バランスが 10,000 XEM 以上必要です。",
      ACCOUNT_ACCOUNT_SELECT: "別のアカウントを選択",
      ACCOUNT_ACCOUNT_SELECT_LABEL: "別のアカウントに切り替える",
      ACCOUNT_WALLET_KEYS: "ウォレット ＆ 鍵",
      ACCOUNT_ADD_NEW_ACCOUNT: "新規アカウントを追加",
      ACCOUNT_ADD_NEW_ACCOUNT_BTN: "ウォレットに新規アカウント(アドレス)を追加",
      ACCOUNT_PRIVATE_KEY_NOTE: "秘密鍵は最重要機密であり全ての権限を保有します。パスワードで暗号化された .wlt ファイル、紙に書きとめたもの、そして写真又は<b><u>エクスポートウォレット QR</u></b>のダウンロードなど、<b><u>オフライン</u></b>で安全に保管してしてください。\n",
      ACCOUNT_PRIVATE_KEY_SHOW: "秘密鍵を表示",
      ACCOUNT_EXPORT_MOBILE: "モバイル版に出力",
      ACCOUNT_INFO_QR_BTN: "アカウント情報を QR で共有",
      ACCOUNT_WALLET_QR_BTN: "ウォレットの QR",
      ACCOUNT_WALLET_QR_BTN_2: "ウォレットを QR でエクスポート（アンドロイド &  iOS）",
      ACCOUNT_BACKUP_WALLET: "ウォレットをバックアップ",
      ACCOUNT_BACKUP_WALLET_NOTE: "ウォレットのバックアップはXEMを紛失しない為の<b><u>重要</u></b>な作業です。",
      ACCOUNT_BACKUP_WALLET_DOWNLOAD: "ウォレットをダウンロード",
      ACCOUNT_INFO_QR_TITLE: "アカウント情報 QR",
      ACCOUNT_WALLET_QR_NOTE: "この QR はまもなく公開予定の NEMpay モバイルアプリにのみ対応しています。",
      ACCOUNT_WALLET_QR_ANDROID_IOS_TITLE: "Android & iOS アプリ用のウォレット QR",
      ACCOUNT_ADD_NEW_ACCOUNT_WARNING: "全てのアカウントは、BIP32 方式を使用して主秘密鍵とパスワードから派生して作られており、他の全ての複アカウントを取得・再作成するためにも必要になります。<br>ローカルストレージが消去された場合に再度操作を繰り返すことをしない為にも、新しいアカウントを追加した場合には、ウォレットのバックアップを<b>強くお勧めします</b>。",
      ACCOUNT_CUSTOM_NODE: "カスタムノードを使う",
      ACCOUNT_NODE_FROM_LIST: "一覧からノードを使う",
      ACCOUNT_DELEGATED_PRIVATE_KEY: "委任秘密鍵",

      // PORTAL MODULE
      PORTAL_TITLE: "各種機能",
      PORTAL_MULTISIG_TITLE: "マルチシグおよびマルチユーザーアカウント",
      PORTAL_MULTISIG_TEXT: "NEMのマルチシグは編集可能なオンチェーンのコントラクトであり、連署アカウントを有効にすることで最も強力な資金保護方法にもなり、非中央集権型組織の基盤にもなります。",
      PORTAL_MULTISIG_BTN_1: "アカウントをマルチシグに変更",
      PORTAL_MULTISIG_BTN_2: "既存コントラクトを編集",
      PORTAL_MULTISIG_BTN_3: 'マルチシグトランザクションの署名',
      PORTAL_HARVESTING_TITLE: "デリゲートハーベスティング（委任）",
      PORTAL_HARVESTING_TEXT: "デリゲートハーベスティングは、アカウントが起動していない時間でもリモート・ノードを介して「マイニング（ハーベスト）」を可能にする機能です。",
      PORTAL_CHANGELLY_TITLE: "Changelly （XEM 等の両替サイト）",
      PORTAL_CHANGELLY_TEXT: "最適なレートで XEM を交換できる Changelly ウィジェットを使用できます。",
      PORTAL_CHANGELLY_BTN: "XEM を購入",
      PORTAL_NS_TITLE: "ネームスペースとサブドメイン",
      PORTAL_NS_TEXT: "ネームスペースはドメイン名のようなものです。ネームスペース名はユニーク(他に同一の名称無し)であり、その配下にサブネームスペースやモザイク （アセット） を発行する事ができます。",
      PORTAL_NS_BTN: "ネームスペースを作成",
      PORTAL_MOSAIC_TITLE: "モザイク",
      PORTAL_MOSAIC_TEXT: "NEM のモザイクは追加プロパティ、及びその他の機能を有するアセットです。\nモザイクを作成する為には少なくとも１つのネームスペースをレンタルする必要があります。",
      PORTAL_MOSAIC_BTN_1: "モザイク作成",
      PORTAL_MOSAIC_BTN_2: "モザイク編集",
      PORTAL_APOSTILLE_TITLE: "アポスティーユ （公証機能）",
      PORTAL_APOSTILLE_TEXT: "NEM アポスティーユ（公証機能）はブロックチェーンにファイル情報とタイムスタンプを刻んだ公証を作成し、ファイルの信憑性を監査できるようにする機能です。（Factomのような）",
      PORTAL_APOSTILLE_BTN_1: "作成",
      PORTAL_APOSTILLE_BTN_2: "監査（公証の確認）",
      PORTAL_ADDRESS_BOOK_TEXT: 'アドレスにラベルを付けることによって、 連絡先を簡単に管理する事ができます。',
      PORTAL_ADDRESS_BOOK_BTN: 'アドレス帳の管理',

      // ADDRESS BOOK MODULE
      ADDRESS_BOOK_TITLE: 'アドレス帳',
      ADDRESS_BOOK_LIST: '連絡先',
      ADDRESS_BOOK_NAVIGATION: 'ナビゲーション',
      ADDRESS_BOOK_NEW: '新規',
      ADDRESS_BOOK_EDIT: '編集',
      ADDRESS_BOOK_REMOVE: '削除',
      ADDRESS_BOOK_NEW_BTN: '追加',
      ADDRESS_BOOK_EDIT_BTN: '保存',
      ADDRESS_BOOK_REMOVE_BTN: '削除',
      ADDRESS_BOOK_EXPORT_BTN: 'アドレス帳のバックアップ',
      ADDRESS_BOOK_IMPORT_BTN: 'バックアップからの復元',
      ADDRESS_BOOK_CONTACT_LABEL: 'ラベル',
      ADDRESS_BOOK_ACCOUNT_ADDRESS: 'アカウントのアドレス',
      ADDRESS_BOOK_ACTIONS: '操作',
      ADDRESS_BOOK_CONFIRM_DELETE: 'アドレス帳からこの連絡先を本当に削除しますか？',

      // EXPLORER MODULE NAV
      EXPLORER_NAV_HOME: "ホーム",
      EXPLORER_NAV_NSM: "ネームスペースとモザイク",
      EXPLORER_NAV_APOSTILLES: "アポスティーユ（公証機能）",

      // EXPLORER HOME MODULE
      EXPLORER_HOME_TITLE: "エクスプローラ - ホーム",
      EXPLORER_HOME_NS: "ネームスペース一覧",
      EXPLORER_HOME_MOSAICS: "モザイク一覧",
      EXPLORER_HOME_NS_MULTISIG: "マルチシグアカウントが保有しているネームスペース",
      EXPLORER_HOME_MOSAICS_LEVY: "送信時に徴収されるモザイク（Levy）",

      // EXPLORER NAMESPACES AND MOSAICS
      EXPLORER_NS_MOS_TITLE: "エクスプローラー - ネームスペースとモザイク",
      EXPLORER_NS_MOS_SELECT_MOS: "モザイクの詳細",//"モザイクを選択して詳細を表示"だと長過ぎて”イクを選択して詳細を表示”になってしまう
      EXPLORER_NS_MOS_SEARCH: 'ネームスペースの検索',

      // EXPLORER APOSTILLES MODULE
      EXPLORER_APOSTILLES_TITLE: "エクスプローラー - アポスティーユ（公証機能）\n",
      EXPLORER_APOSTILLES_YOURS: "所有している公証",
      EXPLORER_APOSTILLES_PUBLIC: "公開受信（パブリック）",
      EXPLORER_APOSTILLES_NO_NTY: "NTYファイルがロードされていません。ここをクリックしてインポートを行って下さい。",

      // ACCOUNT EXPLORER
      ACCOUNTS_EXPLORER_TITLE: 'エクスプローラ - アカウント',
      ACCOUNTS_EXPLORER_SEARCH: '検索',

      // APOSTILLE HISTORY MODULE
      APOSTILLE_HISTORY_TITLE: "アポスティーユの履歴",
      APOSTILLE_HISTORY_BTN_TRANSFER: "所有権の譲渡 / 分割",
      APOSTILLE_HISTORY_BACKUP: "公証データのバックアップ",
      APOSTILLE_HISTORY_PURGE: "公証データのパージ",

      // CREATE APOSTILLE MODULE
      APOSTILLE_CREATE_TITLE: "アポスティーユ（公証）を作成",
      APOSTILLE_CREATE_HELP: 'アポスティーユの詳細が必要ですか？',
      APOSTILLE_TRANSACTION_NAME: "アポスティーユトランザクション",
      APOSTILLE_TRANSACTION_MULTISIG_NAME: "マルチシグアポスティーユトランザクション",
      APOSTILLE_KEEP_PRIVATE: "プライベート、譲渡、アップデート可能",
      APOSTILLE_USE_DEDICATED: "専用アカウントを使用",
      APOSTILLE_FILES_TO_NOTARIZE: "公証するファイル",
      APOSTILLE_REJECTED: "拒否されました。",
      APOSTILLE_FILE_HASH: "ファイルハッシュ",
      APOSTILLE_PRIVATE: "秘密",
      APOSTILLE_FILENAME: "ファイル名",
      APOSTILLE_NAME_TOO_LONG: "ファイル名が長すぎます。40文字以下にしてください。",
      APOSTILLE_MAX_NUMBER: "バッチあたりの最大アポスティーユ（公証）は25ファイルです。",
      APOSTILLE_INFORMATION_TITLE: '公証の作成',
      APOSTILLE_INFORMATION_1: "アップロードされたファイルはそれぞれ左側のパネルに配置されたオプションを使って自動的に処理されます。新しいファイルを追加したり、パラメーターを変更したり、そしてさらに様々なオプションがついたファイルを加えることもできます。それはマルチシグのタブに切り替えて新しいファイルを追加していくときにも使用することができます。",
      APOSTILLE_INFORMATION_2: "<b>プライベート、譲渡、アップデート可能</b>を選択をすれば、あなたのファイルのハッシュはあなたのプライベートキーで署名され、専用の階層的決定性（HD）アカウントへと送られることになります。このように、あなたがそれを共有しない限り、あなた以外の人間がどのような内容がタイムスタンプされたのかを知ることは不可能です。",
      APOSTILLE_INFORMATION_3: "専用のHDアカウントはマルチシグのコントラクトの下に置くことができ、1-of-1 やあらゆる m-of-n のマルチシグのコントラクトの組合せを通じて他者へ譲渡することができます。オリジナルのドキュメントやそれが表す製品へのアップデートもしくは拡張を通知するメッセージを送ることで、アカウントへ追加の情報を記載することもできます。",
      APOSTILLE_INFORMATION_4: "二人以上の関係者が全員ブロックチェーンのタイムスタンプを承認したい、つまりコントラクトをバインディングしたい場合には、ブロックチェーンの公証を行うアカウントを n-of-n のマルチシグのコントラクトの下に置くことができます。",
      APOSTILLE_INFORMATION_5: "<b>プライベートで、譲渡とアップデートが可能</b>なように設定されたマルチシグネチャのコントラクトのアカウントでは、発案者である連署人のプライベートキーを使ってハッシュに署名を行い、専用の HD アカウントを作成します（マルチシグ化されたアカウントではありません）",
      APOSTILLE_INFORMATION_6: "HDアカウントは、あなたのプライベートキーで署名されることになるファイル名のハッシュを元に作られた専用のアカウントです。そのプロセスの結果として生まれるハッシュは、その後に第二のプライベートキーを作るために使用します。これが、タイムスタンプされたファイルのプライベートキーです。これはブロックチェーン技術で初のものであり、アポスティーユにしか存在しないものです。",
      APOSTILLE_INFORMATION_7: "専用のHDカウントによって、ハッシュに署名されたオリジナルのファイルや、それのアップデートをHDアカウントに保存しておくことが可能になります。<b>\"パブリック\"</b>を選択した場合には、トランザクションはオープンなシンクのアドレスへ送られることになります（デフォルト設定）",
      APOSTILLE_INFORMATION_8: "そのトランザクションが送られた後に、アーカイブのダウンロードが開始します。そこには以下のものが入っています。署名されたファイル、そのファイルについてのアポスティーユの証明書、NEM のチェーン上であなたがタイムスタンプを押したすべてのファイルを記録している新規もしくはアップデートされた .nty ファイルといったものです。",
      APOSTILLE_NO_NTY: "NTYファイルがロードされていません、自動的にインポートするにはこちらをクリックしてください。もしくは自動的に生成されます。",
      APOSTILLE_IMPORT_FILES: "ファイルのインポート",
      APOSTILLE_CREATE_TEXT: "テキストドキュメントを作成",
      APOSTILLE_ENTER_TEXT: "公証するテキストを入力してください...",
      APOSTILLE_DOCUMENT_TITLE: "ドキュメントタイトル",
      APOSTILLE_DROPBOX_MESSAGE: 'ファイルを選択する前に、パスワードと必要なタグを入力してください',
      APOSTILLE_DROPBOX_MESSAGE_2: 'ファイルを選択する前にパスワードを入力してください',

      // AUDIT APOSTILLE MODULE
      APOSTILLE_AUDIT_TITLE: "アポスティーユ（公証）を監査",
      APOSTILLE_AUDIT_CHOOSE_NODE: "ノードを選んでください。",
      APOSTILLE_AUDIT_CHOOSE_NODE_NOTE: "どんな少数のノードであっても、全取引履歴を検索する事ができます。 (オプションはNISにてデフォルト無効となっています。)",
      APOSTILLE_AUDIT_WRONG_FORMAT: "このファイルはアポスティーユ（公証）のフォーマットではありません。",
      APOSTILLE_AUDIT_FAIL_NO_PUBLIC_KEY: "認証に失敗しました。オーナーは公開鍵を持っていません。",
      APOSTILLE_AUDIT_SUCCESS: "ファイル監査に成功しました。",
      APOSTILLE_AUDIT_FAIL: "認証に失敗しました。",
      APOSTILLE_AUDIT_WAITING: "アポスティーユトランスファー（公証転送）は承認待ちの可能性があります。",
      APOSTILLE_AUDIT_NOT_FOUND: "トランザクションが見つかりません。トランザクションの承認待ち状態を確認できなかった場合、このアポスティーユ（公証）は無効です。",
      APOSTILLE_AUDIT_ERROR_UNCONFIRMED: "未承認データの取り込み中にトランザクションが見つからないエラーが発生しました",
      APOSTILLE_AUDIT_ERROR_SIGNER: "署名者データの取り込み中にエラーが発生しました。",
      APOSTILLE_AUDIT_ERROR_SIGNATURE: "署名認証に失敗したためエラーが発生しました。",
      APOSTILLE_AUDIT_INFORMATION_1: "監査できるファイルは、<b>アポスティーユ形式（公証済形式）</ b>でなければなりません。",
      APOSTILLE_AUDIT_INFORMATION_2: "ファイル名でそれらを認識できます。",
      //APOSTILLE_AUDIT_NON_SIGNED: "署名なしの例:",
      //APOSTILLE_AUDIT_SIGNED: "署名の例:",
      APOSTILLE_AUDIT_FILES: "監査ファイル",

      // APOSTILLE MESSAGE MODULE
      APOSTILLE_MESSAGE_TITLE: '公証アカウントにメッセージを送信する',
      APOSTILLE_MESSAGE_NS_BRAND: 'ブランドメッセージにネームスペースを使用する',
      APOSTILLE_MESSAGE_ADD_MOSAIC: 'モザイクの追加',
      APOSTILLE_NTY_ACCOUNT: '公証アカウント',
      APOSTILLE_REQUEST_MESSAGE: 'リクエストメッセージ',
      APOSTILLE_CREATE_MESSAGE_REQUEST: 'メッセージリクエストの作成',

      // TRANSFER APOSTILLE OWNLERSHIP MODULE
      APOSTILLE_TRANSFER_TITLE: 'アポスティーユ所有権の譲渡または分割',

      // UPADTE APOSTILLE MODULE
      APOSTILLE_UPDATE_TITLE: 'アポスティーユを更新する',

      // ERROR ALERTS
      ALERT_MISSING_FORM_DATA: "フォームの必須事項を全て入力してください。",
      ALERT_ERROR_WALLET_DOWNLOAD: "ウォレットが見つからなかった為ダウンロードできません。",
      ALERT_PASSWORDS_NOT_MATCHING: "入力されたパスワード・フレーズが適合しませんでした。",
      ALERT_INVALID_KEY_FOR_ADDR: "入力されたアドレスに秘密鍵が対応していません。",
      ALERT_NO_WALLET_LOADED: "ウォレットなしにダッシュボードにアクセスすることはできません。",
      ALERT_WALLET_NAME_EXISTS: "すでに同じ名前のウォレットがロードされています。",
      ALERT_INVALID_WALLET_FILE: "ウォレットではないファイルをロードしようとしています。",
      ALERT_NO_NODE_SET: "ノードをセットしてください。",
      ALERT_INVALID_CUSTOM_NODE: "カスタムノードが正しくありません。",
      ALERT_INVALID_WEBSOCKET_PORT: "カスタムノードの websocket ポートが正しくありません。",
      ALERT_MIJIN_DISABLED: "Mijin ネットワークは無効です。他のネットワークを選択してください。",
      ALERT_GET_NS_BY_ID_ERROR: "ネームスペースを取得時にエラーが発生しました。要因：",
      ALERT_GET_ACCOUNT_DATA_ERROR: "アカウントデータを取得時にエラーが発生しました。要因：",
      ALERT_ERROR_OCCURRED: "エラーが発生しました。",
      ALERT_INVALID_ADDR_FOR_NETWORK: "ネットワークに対応していません。",
      ALERT_INVALID_PASSWORD: "パスワードが正しくありません。",
      ALERT_COSIG_ALREADY_IN_LIST: "署名者はすでに存在しています。",
      ALERT_COSIGNATORY_HAS_NO_PUBLIC: "署名者は公開鍵を取得するために最低１回はトランザクションを発生させる必要があります。",
      ALERT_MULTISIG_HAS_NO_PUBLIC: "マルチシグアカウントは公開鍵を取得するために、最低１回はトランザクションを発生させる必要があります。",
      ALERT_COSIG_CANNOT_BE_MULTISIG: "選択されたアカウントは他のマルチシグアカウントの連署者となりますので、これは変換できません。",
      ALERT_NO_NS_OWNED: "アカウントは1つもネームスペースを所持していません。ネームスペースを最低1つ作成するかアカウントを変更してください。",
      ALERT_UNLOCKED_INFO_ERROR: "アンロック情報の取り込み中にエラーが発生しました。",
      ALERT_LOCK_ERROR: "アカウントロックのエラー。要因:",
      ALERT_UNLOCK_ERROR: "アカウントのロック解除エラー。要因:",
      ALERT_SUPERNODES_ERROR: "スーパーノードデータの取り込み中にエラーが発生しました。",
      ALERT_INVALID_NTY_FILE: "提供されるファイルは .nty ファイルではありません。",
      ALERT_CREATE_WALLET_FAILED: "ウォレットの作成に失敗しました。要因:",
      ALERT_DERIVATION_FROM_SEED_FAILED: "シードからアカウントを導出するのに失敗しました。要因:",
      ALERT_BIP32_GENERATION_FAILED: "BIP32 データの生成に失敗しました。要因:",
      ALERT_NO_WALLET_DATA: "ウォレットデータが空です。",
      ALERT_CANNOT_LOGIN_WITHOU_WALLET: "ウォレットなしではログインできません。",
      ALERT_NO_WALLET_TO_SET: "現在のウォレットとしてセットすることはできません。",
      ALERT_INVALID_WALLET_INDEX: "選択されたアカウントのインデックスは範囲外です。",
      ALERT_NO_CURRENT_WALLET: "アカウントに現在のウォレットの設定ができません。",
      ALERT_ALREADY_MULTISIG: "選択されたアカウントはすでにマルチシグアカウントです。",
      ALERT_INVALID_MODIFICATION_ARRAY: "このマルチシグアカウントは署名者になれません。変更履歴を確認してください。",
      ALERT_GET_MARKET_INFO_ERROR: "市場情報の取得中にエラーが発生しました。",
      ALERT_MULTISIG_CANNOT_BE_COSIG: "このマルチシグアカウントに連署者を設定できません。",
      ALERT_PURGE_CANCELLED: "アカウントデータ消去処理（パージ）はキャンセルされました。",
      ALERT_MAINNET_DISABLED: "Mainnetは無効です。別のネットワークを選択してください。",
      ALERT_EMPTY_DECODED_MSG: "複合化されたメッセージはありません。",
      ALERT_INVALID_NS_NAME: "ネームスペース名が無効です。",
      ALERT_INVALID_MOSAIC_NAME: "モザイク名が無効です。",
      ALERT_MOSAIC_DESCRIPTION: "モザイクの概要が無効です。",
      ALERT_GET_INCOMING_TXES_ERROR: '入力トランザクションの取得エラー, 理由: ',
      ALERT_GET_MOSAICS_DEFINITIONS_ERROR: 'モザイク定義の取得エラー, 理由: ',
      ALERT_GET_SUB_NS_ERROR: 'モザイク定義の取得エラー（SUB_NS）, 理由: ',
      ALERT_GET_MOSAICS_ERROR: 'モザイク取得エラー, 理由: ',
      ALERT_GET_TRANSACTIONS_ERROR: 'トランザクション取得エラー, 理由: ',
      ALERT_INVALID_ADDRESS_BOOK_FILE: 'これは .adb ファイルではありません!',
      ALERT_INVALID_ADDRESS: '指定されたアドレスは無効です!',
      ALERT_INVALID_AMOUNT: '金額が無効です!',
      ALERT_INVALID_PRIVATE_KEY: '提供された秘密鍵は無効です!',
      ALERT_FILE_SIZE_ERROR: ' が大きすぎます。最大サイズは100MBです。',
      ALERT_MESSAGE_DECODE_KEY_ERROR: 'アカウントの公開鍵がネットワーク上にないため、メッセージの暗号化に失敗しました。',
      ALERT_FETCH_TIME_SYNC_ERROR: 'ネットワークから時刻を取得中にエラーが発生しました!',
      ALERT_MULTISIG_MIN_SIGNATURE: 'マルチシグアカウントは、最低1名の署名者が必要です',
      ALERT_BTC_MARKET_ERROR: 'Bitcoinの価格の取得に失敗しました',
      ALERT_COSIG_REMOVAL_LIMIT: '一度に削除できる署名者は1名だけです',
      ALERT_MULTISIG_MIN_SIGNATURE: '最小署名者数が無効な値です',

      // SUCCESS ALERTS
      ALERT_CREATE_WALLET_SUCCESS: "ウォレットが正常に作成され、ロードされました。",
      ALERT_SUCCESS_PURGE: "アカウントはローカルストレージから正常に消去（パージ）されました。",
      ALERT_SUCCESS_LOGOUT: "正常にログアウトされました。",
      ALERT_LOAD_WALLET_SUCCESS: "ウォレットが正常にロードされました。",
      ALERT_TRANSACTION_SUCCESS: "トランザクションが正常に送信されました。",
      ALERT_GENERATE_ACCOUNT_SUCCESS: "アカウントが正常に生成されました。ウォレットのアップデートをお忘れなく。",
      ALERT_UPGRADE_SUCCESS: "ウォレットは正常にアップグレードされました。",
      ALERT_SIGNATURE_SUCCESS: "トランザクションは正常にサインされました。",
      ALERT_NTY_FILE_SUCCESS: ".nty ファイルは正常にロードされました。",
      ALERT_INCOMING_TX_FROM: "トランザクションを受信",
      ALERT_ADDRESS_BOOK_FILE_SUCCESS: 'アドレス帳のインポートに成功しました!',

      // CONVERT ACCOUNT TO MULTISIG
      AGGREGATE_MODIFICATION_TITLE: "マルチシグアカウントへ変換",
      AGGREGATE_MODIFICATION_NAME: "アグリゲートモディフィケーショントランザクション（マルチシグ連署者追加・削除等)",
      AGGREGATE_MODIFICATION_MULTISIG_NAME: "マルチシグアグリゲートモディフィケーショントランザクション(マルチシグ連署者追加・削除等)",
      AGGREGATE_ACCOUNT_SELECT_TITLE: 'アカウントの変換',
      AGGREGATE_ACCOUNT_SELECT: "変換するアカウントを選択",
      AGGREGATE_CUSTOM_ACCOUNT: "カスタムアカウントを使用",
      AGGREGATE_ACCOUNT_TO_CONVERT_PRIVATE_TITLE: 'アドレスの秘密鍵',
      AGGREGATE_ACCOUNT_TO_CONVERT: "マルチシグ変換するアカウントのアドレス",
      AGGREGATE_ACCOUNT_TO_CONVERT_PRIVATE: "マルチシグ変換するアカウントの秘密鍵",
      AGGREGATE_ADD_PLACEHOLDER: "連署アカウント、または @alias名 を追加",
      AGGREGATE_ADD_BTN_TITLE: "連署アカウントを追加",
      AGGREGATE_MIN_SIGNATURES: "最小署名数",
      AGGREGATE_MIN_SIGNATURES_PLACEHOLDER: "署名トランザクションを検証するために必要な最小連署者数",
      AGGREGATE_MODIFICATION_LIST: "修正リスト",
      AGGREGATE_COSIG_LIST: '連署者のリスト',

      AGGREGATE_MODIFICATION_EDIT_TITLE: "マルチシグネイチャーコントラクトを編集",
      AGGREGATE_MODIFICATION_EDIT_SELECT_TITLE: 'アカウントの編集',
      AGGREGATE_MODIFICATION_EDIT_SELECT: "編集するアカウントを選択",
      AGGREGATE_ADD_REMOVE_TITLE: '署名者の追加・削除',
      AGGREGATE_ADD_REMOVE_PLACEHOLDER: "連署アカウント、または @alias を追加",
      AGGREGATE_MODIFICATION_RELATIVE_CHANGE: "最小署名数の相対変化",
      AGGREGATE_MODIFICATION_RELATIVE_CHANGE_PLACEHOLDER: "\n追加 (n) または削除(-n) する署名の数 - 自動除去",
      AGGREGATE_SELECTED_ACCOUNT_INFO: "選択されたアカウントの情報",
      AGGREGATE_MIN_SIGNATURES: '最小署名者数',
      AGGREGATE_SELECT_WALLET_ACCOUNT: "使用するウォレットアカウント",

      // SIGN MULTISIGNATURE TRANSACTIONS
      SIGN_MULTISIG_TRANSACTIONS_TITLE: 'マルチシグトランザクションの署名',

      // LOGIN MODULE
      LOGIN_MEMBER_TITLE: "あなたは NEMber ですか？",
      LOGIN_UPGRADE_TITLE: "ウォレットのアップグレードが必要です",
      LOGIN_UPGRADE_MESSAGE: "選択されたウォレットは、アップグレードが必要です。このアクションでは、サブの公開鍵を生成し、メインのアカウントに追加されます。更新されたウォレットのダウンロードが自動的に開始される為には、それを <b><u>ダウンロード</u></b>する必要があります。",
      LOGIN_UPGRADE_BUTTON: "ウォレットをアップグレード",
      LOGIN_IMPORT_BUTTON: "ウォレットをインポート",
      LOGIN_SELECT_WALLET_YOURS: 'ウォレットの選択',
      LOGIN_SELECT_WALLET: "ローカルストレージからウォレットを選択してください。",
      LOGIN_LOGIN_BUTTON: "サインイン",

      // SIGNUP MODULE
      SIGNUP_TITLE: "NEM を始めますか?",
      SIGNUP_CREATE_WALLET_TITLE: "シンプルウォレット",
      SIGNUP_PRIVATE_KEY_WALLET_TITLE: "プライベートキーウォレット",
      SIGNUP_BRAIN_WALLET_TITLE: "ブレインウォレット",
      SIGNUP_CREATE_WALLET_BUTTON: "シンプルウォレットを作成",
      SIGNUP_PRIVATE_KEY_WALLET_BUTTON: "プライベートキーウォレットを作成",
      SIGNUP_BRAIN_WALLET_BUTTON: "ブレインウォレットを作成",
      SIGNUP_CREATE_WALLET_WARNING: "クライアント側で生成された鍵の<a href=\"https://www.w3.org/TR/2014/WD-WebCryptoAPI-20140325/#RandomSource-interface\" rel=\"nofollow\" target=\"_blank\">危険性</a>についてお読みください。鍵生成の偏りなどが原因で損失が発生しても保証できません。損失が発生する可能性は極めて低いですが、NEM クライアントから生成された秘密鍵を使用することをお勧めします。",
      SIGNUP_NETWORK_SELECT: "ネットワークを選択してください。",
      SIGNUP_BRAIN_WALLET_WARNING: "ブレインウォレットの<a href=\"https://en.bitcoin.it/wiki/Brainwallet\" rel=\"nofollow\" target=\"_blank\">危険性</a>について留意してください。ブレインウォレットはハッシュ化されたパスフェースのみを利用し何度も使用されます。したがって、少なくとも40文字以上の「安全な」パスフェースを選んでください。<a href=\"https://xkcd.com/936/\" rel=\"nofollow\" target=\"_blank\">XKCD #936</a>",
      SIGNUP_PRIVATE_KEY_WALLET_WARNING: "プライベートキーウォレットは、インポートされた秘密鍵を暗号化するためにパスワードのみを使用します。したがって、「安全な」パスワードを利用する事が重要です。 ",
      //SIGNUP_COMMON_WALLET_WARNING: 'ウォレットは、<a><b>一時的に</b></a>ブラウザ内のローカルストレージに保存されます。ウォレット作成後に自動的にダウンロードされる .wlt ファイルはバックアップとして利用します。ブラウザのローカルストレージが削除された場合は、このファイルからインポート可能です。バックアップとして、.wlt ファイルを保存していない場合は、アカウントにログインして、秘密鍵をコピーし安全な場所にバックアップして下さい。バックアップされている事を確認してから、自己の責任に於いてアカウントに資金を送金してください。',
      //SIGNUP_COMMON_WALLET_WARNING_FOOTER: '以下をクリックすると、上記の警告を読み、理解したことに同意したことになります。',
      SIGNUP_COMMON_WALLET_WARNING_TITLE: 'アカウントを安全に使用する為に',
      SIGNUP_COMMON_WALLET_WARNING_1: 'ウォレットはブラウザのローカルストレージに<b>一時的に</b>保存されます。ブラウザは、任意のアドオン等によりローカルストレージがクリアされてしまう事があります。 これはデータの損失につながり、簡単に取り消すことはできません。 このような場合、ウォレットはなくなりますので、アカウントを復元するために必要な情報がすべてそろっていることを確認することが非常に重要です。',
      SIGNUP_COMMON_WALLET_WARNING_2: 'ウォレットを作成した後、ダウンロードが開始されます。バックアップとして使用され、ブラウザのローカルストレージが消去された場合にインポートする <b><i>.wlt</i></b> ファイルです。',
      SIGNUP_COMMON_WALLET_WARNING_3: 'バックアップした <b><i>.wlt</i></b> ファイルがない場合は、下のボタンをクリックしてウォレットデータを表示し、ファイルを手動で作成します。',
      SIGNUP_COMMON_WALLET_WARNING_4: 'ウォレットファイルを持っていても、アカウントの秘密鍵のバックアップは<b><u>必修</u></b>です。下記ボタンをクリックすると表示されます。',
      SIGNUP_COMMON_WALLET_WARNING_5: 'あなたの秘密鍵がバックアップされていることを確認した後に、あなたのアカウントに自己の責任において資金を送金してください。',
      SIGNUP_COMMON_WALLET_WARNING_6: 'それぞれのウォレットは、<b><u>主秘密鍵</u></b>（上に表示される）を持っています。それは2番目のアカウントを作成するためにも使用されます(BIP32)。この機能は<b><u>同じパスワード</u></b>を使用する必要があり、そうでない場合には同じ主秘密鍵を利用しても、異なるセカンダリアカウントを生成します。あなたがデータをバックアップする際には、忘れずに<b><u>あなたのパスワードを書き留めてください</u></b>。',
      SIGNUP_COMMON_WALLET_WARNING_BTN_1: 'ウォレットファイルの表示',
      SIGNUP_COMMON_WALLET_WARNING_BTN_1_INFO: 'ウォレットファイルを作成するには、空のテキストファイルを作成し、上記のBase64で作成されたキーを記入します。<br>ファイルを<b><i>yourWalletName.wlt</i></b>という名前で保存し、インポートすることができます。',
      SIGNUP_COMMON_WALLET_WARNING_BTN_2: 'プライベートキーの表示',
      SIGNUP_COMMON_WALLET_WARNING_BTN_2_INFO: '秘密鍵をバックアップするには、テキストファイルに保存して印刷するか、安全な場所に書き込んでください。 <br>秘密鍵はオフラインで保存することをお勧めします。',
      SIGNUP_COMMON_WALLET_WARNING_FOOTER: '以下をクリックすると、上記全ての警告を読み理解し同意したことになります。',
      SIGNUP_COMMON_WALLET_WARNING_CONFIRM_1: 'ウォレットファイルをバックアップしました',
      SIGNUP_COMMON_WALLET_WARNING_CONFIRM_2: '秘密鍵とパスワードバックアップしました',
      SIGNUP_COMMON_WALLET_WARNING_CONFIRM_3: '私は全ての内容を理解し同意しました',  //このあたりは、英文より厳しく書いてます。

      // FAQ MODULE
      FAQ_TITLE: "よくある質問",
      FAQ_QUESTION_1: "どのように NanoWallet は動作しますか？",
      FAQ_ANSWER_1: "NanoWallet は ES6, AngularJS そして 最新の暗号ライブラリを使用して構築されています。これは完全なクライアントサイドアプリケーションで、ネット上に機密データが送信されることはありません。秘密鍵の作成からトランザクションの署名まで全てあなたのブラウザ上で完結します。",
      FAQ_QUESTION_2: "このウォレットは無料で使えますか？",
      FAQ_ANSWER_2: "はい。追加使用料等は発生しません。全処理は完全にクライアント側で行われます。あなたのコインは第三者の干渉を受けずあなたしか操作することができません。",
      FAQ_QUESTION_3: "なぜ最初からに モザイク を1つ所有しているのですか？",
      FAQ_ANSWER_3: "XEMはNEMブロックチェーンのデフォルトの通貨なので、その残高がゼロであっても、すべてのユーザーのウォレットにはそれが登録されています。そのネームスペースは NEM であり、モザイクの名前は XEM です。",
      FAQ_QUESTION_4: "今後の予定は？",
      FAQ_ANSWER_4: "現在のロードマップには、NEM クライアントの機能を組み込むこと、NanoWallet の中で機能するコミュニティによって出資されたプロジェクトの完成などが含まれています。",
      FAQ_QUESTION_5: "無料で XEM を入手することはできますか？",
      FAQ_ANSWER_5: "現在 NEM フォーセットは停止していますが、NEM フォーラムで報酬として受け取る方法について相談できます。",
      FAQ_QUESTION_6: "どこで NEM に関するもっと詳しい情報を得ることができますか？",
      FAQ_ANSWER_6_FORUM: "公式フォーラム",
      FAQ_ANSWER_6_WEBSITE: "公式ウェブサイト",
      FAQ_ANSWER_6_BTT: "公式 BitcoinTalk スレッド",
      FAQ_QUESTION_7: "どうすればこのプロジェクトをサポートできますか？",
      FAQ_ANSWER_7: "NanoWallet は Gimre氏 の lightwallet をベースに、Quantum_Mechanics が管理しています。lightwallet ソースはこちら",
      FAQ_ANSWER_7_2: "アポスティーユは Jabo38 と<a href=\"http://apostille.io\">apostille.io</a>ウェブサイト全体で取り組んでいるサービスです。\n<a href=\"https://forum.nem.io/t/nem-apostille-a-nem-notary-system-community-fund-proposal/2001\" target=\"_blank\">Apostille project</a>.",
      FAQ_ANSWER_7_3: "下記のアドレスに対して、あなたがもし寄付てくれるならば、我々は非常に嬉しい限りです^_^",
      FAQ_ANSWER_7_4: "NanoWallet プロジェクトファンド",
      FAQ_ANSWER_7_5: "アポスティーユ（公証）ファンド",

      // FORM RELATED
      FORM_PASSWORD_FIELD_PLACEHOLDER: "ウォレットのパスワード、もしくはパスフレーズを入力してください。",
      FORM_WALLET_NAME_FIELD_PLACEHOLDER: "ウォレット名",
      FORM_SIGNUP_PASSWORD_FIELD_PLACEHOLDER: "パスワード",
      FORM_PASSWORD: 'パスワード',
      FORM_PASSWORD_CONFIRM: 'パスワードを確認',
      FORM_PASSPHRASE_CONFIRM: 'パスプレーズを確認',
      FORM_CONFIRM_PASSWORD_FIELD_PLACEHOLDER: "パスワードを確認",
      FORM_PASSPHRASE_FIELD_PLACEHOLDER: "パスフレーズ",
      FORM_CONFIRM_PASSPHRASE_FIELD_PLACEHOLDER: "パスフレーズを確認",
      FORM_ADDRESS_FIELD_PLACEHOLDER: "アカウントアドレス",
      FORM_PRIVATE_KEY_FIELD_PLACEHOLDER: "秘密鍵",
      FORM_SIDE_BTN_BALANCE: "バランス（残高）",
      FORM_SIDE_BTN_PAY_TO: "支払先",
      FORM_SIDE_BTN_TX_FEE: "取引手数料",
      FORM_SIDE_BTN_RENTAL_FEE: "レンタル料",
      FORM_SIDE_BTN_LEVY_FEE: "徴収料",
      FORM_RECIPIENT_PLACEHOLDER: "受信者のアドレスまたは @alias",
      FORM_INVOICE_RECIPIENT_PLACEHOLDER: "受信者のアドレス",
      FORM_SIDE_BTN_ALIAS_OF: "エイリアス",
      FORM_MESSAGE_PLACEHOLDER: "メッセージ",
      FORM_MOSAIC_NAME_PLACEHOLDER: "モザイク名",
      FORM_ADDRESS_ALIAS_PLACEHOLDER: 'アカウントアドレス 又は @エイリアス名'
    });

}

export default JapaneseProvider;
