$(document).ready(function() { 
	$("#header_placeholder").load("/includes/header.html");
	$("#footer_placeholder").load("/includes/footer.html");
	$("#copyright_placeholder").load("/includes/copyright.html");
	
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
	
	
	$.ajax({
		  url: "http://poetrydb.org/author/Emily%20Dickinson",
		  dataType: "json",
		  success: function(data) {
			  alert("test");
		  }
		});
	
});

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function SetPoemData(data)
{
	alert("got here");
	var isSet = false;
	while(!isSet)
	{
		var poem = data[getRandomNumber(0, data.length)];
		if(poem.linecount <= 10)
		{
			$("#poem_title").innerHTML(poem.title);
			$("#author").innerHTML("Emily Dickinson");
			$("#poem_body").innerHTML(poem.lines);
			
			isSet = true;
		}
	}
}