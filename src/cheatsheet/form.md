---
title: フォーム｜Web a11y達成基準まとめ
---

# フォーム

:::tip ポイント
* label属性を使用する
* 入力項目に何を入力したら良いのか説明を
* エラーメッセージを理解しやすく
:::

### 【レベルA】[情報及び関係性](https://waic.jp/docs/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) 

何を示しているか、色がなくても分かるような状態になっている

* 必須項目を表すのに`*`が使われてる場合、「必須項目にはアスタリスクがついています」とテキストで示す
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

### 【レベルA】[タイミング調整可能](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
コンテンツに制限時間を設定する場合は、例外を除いて、その制限時間を解除、調整または延長できるようにする。

* 解除（利用者がその制限を解除することができる）
* 調整（利用者が、少なくともデフォルト設定の10倍を超える時間の調整ができる）
* 延長（時間切れになった場合、警告を出して、簡単な操作で利用者が時間を延長することができる）
    * フォームとかログインとかでよくある、「一定期間入力がありませんでした、続けますか？」みたいなダイアログが出る感じ

例外は下記のような内容。

* リアルタイムの例外（制限時間が必須の要素で、その制限時間に変わる手段が存在しない）
* 必要不可欠の例外（制限時間をつけることが必須であり、延長することがコンテンツ動作を無効にすることになる）
* 20時間の例外（制限時間が20時間を超える）

### 【レベルA】[フォーカス順序](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
正しい順番でフォーカスが当たるようになっている

* フォーカスは[`tabindex`属性](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/tabindex)を利用することで制御することができるので、それをむやみやたらに使わない
* 意味と操作性を保った状態で、フォーカスを制御するのはOK

### 【レベルA】[フォーカス時](https://waic.jp/docs/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html)
フォーカスをあてて何かイベントを発生させるときに、フォーカスを当てただけで余計なアクションを発生させないようにする

* フォーカス時にはそれに合った動作をする
* フォーカスから外れた際には、その動作は実行されない

### 【レベルA】[入力時](https://waic.jp/docs/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html)

* 入力してすぐに実行、みたいな処理は走らせない
    * select要素を選択したら、そのタイミングでページのリロードが発生する
* フォームコントロールによって変化が起こる場合、その説明を提供する
	* ラジオボタンで言語選択ができる場合、その前に「選択肢を選ぶことで言語が変更される」という説明が示されている

### 【レベルA】[エラーの特定](https://waic.jp/docs/UNDERSTANDING-WCAG20/minimize-error-identified.html)
エラー情報をテキストで提供することで、エラーが発生したことを理解（知覚）してもらう

* 個別のエラーだけでなく、フォームの上部まとまってエラーが表示されるのも良き（一箇所でどんなエラーが出ているのか把握できる）

* [aria-invalid属性](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute)を使用する（入力フィールドが予期しない形式だった場合に属性値がtrueになる）

### 【レベルA】[ラベルまたは説明](https://waic.jp/docs/UNDERSTANDING-WCAG20/minimize-error-cues.html)
入力欄に、何の値をどのように入力すれば良いのかが明示されている

* ラベルが入力欄に紐付けられている
* 複数に入力項目が分かれてる場合、グルーピングする
    * [`<fieldset>`要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/fieldset)と[`<legend>`要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/legend)を利用

::: warning グルーピング例
`<fieldset>`要素で囲んでる箇所がグループ扱いになる。  
`<legend>`要素には、そのグルーピングされている内容のキャプション（項目名）を入れる。
```html
<fieldset>
    <legend>希望雇用形態</legend>

    <input type="checkbox" name="employment" value="1">
    <label for="employment01">正社員</label>

    <input type="checkbox" name="employment" value="2">
    <label for="employment02">派遣社員</label>

    <input type="checkbox" name="employment" value="3">
    <label for="employment03">契約社員</label>

    <input type="checkbox" name="employment" value="4">
    <label for="employment04">アルバイト</label>
</fieldset>
```
:::

::: warning ラベル・説明を記述する際の補足
説明を記載するのに、placeholder属性を利用する場合があるが、入力する際にplaceholderの内容が消えてしまい、内容が分からなくなるため、別の施策を講じるほうが親切
:::

### 【レベルA】[名前（name）、役割（role）、および値（value）](https://waic.jp/docs/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

* 下記3つを定義する
    * 名前（そのフォームが何なのか。name属性をつければOK）
    * 役割（`<input>`、`<textarea>`や`<select>`など、フォーム関連タグを利用すればOK）
    * 値（value属性入れればOK。もちろんvalueが空の場合もあり）

### 【レベルAA】[見出し及びラベル](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)

* セマンティックな見出し構成である、かつ内容が分かるように記述されている
* 内容が分かるようにラベルが記述されている（これによりコンポーネントが識別しやすくなる）
:::warning 補足
絶対見出しやラベルを利用しなくてはいけない、というわけではない。  
見出しやラベルが提供されている場合、それを利用することが推奨される。
:::

### 【レベルAA】[フォーカスの可視化](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
キーボード操作が可能なUIは、フォーカスが見えるようにして、利用者が認識しやすいようにする
::: warning フロントがよく対応忘れがちな箇所（デザインなかったらデザイナーさんに聞いてね）
* `<input>`や`<textarea>`
* チェックボックス・ラジオボタン
:::

### 【レベルAA】[エラー修正の提案](https://waic.jp/docs/UNDERSTANDING-WCAG20/minimize-error-suggestions.html)
入力エラーが自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される

* submitボタンを押したときに、エラー箇所にフォーカスを当てて「エラーだよ」ってお知らせしてあげる

### 【レベルAA】[エラー回避（法的、金融、データ）](https://waic.jp/docs/UNDERSTANDING-WCAG20/minimize-error-reversible.html)
利用者にとって、法律行為（何かの契約、採用など）や金融取引が生じる場合、データを変更したり削除したりすることができる施策がなされている（下記のうち1つを満たしている）

* 取り消し（送信取り消しができる）
* チェック（入力エラーがチェックされ、修正できる機会が提供される）
* 修正（送信完了前に、利用者が情報の見直しや修正ができる）