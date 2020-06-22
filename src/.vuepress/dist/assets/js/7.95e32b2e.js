(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{359:function(e,_,t){"use strict";t.r(_);var v=t(42),l=Object(v.a)({},(function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"webアクセシビリティ達成基準チートシート"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webアクセシビリティ達成基準チートシート"}},[e._v("#")]),e._v(" Webアクセシビリティ達成基準チートシート")]),e._v(" "),t("p",[e._v("レベルAおよびレベルAAを達成するために必要な対応について、Webサイトの内容にフィーチャーしてまとめます。"),t("br"),e._v("\nベースは\n"),t("a",{attrs:{href:"https://waic.jp/files/cheatsheet/waic_jis-x-8341-3_cheatsheet_201812.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("『JIS X 8341−3：2016 達成基準 早見表（レベルA＆AA）』"),t("OutboundLink")],1),e._v("\nです。")]),e._v(" "),t("h2",{attrs:{id:"フロント側ですぐに対応できそうな対応"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#フロント側ですぐに対応できそうな対応"}},[e._v("#")]),e._v(" フロント側ですぐに対応できそうな対応")]),e._v(" "),t("p",[e._v("下記対応をとってもらえれば、Webアクセシビリティ対応基準レベルAに配慮したコーディングが可能です。\n（レベルAを満たすための対応を網羅しているわけではないので悪しからず。。。）")]),e._v(" "),t("h3",{attrs:{id:"サイト全体・ページ全体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#サイト全体・ページ全体"}},[e._v("#")]),e._v(" サイト全体・ページ全体")]),e._v(" "),t("ul",[t("li",[e._v("WEBページを示した内容が、"),t("code",[e._v("<title>")]),e._v("タグを利用してマークアップされている\n"),t("ul",[t("li",[e._v("サイト名を含んだタイトルになっているとなお良し（ページタイトル｜サイト名）")]),e._v(" "),t("li",[e._v("metaデータも合わせて記述するとなお良し")])])]),e._v(" "),t("li",[e._v("意味のあるマークアップを行い、ページの構造化を図る\n"),t("ul",[t("li",[t("code",[e._v("<header>")]),e._v("や"),t("code",[e._v("<footer>")]),e._v("、"),t("code",[e._v("<main>")])]),e._v(" "),t("li",[t("code",[e._v("<article>")]),e._v("や"),t("code",[e._v("<section>")]),e._v("、"),t("code",[e._v("<nav>")]),e._v("や"),t("code",[e._v("<aside>")])]),e._v(" "),t("li",[t("code",[e._v("<h1>")]),e._v("などのhタグや、"),t("code",[e._v("<a>")]),e._v("、"),t("code",[e._v("<p>")]),e._v("なども")])])]),e._v(" "),t("li",[e._v("【デザイナーorディレクターと要相談】色がなくても、その情報が何を示しているか分かるような状態になっている\n"),t("ul",[t("li",[e._v("例）必須項目が赤文字で「＊」と表されている場合、「必須項目は、＊（アスタリスク）で表しています」などの表記が別に用意されている")])])]),e._v(" "),t("li",[e._v("意味のある順序に文書構造が並んでいる\n"),t("ul",[t("li",[e._v("NG例）「申し込みの流れ」というコンテンツで、見た目上では順番通り「1, 2, 3, 4」と並んでいるが、ソースコード上では「2, 1, 4, 3」という順番になっていて、CSSで順番を入れ替えている")]),e._v(" "),t("li",[e._v("flexやgridレイアウトを利用して、見た目をソースコードの記述順とは異なる順序にすることは可能だが、意味のある順序になるようにコーディングを")])])])]),e._v(" "),t("h3",{attrs:{id:"テキスト系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#テキスト系"}},[e._v("#")]),e._v(" テキスト系")]),e._v(" "),t("ul",[t("li",[e._v("【デザイナーと要相談】テキストリンクについて、普通のテキストと見分けをつける\n"),t("ul",[t("li",[e._v("下線が引かれている、色がついている")]),e._v(" "),t("li",[e._v("普通のテキストに下線がつく仕様があった場合は、ハイライトにするとか太字にするとか、他の強調方法を提示したほうがいい（リンクのデフォルトは青文字下線なので、それが基本と考える）")])])]),e._v(" "),t("li",[e._v("テキストリンクについて、内容がリンク先の内容を明確に示すものになっている\n"),t("ul",[t("li",[t("code",[e._v("<a>")]),e._v("の中身やtitle属性で、リンク先の内容について説明されている")])])])]),e._v(" "),t("h3",{attrs:{id:"画像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#画像"}},[e._v("#")]),e._v(" 画像")]),e._v(" "),t("ul",[t("li",[e._v("コンテンツ内で意味のある画像については、alt属性を入れる\n"),t("ul",[t("li",[e._v("alt属性には「その画像（図表）が何を示しているか」の説明内容を入れる")]),e._v(" "),t("li",[e._v("デバイステキストにかかれている内容と全く同じ内容はあまり入れないほうが良い（読み上げソフトだと同じ内容が二度読み上げられることになる）")])])]),e._v(" "),t("li",[e._v("【デザイナーと要相談】文字が画像になっている場合は、webフォントなどを利用してデバイステキストにすることを検討する\n"),t("ul",[t("li",[e._v("特定の書体・サイズ・色などでは、利用者にとってはテキストが読みづらい場合があるので、変更できるようにする")])])])]),e._v(" "),t("h3",{attrs:{id:"フォーム系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#フォーム系"}},[e._v("#")]),e._v(" フォーム系")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("<label>")]),e._v("を利用することで、入力欄に何を入力すればいいのかの説明を示す")]),e._v(" "),t("li",[e._v("【デザイナーと要相談】入力および選択項目についても、フォーカス時のスタイルを記述する（キーボード操作で問題なく入力・送信ができるようにしておく）")]),e._v(" "),t("li",[e._v("複数入力項目がある場合はグルーピングする\n"),t("ul",[t("li",[t("code",[e._v("<fieldset>")]),e._v("と"),t("code",[e._v("<legend>")]),e._v("を利用\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/ja/docs/Web/HTML/Element/fieldset",target:"_blank",rel:"noopener noreferrer"}},[e._v("fieldset要素について"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/ja/docs/Web/HTML/Element/legend",target:"_blank",rel:"noopener noreferrer"}},[e._v("lagend要素について"),t("OutboundLink")],1)])])])])]),e._v(" "),t("li",[e._v("エラーメッセージをテキストで分かりやすく明記する\n"),t("ul",[t("li",[e._v("エラーが出たらフォーカスをエラー箇所に合わせるとなお良し")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute",target:"_blank",rel:"noopener noreferrer"}},[e._v("aria-invalid属性"),t("OutboundLink")],1),e._v("を利用")])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);