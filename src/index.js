/*  eslint linebreak-style: ["error", "windows"]    */
/*  eslint max-len: ["error", 150]   */

const rainbowdashImg = 'http://img06.deviantart.net/3be1/i/2012/054/f/3/rainbow_dash_icon_by_lockhe4rt-d4qoms7.png';

const lovebyCopyright = document.createElement('p');

lovebyCopyright.id = 'lovebyCopyright';

const rainbowDashEmoji = `<div id="rainbowDashEmoji" style="
    background: url('${rainbowdashImg}'); 
    width: 1em;
    height: 1em;
    background-size: cover;
    display: inline-block;
"></div>`;

// Create a basic container of the copy right
lovebyCopyright.innerHTML = 'Create :rainbowdash: and love by <b><a href="https://twitter.com/felixfong227" target="_blank">@felixfong227</a></b>';

// Replace the emoji
lovebyCopyright.innerHTML = lovebyCopyright.innerHTML.replace(/:rainbowdash:/igm, rainbowDashEmoji);


// Append the copy right to the DOM
document.body.appendChild(lovebyCopyright);
