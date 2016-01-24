Array.prototype.extend = function (other_array) {
    other_array.forEach(function(v) {this.push(v)}, this);
}

// Used to hold timeouts used in scrolling effect.
var TIMEOUTS = [];

// Used to store global state for building the query string.
var QS = {};

// Twinkle some LEDs
function twinkle() {
    var led1 = 'led-' + Math.floor(Math.random() * 5).toString() +
        '-' + Math.floor(Math.random() * 5).toString();
    var led2 = 'led-' + Math.floor(Math.random() * 5).toString() +
        '-' + Math.floor(Math.random() * 5).toString();
    $('svg rect[id= '+led1+' ]' ).attr({class:'on-' + Math.floor(Math.random()
        * 10).toString()});
    $('svg rect[id= '+led2+' ]' ).attr({class:''});
}


// Given the X and Y coordinates of a pixel and an associated value between
// 0 (off) and 9 (brightest) update the LED at that position in the display.
// If greyscale is not true then any non-zero value will be brightest.
function pixel(x, y, value, greyscale) {
    var p = $('svg rect[id=led-' + x + '-' + y + ']')
    if(value > 0) {
        if(greyscale) {
            p.attr({class: 'on-' + value.toString()});
        } else {
            p.attr({class: 'on-9'});
        }
    } else {
        p.attr({class: 'led-off'});
    }
}

// Show a certain image. If greyscale flag is true then LED can be set to
// values between 0 (off) and 9 (brightest).
function show(image, greyscale) {
    for(y=0; y<image.length; y++) {
        var row = image[y];
        for(x=0; x<row.length; x++) {
            pixel(x, y, row[x], greyscale);
        }
    }
}

// Update the "flavour" (i.e. colour scheme) of the micro:bit to some
// pre-defined named flavour (see the style.css file).
function set_flavour(flavour) {
    $('.microbit-svg .flavour').attr('class', 'flavour ' + flavour)
    QS['flavour'] = flavour;
}

// Set if a crocodile clip is to be connected to the referenced pin.
function crocodile(pin_name, connected) {
    var pin = $('.' + pin_name);
    if(connected) {
        pin.show();
        QS[pin_name] = 1;
    } else {
        pin.hide();
        delete QS[pin_name];
    }
}

// Given some text, will scroll it across the LED matrix of the micro:bit. The
// interval defines the period of time between each frame of the animation that
// makes the text scroll.
function scroll_text(text, interval, repeat) {
    if(!interval) {
        interval = 100;
    }
    var raw_chars = [];
    if(repeat) {
        text = ' ' + text.trim();
    } else {
        text = ' ' + text.trim() + ' ';
    }
    for(i=0; i<text.length; i++) {
        var c = text[i];
        raw_chars.push(font[c]);
    }
    var row0 = [];
    var row1 = [];
    var row2 = [];
    var row3 = [];
    var row4 = [];
    for(i=0; i<raw_chars.length; i++) {
        var c = raw_chars[i];
        row0.extend(c[0])
        row1.extend(c[1])
        row2.extend(c[2])
        row3.extend(c[3])
        row4.extend(c[4])
    }
    var left = 0;
    var right = 5;
    var when = interval;
    for(i=0; i<row0.length; i++) {
        var image = []
        image[0] = row0.slice(left, right);
        image[1] = row1.slice(left, right);
        image[2] = row2.slice(left, right);
        image[3] = row3.slice(left, right);
        image[4] = row4.slice(left, right);
        TIMEOUTS.push(window.setTimeout(show, when, image));
        left++;
        right++;
        when+=interval;
    }
    if(repeat) {
        TIMEOUTS.push(window.setTimeout(scroll_text, when, text, interval, repeat));
    }
}

// Add various UI controls for updating the output of the device.
function setup_editor() {
    // Show the controls.
    $('.controls').show();
    // Ensure the form never submits.
    $('#control-form').submit(function(e) {
        return false;
    });
    // Set up the colour scheme for the device.
    set_flavour('banana');
    $('#flavour').change(function() {
        var flavour = $(this).find("option:selected").attr('value');
        set_flavour(flavour);
    });
    // Ensure that Crocodile clips can be toggled on the device.
    $(':checkbox').change(function() {
        crocodile(this.name, this.checked);
    });
    // Built in images and fonts
    var image_names = Object.keys(images);
    for(i=0; i<image_names.length; i++) {
        var name = image_names[i];
        $('#images').append('<option value="'+name+'">'+name+'</option>');
    }
    var char_names = Object.keys(font);
    for(i=0; i<char_names.length; i++) {
        var name = char_names[i];
        $('#images').append('<option value="'+name+'">'+name+'</option>');
    }
    $('#images').change(function() {
        var image = $(this).find("option:selected").attr('value');
        if(images[image]) {
            show(images[image]);
            if(image == 'clear') {
                delete QS['image'];
            } else {
                QS['image'] = image;
                delete QS['scroll'];
            }
        } else {
            show(font[image])
        }
    });
    // Button clicks
    $('#button-a').click(function(e) {
        console.log("Button A clicked");
    });
    $('#button-b').click(function(e) {
        console.log("Button B clicked");
    });
    // Text scrolling
    $('#start_scroll').click(function(e) {
        for(i=0; i<TIMEOUTS.length; i++) {
            window.clearTimeout(TIMEOUTS[i]);
        }
        TIMEOUTS = [];
        var text = $('#scroll').val().trim();
        var repeat = $('#repeat')[0].checked;
        if(text.length > 0) {
            scroll_text(text, 100, repeat);
            QS['scroll'] = text;
            QS['repeat'] = repeat;
            delete QS['image'];
        } else {
            alert("You must enter some text!");
        }
    });
    // Reset the form and state.
    $('#reset').click(function(e) {
        QS = {};
        show(images['clear']);
        set_flavour('banana');
        crocodile('pin-0', false);
        crocodile('pin-1', false);
        crocodile('pin-2', false);
        crocodile('pin-3v', false);
        crocodile('pin-gnd', false);
    });
    // Update the target when the direct link is clicked.
    $('#direct-button').click(function(e) {
        set_qs(QS);
    });
}

// Use arguments from the query string to setup the device to behave in certain
// ways.
function setup_from_url() {
    var flavour = get_qs_value("flavour");
    var p0 = get_qs_value("pin-0");
    var p1 = get_qs_value("pin-1");
    var p2 = get_qs_value("pin-2");
    var p3v = get_qs_value("pin-3v");
    var pgnd = get_qs_value("pin-gnd");
    var image = get_qs_value("image");
    var message = get_qs_value("scroll");
    var repeat = get_qs_value("repeat");
    if(flavour) {
        set_flavour(flavour);
    }
    if(p0) {
        crocodile('pin-0', true);
    }
    if(p1) {
        crocodile('pin-1', true);
    }
    if(p2) {
        crocodile('pin-2', true);
    }
    if(p3v) {
        crocodile('pin-3v', true);
    }
    if(pgnd) {
        crocodile('pin-gnd', true);
    }
    if(image) {
        if(images[image]) {
            show(images[image]);
        } else {
            show(font[image])
        }
    } else if(message) {
        if(repeat) {
            scroll_text(decodeURIComponent(message), 100, true);
        } else {
            scroll_text(decodeURIComponent(message));
        }
    }
}

// Run on start-up
$(document).ready(function() {
    var querystring = window.location.search.substring(1);
    // If there's something in the URL's querystring, use it to display the
    // device as specified therein.
    if(querystring) {
        setup_from_url();
    } else {
        // Otherwise, show some UI to allow people to edit their own settings.
        setup_editor();
    };
});
