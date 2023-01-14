document.addEventListener('DOMContentLoaded', function(){
	alert("Welcome To ShopiVi!");
	window.speechSynthesis.speak(
		// for demo
		new SpeechSynthesisUtterance("This product is called TnaLIFE Mini Bra Top. This product costs $38. Some features of the product are Lined High-visibility Spiro. The Fit: Tight — A close fit that hugs the body.")
	 );
}, false);

