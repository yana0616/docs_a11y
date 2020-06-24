---
title: 音声・動画｜Web a11y達成基準まとめ
---

# 音声・動画

::: tip ポイント
* 同等の目的を果たすテキストコンテンツを提供
* 動画や音声の自動再生は避ける
* 利用者が任意に停止できる機能を提供
:::

## 音声のみを提供

* 書き起こしテキストを用意する

<a name="textcontents">&nbsp;</a>

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)

ライブ音声しか含まないコンテンツや動画コンテンツは、それを視聴しなくても理解できるような、代替コンテンツや説明コンテンツを提供する

<a name="mediaonly">&nbsp;</a>

### 【レベルA】[音声だけ・映像だけ（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
説明できるような代替コンテンツ（書き起こしテキストなど）を用意する

### 【レベルA】[音声の制御](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html):warning:
利用者側で制御できるような対応を作る

* ページを開いたときに自動再生される場合、音をミュートにする機能がついている
* そもそも自動再生させない（再生ボタンを設置し、任意で再生してもらう）

::: warning 注意！
この項目を満たせない場合、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::

### 【レベルA】[タイミング調整可能](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
音声や映像のスピードを調整したり、一時停止ができるようにする

### 【レベルA】[一時停止・停止・非表示](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-pause.html):warning:
利用者の任意のタイミングで一時停止や停止、および非表示を行うことができる

::: warning 注意！
利用者の気が散ってしまい、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::


## 音声なし動画を提供
::: tip ポイント
* 書き起こしテキスト、音声解説、キャプションを提供
:::

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)
ライブ音声しか含まないコンテンツや動画コンテンツは、それを視聴しなくても理解できるような、代替コンテンツや説明コンテンツを提供する

### 【レベルA】[音声だけ・映像だけ（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
説明できるような代替コンテンツ（書き起こしテキストなど）を用意する

### 【レベルA】[タイミング調整可能](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
音声や映像のスピードを調整したり、一時停止ができるようにする

### 【レベルA】[一時停止・停止・非表示](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-pause.html):warning:
利用者の任意のタイミングで一時停止や停止、および非表示を行うことができる

::: warning 注意！
利用者の気が散ってしまい、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::


## 音声あり動画を提供
::: tip ポイント
* 書き起こしテキスト、音声解説、キャプションを提供
:::

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)
ライブ音声しか含まないコンテンツや動画コンテンツは、それを視聴しなくても理解できるような、代替コンテンツや説明コンテンツを提供する

### 【レベルA】[キャプション（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-captions.html)

* オープンキャプションを提供する
* クローズドキャプションを提供する
* [track要素を利用する](https://developer.mozilla.org/ja/docs/Web/HTML/Element/track)

### 【レベルA】[音声解説またはメディアに対する代替コンテンツ（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html#alt-time-based-mediadef)

* 代替コンテンツへのリンクを配置する
* track要素を利用する

### 【レベルA】[音声の制御](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html):warning:
利用者側で制御できるような対応を作る

* ページを開いたときに自動再生される場合、音をミュートにする機能がついている
* そもそも自動再生させない（再生ボタンを設置し、任意で再生してもらう）

::: warning 注意！
この項目を満たせない場合、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::

### 【レベルA】[タイミング調整可能](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
音声や映像のスピードを調整したり、一時停止ができるようにする

### 【レベルA】[一時停止・停止・非表示](https://waic.jp/docs/UNDERSTANDING-WCAG20/time-limits-pause.html):warning:
利用者の任意のタイミングで一時停止や停止、および非表示を行うことができる

::: warning 注意！
利用者の気が散ってしまい、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::

### 【レベルAA】[音声解説（収録済み）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html)
視覚的に解釈しづらい利用者のために、TVで言うところの「副音声」的役割の音声を提供する

## ライブ音声を提供
::: tip ポイント
* ライブ音声であることを明示
* 可能であれば、内容を文字情報として提供
:::

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)
ライブ音声しか含まないコンテンツや動画コンテンツは、それを視聴しなくても理解できるような、代替コンテンツや説明コンテンツを提供する

### 【レベルA】[音声の制御](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html):warning:
利用者側で制御できるような対応を作る

* ページを開いたときに自動再生される場合、音をミュートにする機能がついている
* そもそも自動再生させない（再生ボタンを設置し、任意で再生してもらう）

::: warning 注意！
この項目を満たせない場合、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::

## ライブ動画を提供
::: tip ポイント
* ライブ動画であることを明示
* キャプションを提供
:::

### 【レベルA】[非テキストコンテンツ](https://waic.jp/docs/UNDERSTANDING-WCAG20/text-equiv-all.html)
ライブ音声しか含まないコンテンツや動画コンテンツは、それを視聴しなくても理解できるような、代替コンテンツや説明コンテンツを提供する

### 【レベルA】[音声の制御](https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html):warning:
利用者側で制御できるような対応を作る

* ページを開いたときに自動再生される場合、音をミュートにする機能がついている
* そもそも自動再生させない（再生ボタンを設置し、任意で再生してもらう）

::: warning 注意！
この項目を満たせない場合、アクセスを妨げる可能性があるので、必ず達成基準を満たす必要あり！
:::

### 【レベルAA】[キャプション（ライブ）](https://waic.jp/docs/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html)
* キャプション付きウェブキャストを提供
* 同期したメディアに対してキャプションを作成する
