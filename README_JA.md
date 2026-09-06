# STRAC経営分析 Prototype 01-3.1

## 変更点
- 赤字時の未回収固定費をSTRAC図の外側に表示
- 固定費回収率を追加
- 損益分岐点バーを自動スケール化
- 黒字は緑、赤字は赤で対称表示

## 更新
既存の GitHub リポジトリ strac-analysis へ index.html / manifest.webmanifest / service-worker.js を上書きアップロードしてください。


## 01-3.1 小修正
- 赤字時の緑色「利益」ブロックを完全非表示に修正
- CSSの汎用 `.hidden` を追加
- JavaScriptでも `display:none` と `flex:0` を明示してSafari上で確実に非表示
- service workerのキャッシュ名を更新
