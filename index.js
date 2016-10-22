let rainbowdashImg = "http://img06.deviantart.net/3be1/i/2012/054/f/3/rainbow_dash_icon_by_lockhe4rt-d4qoms7.png";

// Felix default copyright text
let lovebyCopyright = document.querySelector(".lovebyCopyright");
lovebyCopyright.innerHTML = 'Create :rainbowdash: and love by <b><a href="https://twitter.com/felixfong227" target="_blank">@felixfong227</a></b>';
lovebyCopyright.innerHTML = lovebyCopyright.innerHTML.replace(`:rainbowdash:`,`<img src="${rainbowdashImg}" title="rainbowdash" style="height:1em;width:1em;"/>`);
