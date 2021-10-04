const singableList = [
  ['愛言葉Ⅲ', 'https://youtu.be/l7qNAj7jTwA', 'DECO*27'],
  ['愛して愛して愛して', 'https://youtu.be/1JBq-bXOPGs', 'きくお'],
  ['アイ情劣等生', 'https://youtu.be/mkNg2Y9tZvc', 'かいりきベア'],
  ['Ice breaker', 'https://www.nicovideo.jp/watch/sm35350218', 'ねじ式'],
  ['曖昧劣情lover', 'https://youtu.be/FlzJ758W4qI', '電ポルP'],
  ['青', 'https://youtu.be/IpWuxL91fXE', '164'],
  ['アスノヨゾラ哨戒班', 'https://youtu.be/iXxVzrtwA0I', 'Orangestar'],
  ['悪役にキスシーンを', 'https://nico.ms/sm32237588', '40㍍P'],
  ['アディショナルメモリー', 'https://youtu.be/yUOfpKojofE', 'じん（自然の敵P）'],
  ['あの夏が飽和する。', 'https://youtu.be/PK_cymd9BbE', 'カンザキイオリ'],
  ['雨音ノイズ', 'https://nico.ms/sm25531102', '40㍍P'],
  ['Alice in 冷凍庫', 'https://youtu.be/x9H5lVs2mKQ', 'Orangestar'],
  ['アルカリレットウセイ', 'https://youtu.be/d5n9ci2o37Y', 'かいりきベア'],
  ['アンドロイドガール', 'https://youtu.be/ZJssQVsWYtM', 'DECO*27'],
  ['アンノウン・マザーグース', 'https://youtu.be/tb95fTqEKEI', 'wowaka（現実逃避P）'],
  ['アンヘル', 'https://nico.ms/sm34885467', 'かいりきベア'],
  ['いいや', 'https://youtu.be/xXkhheM7-aQ', 'DECO*27'],
  ['一角獣', 'https://youtu.be/vO2Ba75eW8c', 'てにをは'],
  ['一騎当千', 'https://youtu.be/-MGyviyUuxE', '梅とら'],
  ['一触即発☆禅ガール', 'https://youtu.be/5-mQTx4xCqc', 'れるりり'],
  ['一心不乱', 'https://youtu.be/uSH6lerlcv4', '梅とら'],
  ['命に嫌われている。', 'https://youtu.be/GxtccgEBRGw', 'カンザキイオリ'],
  ['威風堂々', 'https://youtu.be/OlMlAzkb9uM', '梅とら'],
  ['ヴァンパイア', 'https://youtu.be/DHFecoFk_CE', 'DECO*27'],
  ['うそつき', 'https://youtu.be/fgnl2TH4wKM', 'めざめP'],
  ['うみたがり', 'https://youtu.be/4hQQY_AjHYM', 'maretu'],
  ['うみなおし', 'https://nico.ms/sm31814732', 'maretu'],
  ['ウミユリ海底譚', 'https://youtu.be/BCVVoW4R0Mg', 'ナブナ'],
  ['裏表ラバーズ', 'https://youtu.be/_8J0eocFnhs', 'wowaka（現実逃避P）'],
  ['え？あぁ、そう。', 'https://youtu.be/0Hoj9QPQ8Tk', '蝶々P'],
  ['エゴロック', 'https://nico.ms/sm33818206', 'すりぃ'],
  ['エンヴィーベイビー', 'https://youtu.be/TaWrny1yEfk', 'Kanaria'],
  ['エンヴィキャットウォーク', 'https://youtu.be/ZBjjUOyy_XM', 'トーマ'],
  ['エンジェルフィッシュ', 'https://youtu.be/26iOIFOTpsw', 'Nem'],
  ['エンゼルフィッシュ', 'https://youtu.be/XfjPX52OnuY', 'パトリチェフ'],
  ['エンドロール', 'https://nico.ms/sm33772451', '夏代孝明'],
  ['おこちゃま戦争', 'https://nico.ms/sm22368189', 'れをる'],
  ['おじゃま虫', 'https://nico.ms/sm28291987', 'DECO*27'],
  ['乙女解剖', 'https://youtu.be/1oYQ2jq_XG4', 'DECO*27'],
  ['囮と致死毒', 'https://nico.ms/sm30722935', 'CapsLack'],
  ['おねがいダーリン', 'https://youtu.be/40WytpxEiIA', 'ナナホシ管弦楽団'],
  ['orange(少年T)', 'https://nico.ms/sm13931524', '少年T'],
  ['快晴', 'https://youtu.be/TmSf0B1xh_Y', 'Orangestar'],
  ['限りなく灰色へ', 'https://youtu.be/T7CX48kOyyg', 'すりぃ'],
  ['カゲロウデイズ', 'https://youtu.be/i_sgLCLURtE', 'じん（自然の敵P）'],
  ['神のまにまに', 'https://youtu.be/bygCBBc8s1g', 'れるりり'],
  ['からくりピエロ', 'https://youtu.be/3C4ZzWKNTWo', '40㍍P'],
  ['ギガンティックO.T.N', 'https://youtu.be/TJoq_dERkV8', 'れをる'],
  ['疑心暗鬼', 'https://youtu.be/XtcWXrd26xY', '梅とら'],
  ['キュートなカノジョ', 'https://youtu.be/3xSKpd3Y6B4', 'Syudou'],
  ['狂喜乱舞', 'https://nico.ms/sm18704752', '梅とら'],
  ['キライ・キライ・ジガヒダイ！', 'https://nico.ms/sm29316808', '和田たけあき（くらげP）'],
  ['キルマー', 'https://youtu.be/kkU18U_Myl4', '煮ル果実'],
  ['KING', 'https://youtu.be/WbuROXgJusE', 'Kanaria'],
  ['Gimme×Gimme', 'https://youtu.be/7PAR_c2Y_YU', 'q*Left'],
  ['キレキャリオン', 'https://youtu.be/DxGfHwdHTu0', 'ポリスピカデリー'],
  ['クイーンオブハート', 'https://youtu.be/XXKwgVM67zY', '奏音69'],
  ['空奏列車', 'https://youtu.be/PC6h09WSZCI', 'Orangestar'],
  ['空中分解', 'https://youtu.be/D0jSP6zHUH8', 'すりぃ'],
  ['グッバイ宣言', 'https://youtu.be/xovMEjLx-Ig', 'Chinozo'],
  ['携帯恋話', 'https://youtu.be/UFhNxcOKog8', 'まふまふ'],
  ['GETCHA!', 'https://nico.ms/sm37537472', '木のひこ・KIRA'],
  ['虎視眈々', 'https://youtu.be/HNE41WgVbFI', '梅とら'],
  ['心とかいう名前の未発見の臓器の機能についての考察', 'https://youtu.be/su_dHzRnLN8', 'adstlaxy'],
  ['心做し', 'https://youtu.be/UCuHs-G31KE', '蝶々P'],
  ['ゴーストルール', 'https://youtu.be/zU3QozXLqLY', 'DECO*27'],
  ['こちら、幸福安心委員会です。', 'https://youtu.be/WqzKusmYlW8', '鳥居羊'],
  ['孤独の宗教', 'https://youtu.be/6Y9r8x3oRsQ', 'syudou'],
  ['コールボーイ', 'https://youtu.be/gamfNwfabhQ', 'syudou'],
  ['再教育', 'https://youtu.be/aiHvQG_kF5I', 'Neru'],
  ['サリシノハラ', 'https://youtu.be/ywoN-1t0mUI', 'みきとP'],
  ['幸せになれる隠しコマンドがあるらしい', 'https://youtu.be/bvzC_mhONc8', '鳥居羊'],
  ['シエレトワール', 'https://nico.ms/sm33072562', '蝶々P'],
  ['失敗作少女', 'https://youtu.be/peNXLQP9coA', 'かいりきベア'],
  ['シニカルナイトプラン', 'https://youtu.be/XOn0mgRQvxc', 'Ayase'],
  ['紗痲', 'https://youtu.be/s8PPTi08pt8', '煮ル果実'],
  ['シャルル', 'https://youtu.be/3tqikIDPGoM', 'バルーン'],
  ['ジャンキーナイトタウンオーケストラ', 'https://youtu.be/MVYth1Sh_A4', 'すりぃ'],
  ['少女レイ', 'https://youtu.be/26NJTEaalqI', 'みきとP'],
  ['白ゆき', 'https://youtu.be/TCMtwGddCG0', 'ナブナ'],
  ['心拍数#0822', 'https://youtu.be/uEo1qUvsKFQ', '蝶々P'],
  ['スクランブル交際', 'https://youtu.be/ZojY1hqBCag', 'DECO*27'],
  ['スーサイドパレヱド', 'https://nico.ms/sm31600923', 'ユリイ・カノン'],
  ['聖槍爆裂ボーイ', 'https://youtu.be/e4M6j8pHrGc', 'れるりり'],
  ['セカイ', 'https://youtu.be/ljTLxCWf0uQ', 'DECO*27'],
  ['それがあなたの幸せとしても', 'https://youtu.be/hKBJMIz4Y_8', 'ヘブンズP'],
  ['絶え間なく藍色', 'https://youtu.be/Nyy4Tk0Ldzk', '獅子志司'],
  ['ダチュラと林檎', 'https://youtu.be/66h_URIL3uA', 'ねじ式'],
  ['だめにんげんだ！', 'https://youtu.be/-hHRNrnRflQ', '薄塩指数'],
  ['ダーリン', 'https://youtu.be/xZ1C_P7HivM', 'maretu'],
  ['ダーリンダンス', 'https://youtu.be/FnuqapCZoDo', 'かいりきベア'],
  ['だれかの心臓になれたなら', 'https://youtu.be/gjHsnCuA0f4', 'ユリイ・カノン'],
  ['だんだん早くなる', 'https://youtu.be/Gm0G2YzKslo', '40㍍P'],
  ['チェチェ・チェック・ワンツー！', 'https://nico.ms/sm29544225', '和田たけあき（くらげP）'],
  ['厨病激発ボーイ', 'https://nico.ms/sm25263050', 'れるりり'],
  ['チュルリラ・チュルリラ・ダッダッダ！', 'https://nico.ms/sm29372731', '和田たけあき（くらげP）'],
  ['ツギハギスタッカート', 'https://youtu.be/O43m7A9Qi7Y', 'とあ'],
  ['帝国少女', 'https://youtu.be/FqTylVrrg-0', 'R Sound Design'],
  ['DayBreak Frontline', 'https://youtu.be/_HppqK_mJJg', 'Orangestar'],
  ['デリヘル呼んだら君が来た', 'https://youtu.be/DMVlEcjq0Wk', 'ナナホシ管弦楽団'],
  ['Tell Your World', 'https://youtu.be/yplPGTgyaqs', 'kz'],
  ['テレキャスタービーボーイ', 'https://youtu.be/Bw-C7HSGrdY', 'すりぃ'],
  ['東京サマーセッション', 'https://youtu.be/tVpKtATndTg', 'ゴム、チョリスP'],
  ['東京テディベア', 'https://youtu.be/6Im6rZVV300', 'Neru'],
  ['とても素敵な六月でした', 'https://youtu.be/IidXMG262Jc', 'Eight'],
  ['ドナーソング', 'https://youtu.be/j-FqKaLMk90', 'れるりり'],
  ['ドレミファロンド', 'https://youtu.be/CmG6durR13c', '40㍍P'],
  ['drop pop candy', 'https://youtu.be/o4YMgovQz44', 'れをる'],
  ['七草夢物語', 'https://nico.ms/sm34552182', 'buzzG'],
  ['needle', 'https://youtu.be/nxMdvGS6j0g', 'DECO*27'],
  ['脳漿炸裂ガール', 'https://youtu.be/HC5gN4gfMbo', 'れるりり'],
  ['ネクロの花嫁', 'https://nico.ms/sm28019990', '奏音69'],
  ['ネロイズム', 'https://youtu.be/m-4sY5EmTqc', 'かいりきベア'],
  ['脳内革命ガール', 'https://youtu.be/iqMBTt112f0', 'maretu'],
  ['野狗子', 'https://nico.ms/sm35040830', 'Peg'],
  ['ハイスペックニート', 'https://nico.ms/sm30383694', '40㍍P'],
  ['パズルガール', 'https://nico.ms/sm34240573', 'とあ'],
  ['罰ゲーム', 'https://youtu.be/X5zTqWIzGqQ', 'まふまふ'],
  ['花降らし', 'https://youtu.be/cjmuA_CgruU', 'ナブナ'],
  ['被害妄想携帯女子(笑)', 'https://youtu.be/zQoO-jMUH3I', 'luz'],
  ['ビーストインザビューティー', 'https://youtu.be/Ymq7s8z4DaA', '奏音69'],
  ['ビースト・ダンス', 'https://youtu.be/lcYz_VZDGSU', '和田たけあき（くらげP）'],
  ['ビタースウィート', 'https://youtu.be/xvcrnmLfwmg', 'yuxuki waga'],
  ['ビターチョコデコレーション', 'https://youtu.be/4MRBYtyt8nU', 'syudou'],
  ['ビーバー', 'https://youtu.be/HCUO8_A2Leg', 'すりぃ'],
  ['ヒバナ', 'https://youtu.be/zo2jfqk9eNg', 'DECO*27'],
  ['ヒビカセ', 'https://youtu.be/_tTMVDyHdms', 'れをる'],
  ['表裏一体', 'https://youtu.be/-XNN2EX2ZEU', 'すりぃ'],
  ['＋♂', 'https://youtu.be/uYSMhUXFaVk', 'れをる'],
  ['ベノム', 'https://youtu.be/duvJFyF3fGI', 'かいりきベア'],
  ['Henceforth', 'https://youtu.be/-Ks6ICi4mB0', 'Orangestar'],
  ['Forward', 'https://nico.ms/sm37957286', 'R Sound Design'],
  ['flos', 'https://nico.ms/sm34210688', 'R Sound Design'],
  ['ボッカデラベリタ', 'https://youtu.be/_V3sb8tG3xI', '柊キライ'],
  ['ホワイトハッピー', 'https://youtu.be/kcEnFyF7Z2s', 'maretu'],
  ['ホワイトリリー', 'https://nico.ms/sm30064705', 'ケイエヌ'],
  ['マカロン', 'https://youtu.be/nXQ__WrZ9kQ', 'Atols'],
  ['magnet', 'https://youtu.be/foH4kE1pV7M', '流星P'],
  ['Masked bitcH', 'https://nico.ms/sm22962396', 'q*Left'],
  ['マオ', 'https://youtu.be/HDOG8iaxf1s', 'かいりきベア・まふまふ'],
  ['回る空うさぎ', 'https://youtu.be/ypDwl9jXSNc', 'Orangestar'],
  ['ミュージックミュージック', 'https://youtu.be/P0Y5jvjLI9Q', 'とあ'],
  ['MIRA', 'https://youtu.be/BjIembzFJZ0', 'Kanaria'],
  ['ミルククラウン・オン・ソーネチカ', 'https://youtu.be/5KjRzs5grO8', 'ユジー'],
  ['妄想感傷代償連盟', 'https://youtu.be/3imVqRE0XxI', 'DECO*27'],
  ['妄想疾患■ガール', 'https://youtu.be/SN6Fiaw6VLs', 'れるりり'],
  ['ヤミタイガール', 'https://youtu.be/Mv09KYTTbK0', 'れるりり'],
  ['幽霊東京', 'https://youtu.be/cVAZVKn9B8I', 'Ayase'],
  ['夜明けと蛍', 'https://youtu.be/wmh8bKL-rP8', 'ナブナ'],
  ['よくばり', 'https://youtu.be/_9QgHk1SnR4', 'Ayase'],
  ['吉原ラメント', 'https://youtu.be/1jXa7BO7D_4', '亜沙'],
  ['夜咄ディセイブ', 'https://youtu.be/ocMNgg5_X6I', 'じん（自然の敵P）'],
  ['夜もすがら君想ふ', 'https://youtu.be/Ov6vs7dUebU', '西沢さんP'],
  ['ライアーダンス', 'https://youtu.be/w5QOERIoqVg', 'DECO*27'],
  ['ラストリゾート', 'https://youtu.be/52KeVuMvhPA', 'Ayase'],
  ['ラブカ？', 'https://youtu.be/RPgo-JCHwQU', '柊キライ'],
  ['ラプンツェル', 'https://youtu.be/ALDbKClTshE', 'ナブナ'],
  ['LUVORATORRRRRY!', 'https://youtu.be/_EnWMcScJMo', 'れをる'],
  ['乱躁滅裂ガール', 'https://youtu.be/dQZmaZIgNfw', 'れるりり'],
  ['リバーシブル・キャンペーン', 'https://youtu.be/iegSyiVEyoE', 'DECO*27'],
  ['ルマ', 'https://youtu.be/vAdGhWQQsRA', 'かいりきベア'],
  ['レコード・レド', 'https://youtu.be/oKBFBehwWFA', 'shr'],
  ['劣等上等', 'https://youtu.be/vPeJ6lDBL-I', 'れをる'],
  ['Ready Steady', 'https://youtu.be/xP_kMvCCLeo', 'q*Left'],
  ['レディーレ', 'https://youtu.be/PV85XgCanr4', 'バルーン'],
  ['レミングミング', 'https://youtu.be/iCy-nrxOW8g', 'かいりきベア'],
  ['恋愛裁判', 'https://youtu.be/UiT7I0CY2yQ', '40㍍P'],
  ['ロジカ', 'https://youtu.be/DJpzJBEKbgM', 'かいりきベア'],
  ['ロミオとシンデレラ', 'https://youtu.be/o_cUpnkmhDs', 'doriko'],
  ['ローリンガール', 'https://youtu.be/a6bXE1C5NmU', 'wowaka（現実逃避P）'],
  ['ワールズエンド・ダンスホール', 'https://youtu.be/mtM06xMEswU', 'wowaka（現実逃避P）'],
  ['ワールド・ランプシェード', 'https://youtu.be/tP8O4dJAO_w', 'buzzG'],
  ['ワンルーム・オール・ザット・ジャズ', 'https://youtu.be/sFFCpvV1Tec', 'DATEKEN'],
  ['可愛くなりたい', 'https://youtu.be/P1AZNHz1TVI', 'HoneyWorks'],
  ['うまぴょい伝説', 'https://youtu.be/Sb3PA_j5rqM', 'Cygames(本田晃弘)'],
  ['いかないで', 'https://youtu.be/oPhNFeIyOVA', '想太'],
  ['アサガオの散る頃に', 'https://youtu.be/E9d00eQwtNY', 'じっぷす'],
  ['くらべられっ子', 'https://youtu.be/iZ1g_JAtMqI', 'ぷす'],
  ['はきだす', 'https://nico.ms/sm32247746', 'mao sasagawa'],
  ['クラスで一番人気のあの子は校舎裏で人を殺した', 'https://nico.ms/sm33400729', 'mao sasagawa'],
  ['ファンサ', 'https://youtu.be/F0rTxW5K0dk', 'HoneyWorks'],
  ['トオトロジイダウトフル', 'https://youtu.be/ooSGszgzsgY', 'ツミキ'],
  ['月曜日の憂鬱', 'https://youtu.be/NzgPNELn0Bo', 'HoneyWorks'],
  ['食虫植物', 'https://youtu.be/RSys9VWVgHs', '笹川真生'],
  ['ピースサイン', 'https://nico.ms/sm31484856', '米津玄師'],
  ['マーシャル・マキシマイザー', 'https://youtu.be/PSR2O4ZV0x4', '柊マグネタイト'],
  ['春を告げる', 'https://nico.ms/sm38550616', 'yama'],
  ['ときめきブローカー', 'https://youtu.be/IhPzHPFaDbE', 'ナナホシ管弦楽団'],
  ['ヨワネハキ', 'https://youtu.be/lLcMHWmI0Wg', 'MAISONdes'],
  ['終焉逃避行', 'https://youtu.be/-kuXx7ZdG7E', '柊マグネタイト'],
  ['うっせぇわ', 'https://youtu.be/rlcNOYcQqZU', 'syudou'],
  ['MAFIA', 'https://youtu.be/_8xGl7jsTB0', 'wotaku'],
  ['DOGMA', 'https://youtu.be/88hJ8VVilSE', 'wotaku'],
  ['ねぇ、どろどろさん', 'https://youtu.be/cjr17Cgta34', 'YASUHIRO(康寛)'],
  ['廃墟の国のアリス', 'https://nico.ms/sm33732294', 'まふまふ'],
  ['四季折々に揺蕩いて', 'https://nico.ms/sm31685860', 'まふまふ'],
  ['EYE', 'https://youtu.be/A31heap80Fc', 'Kanaria'],
  ['小説 夏と罰(上)', 'https://youtu.be/AiTIlBOX4kk', '傘村トータ'],
  ['アイディスマイル', 'https://youtu.be/yu72RgEINiY', 'とあ'],
  ['トンデモワンダーズ ', 'https://youtu.be/m9aNbz3z6iw', 'sasakure.UK'],
  ['ワーワーワールド', 'https://youtu.be/yRk6wu1rcro', 'ギガP, Mitchie M'],
  ['ポジティブ☆ダンスタイム', 'https://youtu.be/9je9rM5mAZc', 'キノシタ'],
  ['ビバハピ', 'https://nico.ms/sm21444890', 'Mitchie M'],
  ['カワキヲアメク', 'https://youtu.be/3YA6A192B7I', '美波'],
  ['ハツコイソウ', 'https://youtu.be/7Ozdzr9O514', 'FLG4'],
  ['CULT', 'https://nico.ms/sm36373587', 'Misumi'],
  ['Mad Hatter', 'https://youtu.be/6lrmofOR9Y4', 'Misumi'],
  ['小悪魔だってかまわない！', 'https://nico.ms/sm38912725', 'HoneyWorks'],
  ['ゴシップ', 'https://nico.ms/sm15777561', 'OSTER project'],
  ['フロイデ', 'https://nico.ms/sm32446284', 'mao sasagawa'],
  ['ジャックポットサッドガール', 'https://youtu.be/qyNPDMzCGgE', 'syudou'],
  ['ラグトレイン', 'https://youtu.be/gUmkV969pcY', '稲葉曇'],
  ['他人事の音がする', 'https://youtu.be/4Ep73kE_JUE', 'あめのむらくもP'],
  ['アンコール', 'https://youtu.be/taYne9yDtY8', 'Ayase'],
  ['夜迷事', 'https://nico.ms/sm37091126', 'ive'],
  ['ピエロ', 'https://nico.ms/sm11224129', 'KEI'],
  ['glow', 'https://youtu.be/CwI2lOJZ6yE', 'keeno'],
  ['贖罪', 'https://youtu.be/O1q0YCrT1Lw', '傘村トータ'],
  ['リコレクションエンドロウル', 'https://youtu.be/sR6AQNxnlko', 'ツミキ'],
  ['プロトディスコ', 'https://youtu.be/LvbECl8eLK0', 'ぬゆり'],
  ['カプリスキャスト', 'https://youtu.be/a-Znb2iZfk0', 'ユギカ'],
  ['んっあっあっ', 'https://youtu.be/REarDPUVR7c', 'SLAVE.V-V-R'],
  ['カレシのジュード', 'https://youtu.be/B62XglUlGYQ', 'syudou'],
  ['ノンブレス・オブリージュ', 'https://youtu.be/9-3XNtnHj04', 'ピノキオピー'],
  ['フォニイ', 'https://youtu.be/PWwz6OYAyLU', 'ツミキ'],
  ['トウキョウト・ロック・シティ', 'https://nico.ms/sm17043473', 'はいのことん'],
  ['結い傷な', 'https://youtu.be/h25aowxTsAA', '一二三'],
  ['メンタルチェンソー', 'https://youtu.be/5-pWpR7DZYQ', 'かいりきベア'],
  ['ハルノ寂寞', 'https://youtu.be/GOvKn-TEolE', '稲葉曇'],
  ['Booo!', 'https://youtu.be/hbclualhtQI', 'TOKOTOKO(西沢さんP)'],
  ['ロストアンブレラ', 'https://youtu.be/41oNhyOdXGI', '稲葉曇'],
  ['地球最後の告白', 'https://youtu.be/-UVaVeGOLZI', 'kemu'],
  ['誇り高きアイドル', 'https://youtu.be/pHxnSWaUq_M', 'HoneyWorks'],
  ['群青', 'https://youtu.be/KwtvntYaAbw', 'Ayase'],
  ['六兆年と一夜物語', 'https://youtu.be/4rHYgcbpjyA', 'kemu'],
  ['怪物', 'https://youtu.be/zH4xwMldUIg', 'Ayase'],
  ['透明中毒', 'https://nico.ms/sm38037410', 'ive'],
  ['バッド・ダンス・ホール', 'https://youtu.be/UlSvT6bkTE0', 'ぱなまん'],
  ['ストリーミングハート', 'https://nico.ms/sm23159520', 'DECO*27'],
  ['君の知らない物語', 'https://nico.ms/sm11612412', 'ryo'],
  ['このピアノでお前を8759632145回ぶん殴る', 'https://youtu.be/-tSCg563yIQ', 'SLAVE.V-V-R'],
  ['オノマトペテン師', 'https://youtu.be/mhLZ3vzcXns', 'てにをは'],
  ['恋愛サーキュレーション', 'https://nico.ms/sm9512470', 'meg rock'],
  ['ヒロイン育成計画', 'https://nico.ms/sm36228027', 'HoneyWorks'],
  ['私、アイドル宣言', 'https://nico.ms/sm32827109', 'CHiCO'],
  ['おねがいダーリン', 'https://youtu.be/9NvyGbIBAgM', 'ナナホシ管弦楽団'],
  ['またねがあれば', 'https://www.nicovideo.jp/watch/sm30524050', 'ちんまりP'],
  ['シビュラ', 'https://www.nicovideo.jp/watch/sm35535305', 'wotaku'],
  ['p.h.', 'https://youtu.be/1Dy07Nyudeg', 'トキチアキ'],
  ['蜜月アン・ドゥ・トロワ', 'https://www.nicovideo.jp/watch/sm20129186', 'DATEKEN'],
  ['シンデレラ', 'https://youtu.be/_lJNSb-YMOk', 'DECO*27'],
  ['撥条少女時計', 'https://youtu.be/o85vlyvcJkc', '葉月ゆら'],
  ['8.32', 'https://youtu.be/xDQuwX9TFf4', '*Luna'],
  ['ASTER', 'https://www.nicovideo.jp/watch/sm33652185', 'はるまきごはん'],
  ['カトラリー', 'https://youtu.be/lKX1yqSwfPM', '有機酸'],
  ['蜜ノ味', 'https://youtu.be/JMAq_NYml3s', 'syudou'],
  ['きらり', 'https://www.nicovideo.jp/watch/sm17978148', 'ふわりP'],
  ['思春期少年少女', 'https://youtu.be/7nl3Ev65sYI', '砂粒'],
  ['シル・ヴ・プレジデント', 'https://youtu.be/l2l8bVcCqA8', 'ナナホシ管弦楽団'],
  ['小悪魔だってかまわない！', 'https://www.nicovideo.jp/watch/sm38912725', 'HoneyWorks'],
  ['ギラギラ', 'https://youtu.be/ev43ppZzc10', 'てにをは'],
  ['レディメイド', 'https://youtu.be/zhfdCMzeEhE', 'すりぃ'],
  ['踊', 'https://youtu.be/BW00rnc7HlQ', 'DECO*27'],
  ['About me', 'https://youtu.be/vcM4zqNBBYo', '蝶々P'],
  ['フラジール', 'https://youtu.be/p1pXB3CQ6qA', 'ぬゆり'],
  ['八月のレイニー', 'https://www.nicovideo.jp/watch/sm33006914', 'はるまきごはん'],
  ['シネマ', 'https://youtu.be/PlnYAMu-dKo', 'Ayase'],
  ['独白', 'https://youtu.be/SHQoYL4EPFc', 'Misumi'],
  ['ドライドライフラワー', 'https://www.nicovideo.jp/watch/sm32650095', 'とあ'],
  ['無頼ック自己ライザー', 'https://youtu.be/vyoAgzjVo7c', 'じーざすP（WONDERFUL★OPPORTUNITY!）'],
  ['Q', 'https://www.nicovideo.jp/watch/sm19899222', '椎名もた'],
  ['フリージア', 'https://youtu.be/hPtGeZPr5e8', 'Uru'],
  ['Corruption', 'https://www.nicovideo.jp/watch/sm32929894', '大沼パセリ'],
  ['たばこ', 'https://www.nicovideo.jp/watch/sm32469294', 'コレサワ'],
  ['ハロ／ハワユ', 'https://www.nicovideo.jp/watch/sm11550418', 'ナノウ'],
  ['Calc.', 'https://www.nicovideo.jp/watch/sm12068288', 'ジミーサムP'],
  ['rain stops, good-bye', 'https://www.nicovideo.jp/watch/sm9725979', 'におP'],
  ['ヴィラン', 'https://youtu.be/5JDT6kuFU08', 'てにをは'],
  ['ロキ', 'https://youtu.be/93q625d_0lI', 'みきとP'],
  ['トラフィック・ジャム', 'https://youtu.be/Fq_-6yIWcbk', '煮ル果実'],
  ['雨き声残響', 'https://www.nicovideo.jp/watch/sm27251171', 'Orangestar'],
  ['雨とペトラ', 'https://youtu.be/W46C_CKQ8Z8', 'バルーン'],
  ['不埒な喝采', 'https://youtu.be/lfJCpDAhpho', 'ポリスピカデリー'],
  ['共感覚おばけ', 'https://www.nicovideo.jp/watch/sm26342925', 'ねこぼーろ'],
  ['とても素敵な六月でした', 'https://www.nicovideo.jp/watch/sm23772100', 'Eight'],
  ['レトロポリス', 'https://youtu.be/FEALZmOaNuk', 'R'],
  ['翡翠のまち', 'https://www.nicovideo.jp/watch/sm28614117', 'メル'],
  ['ルームNO4', 'https://youtu.be/bqgLOn4G7Fs', 'すりぃ'],
  ['ハッピーシンセサイザ', 'https://youtu.be/5d0HA90cddc', 'Easy Pop'],
  ['メルト', 'https://youtu.be/ZeoUKP7s_30', 'ryo'],
  ['深海少女', 'https://youtu.be/gej8xAAOVII', 'ゆうゆ'],
  ['小夜子', 'https://youtu.be/6HG7AMSdMXA', 'みきとP'],
  ['地球最後の告白を', 'https://www.nicovideo.jp/watch/sm18222339', 'kemu'],
  ['Just Be Friends', 'https://www.nicovideo.jp/watch/sm7567938', 'Dixie Flatline'],
  ['勿忘', 'https://youtu.be/zSoSzeEbl9M', 'atagi・PORIN'],
  ['夏に去りし君を想フ', 'https://youtu.be/rKGS41pwemQ', 'むぅ'],
  ['シューティングスター', 'https://youtu.be/iyeEYy31HHE', 'レフティーモンスターP'],
  ['ゆるふわ樹海ガール', 'https://youtu.be/w2oIqcoNorw', '石風呂'],
  ['The Beast.', 'https://www.nicovideo.jp/watch/sm12184698', 'スペクタクルP'],
  ['ヒトガタ', 'https://www.nicovideo.jp/watch/sm34831385', 'ゴゴ'],
  ['うたかたよいかないで', 'https://youtu.be/bJ2by9nbr10', 'ゴゴ'],
  ['スロウダウナー', 'https://www.nicovideo.jp/watch/sm33460133', 'ろくろ'],
  ['幸福な死を', 'https://www.nicovideo.jp/watch/sm17962076', 'きくお'],
  ['メンヘラじゃないもん', 'https://youtu.be/gtZSWIrDJu4', '勇魚'],
  ['チルドレンレコード', 'https://youtu.be/y40cBCJCTxw', 'じん'],
  ['流星のパルス', 'https://youtu.be/d5Bd7sEJjfg', '*Luna'],
  ['Glory Steady Go!', 'https://www.nicovideo.jp/watch/sm39268154', 'キノシタ'],
  ['シャンティ', 'https://www.nicovideo.jp/watch/sm39348341', 'wotaku'],
  ['FAKE', 'https://youtu.be/uJryb4NiBK4', 'ミスミ'],
  ['カナデトモスソラ', 'https://youtu.be/n092OHFEUjE', 'ササノマリイ'],
  ['ロータスイーター','https://www.nicovideo.jp/watch/sm38860352','青栗鼠'],
  ['レメディ・レディ','https://www.nicovideo.jp/watch/sm39071216','夏山よつぎ'],
  ['Beat Eater','https://www.nicovideo.jp/watch/sm39059625','ポリスピカデリー'],
  ['Color of Drops','https://www.nicovideo.jp/watch/sm39386288','40㍍P'],
  ['自傷無色','https://www.nicovideo.jp/watch/sm19877037','ねこぼーろ'],
  ['フロムトーキョー','https://www.nicovideo.jp/watch/sm39106936','夏代孝明'],
  ['フクロウ～フクロウが知らせる客が来たと～','https://youtu.be/FHwjgQrccqo','KOKIA'],
  ['炉心融解','https://youtu.be/VGnEIw86fsE','kuma（alfred）'],
  ['拝啓ドッペルゲンガー','https://youtu.be/ZiJySYUCpag','kemu'],
  ['右肩の蝶','https://youtu.be/wGqfk-sgJHI','水野悠良'],
  ['ロストワンの号哭','https://www.nicovideo.jp/watch/sm20270073','Neru'],
  ['テレキャスタービーボーイ(long ver.)', 'https://youtu.be/LDhfDXSe5Ek', 'すりぃ'],
  ['Happy Halloween','https://www.nicovideo.jp/watch/sm26909754','Junky'],
  ['ただ選択があった','https://www.nicovideo.jp/watch/sm39000251','フロクロ'],
  ['','',''],
];

