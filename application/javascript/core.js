var findAllDOMElements = function (start, nodeName) {
    var result = [];

    var condition = (function (nodeName) {
        return function (element) {
            return (element.localName == nodeName);
        }
    })(nodeName);

    if (start.childNodes) {
        nodes = start.childNodes;
        findDOMNode(nodes, condition, result);
    }

    return result;
}

var findAllElementsWithAttribute = function (start, attributeName) {
    var result = [];

    var condition = (function (attributeName) {
        return function (node) {
            return (node.attributes && !!node.attributes[attributeName]);
        }
    })(attributeName);

    if (start.childNodes) {
        findDOMNode(start.childNodes, condition, result);
    }

    return result;
}

var findDOMNode = function (nodes, condition, result) {
    var node;

    for (var i=0; i<nodes.length; i++)
    {
        node = nodes[i];

        if (condition(node)) {
            result.push(node);
        }

        if(node.childNodes)
        {
            findDOMNode(node.childNodes, condition, result);
        }
    }
}


var Parser = function () {
    this.pendingLoads = 0;
    this.includes = [];
    this.ifs = [];

    this.conditions = [];
}

Parser.prototype.parseDOM = function (element) {
    this.includes = this.includes.concat(findAllDOMElements(element, "include"));
    
    // this.ifs = this.ifs.concat(findAllElementsWithAttribute(element, "if"));

    // for (var i = 0; i < this.ifs.length; i++) {
    //     var ifElement = this.ifs[i];
    //     this.conditions.push({
    //         name: ifElement.attributes["if"].value,
    //         currentValue: window[ifElement.attributes["if"].value],
    //         element: ifElement
    //     });

    //     if (window[ifElement.attributes["if"].value] != true) {
    //         ifElement.style.display = "none";
    //     }
    // }
}

Parser.prototype.loadIncludes = function () {
    this.pendingLoads = this.includes.length;

    while (this.includes.length > 0) {
        var include = this.includes.shift();

        var src = include.attributes.src.value;
        $.get(src, function (include, data) {
            $(include).replaceWith(data);
                this.pendingLoads--;
                // this.parseDOM()
                if (this.pendingLoads <= 0) {
                    $("body").fadeIn();
                }
        }.bind(this, include));
    }
    
    if (this.pendingLoads == 0) {
        $("body").fadeIn();
    }
}

var loadInContainer = function (containerId, view, callback) {
    $("#" + containerId).load(view, function () {
        var parser = new Parser();
        parser.parseDOM(document.getElementById(containerId));
        parser.loadIncludes();

        if (callback) {
            callback();
        }
    });
}

var selectedTabId = "";

var activeHeaderTab = function (tabId) {
    if (selectedTabId != "") {
        $("#" + selectedTabId).removeClass("active");
    }
    $("#" + tabId).addClass("active");
    selectedTabId = tabId;
}

$(document).ready(function () {
    var parser = new Parser();
    parser.parseDOM(document.documentElement);
    parser.loadIncludes();
});