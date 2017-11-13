$(document).ready(function() {
    emailjs.init("user_7C858ZNPMwTkE1xJN0pJ3");
});

function SendEmail() {
	
	var name = $("#name").val();
	var email = $("#email").val();
	var content = $("#comment").val();
	
	emailjs.send("gmail", "website_resume_email", {from_name: name, message_html: content, reply_to: email});
}

function ResetForm(){
	$(this).closest('form').find("input[type=text], textarea").val("");
}