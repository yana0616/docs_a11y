module.exports = {
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['script', {}, `
      LUX=(function(){var a=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMarks)?LUX.gaMarks:[]);var d=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMeasures)?LUX.gaMeasures:[]);var j="LUX_start";var k=window.performance;var l=("undefined"!==typeof(LUX)&&LUX.ns?LUX.ns:(Date.now?Date.now():+(new Date())));if(k&&k.timing&&k.timing.navigationStart){l=k.timing.navigationStart}function f(){if(k&&k.now){return k.now()}var o=Date.now?Date.now():+(new Date());return o-l}function b(n){if(k){if(k.mark){return k.mark(n)}else{if(k.webkitMark){return k.webkitMark(n)}}}a.push({name:n,entryType:"mark",startTime:f(),duration:0});return}function m(p,t,n){if("undefined"===typeof(t)&&h(j)){t=j}if(k){if(k.measure){if(t){if(n){return k.measure(p,t,n)}else{return k.measure(p,t)}}else{return k.measure(p)}}else{if(k.webkitMeasure){return k.webkitMeasure(p,t,n)}}}var r=0,o=f();if(t){var s=h(t);if(s){r=s.startTime}else{if(k&&k.timing&&k.timing[t]){r=k.timing[t]-k.timing.navigationStart}else{return}}}if(n){var q=h(n);if(q){o=q.startTime}else{if(k&&k.timing&&k.timing[n]){o=k.timing[n]-k.timing.navigationStart}else{return}}}d.push({name:p,entryType:"measure",startTime:r,duration:(o-r)});return}function h(n){return c(n,g())}function c(p,o){for(i=o.length-1;i>=0;i--){var n=o[i];if(p===n.name){return n}}return undefined}function g(){if(k){if(k.getEntriesByType){return k.getEntriesByType("mark")}else{if(k.webkitGetEntriesByType){return k.webkitGetEntriesByType("mark")}}}return a}return{mark:b,measure:m,gaMarks:a,gaMeasures:d}})();LUX.ns=(Date.now?Date.now():+(new Date()));LUX.ac=[];LUX.cmd=function(a){LUX.ac.push(a)};LUX.init=function(){LUX.cmd(["init"])};LUX.send=function(){LUX.cmd(["send"])};LUX.addData=function(a,b){LUX.cmd(["addData",a,b])};LUX_ae=[];window.addEventListener("error",function(a){LUX_ae.push(a)});LUX_al=[];if("function"===typeof(PerformanceObserver)&&"function"===typeof(PerformanceLongTaskTiming)){var LongTaskObserver=new PerformanceObserver(function(c){var b=c.getEntries();for(var a=0;a<b.length;a++){var d=b[a];LUX_al.push(d)}});try{LongTaskObserver.observe({type:["longtask"]})}catch(e){}};
    `],
    ['script', {
      src: 'https://cdn.speedcurve.com/js/lux.js?id=776706153',
      async: '',
      defer: '',
      crossorigin: 'anonymous'
    }]
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
      {
        title: 'a11yを考慮したコーディング例まとめ',
        path: '/tips/',
        sidebarDrpth: 1,
        children: [
          { title: 'サイト全体で使えるやつ', path: '/tips/all.html' },
          { title: 'アコーディオン', path: '/tips/accordion.html' },
          { title: 'タブ', path: '/tips/tabs.html' },
          { title: 'フォーム', path: '/tips/form.html' },
          // { title: '', path: '/tips/' },
          // { title: '', path: '/tips/' },
          // { title: '', path: '/tips/' },
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