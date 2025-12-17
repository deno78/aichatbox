# aichatbox

Azure AI Searchと連動したAIチャットボックス

## 概要

React と react-chatbot-kit を使用した AI チャットボットアプリケーションです。
GitHub Pages でホストされ、iframe としても埋め込み可能です。

## 機能

- React ベースのチャットボット UI
- react-chatbot-kit を使用した対話型インターフェース
- Azure AI Search バックエンド対応（設定ファイルで外部化）
- iframe として埋め込み可能
- GitHub Pages でのデプロイ

## セットアップ

### 必要要件

- Node.js 20.x 以上
- npm

### インストール

```bash
npm install
```

### 環境変数の設定

`.env.example` ファイルを `.env.local` にコピーして、Azure AI Search の設定を行ってください：

```bash
cp .env.example .env.local
```

以下の環境変数を設定してください：

- `VITE_AZURE_SEARCH_ENDPOINT`: Azure AI Search のエンドポイント URL
- `VITE_AZURE_SEARCH_API_KEY`: Azure AI Search の API キー
- `VITE_AZURE_SEARCH_INDEX_NAME`: Azure AI Search のインデックス名
- `VITE_API_VERSION`: API バージョン（デフォルト: 2023-11-01）

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
```

## 使用方法

### メインページ

メインページ（`index.html`）には、「サンプルです」というテキストとチャットボットが表示されます。

### iframe として埋め込む

`iframe.html` を使用して、チャットボットを iframe として他のウェブページに埋め込むことができます：

```html
<iframe src="https://deno78.github.io/aichatbox/iframe.html" width="400" height="600"></iframe>
```

## GitHub Pages へのデプロイ

このリポジトリは GitHub Actions を使用して自動的に GitHub Pages にデプロイされます。

### デプロイの有効化

1. GitHub リポジトリの Settings > Pages に移動
2. Source を "GitHub Actions" に設定
3. `main` ブランチにプッシュすると自動的にデプロイされます

デプロイ後、以下の URL でアクセスできます：
- メインページ: `https://deno78.github.io/aichatbox/`
- iframe ページ: `https://deno78.github.io/aichatbox/iframe.html`

## 構成

### ディレクトリ構造

```
aichatbox/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions ワークフロー
├── src/
│   ├── chatbot/
│   │   ├── ActionProvider.jsx  # チャットボットアクション
│   │   ├── MessageParser.jsx   # メッセージパーサー
│   │   └── config.js           # チャットボット設定
│   ├── config/
│   │   └── backend.config.js   # バックエンド設定
│   ├── App.jsx                 # メインアプリケーション
│   ├── App.css                 # スタイル
│   ├── main.jsx                # メインエントリーポイント
│   └── iframe.jsx              # iframe エントリーポイント
├── index.html                  # メイン HTML
├── iframe.html                 # iframe HTML
├── .env.example                # 環境変数テンプレート
└── vite.config.js              # Vite 設定
```

## バックエンド連携

現在、Azure AI Search との連携は準備段階です。`src/config/backend.config.js` と `src/chatbot/ActionProvider.jsx` に実装のプレースホルダーが用意されています。

## ライセンス

このプロジェクトのライセンスについては LICENSE ファイルを参照してください。
