
$("#header_placeholder").load("/includes/header.html");
$("#footer_placeholder").load("/includes/footer.html");
$("#copyright_placeholder").load("/includes/copyright.html");
$("#topnav_placeholder").load("/includes/topmedianav.html");
ShowPoem();

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
	var randomWord = GetRandomWord();
	var url = 'http://www.stands4.com/services/v2/poetry.php?uid=6045&tokenid=aQCgkteFXzfeLRjH&term=' + randomWord;
	
	httpGetAsync(url, function(theJson) { 
						var theChosenOne = PickAPoem(theJson);
						if(theChosenOne['poembody'] != "")
						{
							$("#poem_title").html(theChosenOne['title']);
							$("#author").html(theChosenOne['poem']);
							$("#poem_body").html(theChosenOne['poembody']);
						}
					  }
				);
}
	
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseXML);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send();
}

function GetRandomWord() {
	
	var arrayOfRandomWords = new Array('grass', 'love', 'stars', 'eyes', 'tango', 'eternal', 'code', 'emily', 'hairy', 'dinosaur', 'butts');
	var randomnumber = Math.floor(Math.random() * arrayOfRandomWords.length)
	
	return arrayOfRandomWords[randomnumber];
}

function PickAPoem(theJson) {
	
	var results = theJson.getElementsByTagName("results")[0].childNodes;
	
	var returnPoem = new Object();
		
	for(i=0; i<results.length; i++)
	{
		var poem = results[i].childNodes;
		
		returnPoem.poembody = poem[2].innerHTML;
		var poemLength = returnPoem.poembody.length;
		
		if(poemLength > 100 && poemLength < 600)
		{
			returnPoem.title = poem[0].innerHTML;
			returnPoem.poet = poem[1].innerHTML;	
			return returnPoem;		
		}
		
	}	
	returnPoem.poembody = "";
	return returnPoem;
	
}
	