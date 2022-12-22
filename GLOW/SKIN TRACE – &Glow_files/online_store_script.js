(function() {            
  function getCookie(cookieName) {
  const name = cookieName + "=";
  const ca = document.cookie.split(";");
  for(var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cookieName, cookieValue, daysUntilExpiration) {
  const date = new Date();
  date.setTime(date.getTime() + (daysUntilExpiration * 24 * 60 * 60 * 1000));
  const expires = "expires="+date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + "SameSite=None;" + expires + ";path=/;secure";
}
  function updateCartAttributes(irclickid) {
  return fetch('/cart/update.js', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      attributes: {
        irclickid
      }
    })
  }).then((response) => console.log(response.status))
  .catch(err => console.error(err))
}
  
  
  (function(a,b,c,d,e,f,g){e['ire_o']=c;e[c]=e[c]||function(){(e[c].a=e[c].a||[]).push(arguments)};f=d.createElement(b);g=d.getElementsByTagName(b)[0];f.async=1;f.src=a;g.parentNode.insertBefore(f,g);})('https://utt.impactcdn.com/A3828651-c09e-41ef-b3cf-4c0ebf67a30c1.js','script','ire',document,window);ire('identify');
  ire('generateClickId', function(clickId) {
    setCookie('irclickid', clickId, 30);
    updateCartAttributes(clickId);
  });
})();
