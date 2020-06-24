---
title: サイト全体・ページ全体｜Web a11y達成基準まとめ
---

# サイト全体・ページ全体
サイト全体およびページ全体における、Webアクセシビリティの達成基準を満たすためのポイントをまとめます。

## サイト全体
::: tip ポイント
* 全てのページに一貫したナビゲーションを
* 各ページの`<title>`要素には、ページ内容が端的にわかるページタイトルを
:::

### 【レベルA】[ページタイトル](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)
ウェブページを示した内容が、タイトルバーに表示されるように`<title>`でマークアップされている

* サイト名を含んだタイトルになっているとより良い（例：ページタイトル｜サイト名／SEO的にも有効）
* metaデータが含まれているとより良い

```html
<head>
    <title>会社概要・沿革 | 株式会社Wiz</title>
    <meta name="description" content="株式会社Wiz（ワイズ）の会社概要と沿革をご紹介しています。社名、本社所在地、支店情報、代表者、設立年月日、資本金、役員紹介、従業員数、これまでの歴史など、当社の基本情報を掲載しています。">
    <meta name="keywords" content="会社概要,企業概要,沿革,株式会社Wiz,ワイズ,株式会社ワイズ,wiz,株式会社Wiz,新大塚,大塚,東池袋">
</head>
```

###  【レベルAA】[複数の手段](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html)
利用者が自分のニーズに最も合う方法によってコンテンツを見つけることができるようにする

* ナビゲーションリンクを用意する
    * サイトトップから、サイト内のすべての他ページのリンクを提供する
    * 逆に、サイト内の全てのページは、サイトトップへのリンクが存在している
* 目次・サイトマップを用意する（サイト全体を把握する）
* 検索機能を設ける（すぐに目的のページへ移動してもらえる）

### 【レベルAA】[一貫したナビゲーション](https://waic.jp/docs/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)
毎回同じ相対的順序で繰り返されるナビゲーションを提示する

* 第1階層のトップページに行ったら、そこの下層ページのリンクが表示され、それは他の第1階層のトップページに行っても仕様は同じ、みたいな感じ。

### 【レベルAA】[一貫した識別性](https://waic.jp/docs/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html)
同じ機能を有したコンポーネントは、一貫して識別されなければいけない  

* サイト内で共通して利用するアイコンの代替テキストが、ページによって変わっていない
* ただし、絶対代替テキストの変更がNGというわけではない
    * 【変更OKな例】同じ「印刷」アイコンでも、「領収書を印刷」と「請求書を印刷」のように、同じ印刷でも対象が異なっている
    * 【変更NGな例】同じサイト内検索で、あるページでは「検索」ボタンだが、別ページでは「探す」ボタンになっている

## ページ全体
::: tip ポイント
* ページの内容は見出しを使用して構造化を
* ページの主要言語や一部で使用する言語をlang属性で明示
:::

### 【レベルA】[情報及び関係性](https://waic.jp/docs/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) 

何を示しているか、色がなくても分かるような状態になっている

* 必須項目を表すのに`*`が使われてる場合、テキストで「必須項目にはアスタリスクがついています」と示す
* 支援技術が情報を把握できるように、マークアップがしっかりなされている
* HTMLタグで不足がある部分に関しては、role属性やaria属性を利用して、セマンティックなマークアップができている

::: warning マークアップについて補足その1

* `<header>` / `<footer>` 
* `<main>` / `<aside>`
* `<aritcle>` / `<section>`
    * この2つにおいては、必ず子要素に見出しタグを含める必要あり！
* `<h1>` / `<h2>`などの見出しタグ
* `<p>` / `<a>`
* `<ul>` / `<ol>` / `<dt>`などリスト系

などを利用するようにしましょう。

:::

::: warning マークアップについて補足その2

`<div>`や`<span>`は、上記に挙げたタグとは異なり、**意味を持っているタグではありません**。  
しかし、WAI-ARIAのrole属性やaria属性を利用して意味づけすることは可能です。
```html
<!-- h1 -->
<h1>h1の見出し</h1>

<!-- 上記をdivタグで置き換えると下記のようになる。意味合いは全く一緒。 -->
<div role="heading" aria-label="1">h1の見出し</div>
```
ただし、WAI-ARIAで使用される一部の属性は、**ブラウザによって未サポートなものもある**ため、既にネイティブなHTML要素・属性が存在している場合は、それを積極的に利用されることが推奨されています。

:::

### 【レベルA】[意味のある順序](https://waic.jp/docs/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

* 意味のある順序に文書構造が並んでいる
* DOMの順序を表示順と一致させる
::: danger NG例
ソースコード上では意味ある順序に並んでいないが、見た目上はきちんとした順序になるようにCSSで制御している。  
（これは、ソースコードを入れ替えれば、わざわざCSSで制御しなくても実現可能なもの）  
<script async src="//jsfiddle.net/yana0616/rvfwLa63/embed/result,html,css/dark/"></script>
:::

### 【レベルA】[ブロックスキップ](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
メインコンテンツエリアへ直接移動するためのリンクを各ページの先頭に追加する  
（メインコンテンツに行き着くまでに、ヘッダーやらナビゲーションやらいくつもTabキーで処理をさせる必要があるため）

::: warning 補足
`<main>`を使用していれば、スクリーンリーダーの利用者はいつでもメインコンテンツ位置に移動できる（`role="main"`の意味合いがあるので、メインコンテンツだと分かる）ため、わざわざ提供しなくてもいいという考え方もあるようです。

【参考（ちょっと古めの記事だけど）】[『スキップリンクは絶対に必要なの？』（WebA11y.jp）](https://weba11y.jp/basics/faq/skip-link/)
:::

### 【レベルA】[ページタイトル](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)

ウェブページを示した内容が、タイトルバーに表示されるように`<title>`でマークアップされている

* あるページ（サイト名）が含んだタイトルになっているとより良い（例：ページタイトル｜サイト名／SEO的にも有効）
* metaデータが含まれているとより良い

```html
<head>
    <title>会社概要・沿革 | 株式会社Wiz</title>
    <meta name="description" content="株式会社Wiz（ワイズ）の会社概要と沿革をご紹介しています。社名、本社所在地、支店情報、代表者、設立年月日、資本金、役員紹介、従業員数、これまでの歴史など、当社の基本情報を掲載しています。">
    <meta name="keywords" content="会社概要,企業概要,沿革,株式会社Wiz,ワイズ,株式会社ワイズ,wiz,株式会社Wiz,新大塚,大塚,東池袋">
</head>
```

### 【レベルA】[フォーカス順序](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
正しい順番でフォーカスが当たるようになっている
* フォーカスは[`tabindex`属性](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/tabindex)を利用することで制御することができるので、それをむやみやたらに使わない
* 意味と操作性を保った状態で、フォーカスを制御するのはOK

### 【レベルA】[ページの言語](https://waic.jp/docs/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html)
* HTMLを使用する
* lang属性を設定する（スクリーンリーダーで対象言語に合わせた読み方をしてくれる）

### 【レベルA】[フォーカス時](https://waic.jp/docs/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html)
フォーカスをあてて何かイベントを発生させるときに、フォーカスを当てただけで余計なアクションを発生させないようにする

* フォーカス時にはそれに合った動作をする
* フォーカスから外れた際には、その動作は実行されない


### 【レベルAA】[見出し及びラベル](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
セマンティックな見出し構成である、かつ内容が分かるように記述されている

### 【レベルAA】[フォーカスの可視化](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
キーボード操作が可能なUIは、フォーカスが見えるようにして、利用者が認識しやすいようにする

### 【レベルAA】[一部分の言語](https://waic.jp/docs/UNDERSTANDING-WCAG20/meaning-other-lang-id.html)

* そのページの他言語版へのリンクについては、lang属性を示すことで他言語であることを示す
* 引用文で、一部他言語が使用されている場合、その言語をスクリーンリーダーで正確に読み上げてもらうために、lang属性を指定して、発音規制を変更する

