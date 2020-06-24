---
title: テキスト｜Web a11y達成基準まとめ
---

# テキスト

## リンクがある

::: tip ポイント
リンク先のページの内容が理解できるようなリンク文字列に
:::

### 【レベルA】[色の使用](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

* 色を付けることで、視覚的に手がかりを確保する
* 文字色の違いじゃ情報を伝えるために使用される場合、利用可能な追加の視覚的な手がかりを確保する

### 【レベルA】[リンクの目的（コンテキスト内）](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

* そのリンクの目的を特定するリンクテキストを提供する
* `<a>`要素の中のテキストや、title属性を利用して、そのリンクの目的を提示する

### 【レベルA】[フォーカス時](https://waic.jp/docs/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html)
フォーカスをあてて何かイベントを発生させるときに、フォーカスを当てただけで余計なアクションを発生させないようにする

* フォーカス時にはそれに合った動作をする
* フォーカスから外れた際には、その動作は実行されない


### 【レベルA】[名前（name）、役割（role）、および値（value）](https://waic.jp/docs/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

下記3つを定義する
* 名前（そのリンクが何なのか。`<a>`要素であれば、`<a>`要素の中身だったり、title属性）
* 役割（`<a>`要素を利用すればOK。`<a>`を利用することで`role="link"`が意味づけられる）
* 値（`<a>`要素で言うところのhref属性）

```html
<a title="レジチョイスのサイトへ" href="https://rejichoice.jp/" target="_blank" rel="noopener">詳細はこちら</a>
```

:::warning 補足
よく「詳細はこちら」とか「こちら」などにリンクを貼ることが多いが、これだとリンク先が何を示しているか分からないため、title属性をつけると良い。
:::

### 【レベルAA】[フォーカスの可視化](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
キーボード操作が可能なUIは、フォーカスが見えるようにして、利用者が認識しやすいようにする

### 【レベルAA】[一貫した識別性](https://waic.jp/docs/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html)
同じ機能を有したコンポーネントは、一貫して識別されなければいけない

* 全ページで共通に利用しているアイコンの代替テキストが、ページによって変わっていない
* ただし、代替テキストを変更する必要がある場合は除く
    * 同じ「印刷」アイコンでも、「領収書を印刷」と「請求書を印刷」のように、機能が異なっているものはOK
    * 同じサイト内検索で、あるページでは「検索」ボタンだが、別ページでは「探す」ボタンになってるのはNG

## 文字がある

:::tip ポイント
* 文字と背景色のコントラスト比を高め、文字の視認性を上げる
* 文字拡大機能でも文字が問題なく読めるか確認する
:::

### 【レベルAA】[コントラスト（最低限レベル）](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

* 大きな文字、付随的なもの（アクティブでないUI、単なる装飾など）、ロゴなどは除き、4.5:1のコントラスト比を確保する
* 十分なコントラスト比のある表示に切り替えられるようなコントロールを用意する

::: warning 参考
文字と背景のコントラスト比がチェックできるサイト  
[Colorable](https://colorable.jxnblk.com/)
:::

### 【レベルAA】[テキストのサイズ変更](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

* 支援技術なしで200％まで拡大しても問題なく利用できるようにする（普通にブラウザの拡大機能でね）
    * 固定値を使わずに相対的にサイズが大きくなるようにする（emの利用）
    * リキッドレイアウト

### 【レベルAA】[見出し及びラベル](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)

* セマンティックな見出し構成である、かつ内容が分かるように記述されている
* 内容がわかるようにラベルが記述されている（これによりコンポーネントが識別しやすくなる）