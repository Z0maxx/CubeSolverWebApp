(function(){"use strict";function e(t){const n=t.array,o=t.size,r=t.color;return n.filter((c,s)=>s%3==r).reduce((c,s)=>c+s)/o}self.addEventListener("message",t=>{postMessage(e(t.data))})})();
