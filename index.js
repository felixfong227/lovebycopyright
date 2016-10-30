const rainbowdashImg = "http://img12.deviantart.net/d2a8/i/2013/040/d/e/rainbow_dash_halloween_by_naaieditions-d5uc04m.png";

// Felix default copyright text
const lovebyCopyright = document.querySelector(".lovebyCopyright");
lovebyCopyright.innerHTML = 'Create :rainbowdash: and love by <b><a href="https://twitter.com/felixfong227" target="_blank">@felixfong227</a></b>';
lovebyCopyright.innerHTML = lovebyCopyright.innerHTML.replace(`:rainbowdash:`,`<img src="${rainbowdashImg}" title="rainbowdash" style="height:1em;width:1em;"/>`);