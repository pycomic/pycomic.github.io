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
    var url = "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyB2_Cwh5lKUX4a681ZERd3FAt8ijdwbukk";
    $.ajax(url, {
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
            longUrl: new_url
        })
    }).done(function( data ) {
        console.log(data);
        $('#direct-link').attr('href', data.id);
        $('#direct-link').text(data.id);
        $('#twitter-button').html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + data.id +'" data-text="Check out this cool Python programming comic..! :-)" data-via="ntoll" data-hashtags="pycomic" data-dnt="true">Tweet</a>');
        twttr.widgets.load();
    });
}
