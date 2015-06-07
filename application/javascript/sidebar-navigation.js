var gotoShareStory = function () {
	if (!isLoggedIn) {
		return;
	}

	loadInContainer("root-container", "share-story.html", function () {
		initializeShareStory();
	});
}

var gotoInteractiveMap = function () {
	if (!isLoggedIn) {
		return;
	}

	loadInContainer("root-container", "interactive-map.html", function () {
		var map = initializeGoogleMaps();
		addInteractiveMapShapes(map);
	});	
}