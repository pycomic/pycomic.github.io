// Used to store global state for building the query string.
var QS = {};

// Given a context will set the various elements in the comic strip to reflect
// the state described therein.
function update_scene(context) {
    // Set the title and author.
    if(context.title) {
        $('#title').text(context.title);
    } else {
        $('#title').text('Python FTW');
    }
    if(context.author) {
        $('#author').text(context.author);
    } else {
        $('#author').text('Anonymous Author');
    }
    // Set the backgrounds.
    if(context.bg1) {
        $('#bg1').show();
        if(context.bg1 === 'random') {
            $('#bg1').attr('src', 'http://lorempixel.com/240/240/?v=1');
        } else {
            $('#bg1').attr('src', context.bg1);
        }
    } else {
        $('#bg1').hide();
    }
    if(context.bg2) {
        $('#bg2').show();
        if(context.bg2 === 'random') {
            $('#bg2').attr('src', 'http://lorempixel.com/240/240/?v=2');
        } else {
            $('#bg2').attr('src', context.bg2);
        }
    } else {
        $('#bg2').hide();
    }
    if(context.bg3) {
        $('#bg3').show();
        if(context.bg3 === 'random') {
            $('#bg3').attr('src', 'http://lorempixel.com/240/240/?v=3');
        } else {
            $('#bg3').attr('src', context.bg3);
        }
    } else {
        $('#bg3').hide();
    }
    // Set the snakes.
    if(context.s1) {
        if(context.s1==='both') {
            $('#pane1').addClass('left-python-yellow right-python-blue');
        } else if(context.s1==='yellow') {
            $('#pane1').addClass('left-python-yellow');
        } else if(context.s1==='blue') {
            $('#pane1').addClass('right-python-blue');
        } else {
            $('#pane1').removeClass();
        }
    }
    if(context.s2) {
        if(context.s2==='both') {
            $('#pane2').addClass('left-python-yellow right-python-blue');
        } else if(context.s2==='yellow') {
            $('#pane2').addClass('left-python-yellow');
        } else if(context.s2==='blue') {
            $('#pane2').addClass('right-python-blue');
        } else {
            $('#pane1').removeClass();
        }
    }
    if(context.s3) {
        if(context.s3==='both') {
            $('#pane3').addClass('left-python-yellow right-python-blue');
        } else if(context.s3==='yellow') {
            $('#pane3').addClass('left-python-yellow');
        } else if(context.s3==='blue') {
            $('#pane3').addClass('right-python-blue');
        } else {
            $('#pane1').removeClass();
        }
    }
    // Headers
    if(context.h1) {
        $('#header1').show();
        $('#header1').text(context.h1);
    } else {
        $('#header1').hide();
    }
    if(context.h2) {
        $('#header2').show();
        $('#header2').text(context.h1);
    } else {
        $('#header2').hide();
    }
    if(context.h3) {
        $('#header3').show();
        $('#header3').text(context.h1);
    } else {
        $('#header3').hide();
    }
    // Speech bubbles
    if(context.lt1) {
        $('#pane1 .bubble-top').show();
        $('#pane1 .bubble-top').text(context.lt1);
    } else {
        $('#pane1 .bubble-top').hide();
    }
    if(context.lb1) {
        $('#pane1 .bubble-bottom').show();
        $('#pane1 .bubble-bottom').text(context.lb1);
    } else {
        $('#pane1 .bubble-bottom').hide();
    }
    if(context.rt1) {
        $('#pane1 .bubble-top.right').show();
        $('#pane1 .bubble-top.right').text(context.rt1);
    } else {
        $('#pane1 .bubble-top.right').hide();
    }
    if(context.rb1) {
        $('#pane1 .bubble-bottom.right').show();
        $('#pane1 .bubble-bottom.right').text(context.rb1);
    } else {
        $('#pane1 .bubble-bottom.right').hide();
    }
    if(context.lt2) {
        $('#pane2 .bubble-top').show();
        $('#pane2 .bubble-top').text(context.lt2);
    } else {
        $('#pane2 .bubble-top').hide();
    }
    if(context.lb2) {
        $('#pane2 .bubble-bottom').show();
        $('#pane2 .bubble-bottom').text(context.lb2);
    } else {
        $('#pane2 .bubble-bottom').hide();
    }
    if(context.rt2) {
        $('#pane2 .bubble-top.right').show();
        $('#pane2 .bubble-top.right').text(context.rt2);
    } else {
        $('#pane2 .bubble-top.right').hide();
    }
    if(context.rb2) {
        $('#pane2 .bubble-bottom.right').show();
        $('#pane2 .bubble-bottom.right').text(context.rb2);
    } else {
        $('#pane2 .bubble-bottom.right').hide();
    }
    if(context.lt3) {
        $('#pane3 .bubble-top').show();
        $('#pane3 .bubble-top').text(context.lt3);
    } else {
        $('#pane3 .bubble-top').hide();
    }
    if(context.lb3) {
        $('#pane3 .bubble-bottom').show();
        $('#pane3 .bubble-bottom').text(context.lb3);
    } else {
        $('#pane3 .bubble-bottom').hide();
    }
    if(context.rt3) {
        $('#pane3 .bubble-top.right').show();
        $('#pane3 .bubble-top.right').text(context.rt3);
    } else {
        $('#pane3 .bubble-top.right').hide();
    }
    if(context.rb3) {
        $('#pane3 .bubble-bottom.right').show();
        $('#pane3 .bubble-bottom.right').text(context.rb3);
    } else {
        $('#pane3 .bubble-bottom.right').hide();
    }
}

// Add various UI controls for updating the output of the device.
function setup_editor() {
    $('#direct-link').show();
    $('#home-link').hide();
    // Show the controls.
    $('.controls').show();
    // Ensure the form never submits.
    $('#control-form').submit(function(e) {
        return false;
    });
}

// Use arguments from the query string to setup the device to behave in certain
// ways.
function setup_from_url() {
    QS = get_qs_context();
    update_scene(QS);
    $('#direct-link').hide();
    $('#home-link').show();
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
