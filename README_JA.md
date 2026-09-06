# STRAC経営分析 Prototype 02-2.1

## 修正内容
- 右側「もしものSTRAC図」で、人件費・その他固定費・営業利益の文字と数値が表示されない不具合を修正
- 原因だった DOM ID の不一致を修正
- 右側の利益ブロック ID を `simProfitBlock` に統一
- 左側も `curProfitBlock` に統一
- 赤字時は利益ブロックを `display:none` + `flex:0` で完全非表示
- 黒字時は利益ブロックを `display:flex` で確実に再表示
- 下段「主要指標の比較」の数値表示を復旧
- Service Workerキャッシュ名を02-2.1へ更新

## GitHub Pages更新
既存の `strac-analysis` リポジトリへ以下3ファイルを上書きしてください。
- index.html
- manifest.webmanifest
- service-worker.js
