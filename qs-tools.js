// Get a value from the querystring for the given key.
function get_qs_value(key) {
    var query_string = window.location.search.substring(1);
    var kv_pairs = query_string.split('&');
    for (var i = 0; i < kv_pairs.length; i++) {
        var kv_pair = kv_pairs[i].split('=');
        if (kv_pair[0] == key) {
            return kv_pair[1];
        }
    }
}

