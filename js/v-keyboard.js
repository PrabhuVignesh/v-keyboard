
/*! V-Keyboard specifications--- Contributed by Prabhu Vignesh Kumar Rajagopal(prabhu.vignesh1990@gmail.com) */


var $write = $('#dummy');
$('document').click(function(e){
		if ($(e.target).is('[contenteditable], :input:not(:button)'))  {
			console.log("i am edit able");
			$write = $(e.target);
		}
		else{
			console.log("select a input box to use keyboard");
			$write = $('#dummy');
		}
	});

$(function(){
	//var $write = $('#write'),
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
