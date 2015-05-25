$(document).ready(function () {
	$("#loginAsAdmin").on("click", function() {
		window.location.href = "register.html";
	});
});



$(document).ready(function () {
	$("#register").on("click", function() {
		if(document.getElementById("nameOrEmail").value == "maria") {
			window.location.href = "user-exists.html";
		}
		else {
			window.location.href = "profile.html";			
		}
	});
});