# Lesson4

## global.css や reset.css を反映させる

実は sb 上ではグローバルな CSS は適応されていませんので,この方法を紹介します.

`.storybook/preview-head.html`を作成

```html
<link rel="stylesheet" href="styles/reset.css" />
<link rel="stylesheet" href="styles/globals.css" />
```

ここに書かれたタグは,sb の head タグ内に書かれることになります.script タグもかけます.

また,sb の build コマンドを以下のように書き換えてください.

```bash
"storybook": "start-storybook -p 6006 -s ./src",
```

これで,`src/styles`にある css が読み込まれるはずです.
