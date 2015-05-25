$(document).ready(function () {
	$("#login").on("click", function(e) {
		window.location.href = "profile.html";
	});
});


$(document).ready(function () {
	$("#editProfile").on("click", function() {
		window.location.href = "edit-profile.html";
	});
});

$(document).ready(function () {
	$("#editProfileAdmin").on("click", function() {
		window.location.href = "edit-profile-admin.html";
	});
});

$(document).ready(function () {
	$("#logout").on("click", function() {
		window.location.href = "index.html";
	});
});