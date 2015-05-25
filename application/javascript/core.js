var recurseDomChildren = function (start, nodeName) {
    var result = [];
    if (start.childNodes) {
        nodes = start.childNodes;
        findDOMNode(nodes, nodeName, result);
    }
    return result;
}

var findDOMNode = function (nodes, nodeName, result) {
    var node;

    for (var i=0; i<nodes.length; i++)
    {
        node = nodes[i];

        if (node.localName == nodeName) {
            result.push(node);
        }

        if(node.childNodes)
        {
            findDOMNode(node.childNodes, nodeName, result);
        }
    }
}

$(document).ready(function () {
    var includes = recurseDomChildren(document.documentElement, "include");
    var needsToLoad = includes.length;
    var loaded = 0;
    for (var i = 0; i < includes.length; i++) {
        var src = includes[i].attributes.src.value;
        $.get(src, (function(index) {
            return function (data) {
                $(includes[index]).replaceWith(data);
                loaded++;
                if (loaded == needsToLoad) {
                    $("body").fadeIn();
                }
            }
        })(i));
    }
    
    if (needsToLoad == 0) {
        $("body").fadeIn();
    }
});