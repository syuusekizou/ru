const singableList = [,
  ['愛言葉Ⅲ', 'DECO*27', 'https://youtu.be/l7qNAj7jTwA', 'https://www.nicovideo.jp/watch/sm33965071'],
  ['愛して愛して愛して', 'きくお', 'https://youtu.be/1JBq-bXOPGs', 'https://www.nicovideo.jp/watch/sm25724827'],
  ['アイ情劣等生', 'かいりきベア', 'https://youtu.be/mkNg2Y9tZvc', 'https://www.nicovideo.jp/watch/sm37081741'],
  ['Ice breaker', 'ねじ式', 'https://www.nicovideo.jp/watch/sm35350218', 'https://www.nicovideo.jp/watch/sm35344830'],
  ['曖昧劣情lover', '電ポルP', 'https://youtu.be/FlzJ758W4qI', 'https://www.nicovideo.jp/watch/sm24237168'],
  ['青', '164', 'https://youtu.be/IpWuxL91fXE', 'https://www.nicovideo.jp/watch/sm19473241'],
  ['アスノヨゾラ哨戒班', 'Orangestar', 'https://youtu.be/iXxVzrtwA0I', 'https://www.nicovideo.jp/watch/sm24276234'],
  ['悪役にキスシーンを', '40㍍P', 'https://nico.ms/sm32237588', 'https://www.nicovideo.jp/watch/sm32231337'],
  ['アディショナルメモリー', 'じん（自然の敵P）', 'https://youtu.be/yUOfpKojofE', 'https://www.nicovideo.jp/watch/sm33854807'],
  ['あの夏が飽和する。', 'カンザキイオリ', 'https://youtu.be/PK_cymd9BbE', 'https://www.nicovideo.jp/watch/sm37539683'],
  ['雨音ノイズ', '40㍍P', 'https://nico.ms/sm25531102', 'https://www.nicovideo.jp/watch/sm25282736'],
  ['Alice in 冷凍庫', 'Orangestar', 'https://youtu.be/x9H5lVs2mKQ', 'https://www.nicovideo.jp/watch/sm28242091'],
  ['アルカリレットウセイ', 'かいりきベア', 'https://youtu.be/d5n9ci2o37Y', 'https://www.nicovideo.jp/watch/sm30105817'],
  ['アンドロイドガール', 'DECO*27', 'https://youtu.be/ZJssQVsWYtM', 'https://www.nicovideo.jp/watch/sm35070488'],
  ['アンノウン・マザーグース', 'wowaka（現実逃避P）', 'https://youtu.be/tb95fTqEKEI', 'https://www.nicovideo.jp/watch/sm31791630'],
  ['アンヘル', 'かいりきベア', 'https://nico.ms/sm34885467', 'https://www.nicovideo.jp/watch/sm34871494'],
  ['いいや', 'DECO*27', 'https://youtu.be/xXkhheM7-aQ', 'https://www.nicovideo.jp/watch/sm29378969'],
  ['一角獣', 'てにをは', 'https://youtu.be/vO2Ba75eW8c', 'https://www.nicovideo.jp/watch/sm36865070'],
  ['一騎当千', '梅とら', 'https://youtu.be/-MGyviyUuxE', 'https://www.nicovideo.jp/watch/sm25086693'],
  ['一触即発☆禅ガール', 'れるりり', 'https://youtu.be/5-mQTx4xCqc', 'https://www.nicovideo.jp/watch/sm21283394'],
  ['一心不乱', '梅とら', 'https://youtu.be/uSH6lerlcv4', 'https://www.nicovideo.jp/watch/sm17141425'],
  ['命に嫌われている。', 'カンザキイオリ', 'https://youtu.be/GxtccgEBRGw', 'https://www.nicovideo.jp/watch/sm31700140'],
  ['威風堂々', '梅とら', 'https://youtu.be/OlMlAzkb9uM', 'https://www.nicovideo.jp/watch/sm19233263'],
  ['ヴァンパイア', 'DECO*27', 'https://youtu.be/DHFecoFk_CE', 'https://www.nicovideo.jp/watch/sm38387707'],
  ['うそつき', 'めざめP', 'https://youtu.be/fgnl2TH4wKM', 'https://www.nicovideo.jp/watch/sm14703600'],
  ['うみたがり', 'maretu', 'https://youtu.be/4hQQY_AjHYM', 'https://www.nicovideo.jp/watch/sm26161338'],
  ['うみなおし', 'maretu', 'https://nico.ms/sm31814732', 'https://www.nicovideo.jp/watch/sm31808640'],
  ['ウミユリ海底譚', 'ナブナ', 'https://youtu.be/BCVVoW4R0Mg', 'https://www.nicovideo.jp/watch/sm22960446'],
  ['裏表ラバーズ', 'wowaka（現実逃避P）', 'https://youtu.be/_8J0eocFnhs', 'https://www.nicovideo.jp/watch/sm8082467'],
  ['え？あぁ、そう。', '蝶々P', 'https://youtu.be/0Hoj9QPQ8Tk', 'https://www.nicovideo.jp/watch/sm10122021'],
  ['エゴロック', 'すりぃ', 'https://nico.ms/sm33818206', 'https://www.nicovideo.jp/watch/sm33817538'],
  ['エンヴィーベイビー', 'Kanaria', 'https://youtu.be/TaWrny1yEfk', 'https://www.nicovideo.jp/watch/sm38268550'],
  ['エンヴィキャットウォーク', 'トーマ', 'https://youtu.be/ZBjjUOyy_XM', 'https://www.nicovideo.jp/watch/sm15956806'],
  ['エンジェルフィッシュ', 'Nem', 'https://youtu.be/26iOIFOTpsw', 'https://www.nicovideo.jp/watch/sm21436114'],
  ['エンゼルフィッシュ', 'パトリチェフ', 'https://youtu.be/XfjPX52OnuY', 'https://www.nicovideo.jp/watch/sm21436114'],
  ['エンドロール', '夏代孝明', 'https://nico.ms/sm33772451', 'https://www.nicovideo.jp/watch/sm33550626'],
  ['おこちゃま戦争', 'れをる', 'https://nico.ms/sm22368189', 'https://www.nicovideo.jp/watch/sm22349544'],
  ['おじゃま虫', 'DECO*27', 'https://nico.ms/sm28291987', 'https://www.nicovideo.jp/watch/sm22872605'],
  ['乙女解剖', 'DECO*27', 'https://youtu.be/1oYQ2jq_XG4', 'https://www.nicovideo.jp/watch/sm34470195'],
  ['囮と致死毒', 'CapsLack', 'https://nico.ms/sm30722935', 'https://www.nicovideo.jp/watch/sm30469353'],
  ['おねがいダーリン', 'ナナホシ管弦楽団', 'https://youtu.be/40WytpxEiIA', 'https://youtu.be/GnYHq6hY3Cc'],
  ['orange', '少年T', 'https://nico.ms/sm13931524', 'https://www.nicovideo.jp/watch/sm13926857'],
  ['快晴', 'Orangestar', 'https://youtu.be/TmSf0B1xh_Y', 'https://www.nicovideo.jp/watch/sm31840221'],
  ['限りなく灰色へ', 'すりぃ', 'https://youtu.be/T7CX48kOyyg', 'https://www.nicovideo.jp/watch/sm38335870'],
  ['カゲロウデイズ', 'じん（自然の敵P）', 'https://youtu.be/i_sgLCLURtE', 'https://www.nicovideo.jp/watch/sm15751190'],
  ['神のまにまに', 'れるりり', 'https://youtu.be/bygCBBc8s1g', 'https://www.nicovideo.jp/watch/sm22831329'],
  ['からくりピエロ', '40㍍P', 'https://youtu.be/3C4ZzWKNTWo', 'https://www.nicovideo.jp/watch/sm15022913'],
  ['ギガンティックO.T.N', 'れをる', 'https://youtu.be/TJoq_dERkV8', 'https://www.nicovideo.jp/watch/sm19532707'],
  ['疑心暗鬼', '梅とら', 'https://youtu.be/XtcWXrd26xY', 'https://www.nicovideo.jp/watch/sm23769673'],
  ['キュートなカノジョ', 'Syudou', 'https://youtu.be/3xSKpd3Y6B4', 'https://www.nicovideo.jp/watch/sm38300091'],
  ['狂喜乱舞', '梅とら', 'https://nico.ms/sm18704752', 'https://www.nicovideo.jp/watch/sm18615759'],
  ['キライ・キライ・ジガヒダイ！', '和田たけあき（くらげP）', 'https://nico.ms/sm29316808', 'https://www.nicovideo.jp/watch/sm29315733'],
  ['キルマー', '煮ル果実', 'https://youtu.be/kkU18U_Myl4', 'https://www.nicovideo.jp/watch/sm35980813'],
  ['KING', 'Kanaria', 'https://youtu.be/WbuROXgJusE', 'https://www.nicovideo.jp/watch/sm37287661'],
  ['Gimme×Gimme', 'q*Left', 'https://youtu.be/7PAR_c2Y_YU', 'https://www.nicovideo.jp/watch/sm35866152'],
  ['キレキャリオン', 'ポリスピカデリー', 'https://youtu.be/DxGfHwdHTu0', 'https://www.nicovideo.jp/watch/sm30228596'],
  ['クイーンオブハート', '奏音69', 'https://youtu.be/XXKwgVM67zY', 'https://www.nicovideo.jp/watch/sm24056707'],
  ['空奏列車', 'Orangestar', 'https://youtu.be/PC6h09WSZCI', 'https://www.nicovideo.jp/watch/sm25630992'],
  ['空中分解', 'すりぃ', 'https://youtu.be/D0jSP6zHUH8', 'https://www.nicovideo.jp/watch/sm32825157'],
  ['グッバイ宣言', 'Chinozo', 'https://youtu.be/xovMEjLx-Ig', 'https://www.nicovideo.jp/watch/sm36668789'],
  ['携帯恋話', 'まふまふ', 'https://youtu.be/UFhNxcOKog8', 'https://youtu.be/kNLyqES4fC8'],
  ['GETCHA!', '木のひこ・KIRA', 'https://nico.ms/sm37537472', 'https://www.nicovideo.jp/watch/sm37467451'],
  ['虎視眈々', '梅とら', 'https://youtu.be/HNE41WgVbFI', 'https://www.nicovideo.jp/watch/sm22110492'],
  ['心とかいう名前の未発見の臓器の機能についての考察', 'adstlaxy', 'https://youtu.be/su_dHzRnLN8', 'https://www.nicovideo.jp/watch/sm23514243'],
  ['心做し', '蝶々P', 'https://youtu.be/UCuHs-G31KE', 'https://www.nicovideo.jp/watch/sm22608740'],
  ['ゴーストルール', 'DECO*27', 'https://youtu.be/zU3QozXLqLY', 'https://www.nicovideo.jp/watch/sm27965309'],
  ['こちら、幸福安心委員会です。', '鳥居羊', 'https://youtu.be/WqzKusmYlW8', 'https://www.nicovideo.jp/watch/sm18100389'],
  ['孤独の宗教', 'syudou', 'https://youtu.be/6Y9r8x3oRsQ', 'https://www.nicovideo.jp/watch/sm36314325'],
  ['コールボーイ', 'syudou', 'https://youtu.be/gamfNwfabhQ', 'https://www.nicovideo.jp/watch/sm34963017'],
  ['再教育', 'Neru', 'https://youtu.be/aiHvQG_kF5I', 'https://www.nicovideo.jp/watch/sm18783356'],
  ['サリシノハラ', 'みきとP', 'https://youtu.be/ywoN-1t0mUI', 'https://www.nicovideo.jp/watch/sm19042393'],
  ['幸せになれる隠しコマンドがあるらしい', '鳥居羊', 'https://youtu.be/bvzC_mhONc8', 'https://www.nicovideo.jp/watch/sm21249768'],
  ['シエレトワール', '蝶々P', 'https://nico.ms/sm33072562', 'https://www.nicovideo.jp/watch/sm33063364'],
  ['失敗作少女', 'かいりきベア', 'https://youtu.be/peNXLQP9coA', 'https://www.nicovideo.jp/watch/sm26885931'],
  ['シニカルナイトプラン', 'Ayase', 'https://youtu.be/XOn0mgRQvxc', 'https://www.nicovideo.jp/watch/sm36563884'],
  ['紗痲', '煮ル果実', 'https://youtu.be/s8PPTi08pt8', 'https://www.nicovideo.jp/watch/sm33974546'],
  ['シャルル', 'バルーン', 'https://youtu.be/3tqikIDPGoM', 'https://www.nicovideo.jp/watch/sm29822304'],
  ['ジャンキーナイトタウンオーケストラ', 'すりぃ', 'https://youtu.be/MVYth1Sh_A4', 'https://www.nicovideo.jp/watch/sm36109943'],
  ['少女レイ', 'みきとP', 'https://youtu.be/26NJTEaalqI', 'https://www.nicovideo.jp/watch/sm33546451'],
  ['白ゆき', 'ナブナ', 'https://youtu.be/TCMtwGddCG0', 'https://www.nicovideo.jp/watch/sm28406516'],
  ['心拍数#0822', '蝶々P', 'https://youtu.be/uEo1qUvsKFQ', 'https://www.nicovideo.jp/watch/sm11834233'],
  ['スクランブル交際', 'DECO*27', 'https://youtu.be/ZojY1hqBCag', 'https://www.nicovideo.jp/watch/sm34812268'],
  ['スーサイドパレヱド', 'ユリイ・カノン', 'https://nico.ms/sm31600923', 'https://www.nicovideo.jp/watch/sm31592413'],
  ['聖槍爆裂ボーイ', 'れるりり', 'https://youtu.be/e4M6j8pHrGc', 'https://www.nicovideo.jp/watch/sm21702752'],
  ['セカイ', 'DECO*27', 'https://youtu.be/ljTLxCWf0uQ', 'https://youtu.be/9vyIPWBeRes'],
  ['それがあなたの幸せとしても', 'ヘブンズP', 'https://youtu.be/hKBJMIz4Y_8', 'https://www.nicovideo.jp/watch/sm20503793'],
  ['絶え間なく藍色', '獅子志司', 'https://youtu.be/Nyy4Tk0Ldzk', 'https://www.nicovideo.jp/watch/sm35312841'],
  ['ダチュラと林檎', 'ねじ式', 'https://youtu.be/66h_URIL3uA', 'https://www.nicovideo.jp/watch/sm24482819'],
  ['だめにんげんだ！', '薄塩指数', 'https://youtu.be/-hHRNrnRflQ', 'https://youtu.be/c-SOJsITLLs'],
  ['ダーリン', 'maretu', 'https://youtu.be/xZ1C_P7HivM', 'https://www.nicovideo.jp/watch/sm32012728'],
  ['ダーリンダンス', 'かいりきベア', 'https://youtu.be/FnuqapCZoDo', 'https://www.nicovideo.jp/watch/sm37441963'],
  ['だれかの心臓になれたなら', 'ユリイ・カノン', 'https://youtu.be/gjHsnCuA0f4', 'https://www.nicovideo.jp/watch/sm32727744'],
  ['だんだん早くなる', '40㍍P', 'https://youtu.be/Gm0G2YzKslo', 'https://www.nicovideo.jp/watch/sm25658559'],
  ['チェチェ・チェック・ワンツー！', '和田たけあき（くらげP）', 'https://nico.ms/sm29544225', 'https://www.nicovideo.jp/watch/sm29544351'],
  ['厨病激発ボーイ', 'れるりり', 'https://nico.ms/sm25263050', 'https://www.nicovideo.jp/watch/sm25223315'],
  ['チュルリラ・チュルリラ・ダッダッダ！', '和田たけあき（くらげP）', 'https://nico.ms/sm29372731', 'https://www.nicovideo.jp/watch/sm28276238'],
  ['ツギハギスタッカート', 'とあ', 'https://youtu.be/O43m7A9Qi7Y', 'https://www.nicovideo.jp/watch/sm23762151'],
  ['帝国少女', 'R Sound Design', 'https://youtu.be/FqTylVrrg-0', 'https://www.nicovideo.jp/watch/sm30788596'],
  ['DAYBREAK FRONTLINE', 'Orangestar', 'https://youtu.be/_HppqK_mJJg', 'https://www.nicovideo.jp/watch/sm30156654'],
  ['デリヘル呼んだら君が来た', 'ナナホシ管弦楽団', 'https://youtu.be/DMVlEcjq0Wk', 'https://www.nicovideo.jp/watch/sm23743672'],
  ['Tell Your World', 'kz', 'https://youtu.be/yplPGTgyaqs', 'https://youtu.be/PqJNc9KVIZE'],
  ['テレキャスタービーボーイ', 'すりぃ', 'https://youtu.be/Bw-C7HSGrdY', 'https://www.nicovideo.jp/watch/sm34963198'],
  ['東京サマーセッション', 'ゴム、チョリスP', 'https://youtu.be/tVpKtATndTg', 'https://www.nicovideo.jp/watch/sm26776624'],
  ['東京テディベア', 'Neru', 'https://youtu.be/6Im6rZVV300', 'https://www.nicovideo.jp/watch/sm15308214'],
  ['とても素敵な六月でした', 'Eight', 'https://youtu.be/IidXMG262Jc', 'https://www.nicovideo.jp/watch/sm23770496'],
  ['ドナーソング', 'れるりり', 'https://youtu.be/j-FqKaLMk90', 'https://www.nicovideo.jp/watch/sm20584835'],
  ['ドレミファロンド', '40㍍P', 'https://youtu.be/CmG6durR13c', 'https://www.nicovideo.jp/watch/sm16719809'],
  ['drop pop candy', 'れをる', 'https://youtu.be/o4YMgovQz44', 'https://www.nicovideo.jp/watch/sm24029703'],
  ['七草夢物語', 'buzzG', 'https://nico.ms/sm34552182', 'https://www.nicovideo.jp/watch/sm34546554'],
  ['needle', 'DECO*27', 'https://youtu.be/nxMdvGS6j0g', 'https://youtu.be/buoYwfZG4vQ'],
  ['脳漿炸裂ガール', 'れるりり', 'https://youtu.be/HC5gN4gfMbo', 'https://www.nicovideo.jp/watch/sm19133907'],
  ['ネクロの花嫁', '奏音69', 'https://nico.ms/sm28019990', 'https://www.nicovideo.jp/watch/sm27700467'],
  ['ネロイズム', 'かいりきベア', 'https://youtu.be/m-4sY5EmTqc', 'https://www.nicovideo.jp/watch/sm37467621'],
  ['脳内革命ガール', 'maretu', 'https://youtu.be/iqMBTt112f0', 'https://www.nicovideo.jp/watch/sm21870906'],
  ['野狗子', 'Peg', 'https://nico.ms/sm35040830', 'https://www.nicovideo.jp/watch/sm34435128'],
  ['ハイスペックニート', '40㍍P', 'https://nico.ms/sm30383694', 'https://www.nicovideo.jp/watch/sm30376008'],
  ['パズルガール', 'とあ', 'https://nico.ms/sm34240573', 'https://www.nicovideo.jp/watch/sm25872280'],
  ['罰ゲーム', 'まふまふ', 'https://youtu.be/X5zTqWIzGqQ', 'https://youtu.be/Bje4EHg9TGg'],
  ['花降らし', 'ナブナ', 'https://youtu.be/cjmuA_CgruU', 'https://www.nicovideo.jp/watch/sm28797238'],
  ['被害妄想携帯女子(笑)', 'luz', 'https://youtu.be/zQoO-jMUH3I', 'https://www.nicovideo.jp/watch/sm23229863'],
  ['ビーストインザビューティー', '奏音69', 'https://youtu.be/Ymq7s8z4DaA', 'https://www.nicovideo.jp/watch/sm28945325'],
  ['ビースト・ダンス', '和田たけあき（くらげP）', 'https://youtu.be/lcYz_VZDGSU', 'https://www.nicovideo.jp/watch/sm30822018'],
  ['ビタースウィート', 'yuxuki waga', 'https://youtu.be/xvcrnmLfwmg', 'https://www.nicovideo.jp/watch/sm34288692'],
  ['ビターチョコデコレーション', 'syudou', 'https://youtu.be/4MRBYtyt8nU', 'https://www.nicovideo.jp/watch/sm34425299'],
  ['ビーバー', 'すりぃ', 'https://youtu.be/HCUO8_A2Leg', 'https://www.nicovideo.jp/watch/sm36943298'],
  ['ヒバナ', 'DECO*27', 'https://youtu.be/zo2jfqk9eNg', 'https://www.nicovideo.jp/watch/sm31685272'],
  ['ヒビカセ', 'れをる', 'https://youtu.be/_tTMVDyHdms', 'https://www.nicovideo.jp/watch/sm24536934'],
  ['表裏一体', 'すりぃ', 'https://youtu.be/-XNN2EX2ZEU', 'https://www.nicovideo.jp/watch/sm33149670'],
  ['＋♂', 'れをる', 'https://youtu.be/uYSMhUXFaVk', 'https://www.nicovideo.jp/watch/sm23134050'],
  ['ベノム', 'かいりきベア', 'https://youtu.be/duvJFyF3fGI', 'https://www.nicovideo.jp/watch/sm33624822'],
  ['Henceforth', 'Orangestar', 'https://youtu.be/-Ks6ICi4mB0', 'https://www.nicovideo.jp/watch/sm36898361'],
  ['Forward', 'R Sound Design', 'https://nico.ms/sm37957286', 'https://www.nicovideo.jp/watch/sm37937383'],
  ['flos', 'R Sound Design', 'https://nico.ms/sm34210688', 'https://www.nicovideo.jp/watch/sm32852412'],
  ['ボッカデラベリタ', '柊キライ', 'https://youtu.be/_V3sb8tG3xI', 'https://www.nicovideo.jp/watch/sm36731216'],
  ['ホワイトハッピー', 'maretu', 'https://youtu.be/kcEnFyF7Z2s', 'https://www.nicovideo.jp/watch/sm31485619'],
  ['ホワイトリリー', 'ケイエヌ', 'https://nico.ms/sm30064705', 'https://youtu.be/sKs5gJaPYdk'],
  ['マカロン', 'Atols', 'https://youtu.be/nXQ__WrZ9kQ', 'https://www.nicovideo.jp/watch/sm18579564'],
  ['magnet', '流星P', 'https://youtu.be/foH4kE1pV7M', 'https://www.nicovideo.jp/watch/sm6909505'],
  ['Masked bitcH', 'q*Left', 'https://nico.ms/sm22962396', 'https://www.nicovideo.jp/watch/sm18684672'],
  ['マオ', 'かいりきベア・まふまふ', 'https://youtu.be/HDOG8iaxf1s', 'https://youtu.be/mwnu2aP0Q8g'],
  ['回る空うさぎ', 'Orangestar', 'https://youtu.be/ypDwl9jXSNc', 'https://www.nicovideo.jp/watch/sm30038738'],
  ['ミュージックミュージック', 'とあ', 'https://youtu.be/P0Y5jvjLI9Q', 'https://www.nicovideo.jp/watch/sm24333080'],
  ['MIRA', 'Kanaria', 'https://youtu.be/BjIembzFJZ0', 'https://youtu.be/QF-PvlyheVc'],
  ['ミルククラウン・オン・ソーネチカ', 'ユジー', 'https://youtu.be/5KjRzs5grO8', 'https://www.nicovideo.jp/watch/sm23404002'],
  ['妄想感傷代償連盟', 'DECO*27', 'https://youtu.be/3imVqRE0XxI', 'https://www.nicovideo.jp/watch/sm30067009'],
  ['妄想疾患■ガール', 'れるりり', 'https://youtu.be/SN6Fiaw6VLs', 'https://www.nicovideo.jp/watch/sm23721916'],
  ['ヤミタイガール', 'れるりり', 'https://youtu.be/Mv09KYTTbK0', 'https://youtu.be/Scpu6fB4waA'],
  ['幽霊東京', 'Ayase', 'https://youtu.be/cVAZVKn9B8I', 'https://www.nicovideo.jp/watch/sm36036629'],
  ['夜明けと蛍', 'ナブナ', 'https://youtu.be/wmh8bKL-rP8', 'https://www.nicovideo.jp/watch/sm24892241'],
  ['よくばり', 'Ayase', 'https://youtu.be/_9QgHk1SnR4', 'https://www.nicovideo.jp/watch/sm37073901'],
  ['吉原ラメント', '亜沙', 'https://youtu.be/1jXa7BO7D_4', 'https://www.nicovideo.jp/watch/sm18395392'],
  ['夜咄ディセイブ', 'じん（自然の敵P）', 'https://youtu.be/ocMNgg5_X6I', 'https://www.nicovideo.jp/watch/sm20116702'],
  ['夜もすがら君想ふ', '西沢さんP', 'https://youtu.be/Ov6vs7dUebU', 'https://www.nicovideo.jp/watch/sm23189603'],
  ['ライアーダンス', 'DECO*27', 'https://youtu.be/w5QOERIoqVg', 'https://www.nicovideo.jp/watch/sm28929186'],
  ['ラストリゾート', 'Ayase', 'https://youtu.be/52KeVuMvhPA', 'https://www.nicovideo.jp/watch/sm35051597'],
  ['ラブカ？', '柊キライ', 'https://youtu.be/RPgo-JCHwQU', 'https://www.nicovideo.jp/watch/sm37928776'],
  ['ラプンツェル', 'ナブナ', 'https://youtu.be/ALDbKClTshE', 'https://www.nicovideo.jp/watch/sm29194168'],
  ['LUVORATORRRRRY!', 'れをる', 'https://youtu.be/_EnWMcScJMo', 'https://www.nicovideo.jp/watch/sm22942867'],
  ['乱躁滅裂ガール', 'れるりり', 'https://youtu.be/dQZmaZIgNfw', 'https://www.nicovideo.jp/watch/sm29782999'],
  ['リバーシブル・キャンペーン', 'DECO*27', 'https://youtu.be/iegSyiVEyoE', 'https://www.nicovideo.jp/watch/sm29654974'],
  ['ルマ', 'かいりきベア', 'https://youtu.be/vAdGhWQQsRA', 'https://www.nicovideo.jp/watch/sm35992766'],
  ['レコード・レド', 'shr', 'https://youtu.be/oKBFBehwWFA', 'https://www.nicovideo.jp/watch/sm17598383'],
  ['劣等上等', 'れをる', 'https://youtu.be/vPeJ6lDBL-I', 'https://www.nicovideo.jp/watch/sm33510542'],
  ['Ready Steady', 'q*Left', 'https://youtu.be/xP_kMvCCLeo', 'https://www.nicovideo.jp/watch/sm37601066'],
  ['レディーレ', 'バルーン', 'https://youtu.be/PV85XgCanr4', 'https://www.nicovideo.jp/watch/sm31394907'],
  ['レミングミング', 'かいりきベア', 'https://youtu.be/iCy-nrxOW8g', 'https://www.nicovideo.jp/watch/sm32195871'],
  ['恋愛裁判', '40㍍P', 'https://youtu.be/UiT7I0CY2yQ', 'https://www.nicovideo.jp/watch/sm23750267'],
  ['ロジカ', 'かいりきベア', 'https://youtu.be/DJpzJBEKbgM', 'https://www.nicovideo.jp/watch/sm34583356'],
  ['ロミオとシンデレラ', 'doriko', 'https://youtu.be/o_cUpnkmhDs', 'https://www.nicovideo.jp/watch/sm6666016'],
  ['ローリンガール', 'wowaka（現実逃避P）', 'https://youtu.be/a6bXE1C5NmU', 'https://www.nicovideo.jp/watch/sm9714351'],
  ['ワールズエンド・ダンスホール', 'wowaka（現実逃避P）', 'https://youtu.be/mtM06xMEswU', 'https://youtu.be/ZB75e7vzX0I'],
  ['ワールド・ランプシェード', 'buzzG', 'https://youtu.be/tP8O4dJAO_w', 'https://www.nicovideo.jp/watch/sm21544661'],
  ['ワンルーム・オール・ザット・ジャズ', 'DATEKEN', 'https://youtu.be/sFFCpvV1Tec', 'https://www.nicovideo.jp/watch/sm16875924'],
  ['可愛くなりたい', 'HoneyWorks', 'https://youtu.be/P1AZNHz1TVI', 'https://youtu.be/AkRPlTrf3d8'],
  ['うまぴょい伝説', 'Cygames(本田晃弘)', 'https://youtu.be/Sb3PA_j5rqM', 'https://youtu.be/gNp4VNr44hg'],
  ['いかないで', '想太', 'https://youtu.be/oPhNFeIyOVA', 'https://www.nicovideo.jp/watch/sm22001720'],
  ['アサガオの散る頃に', 'じっぷす', 'https://youtu.be/E9d00eQwtNY', 'https://www.nicovideo.jp/watch/sm25793676'],
  ['くらべられっ子', 'ツユ', 'https://youtu.be/iZ1g_JAtMqI', 'https://youtu.be/olWvy0PiLfA'],
  ['はきだす', 'mao sasagawa', 'https://nico.ms/sm32247746', 'https://www.nicovideo.jp/watch/sm32247714'],
  ['クラスで一番人気のあの子は校舎裏で人を殺した', 'mao sasagawa', 'https://nico.ms/sm33400729', 'https://www.nicovideo.jp/watch/sm33343383'],
  ['ファンサ', 'HoneyWorks', 'https://youtu.be/F0rTxW5K0dk', 'https://youtu.be/lzyDD8bMDKs'],
  ['トオトロジイダウトフル', 'ツミキ', 'https://youtu.be/ooSGszgzsgY', 'https://www.nicovideo.jp/watch/sm37967896'],
  ['月曜日の憂鬱', 'HoneyWorks', 'https://youtu.be/NzgPNELn0Bo', 'https://youtu.be/9BoFxNJ76QQ'],
  ['食虫植物', '笹川真生', 'https://youtu.be/RSys9VWVgHs', 'https://youtu.be/F9eCSWEJYjk'],
  ['ピースサイン', '米津玄師', 'https://nico.ms/sm31484856', 'https://youtu.be/9aJVr5tTTWk'],
  ['マーシャル・マキシマイザー', '柊マグネタイト', 'https://youtu.be/PSR2O4ZV0x4', 'https://youtu.be/jMKPYg0uhCI'],
  ['春を告げる', 'yama', 'https://nico.ms/sm38550616', 'https://youtu.be/DC6JppqHkaM'],
  ['ときめきブローカー', 'ナナホシ管弦楽団', 'https://youtu.be/IhPzHPFaDbE', 'https://youtu.be/paoXdQREpYM'],
  ['ヨワネハキ', 'MAISONdes', 'https://youtu.be/lLcMHWmI0Wg', 'https://youtu.be/npP2NNUzkLo'],
  ['終焉逃避行', '柊マグネタイト', 'https://youtu.be/-kuXx7ZdG7E', 'https://www.nicovideo.jp/watch/sm37946837'],
  ['うっせぇわ', 'syudou', 'https://youtu.be/rlcNOYcQqZU', 'https://youtu.be/Qp3b-RXtz4w'],
  ['MAFIA', 'wotaku', 'https://youtu.be/_8xGl7jsTB0', 'https://youtu.be/43gCuHxQDy0'],
  ['DOGMA', 'wotaku', 'https://youtu.be/88hJ8VVilSE', 'https://youtu.be/JAdcCzeD0qk'],
  ['ねぇ、どろどろさん', 'YASUHIRO(康寛)', 'https://youtu.be/cjr17Cgta34', 'https://www.nicovideo.jp/watch/sm34145146'],
  ['廃墟の国のアリス', 'まふまふ', 'https://nico.ms/sm33732294', 'https://www.nicovideo.jp/watch/sm33715008'],
  ['四季折々に揺蕩いて', 'まふまふ', 'https://nico.ms/sm31685860', 'https://youtu.be/M7sr5zv1EkI'],
  ['EYE', 'Kanaria', 'https://youtu.be/A31heap80Fc', 'https://www.nicovideo.jp/watch/sm39083403'],
  ['小説 夏と罰(上)', '傘村トータ', 'https://youtu.be/AiTIlBOX4kk', 'https://www.nicovideo.jp/watch/sm36076105'],
  ['アイディスマイル', 'とあ', 'https://youtu.be/yu72RgEINiY', 'https://www.nicovideo.jp/watch/sm38667465'],
  ['トンデモワンダーズ ', 'sasakure.UK', 'https://youtu.be/m9aNbz3z6iw', 'https://www.nicovideo.jp/watch/sm38907008'],
  ['ワーワーワールド', 'ギガP, Mitchie M', 'https://youtu.be/yRk6wu1rcro', 'https://www.nicovideo.jp/watch/sm37301259'],
  ['ポジティブ☆ダンスタイム', 'キノシタ', 'https://youtu.be/9je9rM5mAZc', 'https://www.nicovideo.jp/watch/sm32087162'],
  ['ビバハピ', 'Mitchie M', 'https://nico.ms/sm21444890', 'https://www.nicovideo.jp/watch/sm21443197'],
  ['カワキヲアメク', '美波', 'https://youtu.be/3YA6A192B7I', 'https://youtu.be/0YF8vecQWYs'],
  ['ハツコイソウ', 'FLG4', 'https://youtu.be/7Ozdzr9O514', 'https://www.nicovideo.jp/watch/sm38622590'],
  ['CULT', 'Misumi', 'https://nico.ms/sm36373587', 'https://youtu.be/_Q6piObqKX4'],
  ['Mad Hatter', 'Misumi', 'https://youtu.be/6lrmofOR9Y4', 'https://youtu.be/yWaGh158OKM'],
  ['ゴシップ', 'OSTER project', 'https://nico.ms/sm15777561', 'https://www.nicovideo.jp/watch/sm15775211'],
  ['フロイデ', 'mao sasagawa', 'https://nico.ms/sm32446284', 'https://www.nicovideo.jp/watch/sm32292369'],
  ['ジャックポットサッドガール', 'syudou', 'https://youtu.be/qyNPDMzCGgE', 'https://www.nicovideo.jp/watch/sm37716686'],
  ['ラグトレイン', '稲葉曇', 'https://youtu.be/gUmkV969pcY', 'https://www.nicovideo.jp/watch/sm37198038'],
  ['他人事の音がする', 'あめのむらくもP', 'https://youtu.be/4Ep73kE_JUE', 'https://www.nicovideo.jp/watch/sm32537934'],
  ['アンコール', 'Ayase', 'https://youtu.be/taYne9yDtY8', 'https://youtu.be/vcGbefQBvJ4'],
  ['夜迷事', 'ive', 'https://nico.ms/sm37091126', 'https://www.nicovideo.jp/watch/sm37071565'],
  ['ピエロ', 'KEI', 'https://nico.ms/sm11224129', 'https://www.nicovideo.jp/watch/sm11224129'],
  ['glow', 'keeno', 'https://youtu.be/CwI2lOJZ6yE', 'https://www.nicovideo.jp/watch/sm11209477'],
  ['贖罪', '傘村トータ', 'https://youtu.be/O1q0YCrT1Lw', 'https://www.nicovideo.jp/watch/sm33578424'],
  ['リコレクションエンドロウル', 'ツミキ', 'https://youtu.be/sR6AQNxnlko', 'https://www.nicovideo.jp/watch/sm33477835'],
  ['プロトディスコ', 'ぬゆり', 'https://youtu.be/LvbECl8eLK0', 'https://www.nicovideo.jp/watch/sm32234716'],
  ['カプリスキャスト', 'ユギカ', 'https://youtu.be/a-Znb2iZfk0', 'https://www.nicovideo.jp/watch/sm38416345'],
  ['『んっあっあっ。』', 'SLAVE.V-V-R', 'https://youtu.be/REarDPUVR7c', 'https://www.nicovideo.jp/watch/sm38495939'],
  ['カレシのジュード', 'syudou', 'https://youtu.be/B62XglUlGYQ', 'https://www.nicovideo.jp/watch/sm39171468'],
  ['ノンブレス・オブリージュ', 'ピノキオピー', 'https://youtu.be/9-3XNtnHj04', 'https://www.nicovideo.jp/watch/sm38824626'],
  ['フォニイ', 'ツミキ', 'https://youtu.be/PWwz6OYAyLU', 'https://youtu.be/9QLT1Aw_45s'],
  ['トウキョウト・ロック・シティ', 'はいのことん', 'https://nico.ms/sm17043473', 'https://www.nicovideo.jp/watch/sm7454296'],
  ['結い傷な', '一二三', 'https://youtu.be/h25aowxTsAA', 'https://youtu.be/epGtVG2-SAo'],
  ['メンタルチェンソー', 'かいりきベア', 'https://youtu.be/5-pWpR7DZYQ', 'https://youtu.be/HbSMzi9niVg'],
  ['ハルノ寂寞', '稲葉曇', 'https://youtu.be/GOvKn-TEolE', 'https://youtu.be/mFih47l1pVI'],
  ['Booo!', 'TOKOTOKO(西沢さんP)', 'https://youtu.be/hbclualhtQI', 'https://www.nicovideo.jp/watch/sm34067662'],
  ['ロストアンブレラ', '稲葉曇', 'https://youtu.be/41oNhyOdXGI', 'https://www.nicovideo.jp/watch/sm32801250'],
  ['誇り高きアイドル', 'HoneyWorks', 'https://youtu.be/pHxnSWaUq_M', 'https://youtu.be/yMABvUMzBEQ'],
  ['群青', 'Ayase', 'https://youtu.be/KwtvntYaAbw', 'https://youtu.be/Y4nEEZwckuU'],
  ['六兆年と一夜物語', 'kemu', 'https://youtu.be/4rHYgcbpjyA', 'https://www.nicovideo.jp/watch/sm17520775'],
  ['怪物', 'Ayase', 'https://youtu.be/zH4xwMldUIg', 'https://youtu.be/dy90tA3TT1c'],
  ['透明中毒', 'ive', 'https://nico.ms/sm38037410', 'https://www.nicovideo.jp/watch/sm36757329'],
  ['バッド・ダンス・ホール', 'ぱなまん', 'https://youtu.be/UlSvT6bkTE0', 'https://www.nicovideo.jp/watch/sm27966677'],
  ['ストリーミングハート', 'DECO*27', 'https://nico.ms/sm23159520', 'https://www.nicovideo.jp/watch/sm23144598'],
  ['君の知らない物語', 'ryo', 'https://nico.ms/sm11612412', 'https://youtu.be/t8vB1Xfj00E'],
  ['このピアノでお前を8759632145回ぶん殴る', 'SLAVE.V-V-R', 'https://youtu.be/-tSCg563yIQ', 'https://www.nicovideo.jp/watch/sm28714955'],
  ['オノマトペテン師', 'てにをは', 'https://youtu.be/mhLZ3vzcXns', 'https://www.nicovideo.jp/watch/sm32787490'],
  ['恋愛サーキュレーション', 'meg rock', 'https://nico.ms/sm9512470', 'https://youtu.be/bMuIoZVbDMM'],
  ['ヒロイン育成計画', 'HoneyWorks', 'https://nico.ms/sm36228027', 'https://youtu.be/rpIsjz-oLOQ'],
  ['私、アイドル宣言', 'CHiCO', 'https://nico.ms/sm32827109', 'https://youtu.be/gfFySpNE2r0'],
  ['おねがいダーリン', 'ナナホシ管弦楽団', 'https://youtu.be/9NvyGbIBAgM', 'https://youtu.be/GnYHq6hY3Cc'],
  ['またねがあれば', 'ちんまりP', 'https://www.nicovideo.jp/watch/sm30524050', 'https://www.nicovideo.jp/watch/sm30519579'],
  ['シビュラ', 'wotaku', 'https://www.nicovideo.jp/watch/sm35535305', 'https://www.nicovideo.jp/watch/sm35441133'],
  ['p.h.', 'トキチアキ', 'https://youtu.be/1Dy07Nyudeg', 'https://www.nicovideo.jp/watch/sm36943926'],
  ['蜜月アン・ドゥ・トロワ', 'DATEKEN', 'https://www.nicovideo.jp/watch/sm20129186', 'https://www.nicovideo.jp/watch/sm20096569'],
  ['シンデレラ', 'DECO*27', 'https://youtu.be/_lJNSb-YMOk', 'https://www.nicovideo.jp/watch/sm39053581'],
  ['撥条少女時計', '葉月ゆら', 'https://youtu.be/o85vlyvcJkc', 'https://www.nicovideo.jp/watch/sm34294264'],
  ['8.32', '*Luna', 'https://youtu.be/xDQuwX9TFf4', 'https://www.nicovideo.jp/watch/sm33485782'],
  ['ASTER', 'はるまきごはん', 'https://www.nicovideo.jp/watch/sm33652185', 'https://youtu.be/Tq49NR_HzfY'],
  ['カトラリー', '有機酸', 'https://youtu.be/lKX1yqSwfPM', 'https://www.nicovideo.jp/watch/sm32479585'],
  ['蜜ノ味', 'syudou', 'https://youtu.be/JMAq_NYml3s', 'https://youtu.be/OtkyRFUEWas'],
  ['きらり', 'ふわりP', 'https://www.nicovideo.jp/watch/sm17978148', 'https://www.nicovideo.jp/watch/sm17963335'],
  ['思春期少年少女', '砂粒', 'https://youtu.be/7nl3Ev65sYI', 'https://www.nicovideo.jp/watch/sm25999398'],
  ['シル・ヴ・プレジデント', 'ナナホシ管弦楽団', 'https://youtu.be/l2l8bVcCqA8', 'https://youtu.be/3V9952osjnc'],
  ['小悪魔だってかまわない！', 'HoneyWorks', 'https://www.nicovideo.jp/watch/sm38912725', 'https://youtu.be/Vsj8tzO1ONk'],
  ['ギラギラ', 'てにをは', 'https://youtu.be/ev43ppZzc10', 'https://youtu.be/sOiMD45QGLs'],
  ['レディメイド', 'すりぃ', 'https://youtu.be/zhfdCMzeEhE', 'https://youtu.be/jg09lNupc1s'],
  ['踊', 'DECO*27', 'https://youtu.be/BW00rnc7HlQ', 'https://youtu.be/YnSW8ian29w'],
  ['About me', '蝶々P', 'https://youtu.be/vcM4zqNBBYo', 'https://www.nicovideo.jp/watch/sm22820339'],
  ['フラジール', 'ぬゆり', 'https://youtu.be/p1pXB3CQ6qA', 'https://www.nicovideo.jp/watch/sm29610327'],
  ['八月のレイニー', 'はるまきごはん', 'https://www.nicovideo.jp/watch/sm33006914', 'https://www.nicovideo.jp/watch/sm26930842'],
  ['シネマ', 'Ayase', 'https://youtu.be/PlnYAMu-dKo', 'https://www.nicovideo.jp/watch/sm38708262'],
  ['独白', 'Misumi', 'https://youtu.be/SHQoYL4EPFc', 'https://youtu.be/LdTuzZUHVv8'],
  ['ドライドライフラワー', 'とあ', 'https://www.nicovideo.jp/watch/sm32650095', 'https://www.nicovideo.jp/watch/sm32648371'],
  ['無頼ック自己ライザー', 'じーざすP（WONDERFUL★OPPORTUNITY!）', 'https://youtu.be/vyoAgzjVo7c', 'https://www.nicovideo.jp/watch/sm26849738'],
  ['Q', '椎名もた', 'https://www.nicovideo.jp/watch/sm19899222', 'https://www.nicovideo.jp/watch/sm19898621'],
  ['フリージア', 'Uru', 'https://youtu.be/hPtGeZPr5e8', 'https://youtu.be/olWPDel6ti4'],
  ['Corruption', '大沼パセリ', 'https://www.nicovideo.jp/watch/sm32929894', 'https://youtu.be/t0B6QJFJ0LM'],
  ['たばこ', 'コレサワ', 'https://www.nicovideo.jp/watch/sm32469294', 'https://youtu.be/7B_PVsPvcg0'],
  ['ハロ／ハワユ', 'ナノウ', 'https://www.nicovideo.jp/watch/sm11550418', 'https://www.nicovideo.jp/watch/sm11448603'],
  ['Calc.', 'ジミーサムP', 'https://www.nicovideo.jp/watch/sm12068288', 'https://www.nicovideo.jp/watch/sm12050471'],
  ['rain stops, good-bye', 'におP', 'https://www.nicovideo.jp/watch/sm9725979', 'https://www.nicovideo.jp/watch/sm3075492'],
  ['ヴィラン', 'てにをは', 'https://youtu.be/5JDT6kuFU08', 'https://www.nicovideo.jp/watch/sm36332327'],
  ['ロキ', 'みきとP', 'https://youtu.be/93q625d_0lI', 'https://www.nicovideo.jp/watch/sm32798041'],
  ['トラフィック・ジャム', '煮ル果実', 'https://youtu.be/Fq_-6yIWcbk', 'https://www.nicovideo.jp/watch/sm35586514'],
  ['雨き声残響', 'Orangestar', 'https://www.nicovideo.jp/watch/sm27251171', 'https://www.nicovideo.jp/watch/sm24626484'],
  ['雨とペトラ', 'バルーン', 'https://youtu.be/W46C_CKQ8Z8', 'https://www.nicovideo.jp/watch/sm30789907'],
  ['不埒な喝采', 'ポリスピカデリー', 'https://youtu.be/lfJCpDAhpho', 'https://youtu.be/m10mNB8L9Kw'],
  ['共感覚おばけ', 'ねこぼーろ', 'https://www.nicovideo.jp/watch/sm26342925', 'https://www.nicovideo.jp/watch/sm26261134'],
  ['レトロポリス', 'R Sound Design', 'https://youtu.be/FEALZmOaNuk', 'https://youtu.be/YGlAWg1YmQ8'],
  ['翡翠のまち', 'メル', 'https://www.nicovideo.jp/watch/sm28614117', 'https://www.nicovideo.jp/watch/sm31469705'],
  ['ルームNO4', 'すりぃ', 'https://youtu.be/bqgLOn4G7Fs', 'https://youtu.be/u8JQL5D4Y9E'],
  ['ハッピーシンセサイザ', 'Easy Pop', 'https://youtu.be/5d0HA90cddc', 'https://www.nicovideo.jp/watch/sm12825985'],
  ['メルト', 'ryo', 'https://youtu.be/ZeoUKP7s_30', 'https://www.nicovideo.jp/watch/sm1715919'],
  ['深海少女', 'ゆうゆ', 'https://youtu.be/gej8xAAOVII', 'https://www.nicovideo.jp/watch/sm11956364'],
  ['小夜子', 'みきとP', 'https://youtu.be/6HG7AMSdMXA', 'https://www.nicovideo.jp/watch/sm15251289'],
  ['地球最後の告白を', 'kemu', 'https://www.nicovideo.jp/watch/sm18222339', 'https://www.nicovideo.jp/watch/sm18198019'],
  ['Just Be Friends', 'Dixie Flatline', 'https://www.nicovideo.jp/watch/sm7567938', 'https://www.nicovideo.jp/watch/sm7528841'],
  ['勿忘', 'atagi・PORIN', 'https://youtu.be/zSoSzeEbl9M', 'https://www.nicovideo.jp/watch/sm29135577'],
  ['夏に去りし君を想フ', 'むぅ', 'https://youtu.be/rKGS41pwemQ', 'https://youtu.be/yFypqetFyjU'],
  ['シューティングスター', 'レフティーモンスターP', 'https://youtu.be/iyeEYy31HHE', 'https://www.nicovideo.jp/watch/sm26603499'],
  ['ゆるふわ樹海ガール', '石風呂', 'https://youtu.be/w2oIqcoNorw', 'https://www.nicovideo.jp/watch/sm15880465'],
  ['The Beast.', 'スペクタクルP', 'https://www.nicovideo.jp/watch/sm12184698', 'https://youtu.be/CoL42lnNtp8'],
  ['ヒトガタ', 'ゴゴ', 'https://www.nicovideo.jp/watch/sm34831385', 'https://youtu.be/J8PUUv4LFkQ'],
  ['うたかたよいかないで', 'ゴゴ', 'https://youtu.be/bJ2by9nbr10', 'https://youtu.be/rzd5xEPn4-U'],
  ['スロウダウナー', 'ろくろ', 'https://www.nicovideo.jp/watch/sm33460133', 'https://www.nicovideo.jp/watch/sm33454146'],
  ['幸福な死を', 'きくお', 'https://www.nicovideo.jp/watch/sm17962076', 'https://www.nicovideo.jp/watch/sm17961470'],
  ['メンヘラじゃないもん', '勇魚', 'https://youtu.be/gtZSWIrDJu4', 'https://www.nicovideo.jp/watch/sm37983849'],
  ['チルドレンレコード', 'じん', 'https://youtu.be/y40cBCJCTxw', 'https://www.nicovideo.jp/watch/sm18406343'],
  ['流星のパルス', '*Luna', 'https://youtu.be/d5Bd7sEJjfg', 'https://www.nicovideo.jp/watch/sm39362280'],
  ['Glory Steady Go!', 'キノシタ', 'https://www.nicovideo.jp/watch/sm39268154', 'https://www.nicovideo.jp/watch/sm39258986'],
  ['シャンティ', 'wotaku', 'https://www.nicovideo.jp/watch/sm39348341', 'https://www.nicovideo.jp/watch/sm39336579'],
  ['FAKE', 'Misumi', 'https://youtu.be/uJryb4NiBK4', 'https://www.nicovideo.jp/watch/sm34063714'],
  ['カナデトモスソラ', 'ササノマリイ', 'https://youtu.be/n092OHFEUjE', 'https://youtu.be/GTlQhMRHXIg'],
  ['ロータスイーター', '青栗鼠', 'https://www.nicovideo.jp/watch/sm38860352', 'https://www.nicovideo.jp/watch/sm38625135'],
  ['レメディ・レディ', '夏山よつぎ', 'https://www.nicovideo.jp/watch/sm39071216', 'https://youtu.be/9-GY-PU0IJk'],
  ['Beat Eater', 'ポリスピカデリー', 'https://www.nicovideo.jp/watch/sm39059625', 'https://www.nicovideo.jp/watch/sm39046046'],
  ['Color of Drops', '40㍍P', 'https://www.nicovideo.jp/watch/sm39386288', 'https://youtu.be/i5rl-NGSYoo'],
  ['自傷無色', 'ねこぼーろ', 'https://www.nicovideo.jp/watch/sm19877037', 'https://www.nicovideo.jp/watch/sm19870840'],
  ['フロムトーキョー', '夏代孝明', 'https://www.nicovideo.jp/watch/sm39106936', 'https://www.nicovideo.jp/watch/sm39105923'],
  ['フクロウ～フクロウが知らせる客が来たと～', 'KOKIA', 'https://youtu.be/FHwjgQrccqo', 'https://youtu.be/eQBlomFo1Kw'],
  ['炉心融解', 'kuma（alfred）', 'https://youtu.be/VGnEIw86fsE', 'https://www.nicovideo.jp/watch/sm8089993'],
  ['拝啓ドッペルゲンガー', 'kemu', 'https://youtu.be/ZiJySYUCpag', 'https://www.nicovideo.jp/watch/sm31314079'],
  ['右肩の蝶', '水野悠良', 'https://youtu.be/wGqfk-sgJHI', 'https://www.nicovideo.jp/watch/sm6609407'],
  ['ロストワンの号哭', 'Neru', 'https://www.nicovideo.jp/watch/sm20270073', 'https://www.nicovideo.jp/watch/sm20244918'],
  ['テレキャスタービーボーイ(long ver.)', 'すりぃ', 'https://youtu.be/LDhfDXSe5Ek', 'https://www.nicovideo.jp/watch/sm37507315'],
  ['Happy Halloween', 'Junky', 'https://www.nicovideo.jp/watch/sm26909754', 'https://youtu.be/1DcgczDzQPk'],
  ['ただ選択があった', 'フロクロ', 'https://www.nicovideo.jp/watch/sm39000251', 'https://youtu.be/FrIiEuNPE38'],
  ['ライカ', 'yamada', 'https://www.nicovideo.jp/watch/sm30265594', 'https://www.nicovideo.jp/watch/sm30251724'],
  ['メリュー', 'ナブナ', 'https://www.nicovideo.jp/watch/sm26241520', 'https://www.nicovideo.jp/watch/sm26238908'],
  ['きみのかみ', 'Sori Sawada', 'https://www.nicovideo.jp/watch/sm33378932', 'https://youtu.be/w6kNjeYzFvY'],
  ['阿吽のビーツ', '羽生まゐご', 'https://youtu.be/Xfp6v0Mze3k', 'https://www.nicovideo.jp/watch/sm31775813'],
  ['温室魔法', 'sea-no', 'https://www.nicovideo.jp/watch/sm24150041', 'https://www.nicovideo.jp/watch/sm24137790'],
  ['ダリアダリア', 'ねじ式', 'https://www.nicovideo.jp/watch/sm39025971', 'https://youtu.be/NpZEFqN07VA'],
  ['シンクロサイクロトロン・スピリチュアライザー。', '砂粒', 'https://www.nicovideo.jp/watch/sm23886344', 'https://www.nicovideo.jp/watch/sm22888888'],
  ['毒占欲', 'DECO*27', 'https://www.nicovideo.jp/watch/sm22786156', 'https://www.nicovideo.jp/watch/sm22783517'],
  ['twig', 'rei sirose', 'https://www.nicovideo.jp/watch/sm34523166', 'https://youtu.be/KhdXvKwrAcQ'],
  ['炎', '梶浦由記・LiSA', 'https://www.nicovideo.jp/watch/sm37666930', 'https://youtu.be/4DxL6IKmXx4'],
  ['雪の華', '中島美嘉', 'https://www.nicovideo.jp/watch/sm34676848', 'https://youtu.be/mF5Qq2YheTg'],
  ['鳳仙花', '黒澤まどか', 'https://www.nicovideo.jp/watch/sm21484534', 'https://www.nicovideo.jp/watch/sm21479692'],
  ['真生活', '案山子', 'https://youtu.be/JWRN1wSxmOU', 'https://www.nicovideo.jp/watch/sm35665550'],
  ['', '', '', ''],
];
