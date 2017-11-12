$(document).ready(function() { 
	$("#header_placeholder").load("/includes/header.html");
	$("#footer_placeholder").load("/includes/footer.html");
	$("#copyright_placeholder").load("/includes/copyright.html");
	$("#topnav_placeholder").load("/includes/topmedianav.html");
	
	$.ajax({
			url: "http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?",
			dataType: "json",
			jsonpCallback: "xkcddata",
			success: function(data) {
						$("#xkcd_comic").attr({
								src: data.img,
								title: data.alt,
								alt: data.title
						});
					 }
		  });
	
	
});