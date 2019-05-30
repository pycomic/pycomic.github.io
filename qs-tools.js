// Extracts the query string and turns it into an object of key/value pairs.
function get_qs_context() {
    var query_string = window.location.search.substring(1);
    var kv_pairs = query_string.split('&');
    var result = {};
    for (var i = 0; i < kv_pairs.length; i++) {
        var kv_pair = kv_pairs[i].split('=');
        result[kv_pair[0]] = decodeURIComponent(kv_pair[1]);
    }
    return result;
}

// Get a value from the querystring for the given key.
function get_qs_value(key) {
    var context = get_qs_context();
    var keys = Object.keys(context);
    for (var i = 0; i < keys.length; i++) {
        if(key == keys[i]) {
            return context[key];
        }
    }
}

// Given a settings object of key/value pairs, will update the query string
// element of the URL accordingly.
function set_qs(settings) {
    var qs_array = [];
    var keys = Object.keys(settings);
    for(i=0; i<keys.length; i++) {
        var key = keys[i];
        var value = settings[key];
        qs_array.push(key + '=' + encodeURIComponent(value));
    }
    var old_url = window.location.href.split('?');
    var new_url = old_url[0] + '?' + qs_array.join('&');
    // shortener API
    var linkRequest = {
      destination: new_url,
      domain: { fullName: "rebrand.ly" }
    }

    var requestHeaders = {
      "Content-Type": "application/json",
      "apikey": "389c7869b56b4084a9749a2b3e1eba03"
    }

    $.ajax({
      url: "https://api.rebrandly.com/v1/links",
      type: "post",
      data: JSON.stringify(linkRequest),
      headers: requestHeaders,
      dataType: "json",
    }).done(function( data ) {
            console.log(data);
            $('#direct-link').attr('href', "https://" + data.shortUrl);
            $('#direct-link').text(data.shortUrl);
            $('#twitter-button').html('<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Check out this Python comic..!" data-via="ntoll" data-hashtags="pycomic" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
            twttr.widgets.load();
    });
}
