var gotoShareStory = function () {
	loadInContainer("root-container", "share-story.html", function () {
		initializeShareStory();
	});
}

var gotoInteractiveMap = function () {
	loadInContainer("root-container", "interactive-map.html", function () {
		var map = initializeGoogleMaps();
		addInteractiveMapShapes(map);
	});	
}