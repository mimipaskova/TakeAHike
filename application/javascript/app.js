var isAdmin = false;
var isLoggedIn = false;


$(document).ready(function () {
	loadInContainer("root-container", "login-view.html");
});

var login = function () {
	loadInContainer("root-container", "profile.html");
	loadInContainer("header-container", "header-nav.html", function () {
		activeHeaderTab("profileTab");
	});
	isLoggedIn = true;
}

var loginAsAdmin = function () {
	loadInContainer("root-container", "profile-admin.html");
	loadInContainer("header-container", "header-nav.html", function () {
		activeHeaderTab("profileTab");		
	});

	isLoggedIn = true;
	isAdmin = true;
}

var gotoHome = function () {
	if (isLoggedIn) {
		loadInContainer("root-container", "home.html");
	} else {
		loadInContainer("root-container", "login-view.html");
	}
	activeHeaderTab("homeTab");
}

var gotoForgottenPassword = function () {
	loadInContainer("root-container", "forgotten-password.html");
	activeHeaderTab("");
}

var gotoEditProfile = function () {
	if (!isLoggedIn) {
		return;
	}
	if (isAdmin) {
		loadInContainer("root-container", "edit-profile-admin.html");
	} else {
		loadInContainer("root-container", "edit-profile.html");
	}
}

var gotoSearch = function () {
	loadInContainer("root-container", "search.html",initializeGoogleMaps);
	activeHeaderTab("searchTab");
	
}
var gotoSearchResults=function(){
	loadInContainer("root-container", "search-results.html",initializeGoogleMaps);
	activeHeaderTab("searchTab");
}

var gotoCommunityGroup = function () {
	loadInContainer("root-container", "CommunityGroup.html",initializeCommunityGroup);
	activeHeaderTab("communityTab");
}

var gotoRegister = function () {
	loadInContainer("root-container", "register.html");
	activeHeaderTab("registerTab");
}

var gotoLoginAsAdmin = function () {
	loadInContainer("root-container", "login-admin.html");
	activeHeaderTab("homeTab");
}

var gotoProfile = function () {
	if (isAdmin) {
		loadInContainer("root-container", "profile-admin.html");
	} else {
		loadInContainer("root-container", "profile.html");
	}
	activeHeaderTab("profileTab");
}

var logout = function () {
	loadInContainer("root-container", "login-view.html");
	loadInContainer("header-container", "header-nav-register.html", function () {
		activeHeaderTab("homeTab");
	});
	isLoggedIn = false;
	isAdmin = false;
}