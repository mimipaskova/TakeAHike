var communityGroup = function() {
    communityGroup.templateDialog = "<span class='details-container'>Място:<h3 ><input class='form-control ' type='text'/></h3></span><br/>" +
        "<span class='details-container'>Описание:<h3 ><input class='form-control ' type='text'/></h3></span></div>" +
        "<span class='details-container'>Дата:<h3  ><input class='form-control ' id='datepicker' type='text'/></h3></span><br/>" +
        "<span class='details-container'>Свободни места:<h3 ><input class='form-control ' type='text'/></h3></span></div>";

    communityGroup.templateDialogDeleteUser = "<div><span class='details-container'>Мартин Захариев<button class='btn btn-danger th-remove' onsubmit='return false;'  type='submit'>"+
        "<i class='glyphicon glyphicon-remove'></i>Премахни</button></span></div><br/>" +
        "<div><span class='details-container'>Иван Иванов<button class='btn btn-danger th-remove' onsubmit='return false;'  type='submit'>"+
        "<i class='glyphicon glyphicon-remove'></i>Премахни</button></span></div><br/>";

    communityGroup.initialize = function() {
        communityGroup.createFlexigrid();
        communityGroup.hookEvents();
        
    };
communityGroup.hookEvents=function(){
    $('.th-subscribe').click(function() {
            communityGroup.subscribe(this);
        });
        $('.th-delete').click(function() {
            communityGroup.deletePost(this);

        });
        $('#add-suggestion').click(function() {
            communityGroup.showDialogDetails();

        });
        $('#remove-user').click(function() {
            communityGroup.removeUserDialog();

        });
};
    communityGroup.createFlexigrid = function() {
        $('#flexiDestinationList').flexigrid({
            dataType: 'json',
            colModel: [{
                    display: '№',
                    name: "number",
                    width: 40,
                    align: 'left'
                }, {
                    display: 'Потребителско име',
                    name: "name",
                    width: 140,
                    sortable: true,
                    align: 'center'
                }, {
                    display: 'Място',
                    name: "place",
                    width: 200,
                    align: 'left'
                }, {
                    display: 'Описание',
                    name: "description",
                    width: 200,
                    align: 'left'
                },

                {
                    display: 'Дата',
                    name: "date",
                    width: 100,
                    align: 'left'
                }, {
                    display: 'Свободни места',
                    name: "freePlaces",
                    width: 50,
                    align: 'left'
                }, {
                    display: 'Запиши ме',
                    name: "subscribe",
                    width: 120,
                    align: 'left'
                }
            ],
            usepager: true,
            useRp: true,
            rp: 10,
            showTableToggleBtn: false,
            resizable: false,
            //onChangePage: SetUserRoles.changePage,
            width: 860,
            height: 240,
            singleSelect: true,
            colResize: true,
            //onSuccess:fillStatusPage(this.Page, this.Rows)
        });
    };
    communityGroup.showDialogDetails = function() {

        var html = communityGroup.templateDialog;

        $("#create-confirmation")[0].innerHTML = html;
        $("#create-confirmation").dialog({
            title: "Добавяне на дестинация",
            resizable: true,
            height: 570,
            width: 470,
            modal: true,
            buttons: [{
                text: 'Публикувай',
                click: function() {
                    communityGroup.publish();
                    $(this).dialog("close");
                }
            }, {
                text: 'Cancel',
                click: function() {
                    $(this).dialog("close");
                }
            }]
        });
        $("#datepicker").datepicker();
    };
    communityGroup.removeUserDialog = function() {

        var html = communityGroup.templateDialogDeleteUser;

        $("#create-confirmation")[0].innerHTML = html;
        $("#create-confirmation").dialog({
            title: "Премахване на потребител",
            resizable: true,
            height: 570,
            width: 470,
            modal: true,
            buttons: [

                {
                    text: 'Cancel',
                    click: function() {
                        $(this).dialog("close");
                    }
                }
            ]
        });
        $(".th-remove").click(function() {
            $(this).parent().hide();
        });

    };
    communityGroup.remove = function() {

    };
    communityGroup.publish = function() {
        var table = document.getElementById("DestinationList");


        var tr = document.createElement("tr");
        var divName = document.createElement("div");
        var tdName = document.createElement("td");

        var divPlace = document.createElement("div");
        var tdPlace = document.createElement("td");

        var tdNumber = document.createElement("td");
        var divNumber = document.createElement("div");

        var tdDescription = document.createElement("td");
        var divDescription = document.createElement("div");

        var tdDate = document.createElement("td");
        var divDate = document.createElement("div");

        var tdFree = document.createElement("td");
        var divFree = document.createElement("div");

        var tdSign = document.createElement("td");
        var divSign = document.createElement("div");

        divNumber.innerHTML = 3;
        divName.innerHTML = "Name";
        divPlace.innerHTML = "Place";
        divDescription.innerHTML = "New one";
        divDate.innerHTML = "12.12.2015"
        divFree.innerHTML = 3;
        var input = document.createElement("button");
        input.setAttribute("type", "button");
        input.setAttribute("value", "Запиши ме");
        input.setAttribute("class", 'btn btn-success th-subscribe');
        var i = document.createElement("i");
        i.setAttribute("class","glyphicon glyphicon-plus");
         input.appendChild(i);
        divSign.appendChild(input);

        tdNumber.appendChild(divNumber);
        tdName.appendChild(divName);
        tdPlace.appendChild(divPlace);
        tdDescription.appendChild(divDescription);
        tdDate.appendChild(divDate);
        tdFree.appendChild(divFree);
        tdSign.appendChild(divSign);

        tr.appendChild(tdNumber);
        tr.appendChild(tdName);
        tr.appendChild(tdPlace);
        tr.appendChild(tdDescription);
        tr.appendChild(tdDate);
        tr.appendChild(tdFree);
        tr.appendChild(tdSign);

        table.appendChild(tr);

    };
};
communityGroup.deletePost = function(that) {
    var tr = $(that).parent().parent().parent().parent();
    tr.hide();
};
communityGroup.subscribe = function(that) {
    var tr = $(that).parent().parent().parent().parent();
    var freePlaces = tr.find("div[id='freePlaces']");
    if (freePlaces.text() == "1") {
        $(that).attr('disabled', 'disabled');
    }

    freePlaces.text(freePlaces.text() - 1);

};
var initializeCommunityGroup = function() {
    communityGroup();
    communityGroup.initialize();
    initializeGoogleMaps();


};
var initializeGoogleMaps = function() {
    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: new google.maps.LatLng(42.41396, 25.00622),
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
    }
    initialize();
};