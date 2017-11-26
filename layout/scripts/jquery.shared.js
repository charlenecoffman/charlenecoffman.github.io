
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
		  
function ShowPoem() {
	
	httpGetAsync('http://poetrydb.org/author,title/Shakespeare;From%20fairest');
}
	
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
	