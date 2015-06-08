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

    var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                    google.maps.drawing.OverlayType.MARKER,
                    google.maps.drawing.OverlayType.CIRCLE,
                    google.maps.drawing.OverlayType.POLYGON,
                    google.maps.drawing.OverlayType.POLYLINE,
                    google.maps.drawing.OverlayType.RECTANGLE
                ]
        },
        circleOptions: {
          fillColor: '#ffff00',
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1
        }
    });
    drawingManager.setMap(map);
}

var openImageUploadDialog = function (event) {
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

    console.log(event);
    return false;
}

var publishNewStory = function () {
    BootstrapDialog.success("Вие успешно публикувахте нова история!");

    gotoHome();
}

var openVideoUploadDialog = function (event) {

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

    console.log(event);
    return false;
}