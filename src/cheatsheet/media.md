---
title: 音声・動画｜Web a11y達成基準まとめ
---

# 音声・動画

このページは、「音声・動画」についてのWebアクセシビリティの達成基準をまとめてます。

::: tip ポイント
* 同等の目的を果たすテキストを提供
* 動画や音声の自動再生は避ける
* 利用者が停止できる機能を提供
:::

## 音声で情報を提供している

* 書き起こしテキストを用意する

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)

* グラフ、図表、音声、写真、アニメーションなどのコンテンツは、テキストによる代替コンテンツによって、同じような内容で理解されなければいけない
* 送信ボタンとして用いられる画像や複雑なアニメーションは、それが何で、何故そこにあるのか認識できるように、そのコンテンツの目的を説明するために、名前を定義しなければいけない
* ライブ音声しか含まないコンテンツに対しては、その説明を提供する
* 利用者が人間であることを証明するために用いられる、非テキストの試験（CAPTCHA）などは、テキストによる代替を提供してしまうと、ロボットでも操作可能なものにしてしまうので、異なる代替形式が必要になってくる
* 利用者が視覚的に確認したり、理解したりすることを実際には意図していない非テキストコンテンツ（透過画像や非表示画像、見た目だけで利用しているアイコンなど）に関しては、支援技術がそれを無視して、かつ利用者に何も定義しない方法で実装する

#### 対策

* aria-label属性を使用する
* [aria-labelledby属性](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)を使用する
* alt属性を使用する
* `<label>`要素を利用する
    * [labelを利用できないとき（fieldsetとかでグルーピングしたりするとき）は、フォームコントロールを特定するためにtitle属性を利用する](https://waic.jp/docs/WCAG-TECHS/H65)
* 必須ではないテキストによる代替を示す
    * [装飾目的の画像を付加するためにCSSを利用する](https://waic.jp/docs/WCAG-TECHS/C9)
    * [支援技術が無視すべき画像に対して、alt属性を空にして、title属性を付与しない](https://waic.jp/docs/WCAG-TECHS/H67)

### 【レベルA】[音声だけ・映像だけ（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
説明できるような代替コンテンツ（テキストだったり、属性付与する）を用意する

### 【レベルA】[音声の制御](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html):warning:
ユーザー側で制御できるような対応を作る

* ページを開いたときに自動再生される場合、音をミュートにする機能がついている
* そもそも自動再生させない

::: warning 注意！
この項目を満たせない場合、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::

### 【レベルA】[タイミング調整可能](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
フォームとかログインとかでよくある「一定期間入力がありませんでした、続けますか？」みたいな感じのやつを出すようにして、ユーザー側でコンテンツを引き続き利用できるか選択できる余地を与える。

### 【レベルA】[一時停止・停止・非表示](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-pause.html):warning:
ユーザーの任意のタイミングで一時停止や停止、および非表示を行うことができる

::: warning 注意！
利用者の気が散ってしまい、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::


## 音声のない動画がある
::: tip ポイント
* 書き起こしテキスト、音声解説、キャプションを提供
:::

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E9%9D%9E%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88)

### 【レベルA】[音声だけ・映像だけ（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E9%9F%B3%E5%A3%B0%E3%81%A0%E3%81%91%E6%98%A0%E5%83%8F%E3%81%A0%E3%81%91%EF%BC%88%E5%8F%8E%E9%8C%B2%E6%B8%88%E3%81%BF%EF%BC%89)

### 【レベルA】[タイミング調整可能](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E8%AA%BF%E6%95%B4%E5%8F%AF%E8%83%BD%EF%BC%88%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AB%E5%88%B6%E9%99%90%E6%99%82%E9%96%93%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88%EF%BC%89)

### 【レベルA】[一時停止・停止・非表示](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-pause.html):warning:
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E4%B8%80%E6%99%82%E5%81%9C%E6%AD%A2%E3%83%BB%E5%81%9C%E6%AD%A2%E3%83%BB%E9%9D%9E%E8%A1%A8%E7%A4%BA)


## 音声のある動画がある
::: tip ポイント
* 書き起こしテキスト、音声解説、キャプションを提供
:::

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E9%9D%9E%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88)

### 【レベルA】[キャプション（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-captions.html)

* オープンキャプションを提供する
* クローズドキャプションを提供する
* [track要素を利用する](https://developer.mozilla.org/ja/docs/Web/HTML/Element/track)

### 【レベルA】[音声解説またはメディアに対する代替コンテンツ（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html#alt-time-based-mediadef)

* 代替コンテンツへのリンクを配置する
* track要素を利用する

### 【レベルA】[音声の制御](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html):warning:
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E9%9F%B3%E5%A3%B0%E3%81%AE%E5%88%B6%E5%BE%A1)

### 【レベルA】[タイミング調整可能](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E8%AA%BF%E6%95%B4%E5%8F%AF%E8%83%BD%EF%BC%88%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AB%E5%88%B6%E9%99%90%E6%99%82%E9%96%93%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88%EF%BC%89)

### 【レベルA】[一時停止・停止・非表示](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-pause.html):warning:
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E4%B8%80%E6%99%82%E5%81%9C%E6%AD%A2%E3%83%BB%E5%81%9C%E6%AD%A2%E3%83%BB%E9%9D%9E%E8%A1%A8%E7%A4%BA)

### 【レベルAA】[音声解説（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html)
視覚的に解釈しづらい利用者のために、TVで言うところの「副音声」的役割の音声を提供する

## ライブ音声を提供
::: tip ポイント
* ライブ音声であることを明示
* 可能であれば、内容を文字情報として提供
:::

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E9%9D%9E%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88)

### 【レベルA】[音声の制御](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html):warning:
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E9%9F%B3%E5%A3%B0%E3%81%AE%E5%88%B6%E5%BE%A1)

## ライブ動画を提供
::: tip ポイント
* ライブ動画であることを明示
* キャプションを提供
:::

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E9%9D%9E%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88)

### 【レベルA】[音声の制御](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html):warning:
[詳細はこちら](/cheatsheet/media.html#%E3%80%90%E3%83%AC%E3%83%99%E3%83%ABa%E3%80%91%E9%9F%B3%E5%A3%B0%E3%81%AE%E5%88%B6%E5%BE%A1)

### 【レベルAA】[キャプション（ライブ）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html)
* キャプション付きウェブキャストを提供
* 同期したメディアに対してキャプションを作成する
