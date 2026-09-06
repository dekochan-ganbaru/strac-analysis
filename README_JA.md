# STRAC経営分析 Prototype 01-2 公開手順（iPad Safari向け）

## 推奨構成

このフォルダをGitHubリポジトリのルートにそのまま置きます。

- index.html — アプリ本体
- manifest.webmanifest — Webアプリ情報
- service-worker.js — オフライン再表示用キャッシュ
- README_JA.md — この説明書

## GitHub Pagesで公開する

1. GitHubにログインします。
2. New repository を選びます。
3. Repository name を `strac-analysis` などにします。
4. Public を選択します。
5. Create repository を押します。
6. リポジトリ画面で Add file → Upload files を選びます。
7. このフォルダ内の `index.html`、`manifest.webmanifest`、`service-worker.js` をアップロードします。
8. Commit changes を押します。
9. Settings → Pages を開きます。
10. Build and deployment の Source を `Deploy from a branch` にします。
11. Branch を `main`、Folder を `/(root)` にします。
12. Save を押します。
13. Pages画面に表示された公開URLをSafariで開きます。

## iPadで使う

1. 公開URLをSafariで開きます。
2. 右上に「✓ JavaScript動作中」と出ることを確認します。
3. 売上高などを変更し、STRAC図が即時更新されることを確認します。
4. Safariの共有ボタン → 「ホーム画面に追加」でアプリ風に起動できます。

## 保存について

公開URL上では通常のSafariページとして動くため、入力値はlocalStorageに保存されます。同じSafari・同じURLで再度開くと前回値を復元します。

## 更新方法

index.htmlを修正してGitHubに再アップロード／コミットすると、同じURLのまま新版へ更新できます。Service Workerのキャッシュ名も必要に応じて更新してください。
