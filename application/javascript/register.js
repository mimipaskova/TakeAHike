var USER_EXISTS = "maria";

$(document).ready(function () {
	$("#loginAsAdmin").on("click", function() {
		window.location.href = "register.html";
	});
});



$(document).ready(function () {
	$("#register").on("click", function() {
		if(document.getElementById("nameOrEmail").value == USER_EXISTS) {
			window.location.href = "user-exists.html";
		}
		else {
			window.location.href = "profile.html";			
		}
	});
});