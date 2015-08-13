
/*! V-Keyboard specifications--- 
*Contributed by Prabhu Vignesh Kumar Rajagopal(prabhu.vignesh1990@gmail.com)
*follow me @ 	http://www.prabhuvigneshrajagopal.wordpress.com 
				http://www.facebook.com/prabhuvignesh
				Twitter @ PrabhuRajagopal
				Instagram @ vickyrajagopal*/

$('document').ready(function(){
	alert("hi")	$(".v-keyboard-container").html("<ul id=\"keyboard\" class=\"ui-widget-content\"><li class=\"symbol\"><span class=\"off\">`</span><span class=\"on\">~</span></li><li class=\"symbol\"><span class=\"off\">1</span><span class=\"on\">!</span></li><li class=\"symbol\"><span class=\"off\">2</span><span class=\"on\">@</span></li><li class=\"symbol\"><span class=\"off\">3</span><span class=\"on\">#</span></li><li class=\"symbol\"><span class=\"off\">4</span><span class=\"on\">$</span></li><li class=\"symbol\"><span class=\"off\">5</span><span class=\"on\">%</span></li><li class=\"symbol\"><span class=\"off\">6</span><span class=\"on\">^</span></li><li class=\"symbol\"><span class=\"off\">7</span><span class=\"on\">&amp;</span></li><li class=\"symbol\"><span class=\"off\">8</span><span class=\"on\">*</span></li><li class=\"symbol\"><span class=\"off\">9</span><span class=\"on\">(</span></li><li class=\"symbol\"><span class=\"off\">0</span><span class=\"on\">)</span></li><li class=\"symbol\"><span class=\"off\">-</span><span class=\"on\">_</span></li><li class=\"symbol\"><span class=\"off\">=</span><span class=\"on\">+</span></li><li class=\"delete lastitem\">delete</li><li class=\"tab\">tab</li><li class=\"letter\">q</li><li class=\"letter\">w</li><li class=\"letter\">e</li><li class=\"letter\">r</li><li class=\"letter\">t</li><li class=\"letter\">y</li><li class=\"letter\">u</li><li class=\"letter\">i</li><li class=\"letter\">o</li><li class=\"letter\">p</li><li class=\"symbol\"><span class=\"off\">[</span><span class=\"on\">{</span></li><li class=\"symbol\"><span class=\"off\">]</span><span class=\"on\">}</span></li><li class=\"symbol lastitem\"><span class=\"off\">\</span><span class=\"on\">|</span></li><li class=\"capslock\">caps lock</li><li class=\"letter\">a</li><li class=\"letter\">s</li><li class=\"letter\">d</li><li class=\"letter\">f</li><li class=\"letter\">g</li><li class=\"letter\">h</li><li class=\"letter\">j</li><li class=\"letter\">k</li><li class=\"letter\">l</li><li class=\"symbol\"><span class=\"off\">;</span><span class=\"on\">:</span></li><li class=\"symbol\"><span class=\"off\">'</span><span class=\"on\">&quot;</span></li><li class=\"return lastitem\">Enter</li><li class=\"left-shift\">shift</li><li class=\"letter\">z</li><li class=\"letter\">x</li><li class=\"letter\">c</li><li class=\"letter\">v</li><li class=\"letter\">b</li><li class=\"letter\">n</li><li class=\"letter\">m</li><li class=\"symbol\"><span class=\"off\">,</span><span class=\"on\">&lt;</span></li><li class=\"symbol\"><span class=\"off\">.</span><span class=\"on\">&gt;</span></li><li class=\"symbol\"><span class=\"off\">/</span><span class=\"on\">?</span></li><li class=\"right-shift lastitem\">shift</li><li class=\"space lastitem\">&nbsp;</li></ul>");
});
 
var $write = $('#dummy');
$(document).click(function(e){
		if ($(e.target).is('[contenteditable], :input:not(:button)'))  {
			$write = $(e.target);
		}
		else{
			console.log("select a input box to use keyboard");
		}
	});
$(function(){
	 $( ".v-keyboard-container" ).draggable();
		shift = false,
		capslock = false;
	$('#keyboard li').click(function(){
		var $this = $(this),
			character = $this.html();
		if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();
			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}
		if ($this.hasClass('capslock')) {
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}
		if ($this.hasClass('delete')) {
			var html = $write.val();
			$write.val(html.substr(0, html.length - 1));
			return false;
		}
		if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
		if ($this.hasClass('space')) character = ' ';
		if ($this.hasClass('tab')) character = "\t";
		if ($this.hasClass('return')) character = "\n";
		if ($this.hasClass('uppercase')) character = character.toUpperCase();
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');
			shift = false;
		}
		$write.val($write.val() + character);
	});
});
