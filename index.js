/**
 * 获取URL中的查询字符串并解析为对象
 * @param  {String} url [可为空]
 * @return {Object} 查询字符串对象    [description]
 */
function getURLQueryObject(url) {
  if (url === null || url === undefined) {
    url = window.location.href;
  }

  var search = decodeURIComponent(url.substring(url.lastIndexOf('?') + 1));
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;

  search.replace(reg, (rs, $1, $2) => {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });

  return obj;
},
