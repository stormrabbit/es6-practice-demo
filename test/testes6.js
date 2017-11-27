import  window from "global/window";
import global from "global";
import document from "global/document";
// var window = require("global/window")
// const Ajax = {
//   get: function(url, fn) {
//     const httpUtils = window.XMLHttpRequest
//     httpUtils.open('GET', url, true);
//     httpUtils.onreadystatechange = function() {
//       if(httpUtils.readyState === 4 && httpUtils.status === 200 || httpUtils.status === 304) {
//         fn.call(this, httpUtils.responseText);
//       }
//     }
//     httpUtils.send();
//   } 
// }


console.log('window==>', window.toString());
console.log('global==>', global.XMLHttpRequest);
console.log('document==>', document.XMLHttpRequest);
// Ajax.get(`http://localhost:3000/users?id=123&name=cat`)