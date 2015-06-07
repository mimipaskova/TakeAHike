var initializeStoryDetails = function() {
    initializeStoryDetails.templateComment = "<div class='th-opinion'><div class='th-author'>{0}</div>" +
        "<div class='th-comment-text'><p>{1}</p></div><div class='th-date'>{2}</div></div>"

    $("#send-comment").click(function() {
        initializeStoryDetails.commment();
    });
    $(".th-delete-opinion").click(function(){
        var comment=$(this).parent();
        comment.hide();

    });
    $("#delete-video").click(function() {
        var video=$(this).parent().parent();
        video.css("visibility",'hidden');
    });
    
    initializeStoryDetails.commment = function() {
        var comment = $("#th-comment").val();
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                
        var finalPost = initializeStoryDetails.templateComment.format("Янислав Щерев", comment, datetime);
        $("#all-comments").prepend(finalPost);
    };
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined' ? args[number] : match;
            });
        };
    }
};