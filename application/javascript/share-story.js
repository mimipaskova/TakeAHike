var shareStory = {};

shareStory.uploadVideoTemplate = "<span class='details-container'><h3>Избери:</h3><div class='form-group'><input class='form-control ' type='file'/></span></div>";
shareStory.uploadImageTemplate = "<span class='details-container'><h3>Избери:</h3><div class='form-group'><input class='form-control ' type='file'/><h3>Описание:</h3><div class='form-group'><input class='form-control ' type='text'/></span></div>";

var initializeShareStory = function () {
	$("#datepicker").datepicker();
	$("#editor").wysiwyg();

    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(42.41396, 25.00622),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}

var openImageUploadDialog = function () {
	$("#upload-window")[0].innerHTML = shareStory.uploadImageTemplate;
    $("#upload-window").dialog({
        title: "Добавяне на Снимки",
        height: 400,
        width: 470,
        modal: true,
        buttons: [{
            text: 'Довави',
            click: function() {
                $(this).dialog("close");
            }
        }, {
            text: 'Затвори',
            click: function() {
                $(this).dialog("close");
            }
        }]
    });	
}

var openVideoUploadDialog = function () {

	$("#upload-window")[0].innerHTML = shareStory.uploadVideoTemplate;
    $("#upload-window").dialog({
        title: "Добавяне на Видео",
        height: 270,
        width: 470,
        modal: true,
        buttons: [{
            text: 'Довави',
            click: function() {
                $(this).dialog("close");
            }
        }, {
            text: 'Затвори',
            click: function() {
                $(this).dialog("close");
            }
        }]
    });
}