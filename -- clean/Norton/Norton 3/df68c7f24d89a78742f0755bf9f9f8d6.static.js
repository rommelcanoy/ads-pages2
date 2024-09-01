class outboundLink {
  static getUrlVars = () => {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }

  static buildUrl = () => {
    var domain = outboundLink.getUrlVars()['domain'];
    var hash = outboundLink.getUrlVars()['hash'];
    var action = outboundLink.getUrlVars()['action'];

    var s1 = outboundLink.getUrlVars()['s1'];
    var s2 = outboundLink.getUrlVars()['s2'];
    var s3 = outboundLink.getUrlVars()['s3'];

    if ( !s1) {
      s1 = outboundLink.getUrlVars()['affiliate'];
    }

    if ( !s2 ) {
      s2 = outboundLink.getUrlVars()['click'];
    }

    if ( !s3 ) {
      s3 = outboundLink.getUrlVars()['subaffiliate'];
    }

    if (!s1){
      s1 = 'null';
    }
    if (!s2){
      s2 = 'null';
    }
    if (!s3){
      s3 = 'null';
    }

    domain = 'totalav.com';
    hash = '62ecea034e6f2';
    action = 'click';

    if (domain === undefined) {
      return "#";
    }

    return "https://url." + domain + "/" + hash + "/" + action + "/" + s1 + "/" + s2 + "/" + s3;
    // return "https://url." + domain + "/" + hash + "/" + action + "/" + s1 + "/" + s2 + "/" + s3 + "/?affiliate="+s1+"&click="+s2+"&subaffiliate="+s3+"";
  }

  static removeUrlVars = () => {
    var uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
      // var clean_uri = uri.substring(0, uri.indexOf("?"));
      // window.history.replaceState({}, document.title, clean_uri);
    }
  }

  static getOutboundLink = () => {
    const link = outboundLink.buildUrl()
    outboundLink.removeUrlVars()
    return link
  }
}