
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
							$("#author").html(theChosenOne['poet']);
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
	
	var arrayOfRandomWords = new Array('grass', 'love', 'stars', 'eyes', 'dance', 'lovers', 'child', 'sing', 'song', 'mouth');
	var randomnumber = Math.floor(Math.random() * arrayOfRandomWords.length)
	
	return arrayOfRandomWords[randomnumber];
}

function PickAPoem(theJson) {
	
	var results = theJson.getElementsByTagName("results")[0].childNodes;
	
	var returnPoem = new Object();
	
	var startRandom = Math.floor(Math.random() * 4);
	
	for(i=startRandom; i<results.length; i++)
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
	returnpoem.poet = "Mary Oliver";
	returnpoem.title = "Into Blackwater Woods";
	returnPoem.poembody = "To live in this world \n you must be able\n to do three things: \n to love what is mortal %3B \n to hold it \n against your bones knowing \n your own life depends on it %3B \n and, when the time comes to let it go, \n to let it go.";
	return returnPoem;
	
}
	