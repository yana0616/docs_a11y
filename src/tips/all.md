---
title: サイト全体
---

# 【絶賛編集中】サイト全体
全体的に使えそうなやつ（ユーティリティに入れとくと便利ーとかちょっと属性付与するだけでアクセシビリティ向上するーとかそういうやつ）をまとめてみました。

## 非表示だけどスクリーンリーダーで読んでほしい！
h1を隠しで入れたい（デザイン上表示できない）とかで使える。  
ママの求人では絶賛活用中。
```scss
.u-inclusiveTxt {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0px 0px 99.9% 99.9%);
  border: 0;
}
```
【参考】[『アクセシビリティのためによく書く CSS』](https://qiita.com/uto-usui/items/9208afc3955c7465e554)

## アイコンフォントの扱い
見た目的には印など意味あるものだけど、スクリーンリーダーで読み上げる必要がなかったりする場合もある。  
そういう場合は、`aria-hidden="true"`を付与する。  
（Font Awesomeでも使われてるってよ）

```html
<i class="fa fa-book" aria-hidden="true"></i>
```