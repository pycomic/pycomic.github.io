// Used to store global state for building the query string.
var QS = {};

// Given a context will set the various elements in the comic strip to reflect
// the state described therein.
function update_scene(context) {
    // Set the title and author.
    if(context.title) {
        $('#title').text(context.title);
    } else {
        $('#title').text('Un-named Comic (Click to edit)');
    }
    if(context.author) {
        $('#author').text(context.author);
    } else {
        $('#author').text('Anonymous (Click to edit)');
    }
    // Set the backgrounds.
    if(context.bg1) {
        $('#bg1').show();
        $('#code1').hide();
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
        $('#code2').hide();
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
        $('#code3').hide();
        if(context.bg3 === 'random') {
            $('#bg3').attr('src', 'http://lorempixel.com/240/240/?v=3');
        } else {
            $('#bg3').attr('src', context.bg3);
        }
    } else {
        $('#bg3').hide();
    }
    // Set the code examples.
    if(context.code1) {
        $('#bg1').hide();
        $('#code1').show();
        $('#code1 code').text(context.code1);
    } else {
        $('#code1').hide();
    }
    if(context.code2) {
        $('#bg2').hide();
        $('#code2').show();
        $('#code2 code').text(context.code2);
    } else {
        $('#code2').hide();
    }
    if(context.code3) {
        $('#bg3').hide();
        $('#code3').show();
        $('#code3 code').text(context.code3);
    } else {
        $('#code3').hide();
    }
    // Set the snakes.
    $('#pane1').removeClass();
    $('#pane2').removeClass();
    $('#pane3').removeClass();
    if(context.s1) {
        if(context.s1==='both') {
            $('#pane1').addClass('left-python-yellow right-python-blue');
        } else if(context.s1==='yellow') {
            $('#pane1').addClass('left-python-yellow');
        } else if(context.s1==='blue') {
            $('#pane1').addClass('right-python-blue');
        }
    }
    if(context.s2) {
        if(context.s2==='both') {
            $('#pane2').addClass('left-python-yellow right-python-blue');
        } else if(context.s2==='yellow') {
            $('#pane2').addClass('left-python-yellow');
        } else if(context.s2==='blue') {
            $('#pane2').addClass('right-python-blue');
        }
    }
    if(context.s3) {
        if(context.s3==='both') {
            $('#pane3').addClass('left-python-yellow right-python-blue');
        } else if(context.s3==='yellow') {
            $('#pane3').addClass('left-python-yellow');
        } else if(context.s3==='blue') {
            $('#pane3').addClass('right-python-blue');
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
        $('#header2').text(context.h2);
    } else {
        $('#header2').hide();
    }
    if(context.h3) {
        $('#header3').show();
        $('#header3').text(context.h3);
    } else {
        $('#header3').hide();
    }
    // Speech bubbles
    if(context.lt1) {
        $('#pane1 .bubble-top').show();
        $('#pane1 .bubble-top p').text(context.lt1);
    } else {
        $('#pane1 .bubble-top').hide();
    }
    if(context.lb1) {
        $('#pane1 .bubble-bottom').show();
        $('#pane1 .bubble-bottom p').text(context.lb1);
    } else {
        $('#pane1 .bubble-bottom').hide();
    }
    if(context.rt1) {
        $('#pane1 .bubble-top.right').show();
        $('#pane1 .bubble-top.right p').text(context.rt1);
    } else {
        $('#pane1 .bubble-top.right').hide();
    }
    if(context.rb1) {
        $('#pane1 .bubble-bottom.right').show();
        $('#pane1 .bubble-bottom.right p').text(context.rb1);
    } else {
        $('#pane1 .bubble-bottom.right').hide();
    }
    if(context.lt2) {
        $('#pane2 .bubble-top').show();
        $('#pane2 .bubble-top p').text(context.lt2);
    } else {
        $('#pane2 .bubble-top').hide();
    }
    if(context.lb2) {
        $('#pane2 .bubble-bottom').show();
        $('#pane2 .bubble-bottom p').text(context.lb2);
    } else {
        $('#pane2 .bubble-bottom').hide();
    }
    if(context.rt2) {
        $('#pane2 .bubble-top.right').show();
        $('#pane2 .bubble-top.right p').text(context.rt2);
    } else {
        $('#pane2 .bubble-top.right').hide();
    }
    if(context.rb2) {
        $('#pane2 .bubble-bottom.right').show();
        $('#pane2 .bubble-bottom.right p').text(context.rb2);
    } else {
        $('#pane2 .bubble-bottom.right').hide();
    }
    if(context.lt3) {
        $('#pane3 .bubble-top').show();
        $('#pane3 .bubble-top p').text(context.lt3);
    } else {
        $('#pane3 .bubble-top').hide();
    }
    if(context.lb3) {
        $('#pane3 .bubble-bottom').show();
        $('#pane3 .bubble-bottom p').text(context.lb3);
    } else {
        $('#pane3 .bubble-bottom').hide();
    }
    if(context.rt3) {
        $('#pane3 .bubble-top.right').show();
        $('#pane3 .bubble-top.right p').text(context.rt3);
    } else {
        $('#pane3 .bubble-top.right').hide();
    }
    if(context.rb3) {
        $('#pane3 .bubble-bottom.right').show();
        $('#pane3 .bubble-bottom.right p').text(context.rb3);
    } else {
        $('#pane3 .bubble-bottom.right').hide();
    }
}

// Given a potential text item, will check and set it in the context for the
// named field, or else remove it from the context.
function check_item(item, context, field_name) {
    if(item.trim()) {
        context[field_name] = item.trim();
    } else {
        delete context[field_name];
    }
}

// Add various UI controls for updating the output of the device.
function setup_editor() {
    $('#editor-help').show();
    $('#home-link').hide();
    // Set text fields contenteditable.
    $('#title').attr('contenteditable', 'true');
    $('#author').attr('contenteditable', 'true');
    $('.textual').attr('contenteditable', 'true');
    // Clicking on sections drops you into edit mode.
    $('.edit-me').click(function(e) {
        var target_pane = e.target.id.slice(-1); // get the pane number.
        var template = $('#form-template').html();
        Mustache.parse(template);
        var context = {
            target_pane: target_pane,
            backgrounds: Object.keys(BACKGROUNDS).sort()
        };
        vex.open({
            content: Mustache.render(template, context),
            afterOpen: function(vexContent) {
                // Set up form state.
                if(QS['h'+target_pane]) {
                    $('#form-heading')[0].checked = true;
                }
                if(QS['bg'+target_pane]) {
                } else if (QS['code'+target_pane]) {
                }

                // Event handling.
                $(vexContent).find('#form-background').change(function(e) {
                    var bg = $(this).find("option:selected").attr('value');
                    if(bg==='custom') {
                        $('.custom-image').show();
                    } else {
                        $('.custom-image').hide();
                    }
                });
                $(vexContent).find('#pane-edit').change(function(e) {
                    if($('#form-heading')[0].checked & !QS['h'+target_pane]) {
                        QS['h'+target_pane] = 'Header text...';
                    } else {
                        delete QS['h'+target_pane];
                    }
                    var background = $('#form-background').find("option:selected").attr('value');
                    if(background === 'none') {
                       delete QS['bg'+target_pane];
                       delete QS['code'+target_pane];
                    } else if (background === 'custom') {
                       QS['bg'+target_pane] = $('#form-image-url').val();
                       delete QS['code'+target_pane];
                    } else if (background === 'code') {
                       delete QS['bg'+target_pane];
                       QS['code'+target_pane] = 'from microbit import *\n\n// Your code here.';
                    } else {
                       delete QS['code'+target_pane];
                       QS['bg'+target_pane] = 'bg/'+BACKGROUNDS[background];
                    }
                    var snakes = $('#form-snakes').find("option:selected").attr('value');
                    if(snakes === 'none') {
                        delete QS['s'+target_pane];
                    } else {
                        QS['s'+target_pane] = snakes;
                    }
                    // Speech bubbles...
                    if($('#form-lt')[0].checked & !QS['lt'+target_pane]) {
                        QS['lt'+target_pane] = "Some text...";
                    } else {
                        delete QS['lt'+target_pane];
                    }
                    if($('#form-rt')[0].checked & !QS['rt'+target_pane]) {
                        QS['rt'+target_pane] = "Some text...";
                    } else {
                        delete QS['rt'+target_pane];
                    }
                    if($('#form-lb')[0].checked & !QS['lb'+target_pane]) {
                        QS['lb'+target_pane] = "Some text...";
                    } else {
                        delete QS['lb'+target_pane];
                    }
                    if($('#form-rb')[0].checked & !QS['rb'+target_pane]) {
                        QS['rb'+target_pane] = "Some text...";
                    } else {
                        delete QS['rb'+target_pane];
                    }
                });
                $(vexContent).find('#pane-edit').submit(function(e) {
                    update_scene(QS);
                    $('.textual').attr('contenteditable', 'true');
                    vex.close();
                    return false;
                });
                $(vexContent).find('#reset-button').click(function(e) {
                    delete QS['h'+target_pane];
                    delete QS['bg'+target_pane];
                    delete QS['code'+target_pane];
                    delete QS['s'+target_pane];
                    delete QS['lt'+target_pane];
                    delete QS['rt'+target_pane];
                    delete QS['lb'+target_pane];
                    delete QS['rb'+target_pane];
                });
            }
        });
    });
}

// Use arguments from the query string to setup the device to behave in certain
// ways.
function setup_from_url() {
    QS = get_qs_context();
    update_scene(QS);
    $('#editor-help').hide();
    $('#home-link').show();
    $('.edit-me').hide();
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
