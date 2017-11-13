$( document ).ready(function() {
	var paramIndex = window.location.href.indexOf("?");
    if(paramIndex > -1)
	{
		LoadBlogArticle(window.location.href.substr(paramIndex + 1));
	}
}); 

function LoadBlogArticle(name){
	var path = "../../posts/" + name;
	$("#blog_placeholder").load(path);
}

