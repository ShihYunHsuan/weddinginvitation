$(document).ready(function(){

	//carousel plugin initialization
	$('.owl-carousel').owlCarousel({
		    loop:true,
		    nav:true, /*下方會出現往前往後的按鈕*/
		    items:1,
		    navText: [],/*陣列內沒有內容,就不會出現文字內容*/
		    autoplay: true,
		    autoplaySpeed: 1000, /*單位為mini second,即1秒*/
		    smartSpeed: 500
	});

	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	
})
	//Get the button
	var mybutton = document.getElementById("topbtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    mybutton.style.display = "block";
	  } else {
	    mybutton.style.display = "none";
	  }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	}