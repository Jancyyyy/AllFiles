// in this we will url 
const { join } = require('path');
var url=require('url');
var adrs='https://github.com/jancy/goud'
var a=url.parse(adrs,true);
console.log(a.host);
console.log(a.pathname);
console.log(a.search);