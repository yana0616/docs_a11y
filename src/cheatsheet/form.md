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

* 必須項目を表すのに`*`が使われてる場合、テキストで「必須項目にはアスタリスクがついています」と示す
* 支援技術が情報を把握できるように、マークアップがしっかりなされている
* HTMLタグで不足がある部分に関しては、role属性やaria属性を利用して、セマンティックなマークアップができている

### 【レベルA】[タイミング調整可能](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
フォームとかログインとかでよくある「一定期間入力がありませんでした、続けますか？」みたいな感じのやつを出すようにして、ユーザー側でコンテンツを引き続き利用できるか選択できる余地を与える。

### 【レベルA】[フォーカス順序](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
正しい順番でフォーカスが当たるようになっている

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

* [aria-invalid属性](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute)を使用する（入力フィールドが予期しない形式だった場合に属性値がtrueになる）

### 【レベルA】[ラベルまたは説明](https://waic.jp/docs/UNDERSTANDING-WCAG20/minimize-error-cues.html)
入力欄に、何の値をどのように入力すれば良いのかが明示されている

* ラベルが入力欄に紐付けられている
* 複数に入力項目が分かれてる場合、グルーピングなされている

### 【レベルA】[名前（name）、役割（role）、および値（value）](https://waic.jp/docs/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

* 下記3つを定義する
    * 名前（そのリンクが何なのか。`<a>`要素であれば、title属性とか`<a>`要素の中身）
    * 役割（`<a>`要素を利用しているのであれば、それはリンク）
    * 値（`<a>`要素で言うところのhref属性）

### 【レベルAA】[見出し及びラベル](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)

* セマンティックな見出し構成である、かつ内容が分かるように記述されている
* 内容がわかるようにラベルが記述されている（これによりコンポーネントが識別しやすくなる）

### 【レベルAA】[フォーカスの可視化](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
キーボード操作が可能なUIは、フォーカスが見えるようにして、利用者が認識しやすいようにする

### 【レベルAA】[エラー修正の提案](https://waic.jp/docs/UNDERSTANDING-WCAG20/minimize-error-suggestions.html)
入力エラーが自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される

* submitボタンを押したときに、フォーカスがあたって「エラーだよ」ってお知らせしてあげる

### 【レベルAA】[エラー回避（法的、金融、データ）](https://waic.jp/docs/UNDERSTANDING-WCAG20/minimize-error-reversible.html)
利用者にとって、法律行為（何かの契約、採用など）や金融取引が生じる場合、データを変更したり削除したりすることができる施策がなされている（下記のうち1つを満たしている）

* 取り消し（送信取り消しができる）
* チェック（入力エラーがチェックされ、修正できる機会が提供される）
* 修正（送信完了前に、利用者が情報の見直しや修正ができる）