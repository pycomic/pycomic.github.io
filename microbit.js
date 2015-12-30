function LoopForever() {
var led1 = 'led-' + Math.floor(Math.random() * 5).toString() + '-' + Math.floor(Math.random() * 5).toString();

var led2 = 'led-' + Math.floor(Math.random() * 5).toString() + '-' + Math.floor(Math.random() * 5).toString();
   
$('svg rect[id= '+led1+' ]' ).attr({class:'on-' + Math.floor(Math.random() * 10).toString()}); 
$('svg rect[id= '+led2+' ]' ).attr({class:''});

}

var interval = self.setInterval(function(){LoopForever()},50);
