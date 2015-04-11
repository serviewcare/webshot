var _webshot = Npm.require("webshot");

webshot = function (url, filePath, options, callback) {
    var webshotAsync = Meteor.wrapAsync(_webshot);
    var callback = [].slice.apply(arguments).pop();

    if (typeof callback !== 'function') {
        throw new Error("Missing callback function");
    }
    if (arguments.length === 2) {
        return webshotAsync(url, callback);
    } else if (arguments.length === 3) {
        return webshotAsync(url, filePath, callback);
    }

    webshotAsync(url, filePath, options, callback);
};
