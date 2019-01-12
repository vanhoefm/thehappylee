$(document).ready(function () {
	// https://twitter.com/intent/tweet?text=Check%20out%20this%20product:+https://isabelleopia.com/products/nightling-art-project
	var elem = document.getElementsByClassName("share-item twitter")[0];
	elem.href = "https://twitter.com/intent/tweet?text=Check%20out%20this%20product:+" + window.location;

	// http://www.facebook.com/sharer.php?u=https://isabelleopia.com/products/nightling-art-project&amp;t=Nightling%20-%20Art%20Project
	var elem = document.getElementsByClassName("share-item facebook")[0];
	elem.href = "http://www.facebook.com/sharer.php?u=" + window.location + "&amp;t=Happylee"
	
	// http://pinterest.com/pin/create/button/?url=https://isabelleopia.com/products/nightling-art-project&amp;media=//cdn.shopify.com/s/files/1/0011/5172/9722/products/1_copy_1024x1024.jpg?v=1525190523&amp;description=Nightling%20-%20Art%20Project
	var elem = document.getElementsByClassName("share-item pinterest")[0];
	elem.href = "http://pinterest.com/pin/create/button/?url=" + window.location;

	// http://www.tumblr.com/share/link?url=https://isabelleopia.com/products/nightling-art-project
	var elem = document.getElementsByClassName("share-item tumblr")[0];
	elem.href = "http://www.tumblr.com/share/link?url=" + window.location;
})
