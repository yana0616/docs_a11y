module.exports = {
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],
  locales: {
    '/': {
      lang: 'ja',
      title: 'Webアクセシビリティまとめ'
    }
  },
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Webアクセシビリティとは？', link: '/about/' },
    //   { text: 'チートシート', link: '/cheatsheet/' },
    // ],
    search: false,
    sidebar: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Webアクセシビリティとは？',
        path: '/about/'
      },
      {
        title: 'Web a11y達成基準まとめ',
        path: '/cheatsheet/',
        // collapsable: false,
        sidebarDepth: 1,
        children: [
          { title: 'トップ', path: '/cheatsheet/' },
          { title: 'サイト全体・ページ全体', path: '/cheatsheet/all.html' },
          { title: '動画・音声', path: '/cheatsheet/media.html' },
          { title: 'テキスト', path: '/cheatsheet/text.html' },
          { title: '制限時間つきコンテンツ', path: '/cheatsheet/limit.html' },
          { title: '画像', path: '/cheatsheet/picture.html' },
          { title: '感覚的特徴', path: '/cheatsheet/features.html' },
          { title: 'フォーム', path: '/cheatsheet/form.html' }
        ]
      },

    ]
  }
  // plugins: [
  //   // you can use it multiple times
  //   // so babel-style may be a better choice
  //   ['container', {
  //     type: 'right',
  //     defaultTitle: '',
  //   }],
  //   ['container', {
  //     type: 'theorem',
  //     before: info => `<div class="theorem"><p class="title">${info}</p>`,
  //     after: '</div>',
  //   }],
  // ]
}