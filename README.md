# Lesson05

## 静的ファイルを Storybook で表示させる

### svg ファイル

svg は`SvgButton.jsx`の書き方で OK

### 画像ファイル

どこからファイルを読み込ませるのかを設定してあげる必要がある

前回同様に build command をいじります.
今回は public から画像を読み込んで欲しいので,

```bash
"storybook": "start-storybook  -s ./public -p 6006",
```

これで`./public`配下にある静的なファイルを読み込んでくれるようになります.

プロジェクトによって静的ファイルを置くフォルダが異なると思いますので,うまくいかないときは調べてみてください.

⚠
前回の global.css や reset.css を反映させたときの build command と組み合わせるときは,

```bash
"storybook": "start-storybook  -s ./src,./public -p 6006",
```

というようにコンマ区切りになります.
