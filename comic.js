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
        $('#if1').hide();
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
        $('#if2').hide();
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
        $('#if3').hide();
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
        $('#if1').hide();
        $('#code1').show();
        $('#code1 code').text(context.code1);
    } else {
        $('#code1').hide();
    }
    if(context.code2) {
        $('#bg2').hide();
        $('#if2').hide();
        $('#code2').show();
        $('#code2 code').text(context.code2);
    } else {
        $('#code2').hide();
    }
    if(context.code3) {
        $('#bg3').hide();
        $('#if3').hide();
        $('#code3').show();
        $('#code3 code').text(context.code3);
    } else {
        $('#code3').hide();
    }
    // Set the micro:bit sims
    if(context.mb1) {
        $('#bg1').hide();
        $('#code1').hide();
        $('#if1').show();
        $('#if1').attr('src', context.mb1);
    } else {
        $('#if1').hide();
    }
    if(context.mb2) {
        $('#bg2').hide();
        $('#code2').hide();
        $('#if2').show();
        $('#if2').attr('src', context.mb2);
    } else {
        $('#if2').hide();
    }
    if(context.mb3) {
        $('#bg3').hide();
        $('#code3').hide();
        $('#if3').show();
        $('#if3').attr('src', context.mb3);
    } else {
        $('#if3').hide();
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
        $('#pane1 .bubble-top.left').show();
        $('#pane1 .bubble-top.left p').text(context.lt1);
    } else {
        $('#pane1 .bubble-top.left').hide();
    }
    if(context.lb1) {
        $('#pane1 .bubble-bottom.left').show();
        $('#pane1 .bubble-bottom.left p').text(context.lb1);
    } else {
        $('#pane1 .bubble-bottom.left').hide();
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
        $('#pane2 .bubble-top.left').show();
        $('#pane2 .bubble-top.left p').text(context.lt2);
    } else {
        $('#pane2 .bubble-top.left').hide();
    }
    if(context.lb2) {
        $('#pane2 .bubble-bottom.left').show();
        $('#pane2 .bubble-bottom.left p').text(context.lb2);
    } else {
        $('#pane2 .bubble-bottom.left').hide();
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
        $('#pane3 .bubble-top.left').show();
        $('#pane3 .bubble-top.left p').text(context.lt3);
    } else {
        $('#pane3 .bubble-top.left').hide();
    }
    if(context.lb3) {
        $('#pane3 .bubble-bottom.left').show();
        $('#pane3 .bubble-bottom.left p').text(context.lb3);
    } else {
        $('#pane3 .bubble-bottom.left').hide();
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

// If the state changes then call this function to remove the tweet button and
// direct link that will need re-building.
function clear_on_change() {
    $('#direct-link').attr('href', '#');
    $('#direct-link').text('');
    $('#twitter-button').html('');
}

// Add various UI controls for updating the output of the device.
function setup_editor() {
    $('#editor-help').show();
    $('#home-link').hide();
    $('.frame form').show();
    // Set text fields contenteditable.
    $('#title').attr('contenteditable', 'true');
    $('#author').attr('contenteditable', 'true');
    $('#title').focus(function() {
        clear_on_change();
    });
    $('#author').focus(function() {
        clear_on_change()
    });
    $('.textual').attr('contenteditable', 'true');
    // Connect the configuration forms to the panels.
    var form1 = $('#form1');
    var form2 = $('#form2');
    var form3 = $('#form3');
    var pane1 = $('#pane1');
    var pane2 = $('#pane2');
    var pane3 = $('#pane3');
    form1.change(function() {
        clear_on_change();
    });
    form2.change(function() {
        clear_on_change();
    });
    form3.change(function() {
        clear_on_change();
    });
    // A function to connect a form to a panel.
    function connect(form, pane) {
        var form_header = form.find('#form-heading');
        var pane_header = pane.find('.header');
        var form_background = form.find('#form-background');
        var pane_background = pane.find('.bg_image');
        var pane_code = pane.find('.pre_code');
        var pane_iframe = pane.find('iframe');
        var form_image_url = form.find('#form-image-url');
        var mb_omatic = form.find('.mb-link');
        pane_code.hide();
        pane_background.hide();
        pane_iframe.hide();
        mb_omatic.hide();
        form_header.change(function(e) {
            if(form_header[0].checked) {
                pane_header.show();
                if(!pane_header.text()) {
                    pane_header.text('Header text...');
                }
            } else {
                pane_header.hide();
            }
        });
        form.find('#form-background').change(function(e) {
            var bg = $(this).find("option:selected").attr('value');
            form.find('#form-image-url').prop('disabled', true);
            mb_omatic.hide();
            if(bg==='custom') {
                pane_background.show();
                pane_code.hide();
                pane_iframe.hide();
                var custom_url = form.find('#form-image-url');
                custom_url.prop('disabled', false);
                if(custom_url.val()) {
                    var url = custom_url.val();
                    pane_background.attr('src', url);
                }
                custom_url.focus();
            } else if(bg==='microbit') {
                pane_background.hide();
                pane_code.hide();
                pane_iframe.show();
                mb_omatic.show();
                var custom_url = form.find('#form-image-url');
                custom_url.prop('disabled', false);
                if(custom_url.val()) {
                    var url = custom_url.val();
                    pane_iframe.attr('src', url);
                }
                custom_url.focus();
            } else if(bg==='none') {
                pane_background.hide();
                pane_code.hide();
                pane_iframe.hide();
            } else if(bg==='code') {
                pane_background.hide();
                pane_iframe.hide();
                pane_code.show();
                var code_holder = pane.find('.source_code');
                if(!code_holder.text()) {
                    code_holder.text('from microbit import *\n\n# Edit your code here!\n\ndisplay.scroll("Hello, World!")');
                }
            } else {
                pane_background.show();
                pane_code.hide();
                if(bg === 'random') {
                    var seed = Math.floor((Math.random() * 1000) + 1);
                    pane_background.attr('src', 'http://lorempixel.com/320/320/?v='+seed);
                } else {
                    pane_background.attr('src', 'bg/'+bg);
                }
            }
        });
        form.find('.custom-image').on('input', function(e) {
            var url = $(this).val();
            var bg = form.find('#form-background').find("option:selected").attr('value');
            if(bg==='custom') {
                pane_background.attr('src', url);
                pane_iframe.attr('src', '');
            } else {
                pane_iframe.attr('src', url);
                pane_background.attr('src', '');
            }
        });
        form.find('#form-snakes').change(function(e) {
            var snakes = $(this).find("option:selected").attr('value');
            pane.removeClass();
            if(snakes==='both') {
                pane.addClass('left-python-yellow right-python-blue');
            } else if(snakes==='yellow') {
                pane.addClass('left-python-yellow');
            } else if(snakes==='blue') {
                pane.addClass('right-python-blue');
            }
        });
        form.find('#form-lt').change(function(e) {
            var holder = pane.find('.bubble-top.left');
            var text_p = pane.find('.bubble-top.left p');
            if(this.checked) {
                holder.show();
                if(!text_p.text()) {
                    text_p.text('Edit this..!');
                }
            } else {
                holder.hide();
            }
        });
        form.find('#form-lb').change(function(e) {
            var holder = pane.find('.bubble-bottom.left');
            var text_p = pane.find('.bubble-bottom.left p');
            if(this.checked) {
                holder.show();
                if(!text_p.text()) {
                    text_p.text('Edit this..!');
                }
            } else {
                holder.hide();
            }
        });
        form.find('#form-rt').change(function(e) {
            var holder = pane.find('.bubble-top.right');
            var text_p = pane.find('.bubble-top.right p');
            if(this.checked) {
                holder.show();
                if(!text_p.text()) {
                    text_p.text('Edit this..!');
                }
            } else {
                holder.hide();
            }
        });
        form.find('#form-rb').change(function(e) {
            var holder = pane.find('.bubble-bottom.right');
            var text_p = pane.find('.bubble-bottom.right p');
            if(this.checked) {
                holder.show();
                if(!text_p.text()) {
                    text_p.text('Edit this..!');
                }
            } else {
                holder.hide();
            }
        });
        form.find('#reset-button').click(function(e) {
            pane_header.hide();
            pane_background.hide();
            pane.removeClass();
            pane.find('.bubble-top.left').hide();
            pane.find('.bubble-bottom.left').hide();
            pane.find('.bubble-top.right').hide();
            pane.find('.bubble-bottom.right').hide();
            pane.find('.textual').text('');
        });
    }
    connect(form1, pane1);
    connect(form2, pane2);
    connect(form3, pane3);
    $('#direct-button').click(function(e) {
        var state = get_state_from_dom();
        set_qs(state);
    });
}

// Use arguments from the query string to setup the device to behave in certain
// ways.
function setup_from_url() {
    QS = get_qs_context();
    update_scene(QS);
    $('.frame form').hide();
    $('#editor-help').hide();
    $('#home-link').show();
    $('.edit-me').hide();
}

function get_state_from_dom() {
    var result = {};
    var form1 = $('#form1');
    var form2 = $('#form2');
    var form3 = $('#form3');
    var pane1 = $('#pane1');
    var pane2 = $('#pane2');
    var pane3 = $('#pane3');
    result.title = $('#title').text();
    result.author = $('#author').text();
    if(pane1.find('.header').is(':visible')) {
        result.h1 = pane1.find('.header').text();
    }
    if(pane2.find('.header').is(':visible')) {
        result.h2 = pane2.find('.header').text();
    }
    if(pane3.find('.header').is(':visible')) {
        result.h3 = pane3.find('.header').text();
    }
    if($('#bg1').is(":visible")) {
        result.bg1 = $('#bg1').attr('src');
    } else if ($('#code1').is(':visible')) {
        result.code1 = $('#code1 code')[0].innerHTML.replace(new RegExp('<br>', 'g'), '\n');
    } else if ($('#if1').is(':visible')) {
        result.mb1 = $('#if1').attr('src');
    }
    if($('#bg2').is(":visible")) {
        result.bg2 = $('#bg2').attr('src');
    } else if ($('#code2').is(':visible')) {
        result.code2 = $('#code2 code')[0].innerHTML.replace(new RegExp('<br>', 'g'), '\n');
    } else if ($('#if2').is(':visible')) {
        result.mb2 = $('#if2').attr('src');
    }
    if($('#bg3').is(":visible")) {
        result.bg3 = $('#bg3').attr('src');
    } else if ($('#code3').is(':visible')) {
        result.code3 = $('#code3 code')[0].innerHTML.replace(new RegExp('<br>', 'g'), '\n');
    } else if ($('#if3').is(':visible')) {
        result.mb3 = $('#if3').attr('src');
    }
    var s1 = form1.find('#form-snakes').find("option:selected").attr('value');
    if(s1!=='none') {
        result.s1 = s1;
    }
    var s2 = form2.find('#form-snakes').find("option:selected").attr('value');
    if(s2!=='none') {
        result.s2 = s2;
    }
    var s3 = form3.find('#form-snakes').find("option:selected").attr('value');
    if(s3!=='none') {
        result.s3 = s3;
    }
    if(pane1.find('.bubble-top.left').is(':visible')) {
        result.lt1 = pane1.find('.bubble-top.left p').text();
    }
    if(pane1.find('.bubble-top.right').is(':visible')) {
        result.rt1 = pane1.find('.bubble-top.right p').text();
    }
    if(pane1.find('.bubble-bottom.left').is(':visible')) {
        result.lb1 = pane1.find('.bubble-bottom.left p').text();
    }
    if(pane1.find('.bubble-bottom.right').is(':visible')) {
        result.rb1 = pane1.find('.bubble-bottom.right p').text();
    }
    if(pane2.find('.bubble-top.left').is(':visible')) {
        result.lt2 = pane2.find('.bubble-top.left p').text();
    }
    if(pane2.find('.bubble-top.right').is(':visible')) {
        result.rt2 = pane2.find('.bubble-top.right p').text();
    }
    if(pane2.find('.bubble-bottom.left').is(':visible')) {
        result.lb2 = pane2.find('.bubble-bottom.left p').text();
    }
    if(pane2.find('.bubble-bottom.right').is(':visible')) {
        result.rb2 = pane2.find('.bubble-bottom.right p').text();
    }
    if(pane3.find('.bubble-top.left').is(':visible')) {
        result.lt3 = pane3.find('.bubble-top.left p').text();
    }
    if(pane3.find('.bubble-top.right').is(':visible')) {
        result.rt3 = pane3.find('.bubble-top.right p').text();
    }
    if(pane3.find('.bubble-bottom.left').is(':visible')) {
        result.lb3 = pane3.find('.bubble-bottom.left p').text();
    }
    if(pane3.find('.bubble-bottom.right').is(':visible')) {
        result.rb3 = pane3.find('.bubble-bottom.right p').text();
    }
    return result;
}

// Run on start-up
$(document).ready(function() {
    var querystring = window.location.search.substring(1);
    // If there's something in the URL's querystring, use it to display the
    // device as specified therein.
    if(querystring) {
        setup_from_url();
        set_qs(QS);
    } else {
        // Otherwise, show some UI to allow people to edit their own settings.
        setup_editor();
    };
});
