---
title: フォーム
---

# 【絶賛編集中】フォーム

フォームは色んなやり方でコーディングできますが…アクセシビリティを考慮すると、ある程度絞られてくるかもしれません。  
色々模索した結果が下記になります（バリデーションの処理もコミコミで作ってます…が、バリデーションを走らせるタイミングとかはよしなにしてください）。  
デザイン的に良いかどうかはまた別のお話。  


<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="ahiru_affairs16" data-slug-hash="qBbPJwG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="フォームのベストプラクティス【fieldsetとか使わないver.】">
  <span>See the Pen <a href="https://codepen.io/ahiru_affairs16/pen/qBbPJwG">
  フォームのベストプラクティス【fieldsetとか使わないver.】</a> by yana0616 (<a href="https://codepen.io/ahiru_affairs16">@ahiru_affairs16</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 軽く解説

:::tip ポイント（※デザイン上難しいところもあると思うので、鵜呑みにしないでね）

* `<label>`要素を利用
* placeholderを利用しない（`<label>`要素内に記述するとよい）
* aria-invalid属性（エラーかどうかを示すaria属性）を利用
* チェックボックスやラジオボタンなど、`<input>`要素が複数ある場合はグルーピングを
* フォーカス時およびエラー時のスタイルを記述
* 

:::

### `<label>`要素を利用する
`<label>`要素は、`<input>`要素などの入力項目が何を示しているのか提示することができる。  

```html
<!-- このinput要素は「名前」ですよーって示してる。これで「名前を入れればいいのね」って分かる -->
<label for="fullname">名前</label>
<input id="fullname" type="text" name="name" value="">
```

また、チェックボックスやラジオボタンなどと一緒に使うことで、タップ（クリック）範囲が広がる。  
（下記で試してみてね）

|label要素未使用|label要素使用|
|----|----|
|<input type="checkbox" name="test"> チェックボックス | <input type="checkbox" name="test" id="test"><label for="test">チェックボックス</label>|

### placeholderを利用しない:warning:

:::warning 補足
これは、デザイナーさんと要相談になると思うので、あくまでも【参考】で見てもらえればー。
:::

* 入力時に消えてしまうので、ヒントが分からなくなる
* 読み上げに差が生じる

上記を考慮し、ヒントになりうるテキストは、別途記載したほうがよいです。  
`<label>`要素内に記載することで、入力要素の前に読みあげてくれます。