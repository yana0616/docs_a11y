---
title: タブ
---

# 【絶賛編集中】タブ
タブ制御にもアクセシビリティを考慮したコーディングがありますよー

## 軽く解説

:::tip ポイント

* role属性でタブとタブコンテンツを定義
* aria-selected属性で現在選択中のタブを示す
* aria-controls属性でタブと制御されるタブコンテンツを紐付ける

:::

### role属性の指定

role属性は、つけた要素に対して役割を持たせる。  

* タブの集まりには`role="tablist"`
* タブになるものには`role="tab"`

```pug
ul.c-tabList(role='tablist')
    - for(var n = 1; n<=3; n++)
      li.c-tabList__item(role='presentation')
        - flg = n === 1
        button.c-tabBtn(type='button', data-trigger-tab=n, aria-controls=`panel${n}`, aria-selected=`${flg}`)
            | タブその#{n}
```

`<ul>`要素は、role属性を指定しなければ`role="list"`になるが、`role="tablist"`に指定し直している。  
`<li>`要素は、role属性を指定しなければ`role="listitem"`になるが、`role="presentation"`を指定し直すことで、意味を成さなくなる。  
（簡単に言うと、`<div>`と同じ意味合いになる。）

### aria-controls属性の指定
タブに`aria-controls="任意のID"`を指定することで、「このタブを押すと、任意のIDが指定されている要素を制御しますよー」って意味づけになる。  

```pug
//- 「【タブその1】ボタンを押すことで、#panel1を制御しますよー」という意味になる
button.c-tabBtn(type='button', aria-controls='panel1') タブその1
section.c-tabContents(id='panel1')
    h2 タブコンテンツその1
```



## 実際に実装した案件

* [ママの求人トップページ](https://mama-9jin.com/)
    * LighthouseのAccebillityスコアはPCおよびSPともに5以上UP