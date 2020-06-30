---
title: アコーディオン
---

# 【絶賛編集中】アコーディオン

SPでよく出てくるハンバーガーメニューや、よくある質問などに出てくるアコーディオン。  

[サンプルコード](https://jsfiddle.net/yana0616/yarjtfL0/)

## 軽く解説

:::tip ポイント
* 押して何かアクションを起こすものは`<button>`要素で実装を
* 開閉を示す`aria-expanded`属性を利用
* 表示／非表示を示す`aria-hidden`属性を利用
:::

```html
  <section class="toggleBox">
    <h2><button type="button" data-trigger-toggle aria-expanded="false" class="toggleBox__ttl">よくある質問の内容が入ったりするよー</button></h2>
    <div class="toggleBox__contents" data-target-toggle aria-hidden="true">
      <div class="toggleBox__contentsInner">
        <p>質問の回答が入るよー。質問の回答が入るよー。質問の回答が入るよー。質問の回答が入るよー。質問の回答が入るよー。質問の回答が入るよー。</p>
      </div>
    </div>    
  </section>
```

### aria-expanded属性
