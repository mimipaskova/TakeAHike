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
	if(isAdmin)
		loadInContainer("root-container", "search-admin.html",initializeGoogleMaps);
	else
		loadInContainer("root-container", "search.html",initializeGoogleMaps);

	activeHeaderTab("searchTab");
	
}
var gotoSearchResults=function(){
	if(isAdmin) {
		loadInContainer("root-container", "search-results-admin.html",initializeGoogleMaps);
	} else {
		loadInContainer("root-container", "search-results.html",initializeGoogleMaps);
	}
	activeHeaderTab("searchTab");
}

var gotoClassification = function () {
	loadInContainer("root-container", "rating.html");
}

var gotoCommunityGroup = function () {
	if(!isLoggedIn)
		return;
	
	if(isAdmin)
		loadInContainer("root-container", "communityGroup-admin.html",initializeCommunityGroup);
	else
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
var gotoMyStories=function(){
	if(!isLoggedIn || isAdmin)
		return;

	loadInContainer("root-container", "myStories.html");

}
var gotoProfile = function () {
	if (isAdmin) {
		loadInContainer("root-container", "profile-admin.html");
	} else {
		loadInContainer("root-container", "profile.html");
	}
	activeHeaderTab("profileTab");
}
var storyDetails=function(){
	loadInContainer("root-container", "story-details.html",function(){
		initializeAlbumSlider();
		initializeGoogleMaps();
		initializeStoryDetails();
	});
	loadInContainer("header-container", "header-nav-register.html");

}
var logout = function () {
	loadInContainer("root-container", "login-view.html");
	loadInContainer("header-container", "header-nav-register.html", function () {
		activeHeaderTab("homeTab");
	});
	isLoggedIn = false;
	isAdmin = false;
}
var sendEMail = function () {
    BootstrapDialog.success("Моля проверете пощата си за инструкции за забравена парола.");
}
var circles = [{
	center: new google.maps.LatLng(41.625703, 25.368907),
	radius: 6000
}, {
	center: new google.maps.LatLng(41.647205, 25.309823),
	radius: 6000
}, {
	center: new google.maps.LatLng(41.757337, 23.387427),
	radius: 6000
}, {
	center: new google.maps.LatLng(42.132204, 23.342108),
	radius: 6000
}, {
	center: new google.maps.LatLng(43.178626, 23.462441),
	radius: 6000
}, {
	center: new google.maps.LatLng(43.203623, 23.492764),
	radius: 6000
}, {
	center: new google.maps.LatLng(43.250144, 25.000599),
	radius: 6000
}, {
	center: new google.maps.LatLng(43.218841, 27.876320),
	radius: 6000
}];



var addInteractiveMapShapes = function (map) {
	circles.forEach(function (circle) {
		var options = {
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35,
			map: map,
			center: circle.center,
      		radius: circle.radius
		};
    	placeCircle = new google.maps.Circle(options);
	});
}